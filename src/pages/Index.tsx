import { useState } from "react";
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  Star,
  Filter,
  Grid,
  List,
  ArrowUpDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Product data matching noon.world aesthetic
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
    height: "h-80",
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
    height: "h-64",
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
    height: "h-96",
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
    height: "h-80",
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
    height: "h-72",
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
    height: "h-64",
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
    height: "h-88",
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
    height: "h-64",
  },
];

const ProductCard = ({ product }: { product: any }) => {
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
    <div className="break-inside-avoid mb-6">
      <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className={`relative ${product.height} overflow-hidden`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {product.isNew && (
            <Badge className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1">
              New
            </Badge>
          )}
        </div>

        <div className="p-4">
          <div className="mb-3">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
              {product.brand}
            </p>
            <h3 className="font-semibold text-gray-900 group-hover:text-black transition-colors text-lg">
              {product.name}
            </h3>
          </div>

          <div className="flex items-center gap-1 mb-3">
            {renderStars(product.rating)}
            <span className="text-xs text-gray-500 ml-1">
              ({product.reviewCount})
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl">${product.price}</span>
              {product.originalPrice &&
                product.originalPrice > product.price && (
                  <span className="text-sm text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
            </div>
            <span className="text-xs text-gray-500 capitalize bg-gray-50 px-2 py-1 rounded">
              {product.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl lg:text-4xl font-black tracking-tight">
              NOON
            </h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              All Products
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Focus
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Sleep
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Wellness
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              About
            </a>
          </nav>

          {/* Search - Desktop */}
          <div className="hidden lg:flex items-center max-w-sm w-full mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 pr-4 bg-gray-50 border-gray-200 focus:bg-white transition-colors rounded-full"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Search className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

const Index = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        {/* Hero Section */}
        <div className="bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="max-w-3xl">
              <h1 className="text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-6">
                All Collections
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover our complete range of premium wellness and performance
                products. Each formula is carefully crafted with science-backed
                ingredients to help you optimize your mind and body.
              </p>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600 font-medium">
                  {products.length} products
                </span>
              </div>

              <div className="flex items-center gap-3">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Best Rating</option>
                  <option value="newest">Newest</option>
                </select>

                <div className="hidden sm:flex items-center border border-gray-200 rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="icon"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none border-0"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="icon"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none border-0"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="text-center">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Load More Products
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-3xl font-black mb-4">NOON</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Premium wellness products for optimized living. Science-backed
                formulations designed to enhance your daily performance.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Shop</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Nootropics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Sleep Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Wellness
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Recovery
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Support</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Size Guide
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Company</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Sustainability
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 sm:mb-0">
              © 2024 NOON. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-900 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
