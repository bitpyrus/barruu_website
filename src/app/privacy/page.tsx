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
          <p className="text-gray-600 mb-8">Effective Date: October 25, 2025</p>

          <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
            <p className="text-gray-600 leading-relaxed">
              Barruu (&quot;we,&quot; &quot;our,&quot; or &quot;the App&quot;) respects your privacy. Your data belongs to you, and we do not collect, store, or share any personal information.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Document Storage</h2>
              <p className="text-gray-600 leading-relaxed">
                All notes, documents, and files you create in Barruu are stored locally on your device. Nothing is uploaded to our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Data Collection</h2>
              <p className="text-gray-600 leading-relaxed">
                Barruu does not collect any personal information. We do not track your activity, require accounts, or store usage data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Sharing</h2>
              <p className="text-gray-600 leading-relaxed">
                Documents remain on your device unless you choose to export or share them yourself. Barruu does not share your files with anyone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Children&apos;s Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Barruu is not intended for children under 13. Since we do not collect any data, children&apos;s privacy is inherently protected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Security</h2>
              <p className="text-gray-600 leading-relaxed">
                Your documents are as secure as your device. We recommend using standard device security measures (passcode, fingerprint, encryption).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                Since we do not collect any data, this policy is unlikely to change. Any updates will be posted in the app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For questions or concerns, you can contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> bitpyrus@gmail.com
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
