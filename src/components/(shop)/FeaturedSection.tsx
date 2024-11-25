"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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

const FeaturedSection = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Classic White Sneakers",
      price: 89.99,
      rating: 4.5,
      image: "/api/placeholder/400/500",
      badge: "New Arrival",
    },
    {
      id: 2,
      name: "Leather Crossbody Bag",
      price: 129.99,
      rating: 4.8,
      image: "/api/placeholder/400/500",
      badge: "Best Seller",
    },
    {
      id: 3,
      name: "Slim Fit Denim Jeans",
      price: 79.99,
      rating: 4.6,
      image: "/api/placeholder/400/500",
    },
    {
      id: 4,
      name: "Cotton Blend T-Shirt",
      price: 29.99,
      rating: 4.7,
      image: "/api/placeholder/400/500",
      badge: "Sale",
    },
  ];

  return (
    <section className="py-12 md:py-24 overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 md:mb-12">
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

        {/* Carousel */}
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredProducts.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <Card className="border-0 bg-background/50 backdrop-blur-sm h-full transition-shadow hover:shadow-xl">
                    <CardHeader className="p-0">
                      <div className="relative aspect-square">
                        {product.badge && (
                          <Badge
                            className="absolute top-3 left-3 z-10"
                            variant="secondary"
                          >
                            {product.badge}
                          </Badge>
                        )}
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.2 }}
                          className="h-full w-full rounded-t-lg overflow-hidden"
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            priority
                          />
                        </motion.div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 md:p-6 space-y-3">
                      <h3 className="font-medium text-base md:text-lg line-clamp-1">
                        {product.name}
                      </h3>
                      <Rating rating={product.rating} className="gap-1" />
                      <p className="text-lg md:text-xl font-bold">
                        ${product.price}
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 md:p-6 pt-0">
                      <Button
                        variant="secondary"
                        className="w-full transition-colors"
                      >
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
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
