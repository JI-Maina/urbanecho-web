import React, { forwardRef } from 'react';
import { useColor } from '@/providers/theme-provider';
import { StyledButton, StyledLinkButton, IconWrapper } from './styles';
import type { ButtonProps, LinkButtonProps } from './types';

// Main Button Component
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'medium',
      disabled = false,
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      type = 'button',
      onClick,
      onFocus,
      onBlur,
      'aria-label': ariaLabel,
      'data-testid': dataTestId,
    },
    ref
  ) => {
    // Get all colors regardless of variant to satisfy hooks rules
    const primaryBg = useColor('background.background-brand');
    const primaryText = useColor('content.content-primary-inverse');
    const primaryHover = useColor('background.background-brand-hover');
    const primaryActive = useColor('background.background-brand-pressed');
    
    const secondaryText = useColor('content.content-brand');
    const secondaryHover = useColor('background.background-brand-subtle');
    const secondaryActive = useColor('background.background-secondary-subtle-pressed');
    const secondaryBorder = useColor('border.border-brand');
    
    const destructiveBg = useColor('background.background-negative');
    const destructiveText = useColor('content.content-primary-inverse');
    const destructiveHover = useColor('background.background-negative-hover');
    const destructiveActive = useColor('background.background-negative-pressed');
    const destructiveFocus = useColor('border.border-negative-focus');
    
    const focusRing = useColor('border.border-focus');
    const disabledBg = useColor('background.background-disabled');
    const disabledText = useColor('content.content-disabled');

    // Select colors based on variant
    let colors;
    switch (variant) {
      case 'primary':
        colors = {
          $bgColor: primaryBg,
          $textColor: primaryText,
          $hoverBgColor: primaryHover,
          $activeBgColor: primaryActive,
          $focusRingColor: focusRing,
          $disabledBgColor: disabledBg,
          $disabledTextColor: disabledText,
        };
        break;
      case 'secondary':
        colors = {
          $bgColor: 'transparent',
          $textColor: secondaryText,
          $hoverBgColor: secondaryHover,
          $activeBgColor: secondaryActive,
          $borderColor: secondaryBorder,
          $focusRingColor: focusRing,
          $disabledBgColor: disabledBg,
          $disabledTextColor: disabledText,
        };
        break;
      case 'destructive':
        colors = {
          $bgColor: destructiveBg,
          $textColor: destructiveText,
          $hoverBgColor: destructiveHover,
          $activeBgColor: destructiveActive,
          $focusRingColor: destructiveFocus,
          $disabledBgColor: disabledBg,
          $disabledTextColor: disabledText,
        };
        break;
      default:
        colors = {
          $bgColor: primaryBg,
          $textColor: primaryText,
          $hoverBgColor: primaryHover,
          $activeBgColor: primaryActive,
          $focusRingColor: focusRing,
          $disabledBgColor: disabledBg,
          $disabledTextColor: disabledText,
        };
    }

    const isDisabled = disabled || loading;

    return (
      <StyledButton
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={className}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        aria-label={ariaLabel}
        data-testid={dataTestId}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        $loading={loading}
        {...colors}
      >
        {leftIcon && !loading && (
          <IconWrapper className="icon left-icon">
            {leftIcon}
          </IconWrapper>
        )}
        <span>{children}</span>
        {rightIcon && !loading && (
          <IconWrapper className="icon right-icon">
            {rightIcon}
          </IconWrapper>
        )}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

// Link Button Component
export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      children,
      to,
      variant = 'primary',
      size = 'medium',
      disabled = false,
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      external = false,
      replace = false,
      'aria-label': ariaLabel,
      'data-testid': dataTestId,
    },
    ref
  ) => {
    // Get all colors regardless of variant to satisfy hooks rules
    const primaryBg = useColor('background.background-brand');
    const primaryText = useColor('content.content-primary-inverse');
    const primaryHover = useColor('background.background-brand-hover');
    const primaryActive = useColor('background.background-brand-pressed');
    
    const secondaryText = useColor('content.content-brand');
    const secondaryHover = useColor('background.background-brand-subtle');
    const secondaryActive = useColor('background.background-secondary-subtle-pressed');
    const secondaryBorder = useColor('border.border-brand');
    
    const destructiveBg = useColor('background.background-negative');
    const destructiveText = useColor('content.content-primary-inverse');
    const destructiveHover = useColor('background.background-negative-hover');
    const destructiveActive = useColor('background.background-negative-pressed');
    const destructiveFocus = useColor('border.border-negative-focus');
    
    const focusRing = useColor('border.border-focus');
    const disabledBg = useColor('background.background-disabled');
    const disabledText = useColor('content.content-disabled');

    // Select colors based on variant
    let colors;
    switch (variant) {
      case 'primary':
        colors = {
          $bgColor: primaryBg,
          $textColor: primaryText,
          $hoverBgColor: primaryHover,
          $activeBgColor: primaryActive,
          $focusRingColor: focusRing,
          $disabledBgColor: disabledBg,
          $disabledTextColor: disabledText,
        };
        break;
      case 'secondary':
        colors = {
          $bgColor: 'transparent',
          $textColor: secondaryText,
          $hoverBgColor: secondaryHover,
          $activeBgColor: secondaryActive,
          $borderColor: secondaryBorder,
          $focusRingColor: focusRing,
          $disabledBgColor: disabledBg,
          $disabledTextColor: disabledText,
        };
        break;
      case 'destructive':
        colors = {
          $bgColor: destructiveBg,
          $textColor: destructiveText,
          $hoverBgColor: destructiveHover,
          $activeBgColor: destructiveActive,
          $focusRingColor: destructiveFocus,
          $disabledBgColor: disabledBg,
          $disabledTextColor: disabledText,
        };
        break;
      default:
        colors = {
          $bgColor: primaryBg,
          $textColor: primaryText,
          $hoverBgColor: primaryHover,
          $activeBgColor: primaryActive,
          $focusRingColor: focusRing,
          $disabledBgColor: disabledBg,
          $disabledTextColor: disabledText,
        };
    }

    const isDisabled = disabled || loading;

    const buttonContent = (
      <>
        {leftIcon && !loading && (
          <IconWrapper className="icon left-icon">
            {leftIcon}
          </IconWrapper>
        )}
        <span>{children}</span>
        {rightIcon && !loading && (
          <IconWrapper className="icon right-icon">
            {rightIcon}
          </IconWrapper>
        )}
      </>
    );

    if (external) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          aria-label={ariaLabel}
          data-testid={dataTestId}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            textDecoration: 'none',
            pointerEvents: isDisabled ? 'none' : 'auto',
          }}
        >
          <StyledButton
            as="span"
            disabled={isDisabled}
            $variant={variant}
            $size={size}
            $fullWidth={fullWidth}
            $loading={loading}
            {...colors}
          >
            {buttonContent}
          </StyledButton>
        </a>
      );
    }

    return (
      <StyledLinkButton
        ref={ref}
        to={to}
        replace={replace}
        className={className}
        aria-label={ariaLabel}
        data-testid={dataTestId}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        $loading={loading}
        {...colors}
        style={{
          pointerEvents: isDisabled ? 'none' : 'auto',
        }}
      >
        {buttonContent}
      </StyledLinkButton>
    );
  }
);

LinkButton.displayName = 'LinkButton';

export default Button;