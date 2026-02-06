import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

import hangTagImg from "@/assets/product-hang-tag.webp";
// import wovenLabelImg from "@/assets/product-woven-label.jpg";
import woven from "@/assets/woven labels.webp";
// import stickersImg from "@/assets/product-stickers.jpg";
import careLabelImg from "@/assets/product-care-label.webp";
import barcode from "@/assets/printed labels_1.webp";

export default function ProductsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const products = [
    {
      image: woven, // User changed to woven image
      title: t.products.items.product_labels.title,
      description: t.products.items.product_labels.desc,
      id: "product_labels",
    },
    {
      image: hangTagImg, // User changed to hangTagImg
      title: t.products.items.garment_tags.title,
      description: t.products.items.garment_tags.desc,
      id: "garment_tags",
    },
    {
      image: barcode, // User changed to barcode image
      title: t.products.items.barcode_labels.title,
      description: t.products.items.barcode_labels.desc,
      id: "barcode_labels",
    },
  ];

  return (
    <section
      id="products"
      className="py-24 bg-background relative overflow-hidden"
      ref={ref}
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4"
          >
            <Star className="w-3.5 h-3.5 fill-primary text-primary" />
            {t.products.tagline}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            {t.products.title_start}{" "}
            <span className="text-gradient-gold">
              {t.products.title_highlight}
            </span>{" "}
            {t.products.title_end}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            {t.products.description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-6 shadow-lg border border-border/50">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 duration-500" />
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay content */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full font-medium"
                  >
                    {t.products.cta}
                  </Button>
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
