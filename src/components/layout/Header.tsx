import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, Menu, X, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Holy Places", href: "/places" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const cartCount = 3; // Mock cart count

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top banner */}
      <div className="bg-primary py-2 text-center text-sm text-primary-foreground">
        <p className="font-body">
          🙏 Free shipping on orders above ₹999 | All products are sanctified & temple-sourced
        </p>
      </div>

      {/* Main header */}
      <div className="border-b border-border bg-background/95 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>

          {/* Logo */}
          <motion.a
            href="/"
            className="flex flex-col items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-display text-2xl font-semibold tracking-wide text-foreground lg:text-3xl">
              SANSKRITI
            </span>
            <span className="text-[10px] tracking-widest text-muted-foreground lg:text-xs">
              आस्था जो दिल से जुड़ी हो
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="rounded-full p-2 transition-colors hover:bg-muted"
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-foreground" />
            </button>

            <button
              className="hidden rounded-full p-2 transition-colors hover:bg-muted lg:block"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5 text-foreground" />
            </button>

            <button
              className="hidden rounded-full p-2 transition-colors hover:bg-muted lg:block"
              aria-label="Account"
            >
              <User className="h-5 w-5 text-foreground" />
            </button>

            <button
              className="relative rounded-full p-2 transition-colors hover:bg-muted"
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5 text-foreground" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-border"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="relative max-w-xl mx-auto">
                  <Input
                    placeholder="Search for rudraksha, mala, puja items..."
                    className="h-12 pl-12 pr-4 bg-muted/50 border-0"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 right-0 top-full border-b border-border bg-background lg:hidden"
          >
            <nav className="container mx-auto flex flex-col px-4 py-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-border/50 py-4 font-body text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="mt-6 flex gap-4">
                <Button variant="outline" className="flex-1 gap-2">
                  <User className="h-4 w-4" />
                  Login
                </Button>
                <Button className="flex-1 gap-2">
                  <Heart className="h-4 w-4" />
                  Wishlist
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
