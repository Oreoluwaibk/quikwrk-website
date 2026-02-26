import Container from '@/component/Container';
import React from 'react'

const Page = () => {
  return (
    <Container active="404">
      <div className="px-4! md:px-20! py-20! text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          404
        </h1>

        <h2 className="text-2xl font-semibold mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          The page you are looking for doesn’t exist or may have been moved.
          If you’re trying to access support, privacy policy, or delete your account,
          please use the links below.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/"
            className="px-6 py-3 bg-black text-white rounded-lg hover:opacity-90 transition"
          >
            Go Home
          </a>

          <a
            href="/support"
            className="px-6 py-3 border border-black rounded-lg hover:bg-gray-100 transition"
          >
            Support
          </a>

          <a
            href="/privacy-policy"
            className="px-6 py-3 border border-black rounded-lg hover:bg-gray-100 transition"
          >
            Privacy Policy
          </a>
        </div>

        <p className="mt-12 text-sm text-gray-400">
          © {new Date().getFullYear()} QuikWrk. All rights reserved.
        </p>
      </div>
    </Container>
  );
}

export default Page