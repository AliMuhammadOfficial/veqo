"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Rating from "../Rating";

export const ProductCard = ({ product }: { product: any }) => {
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
