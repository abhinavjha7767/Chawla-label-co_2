import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import {
  Palette,
  Settings,
  Truck,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: Palette,
      title: t.process.steps[1].title,
      description: t.process.steps[1].desc,
    },
    {
      number: "02",
      icon: Settings,
      title: t.process.steps[2].title,
      description: t.process.steps[2].desc,
    },
    {
      number: "03",
      icon: Truck,
      title: t.process.steps[3].title,
      description: t.process.steps[3].desc,
    },
    {
      number: "04",
      icon: CheckCircle,
      title: t.process.steps[4].title,
      description: t.process.steps[4].desc,
    },
  ];

  return (
    <section id="process" className="py-24 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            {t.process.tagline}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
            {t.process.title_start}{" "}
            <span className="text-gradient-gold">
              {t.process.title_highlight}
            </span>
            {t.process.title_end}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.process.description}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-card border border-border rounded-xl p-6 h-full relative z-10">
                  {/* Step number - Updated to black per user request */}
                  <div className="text-5xl font-bold text-black dark:text-white absolute top-4 right-4 opacity-50">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 w-8 h-8 bg-background border border-border rounded-full items-center justify-center -translate-y-1/2 z-20 translate-x-1/2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
