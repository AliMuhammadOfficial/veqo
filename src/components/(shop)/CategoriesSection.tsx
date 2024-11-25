"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CategoriesSection = () => {
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
  return (
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
  );
};

export default CategoriesSection;
