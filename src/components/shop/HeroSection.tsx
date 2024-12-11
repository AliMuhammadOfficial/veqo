"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-background shadow-2xl">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]"
      >
        <Image
          src="/assets/products/1920x1080.jpg"
          alt="Hero"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover mix-blend-overlay opacity-90 shadow-2xl"
        />
      </motion.div>
      <div className="absolute inset-0 flex items-center bg-black/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl space-y-8"
          >
            <Badge className="mb-4 text-sm md:text-base px-6 py-2 backdrop-blur-sm bg-background/20 shadow-lg">
              New Collection
            </Badge>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-background tracking-tight">
              Summer 2024
            </h1>
            <p className="text-lg md:text-xl text-background max-w-xl leading-relaxed">
              Discover the latest trends in fashion and explore our new
              collection with exclusive designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="group transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/new-arrivals" className="flex items-center">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-background hover:text-primary hover:bg-background backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-lg"
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
