import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ShoppingCart,
  Search,
  Box,
  ChevronDown,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/language-provider";
import { Input } from "@/components/ui/input";

// Organized Data for Clothing/Garment Industry (Keeping English for product names as they are often proper nouns/universal, or can be translated later)
const productCategories = [
  {
    title: "Woven Labels",
    items: [
      { title: "Damask Woven Labels", href: "#" },
      { title: "Satin Woven Labels", href: "#" },
      { title: "Taffeta Labels", href: "#" },
      { title: "High Definition (HD)", href: "#" },
      { title: "Cotton Woven Labels", href: "#" },
      { title: "Laser Cut Labels", href: "#" },
    ],
  },
  {
    title: "Printed Labels",
    items: [
      { title: "Screen Printed", href: "#" },
      { title: "Rotary Printed", href: "#" },
      { title: "Digital Printed", href: "#" },
      { title: "Care & Content Labels", href: "#" },
      { title: "Size Labels", href: "#" },
    ],
  },
  {
    title: "Hang Tags",
    items: [
      { title: "Luxury Cardstock", href: "#" },
      { title: "Kraft & Recycled", href: "#" },
      { title: "Folded Tags", href: "#" },
      { title: "Die-Cut Shapes", href: "#" },
      { title: "Spot UV / Foil", href: "#" },
    ],
  },
  {
    title: "Stickers & Patches",
    items: [
      { title: "Heat Transfer Stickers", href: "#" },
      { title: "Leather Patches", href: "#" },
      { title: "Rubber / PVC Patches", href: "#" },
      { title: "Embroidered Patches", href: "#" },
      { title: "Barcode Stickers", href: "#" },
    ],
  },
  {
    title: "Accessories",
    items: [
      { title: "Seal Strings", href: "#" },
      { title: "Ribbons & Tapes", href: "#" },
      { title: "Tissue Paper", href: "#" },
      { title: "Packaging Boxes", href: "#" },
      { title: "RFID / NFC Tags", href: "#" },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background border-b border-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        {/* Search Overlay */}
        {isSearchOpen ? (
          <div className="absolute inset-x-0 top-0 h-16 bg-background flex items-center px-4 lg:px-6 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
            <div className="container mx-auto flex items-center max-w-4xl gap-4">
              <Search className="h-5 w-5 text-muted-foreground" />
              <Input
                autoFocus
                placeholder={language === "Japanese" ? "検索..." : "Search..."}
                className="flex-1 border-none shadow-none focus-visible:ring-0 text-lg bg-transparent h-12"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(false)}
                className="hover:bg-muted/50 rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        ) : null}

        {/* Left Section: Home Icon & Navigation */}
        <div
          className={`flex items-center gap-4 ${isSearchOpen ? "invisible" : ""}`}
        >
          <a
            href="/"
            className="text-foreground hover:text-primary transition-colors font-serif font-bold text-xl tracking-tight"
          >
            AS Printers
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {t.nav.products}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[90vw] max-w-[1200px] p-6 grid grid-cols-5 gap-6">
                      {productCategories.map((group, idx) => (
                        <div key={idx} className="space-y-4">
                          <h4 className="font-medium text-sm text-foreground mb-2 cursor-pointer hover:text-primary transition-colors">
                            {group.title}
                          </h4>
                          <ul className="space-y-2 pl-2">
                            {group.items.map((item, i) => (
                              <li key={i}>
                                <NavigationMenuLink asChild>
                                  <a
                                    href={item.href}
                                    className="text-sm text-muted-foreground hover:text-primary block transition-colors"
                                  >
                                    {item.title}
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {t.nav.services}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <Box className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              {t.nav.services}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Explore our wide range of printing and packaging
                              solutions suited for your specific needs.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="#"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              Consulting
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Expert advice for your packaging.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="#"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              Design
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Creative label designs.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a
                    href="#sustainable"
                    className={navigationMenuTriggerStyle()}
                  >
                    {t.nav.sustainable}
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="#about" className={navigationMenuTriggerStyle()}>
                    {t.nav.about}
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="#contacts" className={navigationMenuTriggerStyle()}>
                    {t.nav.contacts}
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>{t.nav.more}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      <li>
                        <a
                          href="#"
                          className="block p-2 hover:bg-accent rounded-md"
                        >
                          {t.nav.blog}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block p-2 hover:bg-accent rounded-md"
                        >
                          {t.nav.careers}
                        </a>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right Section: Icons & Tools */}
        <div
          className={`flex items-center gap-4 ${isSearchOpen ? "invisible" : ""}`}
        >
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 px-2"
                >
                  <Globe className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">{language}</span>
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("English")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("Japanese")}>
                  日本語 (Japanese)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>

            <ModeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && !isSearchOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-background border-t border-border overflow-y-auto max-h-[calc(100vh-4rem)]"
        >
          <div className="flex flex-col gap-4 p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={language === "Japanese" ? "検索..." : "Search..."}
                className="pl-9"
              />
            </div>

            <a
              href="#"
              className="text-lg font-medium py-2 border-b border-border"
            >
              {t.nav.products}
            </a>
            <a
              href="#"
              className="text-lg font-medium py-2 border-b border-border"
            >
              {t.nav.services}
            </a>
            <a
              href="#"
              className="text-lg font-medium py-2 border-b border-border"
            >
              {t.nav.sustainable}
            </a>
            <a
              href="#"
              className="text-lg font-medium py-2 border-b border-border"
            >
              {t.nav.about}
            </a>
            <a
              href="#"
              className="text-lg font-medium py-2 border-b border-border"
            >
              {t.nav.contacts}
            </a>

            <div className="flex items-center justify-between py-4 border-b border-border">
              <span className="font-medium">{t.nav.language}</span>
              <div className="flex gap-2">
                <Button
                  variant={language === "English" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLanguage("English")}
                >
                  EN
                </Button>
                <Button
                  variant={language === "Japanese" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLanguage("Japanese")}
                >
                  JP
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between py-4">
              <span className="font-medium">{t.nav.theme}</span>
              <ModeToggle />
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
