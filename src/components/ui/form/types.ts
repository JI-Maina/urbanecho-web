// Form component types and interfaces
import type { ReactNode } from 'react';

// Base form field sizes
export type FormFieldSize = 'small' | 'medium' | 'large';

// Form field states  
export type FormFieldState = 'default' | 'focus' | 'hover' | 'filled' | 'disabled' | 'invalid';

// Input types
export type InputType = 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'search';

// Base field props that all form components share
export interface BaseFieldProps {
  id?: string;
  name?: string;
  size?: FormFieldSize;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  'data-testid'?: string;
}

// Input component props
export interface InputProps extends BaseFieldProps {
  type?: InputType;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  readOnly?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: string | boolean;
  success?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

// Textarea props
export interface TextareaProps extends BaseFieldProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  rows?: number;
  cols?: number;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  error?: string | boolean;
  success?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

// Select/Dropdown option
export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: ReactNode;
}

// Select component props
export interface SelectProps extends BaseFieldProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  error?: string | boolean;
  success?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  multiple?: boolean;
  onChange?: (value: string | string[]) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

// Country for phone input
export interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
}

// Phone input props
export interface PhoneInputProps extends BaseFieldProps {
  value?: string;
  defaultValue?: string;
  defaultCountry?: string;
  placeholder?: string;
  error?: string | boolean;
  success?: boolean;
  onChange?: (value: string, country: Country) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

// Checkbox props
export interface CheckboxProps extends BaseFieldProps {
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  value?: string;
  error?: boolean;
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
}

// Radio button props
export interface RadioProps extends BaseFieldProps {
  checked?: boolean;
  defaultChecked?: boolean;
  value: string;
  error?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
}

// Radio group props
export interface RadioGroupProps extends BaseFieldProps {
  value?: string;
  defaultValue?: string;
  error?: string | boolean;
  orientation?: 'horizontal' | 'vertical';
  onChange?: (value: string) => void;
  children: ReactNode;
}

// Form validation rule
export interface ValidationRule {
  required?: boolean | string;
  minLength?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  pattern?: { value: RegExp; message: string };
  validate?: (value: unknown) => string | boolean;
  min?: { value: number; message: string };
  max?: { value: number; message: string };
}

// Form field registration
export interface FieldConfig {
  name: string;
  rules?: ValidationRule;
  defaultValue?: unknown;
}

// Form context type
export interface FormContextValue {
  register: (config: FieldConfig) => {
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    ref: (element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null) => void;
  };
  unregister: (name: string) => void;
  setValue: (name: string, value: unknown) => void;
  getValue: (name: string) => unknown;
  getValues: () => Record<string, unknown>;
  trigger: (name?: string | string[]) => Promise<boolean>;
  clearErrors: (name?: string | string[]) => void;
  setError: (name: string, error: { message: string }) => void;
  formState: {
    errors: Record<string, { message: string }>;
    isSubmitting: boolean;
    isValidating: boolean;
    isValid: boolean;
    isDirty: boolean;
    dirtyFields: Record<string, boolean>;
    touchedFields: Record<string, boolean>;
  };
  handleSubmit: (onSubmit: (data: Record<string, unknown>) => void) => (event?: React.FormEvent) => Promise<void>;
  reset: (data?: Record<string, unknown>) => void;
  watch: (name?: string | string[]) => unknown;
}

// Form provider props
export interface FormProviderProps {
  children: ReactNode;
  defaultValues?: Record<string, unknown>;
  mode?: 'onChange' | 'onBlur' | 'onSubmit';
  reValidateMode?: 'onChange' | 'onBlur' | 'onSubmit';
}

// Form field wrapper props
export interface FormFieldProps {
  name: string;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  size?: FormFieldSize;
  className?: string;
}

// Form item props for layout
export interface FormItemProps {
  className?: string;
  children: ReactNode;
}

// Form label props
export interface FormLabelProps {
  htmlFor?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}

// Form message props (for errors, descriptions)
export interface FormMessageProps {
  className?: string;
  children: ReactNode;
  type?: 'error' | 'description' | 'success';
}