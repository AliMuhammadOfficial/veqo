"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronRight,
  Mail,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const HomePage = () => {
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

  const categories = [
    { name: "Women", image: "/api/placeholder/600/800", link: "/women" },
    { name: "Men", image: "/api/placeholder/600/800", link: "/men" },
    {
      name: "Accessories",
      image: "/api/placeholder/600/800",
      link: "/accessories",
    },
    { name: "Beauty", image: "/api/placeholder/600/800", link: "/beauty" },
  ];

  const collections = [
    {
      name: "Summer Collection",
      description: "Light & breezy styles for warm days",
      image: "/api/placeholder/800/400",
      badge: "New Season",
    },
    {
      name: "Autumn Essentials",
      description: "Cozy pieces for the changing season",
      image: "/api/placeholder/800/400",
      badge: "Coming Soon",
    },
  ];

  const Rating = ({ rating, className }: { rating: number; className?: string }) => (
    <div className={cn("flex items-center gap-1", className)}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-4 h-4",
            i < Math.floor(rating)
              ? "text-primary fill-primary"
              : "text-muted-foreground"
          )}
        />
      ))}
      <span className="text-sm text-muted-foreground ml-1">{rating}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[90vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
        >
          <Image
            src="/assets/products/1920x1080.jpg"
            alt="Hero"
            width={1920}
            height={1080}
            className="w-full h-full object-cover mix-blend-overlay opacity-90"
          />
        </motion.div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl space-y-6"
            >
              <Badge className="mb-4 text-lg px-6 py-2">New Collection</Badge>
              <h1 className="text-6xl md:text-8xl font-bold text-background">
                Summer 2024
              </h1>
              <p className="text-xl text-background/90 max-w-lg">
                Discover the latest trends in fashion and explore our new
                collection with exclusive designs.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/new-arrivals">
                    Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-background border-background hover:text-primary hover:bg-background"
                >
                  View Lookbook
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold">Shop by Category</h2>
              <p className="text-muted-foreground mt-2">
                Find your perfect style in our curated collections
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <motion.div
                key={category.name}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl aspect-[3/4] shadow-lg"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-background mb-2">
                      {category.name}
                    </h3>
                    <Button variant="secondary" asChild>
                      <Link href={category.link}>
                        Shop Now <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
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

      {/* Collections */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Latest Collections</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <motion.div
                key={collection.name}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-xl aspect-[2/1] shadow-lg"
              >
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex flex-col items-center justify-center p-8">
                  <Badge variant="secondary" className="mb-4">
                    {collection.badge}
                  </Badge>
                  <h3 className="text-3xl font-bold text-background mb-2">
                    {collection.name}
                  </h3>
                  <p className="mb-6 text-background/90 text-center max-w-md">
                    {collection.description}
                  </p>
                  <Button variant="secondary">Explore Collection</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              Newsletter
            </Badge>
            <h2 className="text-4xl font-bold text-primary-foreground">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-primary-foreground/90">
              Stay updated with our latest collections and exclusive offers.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background border-0"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
              <CardTitle>About Us</CardTitle>
              <p className="text-muted-foreground">
                We are dedicated to providing the best shopping experience with
                quality products and excellent customer service.
              </p>
            </div>
            <div className="space-y-4">
              <CardTitle>Quick Links</CardTitle>
              <nav className="flex flex-col space-y-2">
                {["New Arrivals", "Best Sellers", "Sale", "Contact Us"].map(
                  (item) => (
                    <Link
                      key={item}
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  )
                )}
              </nav>
            </div>
            <div className="space-y-4">
              <CardTitle>Customer Service</CardTitle>
              <nav className="flex flex-col space-y-2">
                {["FAQs", "Shipping Policy", "Returns", "Track Order"].map(
                  (item) => (
                    <Link
                      key={item}
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  )
                )}
              </nav>
            </div>
            <div className="space-y-6">
              <CardTitle>Connect With Us</CardTitle>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -3 }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <span>support@store.com</span>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 STORE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
