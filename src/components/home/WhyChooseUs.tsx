import { motion } from "framer-motion";
import { 
  Shield, 
  Truck, 
  Award, 
  Users, 
  HeartHandshake, 
  Sparkles,
  CheckCircle2
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "100% Authenticity Guarantee",
    description: "Every product comes with a certificate of authenticity and is sourced directly from verified temple sources.",
    features: ["Temple-verified products", "Authenticity certificate", "Quality checked"],
  },
  {
    icon: Sparkles,
    title: "Sanctified & Blessed",
    description: "All items undergo traditional Vedic rituals and puja before being sent to you, ensuring divine energy.",
    features: ["Vedic ritual performed", "Energized products", "Spiritual blessing"],
  },
  {
    icon: Truck,
    title: "Sacred Packaging & Delivery",
    description: "Products are carefully packed with sacred materials to preserve their spiritual purity during transit.",
    features: ["Eco-friendly packaging", "Pan-India delivery", "Order tracking"],
  },
  {
    icon: HeartHandshake,
    title: "Temple Partnerships",
    description: "Direct relationships with temples in Kashi, Haridwar, Kedarnath, and other holy places ensure genuine products.",
    features: ["Direct temple ties", "Artisan support", "Community giving"],
  },
];

const stats = [
  { value: "50,000+", label: "Happy Devotees" },
  { value: "15+", label: "Holy Places" },
  { value: "500+", label: "Sacred Products" },
  { value: "4.9★", label: "Customer Rating" },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -left-20 top-1/4 text-[400px] font-display text-primary">
          ॐ
        </div>
        <div className="absolute -right-20 bottom-1/4 text-[400px] font-display text-primary rotate-180">
          ॐ
        </div>
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Why SANSKRITI
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            The SANSKRITI Difference
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We're not just selling products — we're sharing blessings from India's 
            most sacred places with devotees worldwide.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:shadow-lg hover:border-primary/30"
            >
              <div className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <reason.icon className="h-8 w-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {reason.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-2xl bg-gradient-saffron p-8 shadow-lg md:p-12"
        >
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <p className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-primary-foreground/90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
