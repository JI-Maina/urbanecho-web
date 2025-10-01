import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Input,
  Textarea,
  PhoneInput,
  Select,
  Switch,
  Checkbox,
  Radio,
  RadioGroup,
} from './index';

// Example schema
const exampleSchema = z.object({
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  country: z.string().min(1, 'Please select a country'),
  notifications: z.boolean(),
  terms: z.boolean().refine(val => val === true, 'You must accept the terms'),
  gender: z.string().min(1, 'Please select a gender'),
});

type ExampleFormValues = z.infer<typeof exampleSchema>;

const countryOptions = [
  { value: 'ch', label: 'Switzerland' },
  { value: 'us', label: 'United States' },
  { value: 'de', label: 'Germany' },
];

export function FormUsageExample() {
  const form = useForm<ExampleFormValues>({
    resolver: zodResolver(exampleSchema),
    defaultValues: {
      email: '',
      message: '',
      phone: '',
      country: '',
      notifications: false,
      terms: false,
      gender: '',
    },
  });

  const onSubmit = (data: ExampleFormValues) => {
    console.log('Form data:', data);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h1>Form Usage Example</h1>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          {/* Email Input */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message Textarea */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter your message"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Please provide details about your inquiry.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Input */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <PhoneInput
                    placeholder="Enter phone number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Country Select */}
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Select
                    options={countryOptions}
                    placeholder="Select your country"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Gender Radio Group */}
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <RadioGroup
                    name="gender"
                    value={field.value}
                    onChange={field.onChange}
                  >
                    <Radio value="male" label="Male" />
                    <Radio value="female" label="Female" />
                    <Radio value="other" label="Other" />
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Notifications Switch */}
          <FormField
            control={form.control}
            name="notifications"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onChange={field.onChange}
                    label="Enable notifications"
                    description="Receive email notifications"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Terms Checkbox */}
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onChange={(checked) => field.onChange(checked)}
                    label="I accept the terms and conditions"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button type="submit" style={{ padding: '0.75rem', marginTop: '1rem' }}>
            Submit
          </button>
        </form>
      </Form>
    </div>
  );
}

export default FormUsageExample;
