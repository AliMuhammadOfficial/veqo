"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Star, Heart, Share2, Truck, Shield, RefreshCw } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ProductCard } from "./FeaturedSection";

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const productImages = [
    "/assets/products/placeholder.png",
    "/assets/products/placeholder.png",
    "/assets/products/placeholder.png",
    "/assets/products/placeholder.png",
  ];

  const features = [
    { icon: <Truck className="w-5 h-5" />, text: "Free shipping worldwide" },
    { icon: <Shield className="w-5 h-5" />, text: "2 year warranty" },
    { icon: <RefreshCw className="w-5 h-5" />, text: "30-day return policy" },
  ];

  const onSelect = useCallback(() => {
    if (!emblaApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();

    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="relative">
            <div className="embla overflow-hidden rounded-lg" ref={emblaRef}>
              <div className="embla__container flex">
                {productImages.map((image, index) => (
                  <div
                    key={index}
                    className="embla__slide flex-[0_0_100%] relative min-w-0"
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={image}
                        alt={`Product Image ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
              onClick={() => emblaApi?.scrollPrev()}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
              onClick={() => emblaApi?.scrollNext()}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div
            className="flex gap-2 mt-4 overflow-x-auto pb-2"
            ref={emblaThumbsRef}
          >
            {productImages.map((image, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => emblaApi?.scrollTo(index)}
                className="flex-none"
              >
                <div
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 hover:border-primary transition-colors m-1 ${
                    index === selectedIndex
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-start">
              <h1 className="text-4xl font-bold mb-2">Slim Fit Denim Jeans</h1>
              <div className="flex gap-2">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsWishlist(!isWishlist)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <Heart
                    className={`w-6 h-6 ${
                      isWishlist ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <Share2 className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-muted-foreground font-medium">
                4.9 (128 reviews)
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-4xl font-bold text-primary">$79.99</p>
            <p className="text-sm text-muted-foreground">
              Including all taxes and duties
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Select Size</h3>
            <div className="flex gap-3">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  onClick={() => setSelectedSize(size)}
                  className="w-14 h-14 rounded-full"
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="h-12"
              >
                -
              </Button>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-20 text-center border-0"
                min="1"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
                className="h-12"
              >
                +
              </Button>
            </div>
            <Button className="flex-1" size="lg">
              Add to Cart
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 py-6 border-y">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                {feature.icon}
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          <Card className="p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Product Description
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Premium quality slim fit denim jeans crafted from sustainable
                materials. Features a modern cut with slight stretch for
                comfort. Perfect for casual and semi-formal occasions.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium">Material</div>
                  <div className="text-sm text-muted-foreground">
                    98% Cotton, 2% Elastane
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Care Instructions</div>
                  <div className="text-sm text-muted-foreground">
                    Machine wash cold
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <ProductCard
              product={{
                id: 1,
                name: "Classic White Sneakers",
                price: 89.99,
                rating: 4.5,
                image: "/assets/products/placeholder.png",
                badge: "New Arrival",
              }}
              key={i}
            />
          ))}
        </div>
      </div>
      {/* FAQs section */}
      <div className="mt-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="return-policy"
              className="border rounded-lg shadow-sm bg-white"
            >
              <AccordionTrigger className="hover:no-underline px-6 py-4 [&[data-state=open]]:text-primary">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 7h6m0 10H9m3-5H9"
                      ></path>
                    </svg>
                  </div>
                  <span className="font-medium">
                    What is your return policy?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="pl-11 text-muted-foreground">
                  We offer a hassle-free 30-day return policy on all products.
                  If you&apos;re not completely satisfied with your purchase:
                  <ul className="list-disc ml-4 mt-2 space-y-1">
                    <li>Initiate a return within 30 days of delivery</li>
                    <li>Items must be unused and in original packaging</li>
                    <li>Receive a full refund once return is processed</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="shipping"
              className="border rounded-lg shadow-sm bg-white"
            >
              <AccordionTrigger className="hover:no-underline px-6 py-4 [&[data-state=open]]:text-primary">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Truck className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium">
                    Do you offer free shipping?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="pl-11 text-muted-foreground">
                  Yes, we offer complimentary worldwide shipping on all orders!
                  Your purchase will be carefully packaged and shipped directly
                  to your doorstep at no additional cost.
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="shipping-time"
              className="border rounded-lg shadow-sm bg-white"
            >
              <AccordionTrigger className="hover:no-underline px-6 py-4 [&[data-state=open]]:text-primary">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <RefreshCw className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium">
                    How long does shipping take?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="pl-11 text-muted-foreground">
                  Estimated delivery times:
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="space-y-1">
                      <p className="font-medium">Domestic Orders</p>
                      <p>3-5 business days</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">International Orders</p>
                      <p>5-7 business days</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
