import React from 'react';
import Container from "@/components/Container";
import FooterCTA from "@/components/FooterCTA";

interface IProps {
}

function PrivacyPolicy(props: IProps) {
  return (
    <div>
      <Container className="pt-10">
        <div className="privacy">
          <h2 className="font-bold mb-10 h3 md:h2">Privacy Policy</h2>

          <h4>Background</h4>
          <p>
            At Fagopay Technology Limited, we take your privacy seriously and are committed to
            protecting your personal information. FAGOPAY TECHNOLOGY LIMITED is a limited liability
            company incorporated under the Laws of the Federal Republic of Nigeria and having its
            registered address at No. 2. WTC Roundabout, Mani Road Katsina, Katsina State Nigeria,
            with the number RC1675660.
          </p>

          <p>This Privacy Policy outlines the types of information we may collect from Fagopay
            users, you consent to the collection and use of your personal information as described
            in this statement.</p>

          <h4>Types of Information Collected</h4>
          <p>When you use Fagopay app, we may collect the following types of information:</p>

          <ul>
            <li>
              Personal Information: This includes your name, address, email address, phone number,
              date of birth, and other personally identifiable information that you provide to us
              when you register for an account or use our services.
            </li>
            <li>
              Financial Information: This includes your bank account number, credit card number, BVN
              (Bank Verification Number) and other financial information that you provide to us when
              you use our services.
            </li>
            <li>
              Transaction Information: This includes information about the transactions you make
              through our app, such as the date, time, and amount of the transaction, the parties
              involved, and any comments or notes you add to the transaction.
            </li>
            <li>
              Device Information: This includes information about the device you use to access our
              app, such as your device type, operating system, browser type, and IP address.
            </li>
          </ul>

          <h4>Why We Collect Information</h4>
          <p>We collect information from users of Fagopay app for the following purposes:</p>

          <ul>
            <li>
              To provide our services: We need your personal and financial information to verify
              your identity, process transactions, and provide you with our services.
            </li>
            <li>
              To improve our services: We use transaction and device information to analyze how
              users interact with our app and to identify areas for improvement.
            </li>
            <li>
              To comply with legal and regulatory requirements: We may be required to collect
              certain information in order to comply with applicable laws and regulations.
            </li>
          </ul>

          <h4>How do we use your information?</h4>
          <p>
            The Nigerian Data Protection Regulations 2019 (NDPR) requires that we have a lawful
            basis for processing your personal information. At least one of the following lawful
            basis must apply before we process your personal information: contractual or legal
            obligations, legitimate interest of the data controller, public interest, vital interest
            of the data subject or consent. Contractual Obligation
            We collect certain data from you to fulfill the contract we have with you, or to enter
            into a contract with you. We use this data to:
          </p>

          <ul>
            <li>
              Give you the services we agreed to in line with our terms and conditions.
            </li>
            <li>
              Send you messages about your account and other services you use if you get in touch,
              or we need to tell you about something.
            </li>
            <li>
              Exercise our rights under contracts we’ve entered into with you, like managing,
              collecting and recovering money you owe us.
            </li>
            <li>
              Investigate and resolve complaints and other issues.
            </li>
          </ul>

          <h4>Legal Duty</h4>
          <p>We have to ensure we aren’t breaking any laws by banking you by preventing illegal
            activities like money laundering, terrorism financing and fraud. To do this, we need
            your data to;</p>

          <ul>
            <li>
              Confirm your identity when you sign up or get in touch.
            </li>
            <li>
              Prevent illegal activities like money laundering, tax evasion and fraud.
            </li>
            <li>
              Keep records of information we hold about you in line with legal requirements.
            </li>
            <li>
              Adhere to banking laws and regulations (these mean we sometimes need to share customer
              details with regulators, tax authorities, law enforcement or other third parties).
            </li>

          </ul>

          <h4>Legitimate Interest of the data controller</h4>
          <p>In some instances, we need to use the data you supply us for our legitimate interests.
            This means we’re using your data in a way that you might expect us to, for a reason
            which is in your interest and doesn&apos;t override your privacy, interests or fundamental
            rights and freedoms.</p>

          <h4>Consent</h4>
          <p>For certain information, we’ll ask for your consent. We’ll ask for your consent to:</p>

          <ul>
            <li>Market and communicate our products and services. You can always unsubscribe from
              receiving these if you want to;
            </li>
            <li>Help protect you against fraud by tracking the location of your phone if you’ve
              authorised it;
            </li>
            <li>View your contact list for airtime purchases.</li>
          </ul>

          <h4>Sharing Information</h4>
          <p>We may share your personal information with third parties under the following
            circumstances:</p>

          <ul>
            <li>With your consent: We will only share your personal information with
              third parties if you have given us your explicit consent to do so.
            </li>
            <li>To provide our services: We may share your personal and financial information with
              third-party service providers who assist us in providing our services.
            </li>
            <li>To comply with legal and regulatory requirements: We may be required to share your
              information with law enforcement agencies or other government bodies in order to
              comply with applicable laws and regulations.
            </li>
            <li>For business purposes: We may share your information with third parties in
              connection with a merger, acquisition, or other business transaction.
            </li>
          </ul>

          <h4>Security Measures</h4>
          <p>We take the security of your personal information seriously and have implemented
            appropriate measures to protect it from unauthorized access, use, or disclosure.These
            measures include:</p>

          <ul>
            <li>Data encryption: We use industry-standard encryption to protect your
              data in transit and at rest.
            </li>
            <li>Access controls: We limit access to your personal information to
              authorized personnel only.
            </li>
            <li>Monitoring and auditing: We monitor our systems and audit our processes to detect
              and prevent unauthorized access to your personal information
            </li>
          </ul>

          <h4>Data Retention.</h4>
          <p>We will retain your personal information for as long as necessary to fulfil the
            purposes for which it was collected, unless a longer retention period is required or
            permitted by law.</p>
          <p>Changes to this Privacy Policy Statement We may update this Privacy Policy Statement
            from time to time. If we make material changes to this statement, we will notify you by
            email or through our app. Your continued use of our app following the posting of changes
            to this statement will
            constitute your acceptance of those changes.</p>


          <h4>Contact Us</h4>
          <p>If you have any questions or concerns about our Privacy Policy Statement, please
            contact us at <a href="mailto:help@fagopay.africa"
                             rel="noreferrer nofollow">help@fagopay.africa</a></p>
        </div>
      </Container>

      <FooterCTA/>
    </div>
  );
}

export default PrivacyPolicy;
