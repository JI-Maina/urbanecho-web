import { forwardRef } from 'react';
import { useColor } from '@/providers/theme-provider';
import { InputContainer, StyledInput, InputIcon } from './input-styles';
import type { InputProps } from './types';

// Hook to get input colors based on theme
const useInputColors = () => ({
  borderColor: useColor('border.border-secondary'),
  focusBorderColor: useColor('border.border-focus'),
  errorBorderColor: useColor('border.border-negative'),
  successBorderColor: useColor('border.border-positive'),
  bgColor: useColor('surface.surface-l0'),
  disabledBgColor: useColor('background.background-disabled'),
  textColor: useColor('content.content-primary'),
  disabledTextColor: useColor('content.content-disabled'),
  placeholderColor: useColor('content.content-tertiary'),
  iconColor: useColor('content.content-tertiary'),
});

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      size = 'medium',
      disabled = false,
      error = false,
      success = false,
      leftIcon,
      rightIcon,
      className,
      placeholder,
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      id,
      name,
      required,
      maxLength,
      minLength,
      pattern,
      autoComplete,
      autoFocus,
      readOnly,
      'data-testid': dataTestId,
      ...props
    },
    ref
  ) => {
    const colors = useInputColors();
    const hasError = Boolean(error);
    const hasSuccess = Boolean(success);
    const hasLeftIcon = Boolean(leftIcon);
    const hasRightIcon = Boolean(rightIcon);

    return (
      <InputContainer
        className={className}
        $size={size}
        $hasLeftIcon={hasLeftIcon}
        $hasRightIcon={hasRightIcon}
        $error={hasError}
        $success={hasSuccess}
        $disabled={disabled}
        $borderColor={colors.borderColor}
        $focusBorderColor={colors.focusBorderColor}
        $errorBorderColor={colors.errorBorderColor}
        $successBorderColor={colors.successBorderColor}
        $bgColor={colors.bgColor}
        $disabledBgColor={colors.disabledBgColor}
        $textColor={colors.textColor}
        $disabledTextColor={colors.disabledTextColor}
        $placeholderColor={colors.placeholderColor}
      >
        {leftIcon && (
          <InputIcon
            $position="left"
            $iconColor={colors.iconColor}
            $size={size}
          >
            {leftIcon}
          </InputIcon>
        )}
        
        <StyledInput
          ref={ref}
          type={type}
          id={id}
          name={name}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          readOnly={readOnly}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          data-testid={dataTestId}
          $hasLeftIcon={hasLeftIcon}
          $hasRightIcon={hasRightIcon}
          $textColor={colors.textColor}
          $disabledTextColor={colors.disabledTextColor}
          $placeholderColor={colors.placeholderColor}
          {...props}
        />

        {rightIcon && (
          <InputIcon
            $position="right"
            $iconColor={colors.iconColor}
            $size={size}
          >
            {rightIcon}
          </InputIcon>
        )}
      </InputContainer>
    );
  }
);

Input.displayName = 'Input';

export default Input;