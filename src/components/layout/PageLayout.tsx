import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function PageLayout({ children, title, subtitle, badge }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-serif font-bold text-gradient-gold">AUREX</span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={16} />
              <span className="text-sm">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
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
      <main className="pb-24">
        {children}
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
          © 2024 Aurex. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
