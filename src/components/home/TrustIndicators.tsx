import { motion } from "framer-motion";
import { Shield, Award, Truck, BadgeCheck, Heart, Sparkles } from "lucide-react";

const trustItems = [
  {
    icon: BadgeCheck,
    title: "100% Authentic",
    description: "Every product is sourced directly from sacred temples and verified for authenticity",
  },
  {
    icon: Shield,
    title: "Temple Sourced",
    description: "Direct partnerships with temples in Kashi, Haridwar, Kedarnath & more",
  },
  {
    icon: Sparkles,
    title: "Sanctified Products",
    description: "All items are blessed and purified through traditional Vedic rituals",
  },
  {
    icon: Truck,
    title: "Sacred Packaging",
    description: "Careful packaging to preserve the spiritual sanctity of your order",
  },
  {
    icon: Heart,
    title: "Made with Devotion",
    description: "Crafted by skilled artisans carrying forward ancient traditions",
  },
  {
    icon: Award,
    title: "Trusted by 50K+",
    description: "Over 50,000 devotees have experienced our sacred products",
  },
];

export const TrustIndicators = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      
      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Why Devotees Trust Us
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Purity in Every Product
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We understand the importance of authenticity in spiritual practice. 
            Every product carries the divine blessings of India's most sacred places.
          </p>
        </motion.div>

        {/* Trust Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-lg hover:border-primary/30"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-7 w-7" />
              </div>

              {/* Content */}
              <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-primary/5 transition-all group-hover:scale-150" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 rounded-2xl bg-gradient-saffron p-8 text-center text-primary-foreground shadow-lg"
        >
          <p className="font-display text-2xl font-semibold md:text-3xl">
            🙏 "हर उत्पाद में भक्ति, हर भक्ति में विश्वास"
          </p>
          <p className="mt-2 text-primary-foreground/90">
            "Devotion in every product, faith in every offering"
          </p>
        </motion.div>
      </div>
    </section>
  );
};
