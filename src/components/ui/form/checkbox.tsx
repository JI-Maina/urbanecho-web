import React, { forwardRef } from 'react';
import styled from 'styled-components';
import type { FormFieldSize } from './types';

interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
  size?: FormFieldSize;
  label?: string;
  description?: string;
  error?: boolean;
  id?: string;
  className?: string;
  name?: string;
  required?: boolean;
}

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CheckboxContainer = styled.div<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
`;

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
`;

const CheckboxControl = styled.div<{
  $checked?: boolean;
  $indeterminate?: boolean;
  $disabled?: boolean;
  $size: FormFieldSize;
  $error?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => {
    switch (props.$size) {
      case 'small': return '16px';
      case 'large': return '24px';
      default: return '20px';
    }
  }};
  height: ${props => {
    switch (props.$size) {
      case 'small': return '16px';
      case 'large': return '24px';
      default: return '20px';
    }
  }};
  border: 2px solid ${props => {
    if (props.$error) {
      return props.theme.colors.content['content-negative'];
    }
    if (props.$checked || props.$indeterminate) {
      return props.$disabled 
        ? props.theme.colors.background['background-disabled']
        : props.theme.colors.background['background-brand'];
    }
    return props.$disabled 
      ? props.theme.colors.border['border-disabled']
      : props.theme.colors.border['border-primary'];
  }};
  border-radius: 4px;
  background-color: ${props => {
    if (props.$checked || props.$indeterminate) {
      return props.$disabled 
        ? props.theme.colors.background['background-disabled']
        : props.theme.colors.background['background-brand'];
    }
    return 'transparent';
  }};
  transition: all 0.2s ease-in-out;

  &:hover {
    ${props => !props.$disabled && !props.$checked && !props.$indeterminate && `
      border-color: ${props.theme.colors.border['border-secondary']};
    `}
  }

  &:after {
    content: '';
    position: absolute;
    display: ${props => (props.$checked || props.$indeterminate) ? 'block' : 'none'};
    width: ${props => {
      switch (props.$size) {
        case 'small': return '8px';
        case 'large': return '14px';
        default: return '10px';
      }
    }};
    height: ${props => {
      if (props.$indeterminate) {
        switch (props.$size) {
          case 'small': return '2px';
          case 'large': return '3px';
          default: return '2px';
        }
      } else {
        // For checkmark
        switch (props.$size) {
          case 'small': return '5px';
          case 'large': return '9px';
          default: return '7px';
        }
      }
    }};
    border: ${props => !props.$indeterminate && `2px solid ${props.theme.colors.content['content-primary-inverse']}`};
    border-top: none;
    border-right: none;
    background-color: ${props => props.$indeterminate ? props.theme.colors.content['content-primary-inverse'] : 'transparent'};
    transform: ${props => props.$indeterminate ? 'none' : 'rotate(-45deg)'};
  }
`;

const CheckboxLabel = styled.label<{ $size: FormFieldSize; $disabled?: boolean }>`
  font-size: ${props => {
    switch (props.$size) {
      case 'small': return '14px';
      case 'large': return '18px';
      default: return '16px';
    }
  }};
  font-weight: 500;
  color: ${props => props.$disabled 
    ? props.theme.colors.content['content-disabled']
    : props.theme.colors.content['content-primary']};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  user-select: none;
`;

const CheckboxDescription = styled.p<{ $size: FormFieldSize; $disabled?: boolean }>`
  margin: 0;
  font-size: ${props => {
    switch (props.$size) {
      case 'small': return '12px';
      case 'large': return '14px';
      default: return '13px';
    }
  }};
  color: ${props => props.$disabled 
    ? props.theme.colors.content['content-disabled']
    : props.theme.colors.content['content-secondary']};
  line-height: 1.4;
`;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  checked,
  defaultChecked,
  indeterminate = false,
  onChange,
  disabled = false,
  size = 'medium',
  label,
  description,
  error = false,
  name,
  id,
  className,
  required,
  ...props
}, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked, e);
  };

  // Merge refs
  const mergedRef = (el: HTMLInputElement) => {
    inputRef.current = el;
    if (typeof ref === 'function') {
      ref(el);
    } else if (ref) {
      (ref as React.RefObject<HTMLInputElement | null>).current = el;
    }
  };

  const checkboxId = id || `checkbox-${name}`;

  return (
    <CheckboxWrapper className={className}>
      <CheckboxContainer $disabled={disabled}>
        <CheckboxInput
          ref={mergedRef}
          id={checkboxId}
          name={name}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          {...props}
        />
        <CheckboxControl 
          $checked={checked}
          $indeterminate={indeterminate}
          $disabled={disabled}
          $size={size}
          $error={error}
          onClick={() => {
            if (!disabled) {
              inputRef.current?.click();
            }
          }}
        />
        {label && (
          <CheckboxLabel 
            htmlFor={checkboxId} 
            $size={size}
            $disabled={disabled}
            onClick={() => {
              if (!disabled) {
                inputRef.current?.click();
              }
            }}
          >
            {label}
          </CheckboxLabel>
        )}
      </CheckboxContainer>
      {description && (
        <CheckboxDescription $size={size} $disabled={disabled}>
          {description}
        </CheckboxDescription>
      )}
    </CheckboxWrapper>
  );
});

Checkbox.displayName = 'Checkbox';