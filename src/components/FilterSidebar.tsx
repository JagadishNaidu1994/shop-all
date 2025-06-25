import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FilterSidebar({ isOpen, onClose }: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "category",
    "price",
  ]);
  const [priceRange, setPriceRange] = useState([0, 200]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section],
    );
  };

  const categories = [
    { id: "focus", label: "Focus & Clarity", count: 8 },
    { id: "sleep", label: "Sleep & Recovery", count: 6 },
    { id: "calm", label: "Calm & Stress", count: 4 },
    { id: "energy", label: "Energy & Vitality", count: 7 },
    { id: "wellness", label: "General Wellness", count: 12 },
  ];

  const brands = [
    { id: "dearneuro", label: "DearNeuro", count: 15 },
    { id: "noon", label: "NOON", count: 8 },
    { id: "focus-lab", label: "Focus Lab", count: 5 },
    { id: "wellness-co", label: "Wellness Co", count: 9 },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:relative lg:transform-none lg:shadow-none lg:w-64 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-6 border-b lg:hidden">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Filters</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              ×
            </Button>
          </div>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Category Filter */}
          <div>
            <button
              onClick={() => toggleSection("category")}
              className="flex items-center justify-between w-full text-left font-medium mb-3"
            >
              Category
              {expandedSections.includes("category") ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>

            {expandedSections.includes("category") && (
              <div className="space-y-2">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox id={category.id} />
                    <label
                      htmlFor={category.id}
                      className="text-sm flex-1 cursor-pointer"
                    >
                      {category.label}
                    </label>
                    <span className="text-xs text-gray-500">
                      ({category.count})
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Price Filter */}
          <div>
            <button
              onClick={() => toggleSection("price")}
              className="flex items-center justify-between w-full text-left font-medium mb-3"
            >
              Price Range
              {expandedSections.includes("price") ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>

            {expandedSections.includes("price") && (
              <div className="space-y-4">
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={200}
                  step={10}
                  className="w-full"
                />
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            )}
          </div>

          {/* Brand Filter */}
          <div>
            <button
              onClick={() => toggleSection("brand")}
              className="flex items-center justify-between w-full text-left font-medium mb-3"
            >
              Brand
              {expandedSections.includes("brand") ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>

            {expandedSections.includes("brand") && (
              <div className="space-y-2">
                {brands.map((brand) => (
                  <div key={brand.id} className="flex items-center space-x-2">
                    <Checkbox id={brand.id} />
                    <label
                      htmlFor={brand.id}
                      className="text-sm flex-1 cursor-pointer"
                    >
                      {brand.label}
                    </label>
                    <span className="text-xs text-gray-500">
                      ({brand.count})
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Clear Filters */}
          <Button variant="outline" className="w-full">
            Clear All Filters
          </Button>
        </div>
      </div>
    </>
  );
}
