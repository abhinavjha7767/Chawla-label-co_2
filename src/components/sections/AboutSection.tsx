import { Suspense } from "react";
import { motion } from "framer-motion";
import FloatingLabels from "@/components/3d/FloatingLabels";
import { useLanguage } from "@/components/language-provider";

export default function AboutSection() {
  const { t } = useLanguage();

  const features = [
    {
      title: t.about.grid.quality.title,
      description: t.about.grid.quality.desc,
    },
    { title: t.about.grid.custom.title, description: t.about.grid.custom.desc },
    {
      title: t.about.grid.delivery.title,
      description: t.about.grid.delivery.desc,
    },
    {
      title: t.about.grid.support.title,
      description: t.about.grid.support.desc,
    },
  ];

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background elements */}
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Floating Labels */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] order-2 lg:order-1"
          >
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >
              <FloatingLabels />
            </Suspense>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              {t.about.tagline}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              {t.about.title_start}{" "}
              <span className="text-gradient-gold">
                {t.about.title_highlight}
              </span>{" "}
              {t.about.title_end}
            </h2>
            <div className="space-y-6 text-muted-foreground mb-8">
              <p>{t.about.description_1}</p>
              <p>{t.about.description_2}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 rounded-lg bg-secondary/50 border border-border"
                >
                  <h3 className="font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
