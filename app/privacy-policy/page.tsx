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
        <li>Personal details (Full Name, Email Address, Phone Number, Address, NIN for identity verification).</li>
        <li>Profile photos and service images uploaded through the app (via camera or gallery access).</li>
        <li>Geolocation data (to match clients with nearby artisans and improve safety and transparency).</li>
        <li>Transaction history, wallet activity, and chat messages within the app.</li>
        <li>Device information (device type, operating system, app version, push notification token).</li>
      </ul>
    </Section>

    <Section title="2. Camera and Media Access">
      <p>
        QuikWrk may request access to your device camera and media library to allow users
        to upload profile pictures, service images, and job-related photos. 
        Images are only used to provide platform functionality and are stored securely.
        We do not access your camera or media without your permission.
      </p>
    </Section>

    <Section title="3. How We Use Your Data">
      <ul className="list-disc pl-5 space-y-2">
        <li>To verify identities and prevent fraud.</li>
        <li>To process payments, cashback, wallet transactions, and airtime rewards.</li>
        <li>To match users based on location and improve service efficiency.</li>
        <li>To send push notifications related to jobs, transactions, and account activity.</li>
        <li>To monitor and prevent suspicious or fraudulent activity.</li>
        <li>To improve app performance and personalize user experience.</li>
      </ul>
    </Section>

    <Section title="4. Location Data">
      <p>
        We collect precise or approximate location data to connect clients with nearby vendors
        and improve safety. Location tracking may occur during active job sessions.
        Users can disable location permissions in their device settings, but this may affect functionality.
      </p>
    </Section>

    <Section title="5. Data Protection and Security">
      <ul className="list-disc pl-5 space-y-2">
        <li>All user data is encrypted in transit and stored securely.</li>
        <li>We implement technical and organizational safeguards to protect personal data.</li>
        <li>We do not sell personal data to third parties.</li>
        <li>In case of a data breach, affected users will be notified promptly.</li>
      </ul>
    </Section>

    <Section title="6. Third-Party Services">
      <p>
        QuikWrk may use trusted third-party services to operate effectively, including
        payment processors, cloud storage providers, analytics tools, and push notification services.
        These providers only process data necessary to perform their services and are obligated
        to protect your information.
      </p>
    </Section>

    <Section title="7. Data Retention">
      <p>
        We retain user data only as long as necessary to provide services, comply with legal obligations,
        resolve disputes, and enforce agreements. Users may request deletion of their account and associated data.
      </p>
    </Section>

    <Section title="8. Your Rights">
      <ul className="list-disc pl-5 space-y-2">
        <li>Request account deletion or data export.</li>
        <li>Update or correct personal information.</li>
        <li>Withdraw consent for marketing communications.</li>
        <li>Disable permissions such as camera or location via device settings.</li>
      </ul>
    </Section>

    <Section title="9. Children’s Privacy">
      <p>
        QuikWrk is not intended for individuals under the age of 18.
        We do not knowingly collect personal information from minors.
      </p>
    </Section>

    <Section title="10. Changes to This Policy">
      <p>
        We may update this Privacy Policy periodically. Users will be notified of significant changes
        through the app or email.
      </p>
    </Section>

    <Section title="11. Contact">
      <p>
        For data, privacy, or safety concerns, contact us at{" "}
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