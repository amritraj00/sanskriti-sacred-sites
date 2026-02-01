import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id: string;
  name: string;
  nameHindi?: string;
  price: number;
  originalPrice?: number;
  image: string;
  place: string;
  rating: number;
  reviews: number;
  badge?: "bestseller" | "new" | "limited";
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:shadow-lg hover:border-primary/20"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {product.badge === "bestseller" && (
            <Badge className="bg-primary text-primary-foreground">
              ⭐ Bestseller
            </Badge>
          )}
          {product.badge === "new" && (
            <Badge className="bg-accent text-accent-foreground">
              ✨ New
            </Badge>
          )}
          {product.badge === "limited" && (
            <Badge variant="destructive">
              🔥 Limited
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-green-600 text-white">
              {discount}% OFF
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Add to wishlist"
          >
            <Heart className="h-5 w-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Quick view"
          >
            <Eye className="h-5 w-5" />
          </motion.button>
        </div>

        {/* Source Place Tag */}
        <div className="absolute bottom-3 left-3">
          <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
            📍 {product.place}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Hindi Name */}
        {product.nameHindi && (
          <p className="mb-1 font-display text-sm text-muted-foreground">
            {product.nameHindi}
          </p>
        )}

        {/* Product Name */}
        <h3 className="mb-2 font-display text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mb-3 flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-amber-400 text-amber-400"
                    : "fill-muted text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mb-4 flex items-baseline gap-2">
          <span className="font-display text-2xl font-bold text-primary">
            ₹{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          className="w-full gap-2"
          disabled={!product.inStock}
        >
          <ShoppingCart className="h-4 w-4" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </div>
    </motion.div>
  );
};
