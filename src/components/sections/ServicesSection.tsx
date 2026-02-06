import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Palette,
  Lightbulb,
  PackageOpen,
  Truck,
  Database,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

const icons = {
  design: Palette,
  consulting: Lightbulb,
  prototyping: PackageOpen,
  logistics: Truck,
  inventory: Database,
  brand: ShieldCheck,
};

export default function ServicesSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Map translations to services array
  const services = [
    {
      id: "design",
      icon: icons.design,
      title: t.services.items.design.title,
      description: t.services.items.design.desc,
    },
    {
      id: "consulting",
      icon: icons.consulting,
      title: t.services.items.consulting.title,
      description: t.services.items.consulting.desc,
    },
    {
      id: "prototyping",
      icon: icons.prototyping,
      title: t.services.items.prototyping.title,
      description: t.services.items.prototyping.desc,
    },
    {
      id: "logistics",
      icon: icons.logistics,
      title: t.services.items.logistics.title,
      description: t.services.items.logistics.desc,
    },
    {
      id: "inventory",
      icon: icons.inventory,
      title: t.services.items.inventory.title,
      description: t.services.items.inventory.desc,
    },
    {
      id: "brand",
      icon: icons.brand,
      title: t.services.items.brand.title,
      description: t.services.items.brand.desc,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="services"
      className="py-24 bg-secondary/30 relative overflow-hidden"
      ref={ref}
    >
      {/* Background blobs */}
      <motion.div
        style={{ y }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 opacity-60"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4"
          >
            {t.services.tagline}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            {t.services.title_start}{" "}
            <span className="text-gradient-gold">
              {t.services.title_highlight}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            {t.services.description}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card border border-border/50 rounded-xl p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button size="lg" className="rounded-full px-8">
            {t.services.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
