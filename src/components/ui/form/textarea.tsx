import { forwardRef } from 'react';
import { useColor } from '@/providers/theme-provider';
import { TextareaContainer, StyledTextarea } from './input-styles';
import type { TextareaProps } from './types';

// Hook to get textarea colors based on theme
const useTextareaColors = () => ({
  borderColor: useColor('border.border-secondary'),
  focusBorderColor: useColor('border.border-focus'),
  errorBorderColor: useColor('border.border-negative'),
  successBorderColor: useColor('border.border-positive'),
  bgColor: useColor('surface.surface-l0'),
  disabledBgColor: useColor('background.background-disabled'),
  textColor: useColor('content.content-primary'),
  disabledTextColor: useColor('content.content-disabled'),
  placeholderColor: useColor('content.content-tertiary'),
});

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      disabled = false,
      error = false,
      success = false,
      resize = 'vertical',
      rows = 4,
      size = 'medium',
      className,
      placeholder,
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      id,
      name,
      required,
      maxLength,
      minLength,
      cols,
      'data-testid': dataTestId,
      ...props
    },
    ref
  ) => {
    const colors = useTextareaColors();
    const hasError = Boolean(error);
    const hasSuccess = Boolean(success);
    const resolvedSize = size ?? 'medium';

    return (
      <TextareaContainer
        className={className}
        $size={resolvedSize}
        $hasLeftIcon={false}
        $hasRightIcon={false}
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
        <StyledTextarea
          ref={ref}
          id={id}
          name={name}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
          rows={rows}
          cols={cols}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          data-testid={dataTestId}
          $textColor={colors.textColor}
          $disabledTextColor={colors.disabledTextColor}
          $placeholderColor={colors.placeholderColor}
          $resize={resize}
          {...props}
        />
      </TextareaContainer>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
