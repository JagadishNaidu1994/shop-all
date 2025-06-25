import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  category: string;
  description?: string;
  height?: "tall" | "medium" | "short";
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const {
    name,
    brand,
    price,
    originalPrice,
    image,
    rating,
    reviewCount,
    isNew,
    category,
    description,
    height = "medium",
  } = product;

  const heightClasses = {
    short: "h-64",
    medium: "h-80",
    tall: "h-96",
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="masonry-item">
      <div className="product-card">
        <div className={`relative ${heightClasses[height]} overflow-hidden`}>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {isNew && (
            <Badge className="absolute top-3 left-3 bg-black text-white">
              New
            </Badge>
          )}
        </div>

        <div className="p-4">
          <div className="mb-2">
            <p className="text-xs text-gray-500 uppercase tracking-wider">
              {brand}
            </p>
            <h3 className="font-medium text-gray-900 group-hover:text-black transition-colors">
              {name}
            </h3>
            {description && (
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {description}
              </p>
            )}
          </div>

          <div className="flex items-center gap-1 mb-2">
            {renderStars(rating)}
            <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-lg">${price}</span>
              {originalPrice && originalPrice > price && (
                <span className="text-sm text-gray-500 line-through">
                  ${originalPrice}
                </span>
              )}
            </div>
            <span className="text-xs text-gray-500 capitalize">{category}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
