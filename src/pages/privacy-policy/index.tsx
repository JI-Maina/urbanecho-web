import {
  PrivacyPolicyContainer,
  PrivacyPolicyMainPage,
  PrivacySection,
} from "./privacy-policy.styled";
import { useColor } from "@/providers/theme-provider";

export default function PrivacyPolicy() {
  const lastUpdated = "09/08/2025";
  return (
    <PrivacyPolicyMainPage bgColor={useColor("surface.surface-l0")}>
      <PrivacyPolicyContainer>
          <header>
            <h1>Terms of Service</h1>
            <p>Last updated: {lastUpdated}</p>
          </header>

          <hr />

          <article>
            <PrivacySection>
              <p>
                UrbanEcho AG ("UrbanEcho," "we," "us," or "our") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your personal information
                when you use our software-as-a-service platform, including our
                website and digital twin modelling tools (collectively, the
                "Service").
              </p>
              <p>
                By accessing or using the Service, you consent to the practices
                described in this policy.
              </p>
            </PrivacySection>

            <PrivacySection id="section-1">
              <p>1. Information We Collect</p>
              <p>
                We collect information that you provide directly to us,
                automatically when you use the Service, and from third-party
                sources.
              </p>
              <div>
                <p> a) Information You Provide:</p>
                <ul>
                  <li>
                    {" "}
                    Account Data: Name, email address, affiliation (e.g.,
                    government agency, company), and login credentials.
                  </li>
                  <li>
                    Content and Inquiries: Information you submit when
                    contacting support, booking a demo, or posting on our
                    community forums.{" "}
                  </li>
                  <li>
                    {" "}
                    Customer Data: Urban data sets you upload, which may contain
                    personal information depending on the nature of your data.
                    We process this data as a Data Processor acting on your
                    instructions.{" "}
                  </li>
                </ul>
              </div>
              <div>
                <p>b) Information Collected Automatically:</p>
                <ul>
                  <li>
                    Usage Data: Information about your interactions with the
                    Service, such as features used, queries run, and time spent.
                  </li>
                  <li>
                    Device and Log Data: IP address, browser type, operating
                    system, device information, and pages visited.{" "}
                  </li>
                  <li>
                    {" "}
                    Cookies and Tracking Technologies: We use cookies and
                    similar technologies to analyze trends, administer the
                    website, and track users' movements around the site.
                  </li>
                </ul>
              </div>
              <div>
                <p>c) Information from Third Parties:</p>
                <p>
                  We may receive information about you from other users (e.g.,
                  an invitation to a project) or from publicly available
                  sources.
                </p>
              </div>
            </PrivacySection>

            <PrivacySection id="section-2">
              <h2>2. How We Use Your Information</h2>
              <p>
                We use the information we collect for the following purposes:
              </p>
              <ul>
                <li>To provide, maintain, and improve the Service.</li>
                <li>
                  To authenticate your account and process your subscriptions.
                </li>
                <li>
                  To respond to your comments, questions, and support requests.
                </li>
                <li>
                  To send you technical notices, updates, and administrative
                  messages.
                </li>
                <li>To develop new products, features, and functionality.</li>
                <li>
                  To monitor and analyze trends, usage, and activities in
                  connection with our Service.
                </li>
                <li>
                  To detect, investigate, and prevent fraudulent transactions
                  and other illegal activities.
                </li>
              </ul>
            </PrivacySection>

            <PrivacySection id="section-3">
              <h2>3. Legal Basis for Processing (EEA/UK Users)</h2>
              <p>
                If you are located in the European Economic Area (EEA) or the
                UK, we process your personal data based on the following legal
                grounds:
              </p>
              <ul>
                <li>
                  Performance of a Contract: To fulfill our obligations under
                  the Terms of Service.
                </li>
                <li>
                  Legitimate Interests: To operate our business and provide the
                  Service where not overridden by your rights.
                </li>
                <li>
                  Consent: Where we have obtained your clear consent (e.g., for
                  certain marketing communications).
                </li>
              </ul>
            </PrivacySection>

            <PrivacySection id="section-4">
              <h2>4. How We Share and Disclose Your Information</h2>
              <p>
                We do not sell your personal information. We may share it in the
                following limited circumstances:
              </p>
              <ul>
                <li>
                  Service Providers: With vendors who provide services on our
                  behalf (e.g., cloud hosting, payment processing, customer
                  support, analytics). These partners are bound by strict data
                  protection obligations.
                </li>
                <li>
                  Legal Requirements: If required to do so by law or in response
                  to a valid legal request.
                </li>
                <li>
                  Business Transfers: In connection with a merger, acquisition,
                  or sale of all or a portion of our assets.
                </li>
                <li>
                  With Your Consent: We may share your information for any other
                  purpose with your explicit consent.
                </li>
              </ul>
            </PrivacySection>

            <PrivacySection id="section-5">
              <h2>5. International Data Transfers</h2>
              <p>
                UrbanEcho is based in Switzerland. Your information may be
                transferred to, and processed in, countries other than your own.
                When we transfer personal data from the EEA, UK, or Switzerland
                to countries not deemed to have adequate protection, we ensure
                safeguards are in place, such as the European Commission's
                Standard Contractual Clauses.
              </p>
            </PrivacySection>

            <PrivacySection id="section-6">
              <h2>6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures
                designed to protect the security of your personal information,
                including encryption at rest and in transit. However, no method
                of transmission over the Internet or electronic storage is 100%
                secure.
              </p>
            </PrivacySection>

            <PrivacySection id="section-7">
              <h2>7. Your Data Protection Rights</h2>
              <p>
                Depending on your location, you may have the following rights
                regarding your personal information:
                <ul>
                  <li>
                    Access: The right to request a copy of your personal data.
                  </li>
                  <li>
                    Rectification: The right to correct inaccurate or incomplete
                    data.
                  </li>
                  <li>
                    Erasure ("Right to be Forgotten"): The right to request
                    deletion of your personal data.
                  </li>
                  <li>
                    Restriction: The right to request we temporarily or
                    permanently stop processing your data.
                  </li>
                  <li>
                    Data Portability: The right to request a transfer of your
                    data to another service.
                  </li>
                  <li>
                    Objection: The right to object to processing based on
                    legitimate interests.
                  </li>
                </ul>
                To exercise any of these rights, please contact us at
                info@urbanecho.com.
              </p>
            </PrivacySection>

            <PrivacySection id="section-8">
              <h2>8. Data Retention</h2>
              <p>
                We retain your personal information only for as long as is
                necessary to fulfill the purposes outlined in this policy,
                comply with our legal obligations, resolve disputes, and enforce
                our agreements.
              </p>
            </PrivacySection>

            <PrivacySection id="section-9">
              <h2>9. Children's Privacy</h2>
              <p>
                Our Service is not directed to individuals under the age of 16.
                We do not knowingly collect personal information from children.
                If you become aware that a child has provided us with personal
                information, please contact us.
              </p>
            </PrivacySection>

            <PrivacySection id="section-10">
              <h2>10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the "Last Updated" date.
              </p>
            </PrivacySection>
            <PrivacySection id="section-11">
              <h2 className="">11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact our Data Protection Officer at: <br />
                <b>Email: </b>
                info@urbanecho.com <br />
                <b>Address: </b> UrbanEcho AG, Zurich, Switzerland.
              </p>
            </PrivacySection>
          </article>
      </PrivacyPolicyContainer>
    </PrivacyPolicyMainPage>
  );
}
