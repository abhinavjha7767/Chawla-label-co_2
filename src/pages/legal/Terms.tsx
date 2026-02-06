import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';

export default function TermsPage() {
  return (
    <PageLayout
      badge="Legal"
      title="Terms of Service"
      subtitle="Last updated: January 2024"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border rounded-xl p-8 space-y-8">
            <section>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using Aurex's services, you agree to be bound by these Terms of Service. 
                If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Orders and Payments</h2>
              <p className="text-muted-foreground">
                All orders are subject to acceptance and availability. Prices are subject to change 
                without notice. Payment is due at the time of order unless otherwise agreed upon in writing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground">
                Customers are responsible for ensuring they have the rights to use any logos, 
                trademarks, or designs submitted for production. Aurex is not liable for any 
                intellectual property disputes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Aurex shall not be liable for any indirect, incidental, special, or consequential 
                damages arising out of or related to the use of our products or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground">
                For questions about these Terms, contact us at{' '}
                <a href="mailto:legal@aurex.com" className="text-primary hover:underline">
                  legal@aurex.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
