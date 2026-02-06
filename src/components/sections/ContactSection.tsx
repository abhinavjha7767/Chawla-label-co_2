import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              {t.contact.tagline}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              {t.contact.title_start}{" "}
              <span className="text-gradient-gold">
                {t.contact.title_highlight}
              </span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              {t.contact.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    {t.contact.labels.email}
                  </div>
                  <div className="text-foreground">chawla@chawlalabel.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    {t.contact.labels.phone}
                  </div>
                  <div className="text-foreground">+91 9873705056</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    {t.contact.labels.address}
                  </div>
                  <div className="text-foreground">
                    9986, SARAI ROHILLA, NEW ROHTAK ROAD, NEW DELHI-110005
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="bg-background border border-border rounded-xl p-8 shadow-elevated">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm text-foreground mb-2 block"
                  >
                    {t.contact.labels.name}
                  </label>
                  <Input
                    id="name"
                    placeholder={t.contact.placeholders.name}
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm text-foreground mb-2 block"
                  >
                    {t.contact.labels.email}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t.contact.placeholders.email}
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="text-sm text-foreground mb-2 block"
                >
                  {t.contact.labels.company}
                </label>
                <Input
                  id="company"
                  placeholder={t.contact.placeholders.company}
                  className="bg-card border-border focus:border-primary"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-sm text-foreground mb-2 block"
                >
                  {t.contact.labels.message}
                </label>
                <Textarea
                  id="message"
                  placeholder={t.contact.placeholders.message}
                  rows={4}
                  className="bg-card border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group"
              >
                {t.contact.labels.submit}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
