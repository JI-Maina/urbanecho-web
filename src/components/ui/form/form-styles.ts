import styled, { css, keyframes } from 'styled-components';
import type { FormFieldSize } from './types';
import AppTheme from '@/lib/theme';

// Dropdown animation
const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Size configurations for select
const selectSizeStyles = {
  small: css`
    height: 32px;
    padding: 0 ${AppTheme.spacing['12']};
    ${AppTheme.typography.label['14/regular']};
  `,
  medium: css`
    height: 40px;
    padding: 0 ${AppTheme.spacing['16']};
    ${AppTheme.typography.label['16/regular']};
  `,
  large: css`
    height: 48px;
    padding: 0 ${AppTheme.spacing['20']};
    ${AppTheme.typography.label['16/regular']};
  `,
};

export const SelectContainer = styled.div<{
  $size: FormFieldSize;
  $error: boolean;
  $success: boolean;
  $disabled: boolean;
  $isOpen: boolean;
  // Color props
  $borderColor: string;
  $focusBorderColor: string;
  $errorBorderColor: string;
  $successBorderColor: string;
  $bgColor: string;
  $disabledBgColor: string;
}>`
  position: relative;
  width: 100%;
`;

export const SelectTrigger = styled.div<{
  $size: FormFieldSize;
  $error: boolean;
  $success: boolean;
  $disabled: boolean;
  $isOpen: boolean;
  // Color props
  $borderColor: string;
  $focusBorderColor: string;
  $errorBorderColor: string;
  $successBorderColor: string;
  $bgColor: string;
  $disabledBgColor: string;
  $textColor: string;
  $disabledTextColor: string;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  border: 1px solid ${props => 
    props.$error ? props.$errorBorderColor : 
    props.$success ? props.$successBorderColor : 
    props.$isOpen ? props.$focusBorderColor : 
    props.$borderColor
  };
  border-radius: 6px;
  background-color: ${props => props.$disabled ? props.$disabledBgColor : props.$bgColor};
  color: ${props => props.$disabled ? props.$disabledTextColor : props.$textColor};
  transition: all 0.2s ease-in-out;
  
  ${({ $size }) => selectSizeStyles[$size]}

  &:hover {
    border-color: ${props => 
      props.$disabled ? props.$borderColor :
      props.$error ? props.$errorBorderColor : 
      props.$success ? props.$successBorderColor : 
      props.$focusBorderColor
    };
  }

  &:focus {
    outline: none;
    border-color: ${props => 
      props.$error ? props.$errorBorderColor : 
      props.$success ? props.$successBorderColor : 
      props.$focusBorderColor
    };
    box-shadow: 0 0 0 3px ${props => 
      props.$error ? `${props.$errorBorderColor}20` : 
      props.$success ? `${props.$successBorderColor}20` : 
      `${props.$focusBorderColor}20`
    };
  }

  ${props => props.$disabled && css`
    opacity: 0.6;
  `}
`;

export const SelectValue = styled.span<{
  $placeholderColor: string;
  $hasValue: boolean;
}>`
  flex: 1;
  text-align: left;
  color: ${props => props.$hasValue ? 'inherit' : props.$placeholderColor};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SelectIcon = styled.div<{
  $isOpen: boolean;
  $iconColor: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${AppTheme.spacing['08']};
  color: ${props => props.$iconColor};
  transition: transform 0.2s ease-in-out;
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const SelectContent = styled.div<{
  $bgColor: string;
  $borderColor: string;
  $shadowColor: string;
}>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 50;
  min-width: 100%;
  margin-top: 4px;
  border: 1px solid ${props => props.$borderColor};
  border-radius: 6px;
  background-color: ${props => props.$bgColor};
  box-shadow: 0 8px 25px ${props => props.$shadowColor};
  animation: ${slideDown} 0.2s ease-out;
  max-height: 300px;
  overflow-y: auto;
  
  // Custom scrollbar
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
`;

export const SelectOption = styled.div<{
  $isSelected: boolean;
  $isHighlighted: boolean;
  $disabled: boolean;
  $textColor: string;
  $selectedBgColor: string;
  $hoverBgColor: string;
  $selectedTextColor: string;
}>`
  display: flex;
  align-items: center;
  padding: ${AppTheme.spacing['12']} ${AppTheme.spacing['16']};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  color: ${props => props.$isSelected ? props.$selectedTextColor : props.$textColor};
  background-color: ${props => 
    props.$isSelected ? props.$selectedBgColor : 
    props.$isHighlighted ? props.$hoverBgColor : 
    'transparent'
  };
  transition: all 0.2s ease-in-out;
  ${AppTheme.typography.label['16/regular']};

  &:hover {
    background-color: ${props => 
      props.$disabled ? 'transparent' :
      props.$isSelected ? props.$selectedBgColor : props.$hoverBgColor
    };
  }

  &:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  &:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  ${props => props.$disabled && css`
    opacity: 0.5;
  `}
`;

export const SelectOptionIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${AppTheme.spacing['08']};

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const SelectSearchInput = styled.input<{
  $textColor: string;
  $placeholderColor: string;
  $borderColor: string;
}>`
  width: 100%;
  padding: ${AppTheme.spacing['12']} ${AppTheme.spacing['16']};
  border: none;
  border-bottom: 1px solid ${props => props.$borderColor};
  outline: none;
  background: transparent;
  color: ${props => props.$textColor};
  ${AppTheme.typography.label['16/regular']};

  &::placeholder {
    color: ${props => props.$placeholderColor};
  }
`;

// Checkbox styles
export const CheckboxContainer = styled.div<{
  $size: FormFieldSize;
  $disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  gap: ${AppTheme.spacing['08']};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  
  ${props => props.$disabled && css`
    opacity: 0.6;
  `}
`;

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const CheckboxBox = styled.div<{
  $size: FormFieldSize;
  $checked: boolean;
  $indeterminate: boolean;
  $error: boolean;
  $disabled: boolean;
  // Color props
  $borderColor: string;
  $checkedBgColor: string;
  $checkedBorderColor: string;
  $errorBorderColor: string;
  $disabledBgColor: string;
  $focusRingColor: string;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${props => props.$size === 'large' ? '20px' : props.$size === 'medium' ? '18px' : '16px'};
  height: ${props => props.$size === 'large' ? '20px' : props.$size === 'medium' ? '18px' : '16px'};
  border: 2px solid ${props => 
    props.$error ? props.$errorBorderColor :
    props.$checked || props.$indeterminate ? props.$checkedBorderColor : 
    props.$borderColor
  };
  border-radius: 4px;
  background-color: ${props => 
    props.$disabled ? props.$disabledBgColor :
    props.$checked || props.$indeterminate ? props.$checkedBgColor : 
    'transparent'
  };
  transition: all 0.2s ease-in-out;

  &:focus-within {
    box-shadow: 0 0 0 3px ${props => `${props.$focusRingColor}30`};
  }

  svg {
    width: ${props => props.$size === 'large' ? '14px' : props.$size === 'medium' ? '12px' : '10px'};
    height: ${props => props.$size === 'large' ? '14px' : props.$size === 'medium' ? '12px' : '10px'};
    color: white;
    opacity: ${props => props.$checked || props.$indeterminate ? 1 : 0};
    transition: opacity 0.2s ease-in-out;
  }
`;

export const CheckboxLabel = styled.label<{
  $disabled: boolean;
  $textColor: string;
  $disabledTextColor: string;
}>`
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  color: ${props => props.$disabled ? props.$disabledTextColor : props.$textColor};
  ${AppTheme.typography.label['16/regular']};
  user-select: none;
`;

// Radio styles
export const RadioContainer = styled.div<{
  $disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  gap: ${AppTheme.spacing['08']};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  
  ${props => props.$disabled && css`
    opacity: 0.6;
  `}
`;

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const RadioButton = styled.div<{
  $size: FormFieldSize;
  $checked: boolean;
  $error: boolean;
  $disabled: boolean;
  // Color props
  $borderColor: string;
  $checkedBgColor: string;
  $checkedBorderColor: string;
  $errorBorderColor: string;
  $disabledBgColor: string;
  $focusRingColor: string;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${props => props.$size === 'large' ? '20px' : props.$size === 'medium' ? '18px' : '16px'};
  height: ${props => props.$size === 'large' ? '20px' : props.$size === 'medium' ? '18px' : '16px'};
  border: 2px solid ${props => 
    props.$error ? props.$errorBorderColor :
    props.$checked ? props.$checkedBorderColor : 
    props.$borderColor
  };
  border-radius: 50%;
  background-color: ${props => 
    props.$disabled ? props.$disabledBgColor : 'transparent'
  };
  transition: all 0.2s ease-in-out;

  &:focus-within {
    box-shadow: 0 0 0 3px ${props => `${props.$focusRingColor}30`};
  }

  &::after {
    content: '';
    width: ${props => props.$size === 'large' ? '8px' : props.$size === 'medium' ? '6px' : '4px'};
    height: ${props => props.$size === 'large' ? '8px' : props.$size === 'medium' ? '6px' : '4px'};
    border-radius: 50%;
    background-color: ${props => props.$checkedBgColor};
    opacity: ${props => props.$checked ? 1 : 0};
    transition: opacity 0.2s ease-in-out;
  }
`;

export const RadioLabel = styled.label<{
  $disabled: boolean;
  $textColor: string;
  $disabledTextColor: string;
}>`
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  color: ${props => props.$disabled ? props.$disabledTextColor : props.$textColor};
  ${AppTheme.typography.label['16/regular']};
  user-select: none;
`;