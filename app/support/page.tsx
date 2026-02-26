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
const Page = () => {
  return (
    <Container active="Support">
  <div className="px-4! md:px-20! py-10!">
    <h1 className="text-3xl font-bold mb-7">
      QuikWrk Support
    </h1>

    <Section title="1. Contact Support">
      <p>
        If you need assistance using QuikWrk, experiencing technical issues,
        or have safety concerns, please contact us through any of the options below:
      </p>

      <ul className="list-disc pl-5 space-y-2 mt-3">
        <li>
          Email:{" "}
          <a
            href="mailto:quikwrk25@gmail.com"
            className="text-blue-600 font-medium hover:underline"
          >
            quikwrk25@gmail.com
          </a>
        </li>
        <li>In-app support chat (available inside your account)</li>
      </ul>
    </Section>

    <Section title="2. Account Deletion">
      <p>
        Users may request deletion of their QuikWrk account at any time.
      </p>

      <ol className="list-decimal pl-5 space-y-2 mt-3">
        <li>Open the QuikWrk mobile app.</li>
        <li>Go to Profile → Settings.</li>
        <li>Select “Delete Account”.</li>
        <li>Confirm your request.</li>
      </ol>

      <p className="mt-4">
        Alternatively, email us at{" "}
        <a
          href="mailto:quikwrk25@gmail.com"
          className="text-blue-600 font-medium hover:underline"
        >
          quikwrk25@gmail.com
        </a>{" "}
        using your registered email address.
      </p>

      <p className="mt-4">
        For full details about what data is deleted and what may be retained,
        please visit our{" "}
        <a
          href="/delete-account"
          className="text-blue-600 font-medium hover:underline"
        >
          Account Deletion Policy
        </a>.
      </p>
    </Section>

    <Section title="3. Safety & Reporting">
      <p>
        If you experience suspicious behavior, fraud, or safety issues,
        report immediately through the in-app reporting feature or contact us via email.
      </p>
    </Section>

    <Section title="4. Frequently Asked Questions">
      <ul className="list-disc pl-5 space-y-2">
        <li>Ensure your app is updated to the latest version.</li>
        <li>Enable location permissions for better job matching.</li>
        <li>Enable notifications to receive job updates.</li>
      </ul>
    </Section>

    <Section title="5. Privacy">
      <p>
        To learn how we collect, use, and protect your data, please read our{" "}
        <a
          href="/privacy-policy"
          className="text-blue-600 font-medium hover:underline"
        >
          Privacy Policy
        </a>.
      </p>
    </Section>

    <p className="mt-12 text-sm text-gray-500">
      © {new Date().getFullYear()} QuikWrk. All rights reserved.
    </p>
  </div>
</Container>

  )
}

export default Page