import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footerLinks = {
  shop: [
    { name: "All Products", href: "/shop" },
    { name: "Kashi Collection", href: "/places/kashi" },
    { name: "Haridwar Collection", href: "/places/haridwar" },
    { name: "Kedarnath Collection", href: "/places/kedarnath" },
    { name: "New Arrivals", href: "/shop/new" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Shipping Policy", href: "/shipping" },
    { name: "Track Order", href: "/track" },
    { name: "FAQs", href: "/faq" },
  ],
  company: [
    { name: "About SANSKRITI", href: "/about" },
    { name: "Our Story", href: "/story" },
    { name: "Temple Partners", href: "/partners" },
    { name: "Authenticity", href: "/authenticity" },
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block">
              <span className="font-display text-2xl font-semibold tracking-wide text-foreground">
                SANSKRITI
              </span>
              <p className="mt-1 text-xs tracking-widest text-muted-foreground">
                आस्था जो दिल से जुड़ी हो
              </p>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Bringing the divine blessings of India's holiest places to your home. 
              Every product is sourced directly from sacred temples and sanctified 
              by traditional rituals.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-medium text-foreground">
                Subscribe for spiritual updates
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-10 bg-muted/50"
                />
                <Button className="h-10 px-6">Subscribe</Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold text-foreground">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold text-foreground">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold text-foreground">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <a
                href="mailto:namaste@sanskriti.in"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                namaste@sanskriti.in
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notice - Non-Returnable Policy */}
      <div className="border-t border-border bg-primary/5 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium text-foreground">
            🙏 <span className="text-primary">Important:</span> All products are sacred and blessed. 
            Due to their spiritual sanctity, items are <strong>non-returnable and non-refundable</strong>. 
            Please order with devotion.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-muted-foreground">
            © 2024 SANSKRITI. All rights reserved. Made with 🙏 in Bharat.
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
