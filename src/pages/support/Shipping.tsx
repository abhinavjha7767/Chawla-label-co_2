import { motion } from 'framer-motion';
import { Truck, Clock, Globe, Package } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';

const shippingOptions = [
  {
    name: 'Standard Shipping',
    time: '7-10 business days',
    description: 'Best for non-urgent orders. Tracking included.',
  },
  {
    name: 'Express Shipping',
    time: '3-5 business days',
    description: 'Faster delivery with priority handling.',
  },
  {
    name: 'Rush Delivery',
    time: '1-2 business days',
    description: 'For urgent orders. Premium carrier service.',
  },
];

const regions = [
  { region: 'United States', standard: '5-7 days', express: '2-3 days' },
  { region: 'Canada', standard: '7-10 days', express: '3-5 days' },
  { region: 'Europe', standard: '10-14 days', express: '5-7 days' },
  { region: 'Asia Pacific', standard: '12-18 days', express: '6-8 days' },
  { region: 'Rest of World', standard: '14-21 days', express: '7-10 days' },
];

export default function ShippingPage() {
  return (
    <PageLayout
      badge="Support"
      title="Shipping Information"
      subtitle="We ship worldwide with reliable carriers and full tracking on every order."
    >
      <div className="container mx-auto px-6">
        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Truck, title: 'Free Shipping', desc: 'On orders over $500' },
            { icon: Clock, title: 'Fast Processing', desc: 'Ships within 24 hours' },
            { icon: Globe, title: 'Global Delivery', desc: 'To 120+ countries' },
            { icon: Package, title: 'Full Tracking', desc: 'On every order' },
          ].map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-xl p-6 text-center card-glow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Shipping Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-serif font-bold mb-6 text-center">
            Shipping <span className="text-gradient-gold">Options</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {shippingOptions.map((option) => (
              <div key={option.name} className="bg-card border border-border rounded-xl p-6 card-glow">
                <h3 className="font-semibold mb-2">{option.name}</h3>
                <p className="text-primary font-medium mb-2">{option.time}</p>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Delivery Times */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-serif font-bold mb-6 text-center">
            Estimated Delivery <span className="text-gradient-gold">Times</span>
          </h2>
          <div className="bg-card border border-border rounded-xl overflow-hidden max-w-3xl mx-auto">
            <table className="w-full">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Region</th>
                  <th className="px-6 py-4 text-left font-semibold">Standard</th>
                  <th className="px-6 py-4 text-left font-semibold">Express</th>
                </tr>
              </thead>
              <tbody>
                {regions.map((row, index) => (
                  <tr key={row.region} className={index % 2 === 0 ? '' : 'bg-secondary/50'}>
                    <td className="px-6 py-4">{row.region}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.standard}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.express}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
