import React from 'react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Header section */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
        </div>
      </div>

      {/* Content section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Road to GTV ("we," "our," or "us"). By accessing and using our services, you agree to these Terms of Service.
            </p>
            <p>
              Our services provide educational content and guidance related to the UK Global Talent Visa application process. We are not a law firm and do not provide legal advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
            <p className="mb-4">
              Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Educational content about the Global Talent Visa application process</li>
              <li>Document templates and guidelines</li>
              <li>Group and individual coaching sessions</li>
              <li>Community forum access</li>
              <li>Email support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimers</h2>
            <div className="space-y-4">
              <p>
                We do not guarantee any specific outcome for your visa application. All visa decisions are made independently by Tech Nation and the UK Home Office.
              </p>
              <p>
                Our services are educational in nature and should not be considered legal advice. We recommend consulting with qualified immigration lawyers for legal matters.
              </p>
              <p>
                Success stories and testimonials shared on our platform represent individual experiences and do not guarantee similar outcomes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Payment and Refunds</h2>
            <div className="space-y-4">
              <p>
                All payments are processed securely through established payment providers. Prices are listed in GBP and include applicable taxes.
              </p>
              <p>
                Refund requests must be submitted within 14 days of purchase if no services have been accessed. After accessing any part of the premium content or receiving consultation, refunds are provided at our discretion.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              All content provided through our services, including but not limited to text, graphics, logos, templates, and video content, is protected by copyright and other intellectual property rights.
            </p>
            <p>
              Materials provided are for personal use only and may not be shared, resold, or distributed without explicit written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. User Conduct</h2>
            <p className="mb-4">
              Users agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate information during registration</li>
              <li>Maintain confidentiality of account credentials</li>
              <li>Not share access to premium content</li>
              <li>Engage respectfully with community members</li>
              <li>Use templates and materials as intended</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Privacy</h2>
            <p>
              Your use of our services is also governed by our Privacy Policy. Please review it to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Modifications</h2>
            <p>
              We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or through our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Contact</h2>
            <p>
              For questions about these terms, please contact us through our contact page or email at support@roadtogtv.com
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

export default TermsPage;