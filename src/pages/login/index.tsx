import {
  FormLabel,
  Input,
  useForm,
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import {
  LoginPageMainContainer,
  LoginFomWrapper,
  LoginFormLeftSection,
  LoginForm,
  LoginFormRightSection,
  LoginFormOrangeOverlay,
} from "./login.styled";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useColor } from "@/providers/theme-provider";
import { Link } from "react-router-dom";
import Button, { LinkButton } from "@/components/ui/button";
import { ArrowRightIcon, EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { PasswordToggleButton } from "../new-password/new-password.styled";
const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  keepLoggedIn: z.boolean().optional(),
});

export default function LoginPage() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      keepLoggedIn: false,
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = form.handleSubmit(async () => {
    // Simulate API call
    setTimeout(() => {
      // setIsLoading(false);
      // Handle login logic here
    }, 2000);
  });
  const colors = {
    baseBg: useColor("surface.surface-l0"),
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
    footerColor: useColor("content.content-tertiary"),
  };
  return (
    <LoginPageMainContainer $bgColor={colors.baseBg}>
      <LoginFomWrapper>
        <LoginFormLeftSection
          $bgColor={useColor("background.background-brand-surface")}
        >
          <LoginFormOrangeOverlay />
          <h2>Digital Twin as a Service, Your city's living model</h2>
          <img
            src="/images/login_screen_mockup.png"
            alt=""
            className="image-computer"
          />
          <img
            src="/images/login_illustartion.png"
            alt=""
            className="image-pattern"
          />
        </LoginFormLeftSection>
        <LoginFormRightSection>
          <Form {...form}>
            <LoginForm
              onSubmit={handleSubmit}
              $footerTextColor={colors.footerColor}
              $controlBorderColor={colors.border}
              $inputColor={colors.input}
              $labelColor={colors.label}
              $buttonDisabledBg={colors.buttonDisabled}
              $errorBorderColor={colors.errorBorder}
              $focusBorderColor={colors.focusBorder}
              $errorColor={colors.errorText}
            >
              <div className="form-wrapper">
                <div className="header-section">
                  <h2>Welcome to UrbanEcho</h2>
                  <p>Please, enter your details to log into your account.</p>
                </div>
                <div className="form-fields">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email address" {...field} />
                        </FormControl>
                        {/* <FormDescription>
                                   This is your public display name.
                                 </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                                  showPassword
                                    ? "Hide password"
                                    : "Show password"
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
                  <LinkButton
                    to="/forgot-password"
                    variant="secondary"
                    size="small"
                    className="forgot-password-link"
                  >
                    Forgot password?
                  </LinkButton>
                  <FormField
                    control={form.control}
                    name="keepLoggedIn"
                    render={({ field }) => (
                      <FormItem className="keep-logged-in-field">
                        <div className="checkbox-row">
                          <FormControl>
                            <Checkbox
                              checked={field.value ?? false}
                              onCheckedChange={(checked) =>
                                field.onChange(checked === true)
                              }
                              aria-label="Keep me logged in"
                            />
                          </FormControl>
                          <div className="checkbox-copy">
                            <FormLabel className="checkbox-label">
                              Keep me logged in
                            </FormLabel>
                            {/* <FormDescription>
                              Stay logged in on this device
                            </FormDescription> */}
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="action-buttons">
                    <Button type="submit" variant="primary">
                      Log in
                    </Button>
                    <p>
                      Do you have an account?
                      <LinkButton to="/schedule-demo" variant="secondary" size="small">
                        {" "}
                        Book a demo
                        <ArrowRightIcon className="arrow-left-action-icon" />
                      </LinkButton>
                    </p>
                  </div>
                </div>
              </div>
              <div className="copyright-privacy">
                <div className="copyright">© UrbanEcho 2025</div>
                <div className="privacy">
                  <Link to="/privacy-policy">Privacy Policy</Link>

                  <Link to="/terms-of-service">Terms of Service</Link>
                </div>
              </div>
            </LoginForm>
          </Form>
        </LoginFormRightSection>
      </LoginFomWrapper>
    </LoginPageMainContainer>
  );
}
