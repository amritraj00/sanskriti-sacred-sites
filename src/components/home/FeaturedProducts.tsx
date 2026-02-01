import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProductCard, Product } from "@/components/products/ProductCard";

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Original Rudraksha Mala - 5 Mukhi",
    nameHindi: "रुद्राक्ष माला - पंचमुखी",
    price: 1299,
    originalPrice: 1799,
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&auto=format&fit=crop",
    place: "Kashi",
    rating: 4.8,
    reviews: 234,
    badge: "bestseller",
    inStock: true,
  },
  {
    id: "2",
    name: "Pure Gangajal from Haridwar",
    nameHindi: "शुद्ध गंगाजल - हरिद्वार",
    price: 299,
    image: "https://images.unsplash.com/photo-1600298882525-7f7c894db265?w=600&auto=format&fit=crop",
    place: "Haridwar",
    rating: 4.9,
    reviews: 567,
    badge: "bestseller",
    inStock: true,
  },
  {
    id: "3",
    name: "Brass Shiva Lingam with Base",
    nameHindi: "शिवलिंग - पीतल",
    price: 2499,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=600&auto=format&fit=crop",
    place: "Kedarnath",
    rating: 4.7,
    reviews: 189,
    inStock: true,
  },
  {
    id: "4",
    name: "Sandalwood Mala - 108 Beads",
    nameHindi: "चंदन माला - १०८ दाने",
    price: 899,
    image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&auto=format&fit=crop",
    place: "Kashi",
    rating: 4.6,
    reviews: 342,
    badge: "new",
    inStock: true,
  },
  {
    id: "5",
    name: "Pure Kashi Silk Dupatta",
    nameHindi: "काशी सिल्क दुपट्टा",
    price: 3499,
    originalPrice: 4499,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop",
    place: "Kashi",
    rating: 4.9,
    reviews: 156,
    badge: "limited",
    inStock: true,
  },
  {
    id: "6",
    name: "Copper Puja Thali Set",
    nameHindi: "ताम्बे की पूजा थाली",
    price: 1599,
    image: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=600&auto=format&fit=crop",
    place: "Haridwar",
    rating: 4.5,
    reviews: 278,
    inStock: true,
  },
  {
    id: "7",
    name: "Camphor & Dhoop Combo Pack",
    nameHindi: "कपूर और धूप कॉम्बो",
    price: 399,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1602836831945-97f0b2b3e91e?w=600&auto=format&fit=crop",
    place: "Rishikesh",
    rating: 4.4,
    reviews: 445,
    inStock: true,
  },
  {
    id: "8",
    name: "Tulsi Mala - Sacred Basil",
    nameHindi: "तुलसी माला",
    price: 599,
    image: "https://images.unsplash.com/photo-1577083300841-29c7c3c6cf75?w=600&auto=format&fit=crop",
    place: "Vrindavan",
    rating: 4.7,
    reviews: 312,
    badge: "new",
    inStock: true,
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left"
        >
          <div>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              ✨ Blessed Collection
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Featured Products
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Handpicked sacred items loved by thousands of devotees across India
            </p>
          </div>

          <a
            href="/shop"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            View All Products
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Non-Returnable Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center"
        >
          <p className="text-sm text-foreground">
            🙏 <strong>Sacred Products Notice:</strong> All items are blessed and sanctified. 
            Due to their spiritual nature, products are <strong className="text-primary">non-returnable and non-refundable</strong>. 
            Please order with devotion and care.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
