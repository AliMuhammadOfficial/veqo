"use client";
import React from "react";
import { motion } from "framer-motion";
import {Link} from '@/i18n/routing';
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

import { CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
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
  );
};

export default Footer;
