import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';

const faqs = [
  {
    question: 'What is the minimum order quantity?',
    answer: 'We have no minimum order quantity for most products. Whether you need 50 pieces or 50,000, we can accommodate your needs. Some specialty items may have minimum requirements which we\'ll discuss during consultation.',
  },
  {
    question: 'How long does production take?',
    answer: 'Standard production time is 10-14 business days after artwork approval. Rush orders can be completed in 5-7 business days for an additional fee. Complex custom orders may require additional time.',
  },
  {
    question: 'Can I get samples before placing a bulk order?',
    answer: 'Absolutely! We offer sample packs so you can see and feel the quality before committing to a larger order. Sample costs are credited toward your first bulk order.',
  },
  {
    question: 'What file formats do you accept for artwork?',
    answer: 'We accept AI, EPS, PDF, and high-resolution PNG files (300 DPI minimum). Our design team can also help convert or recreate your artwork if needed.',
  },
  {
    question: 'Do you offer design services?',
    answer: 'Yes! Our in-house design team can help create or refine your label designs. Basic design assistance is included with your order, and custom design packages are available.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, bank transfers, and offer NET 30 terms for qualified business accounts.',
  },
  {
    question: 'Can you match my brand colors exactly?',
    answer: 'Yes, we offer Pantone color matching to ensure your labels perfectly match your brand guidelines. We\'ll provide color proofs for approval before production.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'We ship worldwide! International shipping costs and delivery times vary by destination. We work with reliable carriers to ensure safe delivery.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="font-medium text-foreground pr-4">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="pb-6"
        >
          <p className="text-muted-foreground">{answer}</p>
        </motion.div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <PageLayout
      badge="Support"
      title="Frequently Asked Questions"
      subtitle="Find answers to common questions about our products, ordering, and services."
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border rounded-xl px-6">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help.
            </p>
            <a 
              href="mailto:hello@aurex.com" 
              className="text-primary hover:underline font-medium"
            >
              Contact our support team
            </a>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
