import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  CheckCircleIcon,
  CircleIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@phosphor-icons/react";
import Button from "@/components/ui/button";
import Input from "@/components/ui/form/input";
import {
  useForm,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useColor } from "@/providers/theme-provider";
import HeaderLogo from "@/components/header/header-logo";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  NewPasswordForm,
  NewPasswordPageMainContainer,
  PasswordRequirements,
  RequirementItem,
  PasswordToggleButton,
} from "./new-password.styled";

interface PasswordRequirementState {
  minLength: boolean;
  hasUpperLower: boolean;
  hasNumberSymbol: boolean;
}

const LOWERCASE_REGEX = /[a-z]/;
const UPPERCASE_REGEX = /[A-Z]/;
const DIGIT_REGEX = /[0-9]/;
const SYMBOL_REGEX = /[^A-Za-z0-9\s]/;

const passwordSchema = z
  .string("Password is required")
  .min(8, "Password must be at least 8 characters")
  .refine((value) => LOWERCASE_REGEX.test(value), {
    message: "Include at least one lowercase letter",
  })
  .refine((value) => UPPERCASE_REGEX.test(value), {
    message: "Include at least one uppercase letter",
  })
  .refine((value) => DIGIT_REGEX.test(value) || SYMBOL_REGEX.test(value), {
    message: "Include a number or symbol",
  });

const schema = z
  .object({
    password: passwordSchema,
    confirmPassword: z
      .string("Confirm your password")
      .min(1, "Confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type NewPasswordFormValues = z.infer<typeof schema>;

export default function NewPasswordPage() {
  const form = useForm<NewPasswordFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const colors = {
    border: useColor("border.border-subtle"),
    label: useColor("content.content-tertiary-inverse"),
    input: useColor("content.content-primary"),
    header: useColor("content.content-primary"),
    paragraph: useColor("content.content-tertiary"),
    buttonDisabled: useColor("background.background-disabled"),
    errorBorder: useColor("border.border-negative"),
    errorText: useColor("content.content-negative"),
    focusBorder: useColor("border.border-focus"),
    requirementDefault: useColor("content.content-tertiary"),
    requirementMet: useColor("content.content-positive"),
    requirementIconPending: useColor("border.border-tertiary"),
  };

  const checkPasswordRequirements = (
    password: string
  ): PasswordRequirementState => ({
    minLength: password.length >= 8,
    hasUpperLower:
      LOWERCASE_REGEX.test(password) && UPPERCASE_REGEX.test(password),
    hasNumberSymbol: DIGIT_REGEX.test(password) || SYMBOL_REGEX.test(password),
  });

  const passwordValue = form.watch("password") ?? "";

  const requirements = useMemo(
    () => checkPasswordRequirements(passwordValue),
    [passwordValue]
  );

  const onSubmit = form.handleSubmit(async () => {
    setIsLoading(true);

    // Simulate API call
    timeoutRef.current = window.setTimeout(() => {
      setIsLoading(false);
      timeoutRef.current = null;
      // TODO: integrate password reset success handling
    }, 2000);
  });

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const isSubmitDisabled = !form.formState.isValid || isLoading;

  return (
    <Form {...form}>
      <NewPasswordPageMainContainer>
        <NewPasswordForm
          $headerColor={colors.header}
          $paragraphColor={colors.paragraph}
          $controlBorderColor={colors.border}
          $inputColor={colors.input}
          $labelColor={colors.label}
          $buttonDisabledBg={colors.buttonDisabled}
          $errorBorderColor={colors.errorBorder}
          $focusBorderColor={colors.focusBorder}
          $errorColor={colors.errorText}
          onSubmit={onSubmit}
        >
          <div className="top-section">
            <HeaderLogo className="header-logo" />
            <h2>Create a New Password</h2>
          </div>

          <div className="form-fields">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter new password</FormLabel>
                  <FormControl>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create your password"
                      autoComplete="new-password"
                      size="large"
                      rightIcon={
                        <PasswordToggleButton
                          type="button"
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                          onClick={() => setShowPassword((prev) => !prev)}
                        >
                          {showPassword ? (
                            <EyeSlashIcon weight="bold" />
                          ) : (
                            <EyeIcon weight="bold" />
                          )}
                        </PasswordToggleButton>
                      }
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm new password</FormLabel>
                  <FormControl>
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Re-enter your password"
                      autoComplete="new-password"
                      size="large"
                      rightIcon={
                        <PasswordToggleButton
                          type="button"
                          aria-label={
                            showConfirmPassword
                              ? "Hide password"
                              : "Show password"
                          }
                          onClick={() =>
                            setShowConfirmPassword((prev) => !prev)
                          }
                        >
                          {showConfirmPassword ? (
                            <EyeSlashIcon weight="bold" />
                          ) : (
                            <EyeIcon weight="bold" />
                          )}
                        </PasswordToggleButton>
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <PasswordRequirements
              $defaultColor={colors.requirementDefault}
              $metColor={colors.requirementMet}
              $iconPendingColor={colors.requirementIconPending}
            >
              <span className="requirements-heading">Must contain</span>
              <ul>
                <RequirementItem
                  $met={requirements.minLength}
                  $defaultColor={colors.requirementDefault}
                  $metColor={colors.requirementMet}
                  $iconPendingColor={colors.requirementIconPending}
                  $isBold={requirements.minLength}
                >
                  <span className="icon-wrapper">
                    {requirements.minLength ? (
                      <CheckCircleIcon weight="fill" />
                    ) : (
                      <CircleIcon weight="bold" />
                    )}
                  </span>
                  At least 8 characters
                </RequirementItem>
                <RequirementItem
                  $met={requirements.hasUpperLower}
                  $defaultColor={colors.requirementDefault}
                  $metColor={colors.requirementMet}
                  $iconPendingColor={colors.requirementIconPending}
                  $isBold={requirements.hasUpperLower}
                >
                  <span className="icon-wrapper">
                    {requirements.hasUpperLower ? (
                      <CheckCircleIcon weight="fill" />
                    ) : (
                      <CircleIcon weight="bold" />
                    )}
                  </span>
                  Uppercase and lowercase letters
                </RequirementItem>
                <RequirementItem
                  $met={requirements.hasNumberSymbol}
                  $defaultColor={colors.requirementDefault}
                  $metColor={colors.requirementMet}
                  $iconPendingColor={colors.requirementIconPending}
                  $isBold={requirements.hasNumberSymbol}
                >
                  <span className="icon-wrapper">
                    {requirements.hasNumberSymbol ? (
                      <CheckCircleIcon weight="fill" />
                    ) : (
                      <CircleIcon weight="bold" />
                    )}
                  </span>
                  A number or symbol
                </RequirementItem>
              </ul>
            </PasswordRequirements>

            <div className="action-buttons">
              <Button
                type="submit"
                variant="primary"
                fullWidth
                disabled={isSubmitDisabled}
                loading={isLoading}
              >
                Create Password
              </Button>
            </div>
          </div>
        </NewPasswordForm>
      </NewPasswordPageMainContainer>
    </Form>
  );
}
