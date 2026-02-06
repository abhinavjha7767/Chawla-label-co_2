import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";

import stickersImg from "@/assets/product-stickers.webp";

const features = [
  "Custom die-cut shapes",
  "Gloss, matte, or satin finish",
  "Weather & water resistant",
  "Indoor and outdoor options",
  "Kiss-cut or individual pieces",
  "Full-color CMYK printing",
];

const types = [
  { name: "Vinyl Stickers", description: "Durable, waterproof, long-lasting" },
  { name: "Paper Stickers", description: "Eco-friendly, writable surface" },
  { name: "Holographic", description: "Eye-catching rainbow effect" },
  { name: "Clear Stickers", description: "Seamless, transparent look" },
];

export default function BarcodeLabelsPage() {
  return (
    <PageLayout
      badge="Products"
      title="Barcode Labels"
      subtitle="Accurate and clear barcode labels for seamless inventory management and point-of-sale operations."
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Barcode Visual from Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md bg-white p-12 rounded-2xl border border-border shadow-xl mb-12 flex flex-col items-center"
          >
            <div className="w-full h-32 bg-[repeating-linear-gradient(90deg,black,black_2px,transparent_2px,transparent_4px,black_4px,black_5px,transparent_5px,transparent_8px)] mb-4" />
            <span className="text-xl tracking-[0.5em] font-mono text-black">
              0 35545 62336 78 1
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground">
              Accurate and clear barcode labels for seamless inventory
              management and point-of-sale operations.
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
