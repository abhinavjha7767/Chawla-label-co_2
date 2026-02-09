import { motion } from "framer-motion";
import { Users, Award, Globe, Heart } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

const stats = [
  { value: "0", label: "Years of Experience" },
  { value: "0", label: "Clients Served" },
  { value: "0", label: "Labels Produced" },
  { value: "0", label: "Support Available" },
];

const values = [
  {
    icon: Award,
    title: "Unmatched Quality",
    description:
      "Accurate and clear barcode labels for seamless inventory management and point-of-sale operations.",
  },
  {
    icon: Heart,
    title: "Complete Customisation",
    description:
      "From design to material, we offer bespoke solutions tailored to your specific needs.",
  },
  {
    icon: Globe,
    title: "On-Time Delivery",
    description:
      "We respect your deadlines and ensure your orders are delivered promptly, every time.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Our friendly team is always ready to assist you, from design consultation to after-sales service.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout
      badge="Company"
      title="About AS PRINTERS"
      subtitle="A Unit of Chawla Label Company - The House of LABELS AND TAGS"
    >
      <div className="container mx-auto px-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <h2 className="text-3xl font-serif font-bold mb-6">
            All about the <span className="text-gradient-gold">Brand</span>
          </h2>
          <p className="text-muted-foreground mb-4">
            AS PRINTERS is a leading name in the garment and textile industry,
            specializing in high-quality tags and labels. For years, we have
            served businesses across various sectors, providing custom solutions
            that meet their unique branding needs.
          </p>
          <p className="text-muted-foreground">
            Our commitment to excellence, state-of-the-art technology, and a
            dedicated team of professionals ensures that every product we
            deliver is of the highest standard. We believe in building lasting
            partnerships with our clients by offering reliable, efficient, and
            creative printing services.
          </p>
        </motion.div>

        {/* Our Products Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent border border-border"
        >
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">
            Our <span className="text-gradient-gold">Core Products</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Product Labels",
                desc: "High-quality labels for all garment types.",
              },
              {
                title: "Garment Tags",
                desc: "Custom hang tags designed to enhance identity.",
              },
              {
                title: "Barcode Labels",
                desc: "Accurate labels for inventory management.",
              },
            ].map((product) => (
              <div key={product.title} className="text-center p-6">
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-muted-foreground">{product.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">
            Why <span className="text-gradient-gold">Choose</span> Us?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card border border-border rounded-xl p-6 card-glow text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
