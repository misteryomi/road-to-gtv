import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Header section */}
      <div className=" py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
        </div>
      </div>

      {/* Content section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              Road to GTV ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">2.1 Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and email address</li>
                <li>Billing information</li>
                <li>Professional background details</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-white">2.2 Usage Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Login and activity timestamps</li>
                <li>Course progress and completion data</li>
                <li>Community participation records</li>
                <li>Support interaction history</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To process your payments</li>
              <li>To send administrative information</li>
              <li>To provide customer support</li>
              <li>To improve our services</li>
              <li>To send marketing communications (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers (e.g., payment processors, email services)</li>
              <li>Professional advisers (e.g., lawyers, accountants)</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of transmitted data</li>
              <li>Secure storage systems</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
            <p className="mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for marketing</li>
              <li>Request data portability</li>
              <li>Lodge a complaint with supervisory authorities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Cookies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings.
            </p>
            <p>
              Essential cookies cannot be disabled as they are necessary for the website to function.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under 18 years of age, and we do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. International Transfers</h2>
            <p>
              Your information may be transferred and processed in countries outside your residence. We ensure appropriate safeguards are in place for such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
            <p>
              For privacy-related inquiries, please contact us at privacy@roadtogtv.com
            </p>
          </section>

          <section className="pt-8">
            <p className="text-sm text-gray-400">
              Last updated: January 2024
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;