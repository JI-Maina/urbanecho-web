import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import type { ButtonVariant, ButtonSize } from './types';
import AppTheme from '@/lib/theme';

// Loading spinner animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Base button styles
const baseButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${AppTheme.spacing['08']};
  border: 1px solid transparent;
  font-family: ${AppTheme.typography.fontFamily.body};
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  white-space: nowrap;
  user-select: none;
  outline: none;

  &:focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0 0 0 2px var(--focus-ring);
  }

  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
`;

// Size variants
const sizeStyles = {
  small: css`
    padding: ${AppTheme.spacing['08']} ${AppTheme.spacing['12']};
    ${AppTheme.typography.label['14/semibold']};
    min-height: 32px;
    
    .icon {
      width: 14px;
      height: 14px;
    }
  `,
  medium: css`
    padding: ${AppTheme.spacing['12']} ${AppTheme.spacing['16']};
    ${AppTheme.typography.label['16/semibold']};
    min-height: 40px;
    
    .icon {
      width: 16px;
      height: 16px;
    }
  `,
  large: css`
    padding: ${AppTheme.spacing['16']} ${AppTheme.spacing['24']};
    ${AppTheme.typography.label['16/semibold']};
    min-height: 48px;
    
    .icon {
      width: 18px;
      height: 18px;
    }
  `,
};

// Color variants function that takes theme colors
const getVariantStyles = (
  bgColor: string,
  textColor: string,
  hoverBgColor: string,
  activeBgColor: string,
  borderColor?: string,
  focusRingColor?: string
) => css`
  background-color: ${bgColor};
  color: ${textColor};
  border-color: ${borderColor || bgColor};
  --focus-ring: ${focusRingColor || bgColor};

  &:hover:not(:disabled) {
    background-color: ${hoverBgColor};
    border-color: ${borderColor || hoverBgColor};
  }

  &:active:not(:disabled) {
    background-color: ${activeBgColor};
    border-color: ${borderColor || activeBgColor};
  }
`;

// Styled button component
export const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth?: boolean;
  $loading?: boolean;
  // Color props
  $bgColor: string;
  $textColor: string;
  $hoverBgColor: string;
  $activeBgColor: string;
  $borderColor?: string;
  $focusRingColor?: string;
  $disabledBgColor?: string;
  $disabledTextColor?: string;
}>`
  ${baseButtonStyles}
  ${({ $size }) => sizeStyles[$size]}
  ${({ $bgColor, $textColor, $hoverBgColor, $activeBgColor, $borderColor, $focusRingColor }) =>
    getVariantStyles($bgColor, $textColor, $hoverBgColor, $activeBgColor, $borderColor, $focusRingColor)}
  
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  ${({ $loading, $textColor }) =>
    $loading &&
    css`
      color: transparent;
      
      &::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        border: 2px solid ${$textColor};
        border-radius: 50%;
        border-right-color: transparent;
        animation: ${spin} 0.75s linear infinite;
      }
    `}

  ${({ disabled, $disabledBgColor, $disabledTextColor }) =>
    disabled &&
    css`
      background-color: ${$disabledBgColor} !important;
      color: ${$disabledTextColor} !important;
      border-color: ${$disabledBgColor} !important;
      box-shadow: none !important;
      transform: none !important;
    `}
`;

// Styled link button component
export const StyledLinkButton = styled(Link)<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth?: boolean;
  $loading?: boolean;
  // Color props
  $bgColor: string;
  $textColor: string;
  $hoverBgColor: string;
  $activeBgColor: string;
  $borderColor?: string;
  $focusRingColor?: string;
  $disabledBgColor?: string;
  $disabledTextColor?: string;
}>`
  ${baseButtonStyles}
  ${({ $size }) => sizeStyles[$size]}
  ${({ $bgColor, $textColor, $hoverBgColor, $activeBgColor, $borderColor, $focusRingColor }) =>
    getVariantStyles($bgColor, $textColor, $hoverBgColor, $activeBgColor, $borderColor, $focusRingColor)}
  
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  ${({ $loading, $textColor }) =>
    $loading &&
    css`
      color: transparent;
      pointer-events: none;
      
      &::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        border: 2px solid ${$textColor};
        border-radius: 50%;
        border-right-color: transparent;
        animation: ${spin} 0.75s linear infinite;
      }
    `}
`;

// Icon wrapper
export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 1em;
    height: 1em;
  }
`;