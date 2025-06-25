import { useState } from "react";
import { Filter, Grid, List, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Header } from "@/components/Header";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ProductCard } from "@/components/ProductCard";

const products = [
  {
    id: "1",
    name: "FOCUS",
    brand: "DearNeuro",
    price: 68,
    originalPrice: 85,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=500&fit=crop&crop=center",
    rating: 4.8,
    reviewCount: 124,
    isNew: true,
    category: "nootropics",
    description: "Premium nootropic blend for enhanced cognitive performance",
    height: "medium" as const,
  },
  {
    id: "2",
    name: "FLUSH",
    brand: "DearNeuro",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviewCount: 89,
    category: "detox",
    description: "Natural detox formula for cellular cleansing",
    height: "short" as const,
  },
  {
    id: "3",
    name: "CALM",
    brand: "DearNeuro",
    price: 52,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&crop=center",
    rating: 4.9,
    reviewCount: 203,
    category: "wellness",
    description: "Stress relief and relaxation support blend",
    height: "tall" as const,
  },
  {
    id: "4",
    name: "SLEEP",
    brand: "DearNeuro",
    price: 58,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=500&fit=crop&crop=center",
    rating: 4.7,
    reviewCount: 156,
    category: "sleep",
    description: "Advanced sleep optimization formula",
    height: "medium" as const,
  },
  {
    id: "5",
    name: "MITOTIC",
    brand: "NOON",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=450&fit=crop&crop=center",
    rating: 4.5,
    reviewCount: 67,
    category: "performance",
    description: "Cellular regeneration and anti-aging support",
    height: "medium" as const,
  },
  {
    id: "6",
    name: "CLARITY BLEND",
    brand: "Focus Lab",
    price: 39,
    originalPrice: 49,
    image:
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=350&fit=crop&crop=center",
    rating: 4.4,
    reviewCount: 92,
    category: "nootropics",
    description: "Mental clarity and focus enhancement",
    height: "short" as const,
  },
  {
    id: "7",
    name: "ENERGY BOOST",
    brand: "Wellness Co",
    price: 42,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=550&fit=crop&crop=center",
    rating: 4.3,
    reviewCount: 78,
    category: "energy",
    description: "Natural energy enhancement without jitters",
    height: "tall" as const,
  },
  {
    id: "8",
    name: "RECOVERY",
    brand: "NOON",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviewCount: 134,
    isNew: true,
    category: "recovery",
    description: "Post-workout recovery and muscle repair",
    height: "short" as const,
  },
  {
    id: "9",
    name: "IMMUNE SUPPORT",
    brand: "Wellness Co",
    price: 48,
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=500&fit=crop&crop=center",
    rating: 4.7,
    reviewCount: 98,
    category: "immunity",
    description: "Comprehensive immune system support",
    height: "medium" as const,
  },
  {
    id: "10",
    name: "BRAIN FUEL",
    brand: "DearNeuro",
    price: 72,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=600&fit=crop&crop=center",
    rating: 4.8,
    reviewCount: 167,
    category: "nootropics",
    description: "Advanced cognitive enhancement formula",
    height: "tall" as const,
  },
];

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex">
        <FilterSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="flex-1 lg:ml-0">
          {/* Hero Section */}
          <div className="bg-white border-b">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
              <div className="max-w-2xl">
                <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight text-gray-900 mb-4">
                  All Collections
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Discover our complete range of premium wellness and
                  performance products. Each formula is carefully crafted with
                  science-backed ingredients to help you optimize your mind and
                  body.
                </p>
              </div>
            </div>
          </div>

          {/* Toolbar */}
          <div className="bg-white border-b">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>

                  <span className="text-sm text-gray-600">
                    {products.length} products
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <ArrowUpDown className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">
                        Price: Low to High
                      </SelectItem>
                      <SelectItem value="price-high">
                        Price: High to Low
                      </SelectItem>
                      <SelectItem value="rating">Best Rating</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="hidden sm:flex items-center border rounded-md">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="icon"
                      onClick={() => setViewMode("grid")}
                      className="rounded-r-none"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="icon"
                      onClick={() => setViewMode("list")}
                      className="rounded-l-none"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {viewMode === "grid" ? (
              <div className="masonry-grid">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg border p-6 flex gap-6"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wider">
                            {product.brand}
                          </p>
                          <h3 className="font-medium text-gray-900">
                            {product.name}
                          </h3>
                          {product.description && (
                            <p className="text-sm text-gray-600 mt-1">
                              {product.description}
                            </p>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-lg">
                            ${product.price}
                          </div>
                          {product.originalPrice && (
                            <div className="text-sm text-gray-500 line-through">
                              ${product.originalPrice}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Load More */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="text-center">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">NOON</h3>
              <p className="text-gray-600 text-sm">
                Premium wellness products for optimized living.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Nootropics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Sleep
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Wellness
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Returns
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Press
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-gray-500">
            © 2024 NOON. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
