import HeaderLogo from "@/components/header/header-logo";
import {
  ForgotPasswordForm,
  ForgotPasswordPagemainContainer,
} from "./forgot-password.styled";
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
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button, { LinkButton } from "@/components/ui/button";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { useColor } from "@/providers/theme-provider";
const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});
export default function ForgotPasswordPage() {
  const form = useForm({ resolver: zodResolver(forgotPasswordSchema) });
  return (
    <Form {...form}>
      <ForgotPasswordPagemainContainer>
        <ForgotPasswordForm
          $controlBorderColor={useColor("border.border-subtle")}
          $headerColor={useColor("content.content-primary")}
          $paragraphColor={useColor("content.content-tertiary")}
          $inputColor={useColor("content.content-primary")}
          $labelColor={useColor("content.content-tertiary-inverse")}
          $buttonDisabledBg={useColor("background.background-disabled")}
        >
          <div className="top-section">
            <HeaderLogo className="header-logo" />
            <h2>Password Reset</h2>
            <p>
              Please enter your UrbanEcho email address to receive a password
              reset link
            </p>
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
            <div className="action-buttons">
              <Button disabled type="submit">Send Reset Link</Button>
              <LinkButton  to="/login" variant="secondary">
                <ArrowLeftIcon className="arrow-left-action-icon" /> Back to
                Login
              </LinkButton>
            </div>
          </div>
        </ForgotPasswordForm>
      </ForgotPasswordPagemainContainer>
    </Form>
  );
}
