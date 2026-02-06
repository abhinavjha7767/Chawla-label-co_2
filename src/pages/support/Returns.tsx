import { motion } from 'framer-motion';
import { RotateCcw, Shield, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/layout/PageLayout';

const policies = [
  {
    icon: Clock,
    title: '30-Day Returns',
    description: 'Return unused items within 30 days of delivery for a full refund.',
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'If your order doesn\'t meet our quality standards, we\'ll replace it free of charge.',
  },
  {
    icon: RotateCcw,
    title: 'Easy Process',
    description: 'Simple returns process with prepaid shipping labels for eligible returns.',
  },
  {
    icon: MessageCircle,
    title: 'Dedicated Support',
    description: 'Our team is here to help resolve any issues quickly and professionally.',
  },
];

const steps = [
  { step: '1', title: 'Contact Us', description: 'Email or call our support team with your order number.' },
  { step: '2', title: 'Get Approval', description: 'We\'ll review your request and issue a return authorization.' },
  { step: '3', title: 'Ship Items', description: 'Use the prepaid label to send back the items.' },
  { step: '4', title: 'Receive Refund', description: 'Refund processed within 5-7 business days of receipt.' },
];

export default function ReturnsPage() {
  return (
    <PageLayout
      badge="Support"
      title="Returns & Refunds"
      subtitle="We stand behind our products with a hassle-free return policy."
    >
      <div className="container mx-auto px-6">
        {/* Policies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {policies.map((policy) => (
            <div key={policy.title} className="bg-card border border-border rounded-xl p-6 card-glow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <policy.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{policy.title}</h3>
              <p className="text-sm text-muted-foreground">{policy.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-serif font-bold mb-8 text-center">
            Return <span className="text-gradient-gold">Process</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">{item.step}</span>
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Exceptions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-xl font-serif font-bold mb-4">
              Important <span className="text-gradient-gold">Notes</span>
            </h2>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li>• Custom orders with personalized text/logos are non-refundable.</li>
              <li>• Items must be in original, unused condition with packaging.</li>
              <li>• Bulk orders over 1,000 units may have restocking fees.</li>
              <li>• Defective items are always replaced at no cost.</li>
            </ul>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Start a Return
            </Button>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
