"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CollectionsSection = () => {
  const collections = [
    {
      name: "Summer Collection",
      description: "Light & breezy styles for warm days",
      image: "/assets/collection1.jpeg",
      badge: "New Season",
    },
    {
      name: "Autumn Essentials",
      description: "Cozy pieces for the changing season",
      image: "/assets/collection1.jpeg",
      badge: "Coming Soon",
    },
  ];

  return (
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
  );
};

export default CollectionsSection;
