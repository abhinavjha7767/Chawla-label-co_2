import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';

export default function PrivacyPage() {
  return (
    <PageLayout
      badge="Legal"
      title="Privacy Policy"
      subtitle="Last updated: January 2024"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto prose prose-invert"
        >
          <div className="bg-card border border-border rounded-xl p-8 space-y-8">
            <section>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Information We Collect</h2>
              <p className="text-muted-foreground">
                We collect information you provide directly to us, such as when you create an account, 
                place an order, contact us, or otherwise communicate with us. This information may include 
                your name, email address, phone number, shipping address, and payment information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Send you order confirmations and updates</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Improve our products and services</li>
                <li>Send promotional communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information. 
                All payment transactions are encrypted using SSL technology, and we never store 
                complete credit card information on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@aurex.com" className="text-primary hover:underline">
                  privacy@aurex.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
