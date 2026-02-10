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
    <Container active='Privacy Policy'>
        <div className='px-4! md:px-20! py-10!'>
            <h1 className='text-3xl font-bold mb-7'>Privacy Policy</h1>


        <Section title="1. Information We Collect">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Personal details (Name, Email, Phone number, Address, NIN).
            </li>
            <li>
              Geolocation data (to match clients with nearby artisans and ensure safety).
            </li>
            <li>
              Transaction and chat history (for accountability and service improvement).
            </li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Data">
          <ul className="list-disc pl-5 space-y-2">
            <li>To verify identities and prevent fraud.</li>
            <li>To process payments, cashback, and airtime rewards.</li>
            <li>To ensure safe connections through geolocation tracking.</li>
            <li>To personalize user experience and improve app performance.</li>
          </ul>
        </Section>

        <Section title="3. Data Protection">
          <ul className="list-disc pl-5 space-y-2">
            <li>All user data is encrypted and stored securely.</li>
            <li>
              QuikWrk will never sell or share personal data with third parties
              without user consent.
            </li>
            <li>
              In case of security breaches, users will be notified promptly and
              corrective actions will be taken.
            </li>
          </ul>
        </Section>

        <Section title="4. User Safety">
          <ul className="list-disc pl-5 space-y-2">
            <li>Vendors and clients are verified through NIN validation.</li>
            <li>
              Each job location and transaction is geo-tracked for transparency.
            </li>
            <li>
              In-app chat and wallet transactions are monitored to detect suspicious activities.
            </li>
          </ul>
        </Section>

        <Section title="5. Cookies and Analytics">
          <p>
            QuikWrk uses cookies to improve app functionality and analyze
            performance. Users can manage cookie preferences in their device settings.
          </p>
        </Section>

        <Section title="6. Your Rights">
          <p>Users can:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Request account deletion or data export.</li>
            <li>Update or correct personal information.</li>
            <li>Withdraw consent for marketing communications.</li>
          </ul>
        </Section>

        <Section title="7. Contact">
          <p>
            For data or safety concerns, contact us at{" "}
            <a
              href="mailto:quikwrk25@gmail.com"
              className="text-blue-600 font-medium hover:underline"
            >
              quikwrk25@gmail.com
            </a>{" "}
            or through the in-app support system.
          </p>
        </Section>


        </div>
    </Container>
  )
}

export default page