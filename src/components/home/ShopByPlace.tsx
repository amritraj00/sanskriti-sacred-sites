import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const holyPlaces = [
  {
    id: "kashi",
    name: "काशी",
    nameEn: "Kashi (Varanasi)",
    description: "The eternal city of Lord Shiva, home to the sacred Ganga",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&auto=format&fit=crop",
    products: 45,
    accent: "from-amber-500/80 to-orange-600/80",
  },
  {
    id: "haridwar",
    name: "हरिद्वार",
    nameEn: "Haridwar",
    description: "Gateway to the Gods, where the Ganga enters the plains",
    image: "https://images.unsplash.com/photo-1608023136037-626dad6c6188?w=800&auto=format&fit=crop",
    products: 32,
    accent: "from-emerald-500/80 to-teal-600/80",
  },
  {
    id: "kedarnath",
    name: "केदारनाथ",
    nameEn: "Kedarnath",
    description: "The highest among the twelve Jyotirlingas in the Himalayas",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&auto=format&fit=crop",
    products: 28,
    accent: "from-slate-500/80 to-zinc-700/80",
  },
  {
    id: "badrinath",
    name: "बद्रीनाथ",
    nameEn: "Badrinath",
    description: "Sacred abode of Lord Vishnu in the Himalayan peaks",
    image: "https://images.unsplash.com/photo-1623850609668-4b20e73f2c00?w=800&auto=format&fit=crop",
    products: 24,
    accent: "from-blue-500/80 to-indigo-600/80",
  },
  {
    id: "rishikesh",
    name: "ऋषिकेश",
    nameEn: "Rishikesh",
    description: "Yoga capital of the world, land of saints and sages",
    image: "https://images.unsplash.com/photo-1592385263818-91a8a0f10a53?w=800&auto=format&fit=crop",
    products: 38,
    accent: "from-yellow-500/80 to-amber-600/80",
  },
  {
    id: "puri",
    name: "पुरी",
    nameEn: "Puri",
    description: "Land of Lord Jagannath, one of the Char Dhams",
    image: "https://images.unsplash.com/photo-1621427642682-3b0cbc6d9f8f?w=800&auto=format&fit=crop",
    products: 22,
    accent: "from-red-500/80 to-rose-600/80",
  },
];

export const ShopByPlace = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <MapPin className="h-4 w-4" />
            Shop by Holy Place
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Products from Sacred Lands
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Each collection brings you authentic items sourced directly from India's 
            most sacred pilgrimage sites, carrying their unique spiritual essence.
          </p>
        </motion.div>

        {/* Places Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {holyPlaces.map((place, index) => (
            <motion.a
              key={place.id}
              href={`/places/${place.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl shadow-card"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={place.image}
                  alt={place.nameEn}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${place.accent} opacity-60 transition-opacity group-hover:opacity-70`} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                {/* Hindi Name */}
                <span className="mb-1 font-display text-4xl font-bold opacity-80">
                  {place.name}
                </span>
                
                {/* English Name */}
                <h3 className="mb-2 font-display text-xl font-semibold">
                  {place.nameEn}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-white/90">
                  {place.description}
                </p>

                {/* Product Count & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    {place.products} Products
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium transition-transform group-hover:translate-x-1">
                    Explore <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="/places"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3 font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            View All Sacred Places
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
