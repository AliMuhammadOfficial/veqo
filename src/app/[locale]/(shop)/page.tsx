"use client";
import React from "react";
import HeroSection from "@/components/shop/HeroSection";
import CategoriesSection from "@/components/shop/CategoriesSection";
import FeaturedSection from "@/components/shop/FeaturedSection";
import CollectionsSection from "@/components/shop/CollectionsSection";
import NewsletterSection from "@/components/shop/NewsletterSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CategoriesSection />
      <FeaturedSection />
      <CollectionsSection />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
