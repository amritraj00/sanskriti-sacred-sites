import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mandala Pattern - Top Right */}
        <motion.div
          className="absolute -right-32 -top-32 h-96 w-96 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 200 200" className="h-full w-full text-primary">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="20"
                x2="100"
                y2="180"
                stroke="currentColor"
                strokeWidth="0.5"
                transform={`rotate(${i * 30} 100 100)`}
              />
            ))}
          </svg>
        </motion.div>

        {/* Floating Om Symbol */}
        <motion.div
          className="absolute left-10 top-1/3 text-6xl text-primary/10"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          ॐ
        </motion.div>

        {/* Light rays */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="container relative mx-auto flex min-h-[90vh] items-center px-4">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Authentic Sacred Products from Holy Places
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-4 font-display text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
            >
              <span className="block">SANSKRITI</span>
              <span className="mt-2 block text-gradient-saffron text-3xl md:text-4xl lg:text-5xl font-normal italic">
                आस्था जो दिल से जुड़ी हो
              </span>
            </motion.h1>

            {/* Tagline Translation */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6 font-body text-lg text-muted-foreground md:text-xl"
            >
              "Faith that connects to your heart"
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8 max-w-xl font-body text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0 mx-auto"
            >
              Discover authentic spiritual products sourced directly from 
              <span className="font-medium text-foreground"> Kashi, Haridwar, Kedarnath </span> 
              and other sacred places of India. Each item is blessed, sanctified, and carries 
              the divine energy of our ancient temples.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="group h-14 gap-2 rounded-full bg-primary px-8 text-base font-medium shadow-lg transition-all hover:shadow-xl"
              >
                Explore Collection
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-2 px-8 text-base font-medium"
              >
                Our Sacred Journey
              </Button>
            </motion.div>

            {/* Trust Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start"
            >
              {[
                { value: "50,000+", label: "Happy Devotees" },
                { value: "100%", label: "Authentic Products" },
                { value: "108+", label: "Sacred Items" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p className="font-display text-2xl font-bold text-primary md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            {/* Glowing background */}
            <div className="absolute h-[400px] w-[400px] rounded-full bg-primary/20 blur-3xl lg:h-[500px] lg:w-[500px]" />
            
            {/* Main visual container */}
            <motion.div
              className="relative z-10 aspect-square w-full max-w-md overflow-hidden rounded-full border-4 border-primary/20 bg-gradient-to-br from-muted to-secondary p-8 shadow-2xl lg:max-w-lg"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Om Symbol */}
              <div className="flex h-full w-full items-center justify-center">
                <motion.span
                  className="font-display text-[180px] text-primary/40 lg:text-[220px]"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  ॐ
                </motion.span>
              </div>

              {/* Floating elements around */}
              {[
                { icon: "🪷", position: "top-4 left-1/2 -translate-x-1/2" },
                { icon: "🕉️", position: "bottom-4 left-1/2 -translate-x-1/2" },
                { icon: "🪔", position: "left-4 top-1/2 -translate-y-1/2" },
                { icon: "📿", position: "right-4 top-1/2 -translate-y-1/2" },
              ].map((item, index) => (
                <motion.span
                  key={index}
                  className={`absolute text-3xl ${item.position}`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    delay: index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {item.icon}
                </motion.span>
              ))}
            </motion.div>

            {/* Orbiting circle */}
            <motion.div
              className="absolute h-[450px] w-[450px] rounded-full border border-dashed border-primary/20 lg:h-[550px] lg:w-[550px]"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-2xl">✨</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          <div className="h-8 w-5 rounded-full border-2 border-muted-foreground/50 p-1">
            <motion.div
              className="h-2 w-1.5 rounded-full bg-primary"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
