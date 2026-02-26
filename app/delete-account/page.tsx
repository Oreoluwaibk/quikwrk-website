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
    <Container active='Delete Account'>
  <div className='px-4! md:px-20! py-10!'>
    <h1 className='text-3xl font-bold mb-7'>
      Delete Your QuikWrk Account
    </h1>

    <Section title="1. How to Request Account Deletion">
      <ol className="list-decimal pl-5 space-y-2">
        <li>Open the QuikWrk mobile app.</li>
        <li>Go to Profile → Settings.</li>
        <li>Select “Delete Account”.</li>
        <li>Confirm your deletion request.</li>
      </ol>

      <p className="mt-4">
        If you are unable to access the app, you may request deletion by emailing{" "}
        <a
          href="mailto:quikwrk25@gmail.com"
          className="text-blue-600 font-medium hover:underline"
        >
          quikwrk25@gmail.com
        </a>{" "}
        using your registered email address.
      </p>
    </Section>

    <Section title="2. What Data Will Be Deleted">
      <ul className="list-disc pl-5 space-y-2">
        <li>Profile information (Full Name, Email Address, Phone Number, Address).</li>
        <li>NIN verification data (where legally permissible).</li>
        <li>Profile photos and uploaded service images.</li>
        <li>Chat history and in-app messages.</li>
        <li>Location history associated with your account.</li>
        <li>Wallet balance and account records (after settlement of outstanding transactions).</li>
      </ul>
    </Section>

    <Section title="3. Data That May Be Retained">
      <p>
        Certain information may be retained for legal, regulatory, fraud prevention,
        and financial compliance purposes.
      </p>

      <ul className="list-disc pl-5 space-y-2 mt-2">
        <li>
          Transaction records and financial logs (retained for up to 6 years
          to comply with financial regulations).
        </li>
        <li>
          Security logs and fraud monitoring records (retained as required
          for dispute resolution and abuse prevention).
        </li>
      </ul>
    </Section>

    <Section title="4. Processing Time">
      <p>
        Account deletion requests are processed within 7–14 business days.
        Once completed, your account will be permanently deactivated and
        personal data will be removed from active systems.
      </p>
    </Section>

    <Section title="5. Important Information">
      <ul className="list-disc pl-5 space-y-2">
        <li>Account deletion is permanent and cannot be reversed.</li>
        <li>You must withdraw any remaining wallet balance before deletion.</li>
        <li>Deletion may limit our ability to provide future support for past transactions.</li>
      </ul>
    </Section>

    <Section title="6. Contact">
      <p>
        For questions regarding account deletion or your personal data,
        contact us at{" "}
        <a
          href="mailto:quikwrk25@gmail.com"
          className="text-blue-600 font-medium hover:underline"
        >
          quikwrk25@gmail.com
        </a>.
      </p>
    </Section>

  </div>
</Container>

  )
}

export default page