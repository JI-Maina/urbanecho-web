import React, { forwardRef } from 'react';
import styled from 'styled-components';
import type { FormFieldSize } from './types';

interface RadioProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
  size?: FormFieldSize;
  label?: string;
  description?: string;
  error?: boolean;
  name?: string;
  id?: string;
  className?: string;
  required?: boolean;
}

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const RadioContainer = styled.div<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
`;

const RadioInput = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
`;

const RadioControl = styled.div<{
  $checked?: boolean;
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
    if (props.$checked) {
      return props.$disabled 
        ? props.theme.colors.background['background-disabled']
        : props.theme.colors.background['background-brand'];
    }
    return props.$disabled 
      ? props.theme.colors.border['border-disabled']
      : props.theme.colors.border['border-primary'];
  }};
  border-radius: 50%;
  background-color: transparent;
  transition: all 0.2s ease-in-out;

  &:hover {
    ${props => !props.$disabled && !props.$checked && `
      border-color: ${props.theme.colors.border['border-secondary']};
    `}
  }

  &:after {
    content: '';
    position: absolute;
    display: ${props => props.$checked ? 'block' : 'none'};
    width: ${props => {
      switch (props.$size) {
        case 'small': return '8px';
        case 'large': return '14px';
        default: return '10px';
      }
    }};
    height: ${props => {
      switch (props.$size) {
        case 'small': return '8px';
        case 'large': return '14px';
        default: return '10px';
      }
    }};
    border-radius: 50%;
    background-color: ${props => props.$disabled 
      ? props.theme.colors.background['background-disabled']
      : props.theme.colors.background['background-brand']
    };
  }
`;

const RadioLabel = styled.label<{ $size: FormFieldSize; $disabled?: boolean }>`
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

const RadioDescription = styled.p<{ $size: FormFieldSize; $disabled?: boolean }>`
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

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  size = 'medium',
  label,
  description,
  error = false,
  name,
  id,
  value,
  className,
  required,
  ...props
}, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
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

  const radioId = id || `radio-${name}-${value}`;

  return (
    <RadioWrapper className={className}>
      <RadioContainer $disabled={disabled}>
        <RadioInput
          ref={mergedRef}
          id={radioId}
          name={name}
          value={value}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={handleChange}
          required={required}
          {...props}
        />
        <RadioControl 
          $checked={checked}
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
          <RadioLabel 
            htmlFor={radioId} 
            $size={size}
            $disabled={disabled}
            onClick={() => {
              if (!disabled) {
                inputRef.current?.click();
              }
            }}
          >
            {label}
          </RadioLabel>
        )}
      </RadioContainer>
      {description && (
        <RadioDescription $size={size} $disabled={disabled}>
          {description}
        </RadioDescription>
      )}
    </RadioWrapper>
  );
});

Radio.displayName = 'Radio';

// Radio Group Component
interface RadioGroupProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name: string;
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  size?: FormFieldSize;
  disabled?: boolean;
  error?: boolean | string;
  className?: string;
  required?: boolean;
}

const RadioGroupContainer = styled.div<{ $orientation?: 'horizontal' | 'vertical' }>`
  display: flex;
  flex-direction: ${props => props.$orientation === 'horizontal' ? 'row' : 'column'};
  gap: ${props => props.$orientation === 'horizontal' ? '16px' : '12px'};
`;

const ErrorText = styled.div`
  color: ${props => props.theme.colors.content['content-negative']};
  font-size: 14px;
  margin-top: 4px;
`;

export const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  defaultValue,
  onChange,
  name,
  children,
  orientation = 'vertical',
  size = 'medium',
  disabled = false,
  error,
  className,
  required,
}) => {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(value || defaultValue);

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (value === undefined) {
      setSelectedValue(newValue);
    }
    onChange?.(newValue);
  };

  // Enhance children with props
  const enhancedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    return React.cloneElement(child as React.ReactElement<RadioProps>, {
      name,
      checked: selectedValue === (child.props as RadioProps).value,
      onChange: handleRadioChange,
      size,
      disabled: disabled || (child.props as RadioProps).disabled,
      error: !!error,
      required,
    });
  });

  return (
    <div className={className}>
      <RadioGroupContainer $orientation={orientation}>
        {enhancedChildren}
      </RadioGroupContainer>
      {typeof error === 'string' && error && <ErrorText>{error}</ErrorText>}
    </div>
  );
};

RadioGroup.displayName = 'RadioGroup';