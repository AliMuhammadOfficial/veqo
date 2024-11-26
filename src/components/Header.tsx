"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Link } from "@/i18n/routing";

import { Search, ShoppingBag, Menu, User, Heart, X, Globe } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();

  const categories = [
    { name: "New", href: "/new" },
    { name: "Women", href: "/women" },
    { name: "Men", href: "/men" },
    { name: "Beauty", href: "/beauty" },
    { name: "Sport", href: "/sport" },
    { name: "Sale", href: "/sale", highlight: true },
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
  ];

  const handleLanguageChange = (langCode: string) => {
    router.push(`/${langCode}${window.location.pathname}`);
  };

  // Search overlay with animations
  const SearchOverlay = () => (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-start pt-16"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsSearchOpen(false);
          }}
        >
          <div className="w-full max-w-2xl mx-auto px-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full h-12 pl-12 text-lg"
                autoFocus
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4"
              onClick={() => setIsSearchOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Announcement banner with animation
  const AnnouncementBanner = () => (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      className="bg-primary text-primary-foreground"
    >
      <div className="h-10 flex items-center justify-center text-sm font-medium">
        Free Worldwide Shipping on Orders Over $100
      </div>
    </motion.div>
  );

  return (
    <>
      <AnnouncementBanner />

      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Left Section - Mobile Menu & Logo */}
            <div className="flex items-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-4 mt-6">
                    {categories.map((category) => (
                      <motion.div
                        key={category.name}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={category.href}
                          className={cn(
                            "block py-2 text-lg font-medium",
                            category.highlight && "text-destructive"
                          )}
                        >
                          {category.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>

              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold">STORE</span>
              </Link>
            </div>

            {/* Center - Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {categories.map((category) => (
                  <NavigationMenuItem key={category.name}>
                    <Link href={category.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                          category.highlight && "text-destructive"
                        )}
                      >
                        {category.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right Section - Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="hidden sm:flex"
              >
                <Search className="h-5 w-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hidden sm:flex"
                  >
                    <Globe className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="cursor-pointer"
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hidden sm:flex"
              >
                <Link href="/account">
                  <User className="h-5 w-5" />
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hidden sm:flex"
              >
                <Link href="/wishlist">
                  <Heart className="h-5 w-5" />
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild className="relative">
                <Link href="/cart">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    3
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 border-t bg-background sm:hidden z-40"
      >
        <div className="grid grid-cols-5 h-16">
          {[
            {
              icon: Search,
              label: "Search",
              action: () => setIsSearchOpen(true),
            },
            { icon: User, label: "Account", href: "/account" },
            { icon: ShoppingBag, label: "Cart", href: "/cart" },
            { icon: Heart, label: "Wishlist", href: "/wishlist" },
            { icon: Menu, label: "Menu", action: null, sheet: true },
          ].map((item) =>
            item.sheet ? (
              <Sheet key={item.label}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full h-full rounded-none flex flex-col items-center justify-center gap-1"
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="text-xs">{item.label}</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-4 mt-6">
                    {categories.map((category) => (
                      <SheetClose asChild key={category.name}>
                        <Link
                          href={category.href}
                          className={cn(
                            "block py-2 text-lg font-medium",
                            category.highlight && "text-destructive"
                          )}
                        >
                          {category.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            ) : (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full h-full rounded-none flex flex-col items-center justify-center gap-1"
                onClick={item.action || undefined}
                asChild={!item.action}
              >
                {item.action ? (
                  <>
                    <item.icon className="h-5 w-5" />
                    <span className="text-xs">{item.label}</span>
                  </>
                ) : (
                  <Link href={item.href!}>
                    <item.icon className="h-5 w-5" />
                    <span className="text-xs">{item.label}</span>
                  </Link>
                )}
              </Button>
            )
          )}
        </div>
      </motion.nav>

      <SearchOverlay />
    </>
  );
};

export default Header;
