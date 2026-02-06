import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";

import careLabelImg from "@/assets/product-care-label.webp";

const features = [
  "ASTM & ISO compliant symbols",
  "Multi-language instructions",
  "Wash-proof and fade-resistant",
  "Soft satin or cotton material",
  "Custom size options",
  "Heat-transfer available",
];

const types = [
  { name: "Printed Labels", description: "Cost-effective, detailed text" },
  { name: "Woven Care Labels", description: "Premium feel, durable" },
  { name: "Heat Transfer", description: "Tag-free comfort" },
  { name: "Combination Labels", description: "Care + brand in one" },
];

export default function ProductLabelsPage() {
  return (
    <PageLayout
      badge="Products"
      title="Product Labels"
      subtitle="High-quality, durable labels for products of all shapes and sizes (woven labels, printed labels, etc). Perfect for branding and information display."
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Size Visual from Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md bg-gradient-to-r from-blue-900 via-black to-blue-900 p-8 rounded-[2rem] flex justify-between items-center mb-12 shadow-2xl overflow-hidden"
          >
            {["S", "M", "L", "XL"].map((size) => (
              <span
                key={size}
                className="text-white text-3xl md:text-4xl font-bold"
              >
                {size}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground">
              High-quality, durable labels for products of all shapes and sizes
              (woven labels, printed labels, etc). Perfect for branding and
              information display.
            </p>

            <div className="flex gap-4 justify-center">
              <Link to="/#contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
                >
                  Get a Quote
                </Button>
              </Link>
              <Link to="/">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-blue-200 text-blue-900 hover:bg-blue-300 rounded-full px-8"
                >
                  Back
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-24 w-full">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-6 rounded-xl bg-card border border-border"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
