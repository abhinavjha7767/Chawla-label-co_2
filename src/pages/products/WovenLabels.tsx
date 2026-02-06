import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";

import wovenLabelImg from "@/assets/product-woven-label.webp";

const features = [
  "High-density damask weave",
  "Soft satin finish options",
  "Custom logo reproduction",
  "Folded or flat cut styles",
  "Heat-sealed edges",
  "Colorfast premium threads",
];

const types = [
  { name: "Damask Labels", description: "Intricate designs with fine detail" },
  { name: "Satin Labels", description: "Smooth, luxurious feel" },
  { name: "Taffeta Labels", description: "Durable and cost-effective" },
  { name: "Cotton Labels", description: "Soft, organic aesthetic" },
];

export default function WovenLabelsPage() {
  return (
    <PageLayout
      badge="Products"
      title="Woven Labels"
      subtitle="Intricately crafted woven labels that showcase your brand with exceptional detail and durability."
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src={wovenLabelImg}
              alt="Woven label"
              className="rounded-xl w-full shadow-elevated"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-serif font-bold mb-6">
              Premium <span className="text-gradient-gold">Features</span>
            </h2>
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/#contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">
            Label <span className="text-gradient-gold">Types</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {types.map((type) => (
              <div
                key={type.name}
                className="bg-card border border-border rounded-xl p-6 card-glow"
              >
                <h3 className="font-semibold mb-2">{type.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
