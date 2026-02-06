import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/layout/PageLayout';

const openings = [
  {
    title: 'Senior Production Manager',
    department: 'Operations',
    location: 'New York, NY',
    type: 'Full-time',
  },
  {
    title: 'Graphic Designer',
    department: 'Creative',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Sales Representative',
    department: 'Sales',
    location: 'Los Angeles, CA',
    type: 'Full-time',
  },
  {
    title: 'Quality Control Specialist',
    department: 'Operations',
    location: 'New York, NY',
    type: 'Full-time',
  },
];

const benefits = [
  'Competitive salary & bonuses',
  'Health, dental & vision insurance',
  'Flexible work arrangements',
  '401(k) with company match',
  'Professional development budget',
  'Generous PTO policy',
];

export default function CareersPage() {
  return (
    <PageLayout
      badge="Company"
      title="Join Our Team"
      subtitle="Build your career with a company that values craftsmanship, creativity, and collaboration."
    >
      <div className="container mx-auto px-6">
        {/* Culture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-muted-foreground">
            At Aurex, we believe great products come from great teams. We foster an environment 
            where creativity thrives, ideas are valued, and every team member contributes to our 
            success.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-serif font-bold mb-6 text-center">
            Benefits & <span className="text-gradient-gold">Perks</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {benefits.map((benefit) => (
              <span key={benefit} className="px-4 py-2 bg-card border border-border rounded-full text-sm">
                {benefit}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">
            Open <span className="text-gradient-gold">Positions</span>
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {openings.map((job) => (
              <div 
                key={job.title} 
                className="bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 card-glow"
              >
                <div>
                  <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Briefcase size={14} />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {job.type}
                    </span>
                  </div>
                </div>
                <Button variant="outline" className="group shrink-0">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
