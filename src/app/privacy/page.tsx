'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
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

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: November 15, 2024</p>

          <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to Barruu (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1 Information You Provide</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Account information (username, email address, password)</li>
                    <li>Profile information (display name, bio, profile picture)</li>
                    <li>Content you create (.bipy documents, posts, comments)</li>
                    <li>Communications with us (support requests, feedback)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2.2 Automatically Collected Information</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Device information (device type, operating system, unique device identifiers)</li>
                    <li>Usage data (features used, actions taken, time spent)</li>
                    <li>Log data (IP address, browser type, access times)</li>
                    <li>Analytics data (app performance, crash reports)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>To provide, maintain, and improve our services</li>
                <li>To personalize your experience and content recommendations</li>
                <li>To enable social features and facilitate community interaction</li>
                <li>To communicate with you about updates, security alerts, and support</li>
                <li>To analyze usage patterns and optimize app performance</li>
                <li>To detect, prevent, and address technical issues and security threats</li>
                <li>To comply with legal obligations and enforce our terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <div className="space-y-4 text-gray-600">
                <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Public Content:</strong> Content you choose to share publicly (posts, .bipy documents) is visible to other users</li>
                  <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our services (hosting, analytics, support)</li>
                  <li><strong>Legal Compliance:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>With Your Consent:</strong> When you explicitly agree to share your information</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. You may request deletion of your account and associated data at any time through the app settings or by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights and Choices</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Access and Update:</strong> You can access and update your account information through app settings</li>
                <li><strong>Delete Content:</strong> You can delete your .bipy documents and posts at any time</li>
                <li><strong>Account Deletion:</strong> You can request deletion of your account and all associated data</li>
                <li><strong>Opt-Out:</strong> You can opt out of promotional communications while still receiving service-related messages</li>
                <li><strong>Data Portability:</strong> You can request a copy of your data in a portable format</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children&apos;s Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Barruu is not intended for users under the age of 13. We do not knowingly collect personal information from children under 13. If we discover that we have collected information from a child under 13, we will delete it immediately. If you believe we have collected information from a child under 13, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. International Data Transfers</h2>
              <p className="text-gray-600 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. Your continued use of Barruu after such changes constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@barruu.app<br />
                  <strong>Address:</strong> Barruu, BitPyrus
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
