import React, { forwardRef } from 'react';
import styled from 'styled-components';
import type { FormFieldSize } from './types';

interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  onToggle?: (checked: boolean) => void;
  size?: FormFieldSize;
  disabled?: boolean;
  label?: string;
  description?: string;
  error?: boolean;
  id?: string;
  name?: string;
  className?: string;
  required?: boolean;
}

const SwitchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SwitchContainer = styled.div<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
`;

const SwitchTrack = styled.div<{ 
  $checked: boolean; 
  $size: FormFieldSize;
  $disabled?: boolean;
  $error?: boolean;
}>`
  position: relative;
  width: ${props => {
    switch (props.$size) {
      case 'small': return '36px';
      case 'large': return '52px';
      default: return '44px';
    }
  }};
  height: ${props => {
    switch (props.$size) {
      case 'small': return '20px';
      case 'large': return '28px';
      default: return '24px';
    }
  }};
  background-color: ${props => {
    if (props.$error) {
      return props.theme.colors.content['content-negative'];
    }
    return props.$checked 
      ? props.theme.colors.background['background-brand']
      : props.theme.colors.border['border-tertiary'];
  }};
  border-radius: 30px; /* Fully rounded */
  transition: all 0.2s ease-in-out;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};

  &:hover {
    background-color: ${props => {
      if (props.$disabled) return;
      if (props.$error) {
        return props.theme.colors.content['content-negative-bold'];
      }
      return props.$checked 
        ? props.theme.colors.background['background-brand-hover']
        : props.theme.colors.border['border-secondary'];
    }};
  }

  &:focus-within {
    outline: 2px solid ${props => props.theme.colors.background['background-brand']}20;
    outline-offset: 2px;
  }
`;

const SwitchThumb = styled.div<{ 
  $checked: boolean; 
  $size: FormFieldSize;
  $disabled?: boolean;
}>`
  position: absolute;
  top: 2px;
  left: ${props => props.$checked 
    ? `calc(100% - ${props.$size === 'small' ? '18px' : props.$size === 'large' ? '26px' : '22px'})` 
    : '2px'};
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
  background-color: ${props => props.theme.colors.background['background-primary']};
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

const SwitchLabel = styled.label<{ $size: FormFieldSize; $disabled?: boolean }>`
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

const SwitchDescription = styled.p<{ $size: FormFieldSize; $disabled?: boolean }>`
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

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(({
  checked,
  defaultChecked,
  onChange,
  onToggle,
  size = 'medium',
  disabled = false,
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
  
  const [isChecked, setIsChecked] = React.useState(checked ?? defaultChecked ?? false);
  
  React.useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    if (checked === undefined) {
      setIsChecked(newChecked);
    }
    onChange?.(newChecked);
    onToggle?.(newChecked);
  };

  // Merge refs
  const mergedRef = (el: HTMLInputElement) => {
    inputRef.current = el;
    if (typeof ref === 'function') {
      ref(el);
    } else if (ref) {
      (ref as React.MutableRefObject<HTMLInputElement | null>).current = el;
    }
  };

  const switchId = id || `switch-${name}`;

  return (
    <SwitchWrapper className={className}>
      <SwitchContainer $disabled={disabled}>
        <SwitchTrack 
          $checked={isChecked} 
          $size={size}
          $disabled={disabled}
          $error={error}
          onClick={() => {
            if (!disabled) {
              const newChecked = !isChecked;
              if (checked === undefined) {
                setIsChecked(newChecked);
              }
              inputRef.current?.click();
            }
          }}
        >
          <HiddenInput
            ref={mergedRef}
            type="checkbox"
            checked={isChecked}
            defaultChecked={defaultChecked}
            onChange={handleChange}
            disabled={disabled}
            name={name}
            id={switchId}
            required={required}
            {...props}
          />
          <SwitchThumb 
            $checked={isChecked} 
            $size={size}
            $disabled={disabled}
          />
        </SwitchTrack>
        {label && (
          <SwitchLabel 
            htmlFor={switchId} 
            $size={size}
            $disabled={disabled}
          >
            {label}
          </SwitchLabel>
        )}
      </SwitchContainer>
      {description && (
        <SwitchDescription $size={size} $disabled={disabled}>
          {description}
        </SwitchDescription>
      )}
    </SwitchWrapper>
  );
});

Switch.displayName = 'Switch';