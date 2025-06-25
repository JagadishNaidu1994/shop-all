import { Search, ShoppingBag, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl font-display font-bold tracking-tight">
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
                className="pl-10 pr-4 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
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
}
