import Container from '@/component/Container'
import React from 'react'

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800">
        {title}
      </h2>
      <div className="text-gray-600 space-y-3 leading-relaxed">
        {children}
      </div>
    </section>
  );
};

const page = () => {
  return (
    <Container active='Terms of Service'>
        <div className='px-4! md:px-20! py-10!'>
            <h1 className='text-3xl font-bold mb-7'>Terms of Service</h1>


        <Section title="1. Introduction">
          <p>
            Welcome to QuikWrk — a digital platform connecting users to verified
            artisans, vendors, and service providers through secure,
            geolocation-based technology.
          </p>
          <p>
            By using QuikWrk, you agree to the terms stated below. Please read
            carefully before creating an account or making any transaction on
            the app.
          </p>
        </Section>

        <Section title="2. Definition of Terms">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>User/Client:</strong> An individual or business seeking
              services from artisans or vendors via the QuikWrk app.
            </li>
            <li>
              <strong>Vendor/Artisan:</strong> A service provider offering
              professional or skilled services through the app.
            </li>
            <li>
              <strong>Artisan Agent:</strong> An individual authorized by
              QuikWrk to recruit and manage vendors/artisans.
            </li>
            <li>
              <strong>QuikWrk Wallet:</strong> The in-app wallet used for secure
              payments, cashback rewards, and airtime vouchers.
            </li>
          </ul>
        </Section>

        <Section title="3. Account Registration">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              All users, vendors, and agents must register using valid details
              and a National Identification Number (NIN) for identity
              verification.
            </li>
            <li>
              QuikWrk reserves the right to approve, reject, or suspend any
              account that violates policies or provides false information.
            </li>
            <li>
              Users are responsible for maintaining the confidentiality of their
              login details.
            </li>
          </ul>
        </Section>

        <Section title="4. Use of Services">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              QuikWrk connects clients to nearby verified artisans/vendors based
              on geolocation.
            </li>
            <li>
              All engagements, payments, and communications must occur through
              the QuikWrk platform.
            </li>
            <li>
              Job history is monitored through geolocation and transaction
              tracking for safety and accountability.
            </li>
          </ul>
        </Section>

        <Section title="5. Payments, Fees, and Cashbacks">
          <ul className="list-disc pl-5 space-y-2">
            <li>All payments are made via the in-app wallet.</li>
            <li>
              A 3%–4% platform fee applies to each transaction (e.g., ₦2,000
              attracts ₦60–₦80).
            </li>
            <li>The platform fee is non-refundable.</li>
            <li>Users earn ₦50 cashback per completed transaction.</li>
            <li>
              Vendors earn a ₦50 airtime voucher per payment received through
              the app.
            </li>
            <li>
              QuikWrk may adjust cashback or voucher values with prior notice.
            </li>
            <li>
              Failure to make agreed payment may result in temporary account ban
              and wallet lock.
            </li>
            <li>
              To initiate a quote, users must have wallet balance equal to or
              above the artisan’s quote.
            </li>
          </ul>
        </Section>

        <Section title="6. Artisan Agent Program">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Agents recruit and onboard new artisans/vendors.
            </li>
            <li>
              Agents earn ₦300 per verified sign-up and 1% of recruited artisans’
              monthly earnings.
            </li>
            <li>
              Rewards are credited to the agent’s QuikWrk wallet and subject to
              compliance verification.
            </li>
          </ul>
        </Section>

        <Section title="7. Safety and Verification">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Vendor and user safety is maintained through NIN verification and
              geolocation tracking.
            </li>
            <li>
              Fraudulent or suspicious vendors may be suspended or removed.
            </li>
            <li>
              Users and vendors are encouraged to report misconduct via in-app
              support.
            </li>
          </ul>
        </Section>

        <Section title="8. Dispute Resolution">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              QuikWrk mediates disputes between clients and artisans.
            </li>
            <li>
              Refunds, if approved, exclude platform fees.
            </li>
            <li>
              QuikWrk’s decision after investigation is final.
            </li>
          </ul>
        </Section>

        <Section title="9. Limitation of Liability">
          <p>
            QuikWrk acts as an intermediary platform and is not liable for the
            quality of services provided by vendors or damages arising from
            third-party interactions.
          </p>
        </Section>

        <Section title="10. Updates and Amendments">
          <p>
            QuikWrk may update these Terms and Conditions at any time. Users
            will be notified via email, app notifications, or social media.
            Continued use of the app indicates acceptance of updated terms.
          </p>
        </Section>

        </div>
    </Container>
  )
}

export default page