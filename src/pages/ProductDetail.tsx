import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Star, Heart, Share2, ShoppingCart } from "lucide-react";

const ProductDetail = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center py-16">
            <h1 className="text-3xl font-display font-bold mb-4">
              Product Detail Page
            </h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              This is a placeholder for the product detail page. Individual
              product pages will be implemented here.
            </p>

            <div className="flex items-center justify-center gap-4">
              <Button>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
