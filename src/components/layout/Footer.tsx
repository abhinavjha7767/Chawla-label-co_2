import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/language-provider";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:chawla@chawlalabel.com", label: "Email" },
];

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    products: [
      { key: "product_labels", href: "/products/care-labels" },
      { key: "garment_tags", href: "/products/hang-tags" },
      { key: "barcode_labels", href: "/products/stickers" },
    ],
    company: [
      { key: "about", href: "/about" },
      { key: "sustainability", href: "/sustainability" },
      { key: "careers", href: "/careers" },
      { key: "process", href: "/#process" },
    ],
    support: [
      { key: "contact", href: "/#contact" },
      { key: "faq", href: "/faq" },
      { key: "shipping", href: "/shipping" },
      { key: "returns", href: "/returns" },
    ],
  } as const;

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/">
                <h3 className="text-3xl font-serif font-bold text-gradient-gold mb-4">
                  AS PRINTERS
                </h3>
              </Link>
              <p className="text-muted-foreground max-w-sm mb-6">
                {t.footer.brand_desc}
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t.footer.headers.products}
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {t.footer.links[link.key as keyof typeof t.footer.links]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t.footer.headers.company}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.key}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {t.footer.links[link.key as keyof typeof t.footer.links]}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {t.footer.links[link.key as keyof typeof t.footer.links]}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t.footer.headers.support}
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.key}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {t.footer.links[link.key as keyof typeof t.footer.links]}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {t.footer.links[link.key as keyof typeof t.footer.links]}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">{t.footer.copyright}</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link
              to="/privacy"
              className="hover:text-foreground transition-colors"
            >
              {t.footer.links.privacy}
            </Link>
            <Link
              to="/terms"
              className="hover:text-foreground transition-colors"
            >
              {t.footer.links.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
