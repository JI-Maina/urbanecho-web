import {
  LeftSection,
  RightSection,
  ScheduleDemoContainer,
  ScheduleDemoForm,
  ScheduleDemoMainPage,
} from "./schedule-demo.styled";
import { ArrowRightIcon, CheckCircleIcon } from "@phosphor-icons/react";
import z from "zod";
import {
  useForm,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Input,
  FormMessage,
  Textarea,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button, { LinkButton } from "@/components/ui/button";
import { useColor } from "@/providers/theme-provider";
import { Link } from "react-router-dom";

const scheme = z.object({
  first_name: z.string().min(2, "First name must be at least 2 characters"),
  last_name: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  affiliation: z
    .string()
    .min(1, "Please select the number of employees")
    .regex(/^\d+$/, "Invalid number of employees"),
  message: z.string().optional(),
});

export default function ScheduleDemoPage() {
  const options = [
    "Digitise cities anywhere",
    "Ask in Plain Language, Get Answers",
    "Understand How Decisions Affect Real People",
  ];
  const form = useForm({
    resolver: zodResolver(scheme),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      affiliation: "",
      message: "",
    },
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
    <ScheduleDemoMainPage>
      <ScheduleDemoContainer>
        <LeftSection>
          <div className="orange-overlay"></div>
          <img src="/images/productpage_img.png" alt="" />
          <div className="content">
            <h2>Learn how to model cities around people</h2>
            <ul>
              {options.map((option, index) => (
                <li key={index}>
                  <CheckCircleIcon size={20} weight="fill" /> {option}
                </li>
              ))}
            </ul>
          </div>
        </LeftSection>
        <RightSection>
          <Form {...form}>
            <ScheduleDemoForm
              action=""
              onSubmit={form.handleSubmit((data) => console.log(data))}
              $controlBorderColor={colors.border}
              $inputColor={colors.input}
              $labelColor={colors.label}
              $buttonDisabledBg={colors.buttonDisabled}
              $errorBorderColor={colors.errorBorder}
              $focusBorderColor={colors.focusBorder}
              $errorColor={colors.errorText}
            >
              <div className="form-inputs">
                <div className="header">
                  <h2>Book a Demo</h2>
                  <p>
                    See how UrbanEcho turns your urban data into actionable,
                    human-centric foresight in just 30 minutes.
                  </p>
                </div>
                <div className="top-inputs">
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your first name" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />{" "}
                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your last name" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />{" "}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email address" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />{" "}
                  <FormField
                    control={form.control}
                    name="affiliation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Affiliation</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email address" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />{" "}
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="action-buttons">
                  <Button type="submit" variant="primary">
                    Book a Demo
                  </Button>
                  <p>
                    Do you have an account?
                    <LinkButton to="/login" variant="secondary" size="small" className="login-link">
                      {" "}
                      Login
                      <ArrowRightIcon className="arrow-left-action-icon" />
                    </LinkButton>
                  </p>
                </div>
              </div>
              <div className="privacy-policy-and-copyright">
                <div className="copyright">© UrbanEcho 2025</div>
                <div className="privacy">
                  <Link to="/privacy-policy">Privacy Policy</Link>

                  <Link to="/terms-of-service">Terms of Service</Link>
                </div>
              </div>
            </ScheduleDemoForm>
          </Form>
        </RightSection>
      </ScheduleDemoContainer>
    </ScheduleDemoMainPage>
  );
}
