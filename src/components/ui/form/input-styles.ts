import styled, { css } from 'styled-components';
import type { FormFieldSize } from './types';
import AppTheme from '@/lib/theme';

// Size configurations
const sizeStyles = {
  small: css`
    height: 32px;
    padding: 0 ${AppTheme.spacing['12']};
    ${AppTheme.typography.label['14/regular']};
    
    .input-icon {
      width: 16px;
      height: 16px;
    }
  `,
  medium: css`
    height: 40px;
    padding: 0 ${AppTheme.spacing['16']};
    ${AppTheme.typography.label['16/regular']};
    
    .input-icon {
      width: 18px;
      height: 18px;
    }
  `,
  large: css`
    height: 48px;
    padding: 0 ${AppTheme.spacing['20']};
    ${AppTheme.typography.label['16/regular']};
    
    .input-icon {
      width: 20px;
      height: 20px;
    }
  `,
};

// Base input styles
export const InputContainer = styled.div<{
  $size: FormFieldSize;
  $hasLeftIcon: boolean;
  $hasRightIcon: boolean;
  $error: boolean;
  $success: boolean;
  $disabled: boolean;
  // Color props
  $borderColor: string;
  $focusBorderColor: string;
  $errorBorderColor: string;
  $successBorderColor: string;
  $bgColor: string;
  $disabledBgColor: string;
  $textColor: string;
  $disabledTextColor: string;
  $placeholderColor: string;
}>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  /* border: 1px solid ${props => 
    props.$error ? props.$errorBorderColor : 
    props.$success ? props.$successBorderColor : 
    props.$borderColor
  }; */
  /* border-radius: 6px; */
  /* background-color: ${props => props.$disabled ? props.$disabledBgColor : props.$bgColor}; */
  transition: all 0.2s ease-in-out;
  
  /* ${({ $size }) => sizeStyles[$size]} */

  &:hover:not(:focus-within) {
    /* border-color: ${props => 
      props.$error ? props.$errorBorderColor : 
      props.$success ? props.$successBorderColor : 
      props.$focusBorderColor
    }; */
  }

  &:focus-within {
    outline: none;
    /* border-color: ${props => 
      props.$error ? props.$errorBorderColor : 
      props.$success ? props.$successBorderColor : 
      props.$focusBorderColor
    }; */
    /* box-shadow: 0 0 0 3px ${props => 
      props.$error ? `${props.$errorBorderColor}20` : 
      props.$success ? `${props.$successBorderColor}20` : 
      `${props.$focusBorderColor}20`
    }; */
  }

  ${props => props.$disabled && css`
    cursor: not-allowed;
    opacity: 0.6;
  `}
`;

export const StyledInput = styled.input<{
  $hasLeftIcon: boolean;
  $hasRightIcon: boolean;
  $textColor: string;
  $disabledTextColor: string;
  $placeholderColor: string;
}>`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: ${props => props.disabled ? props.$disabledTextColor : props.$textColor};
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;

  /* ${props => props.$hasLeftIcon && css`
    padding-left: ${AppTheme.spacing['08']};
  `}

  ${props => props.$hasRightIcon && css`
    padding-right: ${AppTheme.spacing['08']};
  `} */

  &::placeholder {
    color: ${props => props.$placeholderColor};
    opacity: 1;
  }

  &:disabled {
    cursor: not-allowed;
  }

  // Remove default styling for various input types
  &[type="search"] {
    appearance: none;
    -webkit-appearance: none;
    
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
  }

  &[type="number"] {
    appearance: textfield;
    -moz-appearance: textfield;
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  // Password input styles
  &[type="password"] {
    font-family: text-security-disc;
    -webkit-text-security: disc;
  }
`;

export const InputIcon = styled.div<{
  $position: 'left' | 'right';
  $iconColor: string;
  $size: FormFieldSize;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${props => props.$iconColor};
  
  ${props => props.$position === 'left' && css`
    margin-left: ${props.$size === 'large' ? AppTheme.spacing['20'] : 
                  props.$size === 'medium' ? AppTheme.spacing['16'] : 
                  AppTheme.spacing['12']};
  `}

  ${props => props.$position === 'right' && css`
    margin-right: ${props.$size === 'large' ? AppTheme.spacing['20'] : 
                   props.$size === 'medium' ? AppTheme.spacing['16'] : 
                   AppTheme.spacing['12']};
  `}

  svg {
    width: ${props => props.$size === 'large' ? '20px' : 
                     props.$size === 'medium' ? '18px' : '16px'};
    height: ${props => props.$size === 'large' ? '20px' : 
                      props.$size === 'medium' ? '18px' : '16px'};
  }
`;

// Textarea styles
export const TextareaContainer = styled(InputContainer)`
  align-items: stretch;
`;

export const StyledTextarea = styled.textarea<{
  $textColor: string;
  $disabledTextColor: string;
  $placeholderColor: string;
  $resize: 'none' | 'both' | 'horizontal' | 'vertical';
}>`
  width: 100%;
  flex: 1;
  min-height: 80px;
  padding: ${AppTheme.spacing['12']} ${AppTheme.spacing['16']};
  border: none;
  outline: none;
  background: transparent;
  color: ${props => props.disabled ? props.$disabledTextColor : props.$textColor};
  font-family: ${AppTheme.typography.fontFamily.body};
  ${AppTheme.typography.paragraph['16/400']};
  resize: ${props => props.$resize};
  line-height: 1.5;

  &::placeholder {
    color: ${props => props.$placeholderColor};
    opacity: 1;
  }

  &:disabled {
    cursor: not-allowed;
  }

  // Remove default scrollbar styling
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
