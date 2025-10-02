import { Link } from "react-router-dom";
import {
  TermsOfServiceContainer,
  TermsOfServiceMainPage,
  TermsOfServiceSection,
} from "./terms-of-service.styled";
import { useColor } from "@/providers/theme-provider";

export default function TermsOfService() {
  const lastUpdated = "09/08/2025";
  return (
    <TermsOfServiceMainPage bgColor={useColor("surface.surface-l0")}>
      <TermsOfServiceContainer>
        <header>
          <h1>Terms of Service</h1>
          <p>Last updated: {lastUpdated}</p>
        </header>

        <hr />

        <article>
          <TermsOfServiceSection>
            <h2>
              Please, read these Terms of Service carefully before using the
              UrbanEcho platform
            </h2>
            <p>
              This Terms of Service agreement ("Agreement") is a legal contract
              between you ("Customer," "you," or "your") and UrbanEcho AG
              ("UrbanEcho," "we," "us," or "our"), a company incorporated in
              Switzerland. This Agreement governs your access to and use of our
              software-as-a-service platform, including the UrbanEcho digital
              twin modeling tools, AI co-planner, and related services
              (collectively, the "Service").
            </p>
            <p>
              By registering for an account, clicking "I agree," or otherwise
              accessing or using the Service, you agree to be bound by the terms
              and conditions of this Agreement. If you are entering into this
              Agreement on behalf of a company or other legal entity, you
              represent that you have the authority to bind such entity to these
              terms.
            </p>
          </TermsOfServiceSection>

          <TermsOfServiceSection id="TermsOfServiceSection-1">
            <h2>1. Account Registration and Security</h2>
            <p>
              1.1. Eligibility. You must be at least 18 years old and have the
              legal capacity to enter into a binding contract to use the
              Service.
            </p>
            <p>
              1.2. Account Creation. You must provide accurate and complete
              information during registration and keep this information
              up-to-date.
            </p>
            <p>
              1.3. Security. You are responsible for maintaining the
              confidentiality of your account credentials and for all activities
              that occur under your account. You agree to notify us immediately
              of any unauthorized use of your account.
            </p>
          </TermsOfServiceSection>

          <TermsOfServiceSection id="TermsOfServiceSection-2">
            <h2>2. Access to the Service</h2>
            <p id="TermsOfServiceSection-2-1">
              2.1. License Grant. Subject to your compliance with this
              Agreement, UrbanEcho grants you a limited, non-exclusive,
              non-transferable, non-sublicensable right to access and use the
              Service during your subscription term for your internal business
              purposes.
            </p>
            <p id="TermsOfServiceSection-2-2">
              2.2. Restrictions. You shall not: (a) license, sell, rent, lease,
              transfer, assign, distribute, or otherwise commercially exploit
              the Service; (b) modify, make derivative works of, disassemble,
              decompile, or reverse engineer any part of the Service; (c) access
              the Service to build a competitive product or service; or (d) use
              the Service for any illegal or unauthorized purpose.
            </p>
          </TermsOfServiceSection>

          <TermsOfServiceSection id="TermsOfServiceSection-3">
            <h2>3. User Data and Privacy</h2>
            <p id="TermsOfServiceSection-3-1">
              3.1. Data Ownership. You retain all right, title, and interest in
              and to any data, information, models, or content you upload,
              create, or generate within the Service ("Customer Data"). You are
              solely responsible for the accuracy, quality, and legality of your
              Customer Data.
            </p>
            <p id="TermsOfServiceSection-3-2">
              3.2. License to UrbanEcho. You grant UrbanEcho a worldwide,
              royalty-free license to use, host, store, reproduce, modify, and
              create derivative works of the Customer Data solely for the
              purpose of providing, improving, and securing the Service for you.
            </p>
            <p id="TermsOfServiceSection-3-3">
              3.3. Privacy. Our collection and use of personal information in
              connection with the Service is described in our Privacy Policy.
            </p>
          </TermsOfServiceSection>

          <TermsOfServiceSection id="TermsOfServiceSection-4">
            <h2>4. Intellectual Property Rights</h2>
            <p>
              UrbanEcho and its licensors own and shall retain all right, title,
              and interest in and to the Service, including all underlying
              software, technology, algorithms, and know-how, and any
              modifications or improvements thereto ("UrbanEcho IP"). Except for
              the express license granted in TermsOfServiceSection{" "}
              <Link to="#TermsOfServiceSection-2-1">2.1</Link>, no rights in any
              UrbanEcho IP are granted to you.
            </p>
          </TermsOfServiceSection>

          <TermsOfServiceSection id="TermsOfServiceSection-5">
            <h2>5. Fees and Payment</h2>
            <p>
              5.1. Fees. You agree to pay all fees specified in your
              subscription plan ("Fees"). Fees are non-refundable except as
              required by law or as otherwise stated in this Agreement.
            </p>
            <p>
              5.2. Invoicing and Payment. Fees will be invoiced in advance on an
              annual or monthly basis, as per your selected plan. Unless
              otherwise stated, invoices are due net 30 from the invoice date.
            </p>
            <p>
              5.3. Taxes. All Fees are exclusive of any applicable taxes,
              levies, or duties, which you are solely responsible for paying.
            </p>
          </TermsOfServiceSection>

          <TermsOfServiceSection id="TermsOfServiceSection-6">
            <h2>6. Term and Termination</h2>
            <p>
              6.1. Term. This Agreement begins on the date you accept it and
              continues until your subscription expires or is terminated.
            </p>
            <p>
              6.2. Termination. You may terminate your account at any time. We
              may suspend or terminate your access to the Service immediately if
              you breach this Agreement.
            </p>
            <p>
              6.3. Effect of Termination. Upon termination, your right to access
              the Service will cease immediately. TermsOfServiceSections{" "}
              <Link to="#TermsOfServiceSection-3">3</Link>,{" "}
              <Link to="#TermsOfServiceSection-4">4</Link>,
              <Link to="#TermsOfServiceSection-5">5</Link>,{" "}
              <Link to="#TermsOfServiceSection-7">7</Link>,{" "}
              <Link to="#TermsOfServiceSection-8">8</Link>, and{" "}
              <Link to="#TermsOfServiceSection-9">9</Link> shall survive any
              termination.
            </p>
          </TermsOfServiceSection>

          <TermsOfServiceSection id="TermsOfServiceSection-7">
            <h2>7. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS.
              URBANECHO EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              AND NON-INFRINGEMENT.
            </p>
          </TermsOfServiceSection>

          <TermsOfServiceSection id="TermsOfServiceSection-8">
            <h2>8. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
              SHALL URBANECHO'S AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO
              THIS AGREEMENT EXCEED THE TOTAL AMOUNT PAID BY YOU IN THE TWELVE
              (12) MONTHS PRECEDING THE INCIDENT GIVING RISE TO THE LIABILITY.
            </p>
          </TermsOfServiceSection>

          <TermsOfServiceSection id="TermsOfServiceSection-9">
            <h2>9. Governing Law and Dispute Resolution</h2>
            <p>
              9.1. Governing Law. This Agreement shall be governed by and
              construed in accordance with the laws of Switzerland, without
              regard to its conflict of law principles.
            </p>
            <p>
              9.2. Dispute Resolution. The parties agree that any disputes shall
              be finally settled under the Rules of Arbitration of the
              International Chamber of Commerce by a single arbitrator appointed
              in accordance with said rules. The place of arbitration shall be
              Zurich, Switzerland.
            </p>
          </TermsOfServiceSection>

          <TermsOfServiceSection id="TermsOfServiceSection-10">
            <h2>10. General Provisions</h2>
            <p>
              10.1. Entire Agreement. This Agreement constitutes the entire
              agreement between you and UrbanEcho concerning the Service.
            </p>
            <p>
              10.2. Modifications. UrbanEcho may modify this Agreement from time
              to time. We will provide notice of material changes. Your
              continued use of the Service after such notice constitutes your
              acceptance of the new terms.
            </p>
            <p>
              10.3. Contact. Questions about these Terms of Service should be
              sent to us at info@urbanecho.com.
            </p>
          </TermsOfServiceSection>
        </article>
      </TermsOfServiceContainer>
    </TermsOfServiceMainPage>
  );
}
