import React, { useEffect, useState } from "react";
import { Link } from "@/i18n/routing";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCard } from "./ProductCard";
import { getProducts } from "@/actions/product";

const formatPrice = (price: string | number): number => {
  if (typeof price === "string") {
    return parseFloat(price.replace(/[^\d.-]/g, ""));
  }
  return price;
};
const FeaturedSection = () => {
  async function fetchProducts() {
    const allProducts = await getProducts();
    console.log("All Products", allProducts);
  }
  fetchProducts();

  // async function addProduct() {
  //   const result = await createProduct({
  //     name: "Classic White Sneakers",
  //     slug: "classic-white-sneakers",
  //     description: "A classic pair of white sneakers for everyday wear",
  //     price: 89.99,
  //     attributes: [
  //       { name: "Material", option: "Leather" },
  //       { name: "Color", option: "White" },
  //       { name: "Size", option: "US 9" },
  //     ],
  //     metaData: [
  //       { key: "SKU", value: "SNK-001" },
  //       { key: "Brand", value: "Nike" },
  //     ],
  //     categoryId: "1",
  //   });

  //   if (result.success) {
  //     console.log("Product added successfully");
  //   }
  // }
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        setIsLoading(true);
        const data = await getProducts();
        const formattedProducts = data.map((product) => ({
          ...product,
          price: formatPrice(product.price),
          description: product.description || "", // Provide default empty string
          features: [], // Add default features array
          isPack: false, // Add default isPack value
        }));
        setProducts(formattedProducts);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch products"
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <section className="py-8 md:py-16 overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Featured Products
            </h2>
            <p className="text-muted-foreground mt-2">
              Handpicked favorites for your wardrobe
            </p>
          </div>
          <Button variant="outline" asChild className="shrink-0">
            <Link href="/products" className="flex items-center gap-2">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4 my-8 md:my-12">
              {products.map((product) => (
                <CarouselItem
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  key={product.id}
                >
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
