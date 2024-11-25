"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
