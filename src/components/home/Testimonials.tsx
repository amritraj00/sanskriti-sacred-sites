import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop",
    rating: 5,
    text: "The Rudraksha mala I received is absolutely authentic. You can feel the positive energy. The packaging was beautiful and arrived with a blessing card. Truly divine experience!",
    product: "5 Mukhi Rudraksha Mala",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Mumbai",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop",
    rating: 5,
    text: "Ordered Gangajal from Haridwar for my mother's puja. It came in sacred packaging with a certificate. She was so happy! Will definitely order again.",
    product: "Pure Gangajal",
  },
  {
    id: 3,
    name: "Anita Patel",
    location: "Ahmedabad",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop",
    rating: 5,
    text: "The Kashi silk dupatta is stunning. The quality and craftsmanship show the artisan's dedication. It's become my favorite puja wear. Thank you SANSKRITI!",
    product: "Kashi Silk Dupatta",
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Jaipur",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop",
    rating: 5,
    text: "I've been searching for authentic temple products for years. SANSKRITI delivers exactly what they promise - pure, blessed, and genuine. Highly recommended!",
    product: "Brass Shiva Lingam",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            💫 Devotee Stories
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Words from Our Devotees
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Join thousands of devotees who have experienced the authenticity 
            and spiritual purity of SANSKRITI products.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-lg"
            >
              {/* Quote Icon */}
              <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/10" />

              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                "{testimonial.text}"
              </p>

              {/* Product Tag */}
              <div className="mb-4">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {testimonial.product}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 rounded-full bg-card px-8 py-4 shadow-card">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="font-display text-xl font-bold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">from 2,000+ reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
