"use client";
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/(shop)/HeroSection";
import CategoriesSection from "@/components/(shop)/CategoriesSection";
import FeaturedSection from "@/components/(shop)/FeaturedSection";
import CollectionsSection from "@/components/(shop)/CollectionsSection";
import NewsletterSection from "@/components/(shop)/NewsletterSection";
import Footer from "@/components/(shop)/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <FeaturedSection />
      <CollectionsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default HomePage;
