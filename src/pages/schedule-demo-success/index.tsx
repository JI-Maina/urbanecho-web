import {
  LeftSection,
  RightSection,
  ScheduleDemoContainer,
  ScheduleWrapper,
  ScheduleDemoMainPage,
} from "./schedule-demo-success.styled";
import { ArrowRightIcon, CheckCircleIcon } from "@phosphor-icons/react";
import Button, { LinkButton } from "@/components/ui/button";
import { useColor } from "@/providers/theme-provider";
import { Link } from "react-router-dom";

export default function ScheduleDemoSuccess() {
  const options = [
    "A personal email from a UrbanEcho solutions expert.",
    "A brief call to understand your specific challenges.",
    "A customized demo tailored to your city's needs.",
  ];

  const colors = {
   iconColor: useColor("content.content-brand"),
    headerColor: useColor("content.content-primary"),
    textColor: useColor("content.content-tertiary"),
  };
  return (
    <ScheduleDemoMainPage>
      <ScheduleDemoContainer>
        <LeftSection>
          <div className="orange-overlay"></div>
          <img src="/images/calendar_illustration.png" alt="" />
          
        </LeftSection>
        <RightSection>
          <ScheduleWrapper
            $iconColor={colors.iconColor}
            $headerColor={colors.headerColor}
            $textColor={colors.textColor}
          >
            <div className="content-wrapper">
              <div className="header">
                <h2>You're All Set! Your Demo Request is Confirmed</h2>
                <p>
                  Thank you for your interest in UrbanEcho. A member of our team
                  will contact you within 48 hours to confirm your details and
                  schedule your personalised demo.
                </p>
              </div>
              <hr />
              <div className="expectation">
                <h2>What to expect next:</h2>
                <ul>
                  {options.map((option, index) => (
                    <li key={index}>
                      <CheckCircleIcon size={20} className="check-icon" /> {option}
                    </li>
                  ))}
                </ul>
              </div>
              <hr />
              <div className="action-buttons">
                <Button type="submit" variant="primary">
                  Book a Demo
                </Button>
                <p>
                  <LinkButton
                    to="/blog"
                    variant="secondary"
                    size="small"
                    className="explore-blog-link"
                  >
                    {" "}
                    Explore our Blog
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
          </ScheduleWrapper>
        </RightSection>
      </ScheduleDemoContainer>
    </ScheduleDemoMainPage>
  );
}
