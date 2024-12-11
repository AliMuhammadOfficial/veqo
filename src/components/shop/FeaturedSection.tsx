"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ChevronRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Rating from "../Rating";

interface FeaturedProduct {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  badge?: string;
}

const FeaturedSection = () => {
  const featuredProducts: FeaturedProduct[] = [
    {
      id: 1,
      name: "Classic White Sneakers",
      price: 89.99,
      rating: 4.5,
      image: "/assets/products/placeholder.png",
      badge: "New Arrival",
    },
    {
      id: 2,
      name: "Leather Crossbody Bag",
      price: 129.99,
      rating: 4.8,
      image: "/assets/products/placeholder.png",
      badge: "Best Seller",
    },
    {
      id: 3,
      name: "Slim Fit Denim Jeans",
      price: 79.99,
      rating: 4.6,
      image: "/assets/products/placeholder.png",
    },
    {
      id: 4,
      name: "Cotton Blend T-Shirt",
      price: 29.99,
      rating: 4.7,
      image: "/assets/products/placeholder.png",
      badge: "Sale",
    },
    {
      id: 5,
      name: "Classic White Sneakers",
      price: 89.99,
      rating: 4.5,
      image: "/assets/products/placeholder.png",
      badge: "New Arrival",
    },
    {
      id: 6,
      name: "Leather Crossbody Bag",
      price: 129.99,
      rating: 4.8,
      image: "/assets/products/placeholder.png",
      badge: "Best Seller",
    },
    {
      id: 7,
      name: "Slim Fit Denim Jeans",
      price: 79.99,
      rating: 4.6,
      image: "/assets/products/placeholder.png",
    },
    {
      id: 8,
      name: "Cotton Blend T-Shirt",
      price: 29.99,
      rating: 4.7,
      image: "/assets/products/placeholder.png",
      badge: "Sale",
    },
  ];

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
              {featuredProducts.map((product) => (
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

export const ProductCard = ({ product }: { product: FeaturedProduct }) => {
  return (
    <Card className="group border-0 bg-background/50 backdrop-blur-sm h-full transition-all hover:shadow-xl">
      <Link href={`/products/${product.id}`} className="block">
        <CardHeader className="p-0">
          <div className="relative aspect-square">
            {product.badge && (
              <Badge className="absolute top-3 left-3 z-10" variant="secondary">
                {product.badge}
              </Badge>
            )}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="h-full w-full rounded-t-lg overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority
              />
            </motion.div>
          </div>
        </CardHeader>
        <CardContent className="p-4 md:p-6 space-y-3">
          <h3 className="font-medium text-base md:text-lg line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <Rating rating={product.rating} className="gap-1" />
          <p className="text-lg md:text-xl font-bold">
            ${product.price.toFixed(2)}
          </p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 md:p-6 pt-0">
        <Button
          variant="secondary"
          className="w-full transition-all hover:bg-primary hover:text-primary-foreground"
          onClick={(e) => {
            e.preventDefault();
            console.log(`Added ${product.name} to cart`);
          }}
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeaturedSection;
