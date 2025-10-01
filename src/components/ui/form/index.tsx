// Re-export React Hook Form types and functions for convenience
export {
  useForm,
  useFormContext,
  useController,
  useWatch,
  type UseFormProps,
  type UseFormReturn,
  type FieldValues,
  type FieldPath,
  type Control,
  type RegisterOptions,
  type FieldError,
  type FieldErrors,
} from 'react-hook-form';

// Form components
export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from './form';

// Input components
export { Input } from './input';
export { Textarea } from './textarea';
export { PhoneInput } from './phone-input';
export { Select } from './select';

// Selection components
export { Switch } from './switch';
export { Checkbox } from './checkbox';
export { Radio, RadioGroup } from './radio';

// Types
export type {
  FormFieldSize,
  FormFieldState,
  InputType,
  BaseFieldProps,
  InputProps,
  TextareaProps,
  SelectOption,
  SelectProps,
  Country,
  PhoneInputProps,
  CheckboxProps,
  RadioProps,
  RadioGroupProps,
  ValidationRule,
  FieldConfig,
  FormContextValue,
  FormProviderProps,
  FormFieldProps,
  FormItemProps,
  FormLabelProps,
  FormMessageProps,
} from './types';

// Import components for default export
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
  useFormField,
} from './form';
import { Input } from './input';
import { Textarea } from './textarea';
import { PhoneInput } from './phone-input';
import { Select } from './select';
import { Switch } from './switch';
import { Checkbox } from './checkbox';
import { Radio, RadioGroup } from './radio';
import {
  useForm,
  useFormContext,
  useController,
  useWatch,
} from 'react-hook-form';

// Default export with all components
export default {
  // Form components
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
  useFormField,
  
  // Input components
  Input,
  Textarea,
  PhoneInput,
  Select,
  
  // Selection components
  Switch,
  Checkbox,
  Radio,
  RadioGroup,
  
  // React Hook Form re-exports
  useForm,
  useFormContext,
  useController,
  useWatch,
};