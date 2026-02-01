import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-8 text-center text-primary-foreground md:p-12 lg:p-16"
        >
          {/* Background Decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -left-10 top-1/2 -translate-y-1/2 text-[200px] font-display opacity-10"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            >
              ॐ
            </motion.div>
            <motion.div
              className="absolute -right-10 top-1/2 -translate-y-1/2 text-[200px] font-display opacity-10"
              animate={{ rotate: [0, -5, 0, 5, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            >
              ॐ
            </motion.div>
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm font-medium">Stay Connected</span>
            </motion.div>

            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
              Join Our Spiritual Journey
            </h2>

            <p className="mb-8 text-lg text-primary-foreground/90">
              Subscribe to receive updates on new arrivals, festival collections, 
              spiritual insights, and exclusive blessings.
            </p>

            {/* Subscription Form */}
            <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-14 flex-1 rounded-full border-0 bg-white/90 px-6 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-white"
              />
              <Button
                size="lg"
                className="h-14 gap-2 rounded-full bg-foreground px-8 text-background hover:bg-foreground/90"
              >
                Subscribe
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <p className="mt-4 text-sm text-primary-foreground/70">
              🙏 We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
