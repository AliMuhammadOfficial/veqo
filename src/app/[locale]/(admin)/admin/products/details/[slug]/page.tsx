'use client'

import * as React from "react"
import Image from "next/image"
import { AlertTriangleIcon, MinusIcon, PackageIcon, PlusIcon, Star, StarHalf, XCircleIcon } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import DetailsReview from "./DetailsReview"

interface InventoryItem {
  size: string;
  color: string;
  stockQuantity: number;
  warehouseLocations?: string[];
}

const inventoryData: InventoryItem[] = [
  { 
    size: "S", 
    color: "dark", 
    stockQuantity: 25,
    warehouseLocations: ["Warehouse A", "Warehouse B"]
  },
  { 
    size: "M", 
    color: "dark", 
    stockQuantity: 50,
    warehouseLocations: ["Warehouse A", "Warehouse C"]
  },
  { 
    size: "XL", 
    color: "dark", 
    stockQuantity: 15,
    warehouseLocations: ["Warehouse B"]
  },
  { 
    size: "XXL", 
    color: "dark", 
    stockQuantity: 10,
    warehouseLocations: ["Warehouse C"]
  }
]

export default function ProductDetails() {
  const [quantity, setQuantity] = React.useState(1)
  const [selectedColor, setSelectedColor] = React.useState("dark")
  const [selectedSize, setSelectedSize] = React.useState("M")

  const getCurrentStock = () => {
    const currentStock = inventoryData.find(
      item => item.size === selectedSize && item.color === selectedColor
    )
    return currentStock ? currentStock.stockQuantity : 0
  }

  const getWarehouseLocations = () => {
    const currentStock = inventoryData.find(
      item => item.size === selectedSize && item.color === selectedColor
    )
    return currentStock ? currentStock.warehouseLocations : []
  }

  const currentStock = getCurrentStock()
  const warehouseLocations = getWarehouseLocations()

  return (
    <div className="container mx-auto px-4 py-6">
      <Card className="flex items-start gap-10 p-6">
        <div className="space-y-4 w-[40%]">
          <div className="relative aspect-square bg-[#EEf2F7]">
            <Image
              src="/assets/products/shirt.png"
              alt="Product image"
              className="object-cover rounded-lg"
              fill
            />
          </div>
          <div className="flex gap-2 overflow-auto pb-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative w-24 aspect-square flex-shrink-0">
                <Image
                  src="/assets/products/shirt.png"
                  alt={`Product thumbnail ${i}`}
                  className="object-cover rounded-md border hover:border-primary cursor-pointer"
                  fill
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Badge className="bg-green-500 text-white mb-3">New Arrival</Badge>
            <h1 className="text-2xl font-semibold">Men Black Slim Fit T-shirt</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
                <StarHalf className="w-5 h-5 fill-primary text-primary" />
              </div>
              <span className="text-muted-foreground">4.5 (55 Review)</span>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">$80.00</span>
              <span className="text-muted-foreground line-through">$100.00</span>
              <span className="text-red-500">(30%Off)</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Colors</span>
                <span className="text-sm text-muted-foreground">{selectedColor}</span>
              </div>
              <RadioGroup
                className="flex gap-2 mt-2"
                value={selectedColor}
                onValueChange={setSelectedColor}
              >
                <div className="border rounded-full p-1">
                  <RadioGroupItem
                    value="dark"
                    id="dark"
                    className="w-6 h-6 rounded-full bg-gray-900"
                  />
                </div>
                <div className="border rounded-full p-1">
                  <RadioGroupItem
                    value="yellow"
                    id="yellow"
                    className="w-6 h-6 rounded-full bg-yellow-400"
                  />
                </div>
                <div className="border rounded-full p-1">
                  <RadioGroupItem
                    value="white"
                    id="white"
                    className="w-6 h-6 rounded-full bg-white border-2"
                  />
                </div>
                <div className="border rounded-full p-1">
                  <RadioGroupItem
                    value="green"
                    id="green"
                    className="w-6 h-6 rounded-full bg-green-500"
                  />
                </div>
              </RadioGroup>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Size</span>
                <span className="text-sm text-muted-foreground">{selectedSize}</span>
              </div>
              <RadioGroup
                className="flex gap-2 mt-2"
                value={selectedSize}
                onValueChange={setSelectedSize}
              >
                {["S", "M", "XL", "XXL"].map((size) => (
                  <div key={size} className="border rounded-md p-1">
                    <RadioGroupItem
                      value={size}
                      id={size}
                      className="hidden"
                    />
                    <label
                      htmlFor={size}
                      className={cn(
                        "flex items-center justify-center w-10 h-8 rounded cursor-pointer text-sm",
                        selectedSize === size && "bg-primary text-primary-foreground"
                      )}
                    >
                      {size}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <span className="text-sm">Quantity:</span>
              <div className="flex items-center gap-3 mt-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <MinusIcon className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <PlusIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-green-600">
              <svg
                className="w-4 h-4"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>In Stock</span>
            </div>

{/* New inventory details */}
<div className="flex items-center gap-2 text-primary">
            <PackageIcon className="w-4 h-4" />
            <span>Stock Quantity: {currentStock} units</span>
          </div>

          {warehouseLocations && warehouseLocations?.length > 0 && (
            <div className="text-sm text-muted-foreground">
              Available in:
              <ul className="ml-4 list-disc">
                {warehouseLocations?.map((location, index) => (
                  <li key={index}>{location}</li>
                ))}
              </ul>
            </div>
          )}

          {currentStock < 20 && currentStock > 0 && (
            <div className="text-yellow-600 flex items-center gap-2">
              <AlertTriangleIcon className="w-4 h-4" />
              <span>Low stock - order soon!</span>
            </div>
          )}

          {currentStock === 0 && (
            <div className="text-red-600 flex items-center gap-2">
              <XCircleIcon className="w-4 h-4" />
              <span>Out of stock for this size and color</span>
            </div>
          )}

            <div className="flex items-center gap-2 text-green-600">
              <svg
                className="w-4 h-4"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Free delivery available</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <svg
                className="w-4 h-4"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Sales 10% Off Use Code: CODE123</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Description:</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Top in sweatshirt fabric made from a cotton blend with a soft brushed inside. 
                Relaxed fit with dropped shoulders, long sleeves and ribbing around the neckline, 
                cuffs and hem. Small metal text applique.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Available offers:</h3>
              <div className="space-y-2 mt-2">
                <div className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 mt-0.5 text-green-600"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm">
                    Bank Offer 10% instant discount on Bank Debit Cards, up to $30 on orders of $50 and above
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 mt-0.5 text-green-600"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm">
                    Bank Offer Grab our exclusive offer now and save 20% on your next purchase! Don't miss out, shop today!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button className="flex-1" variant="default">
              Add To Cart
            </Button>
            <Button className="flex-1" variant="outline">
              Buy Now
            </Button>
            <Button variant="outline" size="icon">
              <svg
                className="w-5 h-5"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </Button>
          </div>
        </div>
      </Card>
      <div className="mt-10">
        <DetailsReview />
      </div>
    </div>
  )
}

