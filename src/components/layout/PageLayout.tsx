import { motion } from "framer-motion";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function PageLayout({
  children,
  title,
  subtitle,
  badge,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-20 relative overflow-hidden pt-32">
        <div className="absolute inset-0 hero-glow opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {badge && (
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                {badge}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mt-4 mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-muted-foreground">{subtitle}</p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <main className="pb-24">{children}</main>

      <Footer />
    </div>
  );
}
