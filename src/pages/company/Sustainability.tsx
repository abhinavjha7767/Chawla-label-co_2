import { motion } from 'framer-motion';
import { Leaf, Recycle, Droplets, Wind } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';

const initiatives = [
  {
    icon: Recycle,
    title: 'Recycled Materials',
    description: 'Over 60% of our products now use recycled or sustainably sourced materials.',
  },
  {
    icon: Droplets,
    title: 'Water Conservation',
    description: 'Our dyeing processes use 40% less water than traditional methods.',
  },
  {
    icon: Wind,
    title: 'Carbon Neutral',
    description: 'We offset 100% of our shipping emissions through verified carbon credits.',
  },
  {
    icon: Leaf,
    title: 'Eco Packaging',
    description: 'All packaging is plastic-free and made from recycled materials.',
  },
];

const certifications = [
  'OEKO-TEX Standard 100',
  'Global Recycled Standard (GRS)',
  'Forest Stewardship Council (FSC)',
  'ISO 14001 Environmental Management',
];

export default function SustainabilityPage() {
  return (
    <PageLayout
      badge="Company"
      title="Sustainability"
      subtitle="Our commitment to protecting the planet while delivering exceptional quality products."
    >
      <div className="container mx-auto px-6">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-muted-foreground">
            At Aurex, sustainability isn't just a buzzword—it's woven into every aspect of our 
            operations. From sourcing materials to delivering finished products, we're constantly 
            finding ways to reduce our environmental footprint.
          </p>
        </motion.div>

        {/* Initiatives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">
            Our <span className="text-gradient-gold">Initiatives</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-6 card-glow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl font-serif font-bold mb-6">
            Certifications & <span className="text-gradient-gold">Standards</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <span key={cert} className="px-4 py-2 bg-secondary rounded-full text-sm text-foreground">
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
