'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            href="/" 
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: November 15, 2024</p>

          <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to Barruu! By accessing or using our mobile application, website, and related services (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Barruu is a platform that enables users to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Create, edit, and share interactive .bipy documents</li>
                <li>Engage with a community of creators through social features</li>
                <li>Discover and explore content created by other users</li>
                <li>Collaborate and interact with multimedia content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts and Registration</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>3.1 Account Creation:</strong> You must create an account to access certain features of the Service. You agree to provide accurate, current, and complete information during registration.</p>
                <p><strong>3.2 Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                <p><strong>3.3 Age Requirement:</strong> You must be at least 13 years old to use Barruu. If you are under 18, you must have parental or guardian consent.</p>
                <p><strong>3.4 Account Termination:</strong> We reserve the right to suspend or terminate accounts that violate these Terms or engage in harmful behavior.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Content and Conduct</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">4.1 Your Content</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You retain ownership of all content you create and share on Barruu (.bipy documents, posts, comments, etc.). By sharing content, you grant us a worldwide, non-exclusive, royalty-free license to use, display, reproduce, and distribute your content solely for the purpose of operating and improving the Service.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">4.2 Prohibited Content</h3>
                  <p className="text-gray-600 mb-2">You agree not to create, upload, or share content that:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Infringes on intellectual property rights of others</li>
                    <li>Contains hate speech, harassment, or bullying</li>
                    <li>Promotes violence, illegal activities, or self-harm</li>
                    <li>Contains explicit sexual content or nudity</li>
                    <li>Includes malware, viruses, or harmful code</li>
                    <li>Violates privacy rights or contains personal information of others without consent</li>
                    <li>Is false, misleading, or fraudulent</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">4.3 Prohibited Conduct</h3>
                  <p className="text-gray-600 mb-2">You agree not to:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Impersonate others or provide false information</li>
                    <li>Spam, harass, or abuse other users</li>
                    <li>Attempt to gain unauthorized access to the Service or other users&apos; accounts</li>
                    <li>Use automated tools (bots, scrapers) without permission</li>
                    <li>Interfere with or disrupt the Service or servers</li>
                    <li>Reverse engineer, decompile, or modify the Service</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>5.1 Barruu&apos;s Rights:</strong> The Service, including its software, design, features, and branding, is owned by Barruu and protected by copyright, trademark, and other intellectual property laws.</p>
                <p><strong>5.2 License to Use:</strong> We grant you a limited, non-exclusive, non-transferable license to use the Service for personal, non-commercial purposes in accordance with these Terms.</p>
                <p><strong>5.3 Feedback:</strong> If you provide feedback or suggestions about the Service, we may use them without any obligation to you.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Privacy and Data Protection</h2>
              <p className="text-gray-600 leading-relaxed">
                Your use of the Service is also governed by our <Link href="/privacy" className="text-green-600 hover:text-green-700 underline">Privacy Policy</Link>, which explains how we collect, use, and protect your personal information. By using Barruu, you consent to our data practices as described in the Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Content Moderation and Removal</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to review, moderate, and remove any content that violates these Terms or is deemed inappropriate. We may also suspend or terminate accounts that repeatedly violate our policies. However, we are not obligated to monitor all content and are not responsible for user-generated content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Third-Party Services and Links</h2>
              <p className="text-gray-600 leading-relaxed">
                The Service may contain links to third-party websites or services. We are not responsible for the content, privacy practices, or terms of these third-party services. Your interactions with third-party services are solely between you and the third party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Disclaimers and Limitations of Liability</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>9.1 &quot;As Is&quot; Service:</strong> The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
                <p><strong>9.2 No Guarantee:</strong> We do not guarantee that the Service will be uninterrupted, secure, or error-free, or that defects will be corrected.</p>
                <p><strong>9.3 Limitation of Liability:</strong> To the maximum extent permitted by law, Barruu and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Service.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Indemnification</h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Barruu, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Service, your content, or your violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to the Service and Terms</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>11.1 Service Changes:</strong> We reserve the right to modify, suspend, or discontinue any part of the Service at any time without notice.</p>
                <p><strong>11.2 Terms Updates:</strong> We may update these Terms from time to time. Material changes will be communicated through the Service or via email. Your continued use of the Service after changes take effect constitutes acceptance of the updated Terms.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                You may terminate your account at any time through the app settings. We may terminate or suspend your account immediately, without prior notice, if you violate these Terms. Upon termination, your right to use the Service will cease, but provisions that by their nature should survive termination will remain in effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or your use of the Service shall be resolved through good faith negotiations. If negotiations fail, disputes may be resolved through binding arbitration or in the courts of appropriate jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Severability</h2>
              <p className="text-gray-600 leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> support@barruu.app<br />
                  <strong>Legal:</strong> legal@barruu.app<br />
                  <strong>Address:</strong> Barruu, BitPyrus
                </p>
              </div>
            </section>

            <section className="border-t pt-8">
              <p className="text-sm text-gray-500 italic">
                By using Barruu, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
