'use client'

import Image from "next/image"
import { Star } from 'lucide-react'
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Review {
  id: number
  author: string
  avatar: string
  rating: number
  quality: string
  location: string
  date: string
  content: string
}

const reviews: Review[] = [
  {
    id: 1,
    author: "Henny K. Mark",
    avatar: "/placeholder.svg",
    rating: 4.5,
    quality: "Excellent Quality",
    location: "Canada",
    date: "2023-11-16",
    content: "Medium thickness. Did not shrink after wash. Good elasticity . XL size Perfectly fit for 5.10 height and heavy body. Did not fade after wash. Only for maroon colour t-shirt colour lightly gone in first wash but not faded. I bought 5 tshirt of different colours. Highly recommended in so low price."
  },
  {
    id: 2,
    author: "Jorge Herry",
    avatar: "/placeholder.svg",
    rating: 4.5,
    quality: "Good Quality",
    location: "U.S.A",
    date: "2023-12-21",
    content: "I liked the tshirt, it's pure cotton & skin friendly, but the size is smaller to compare standard size. best rated"
  }
]

export default function DetailsReview() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Tabs defaultValue="details" className="w-full">
        <TabsList className="grid w-full max-w-[500px] grid-cols-2">
          <TabsTrigger value="details">Items Detail</TabsTrigger>
          <TabsTrigger value="reviews">Top Review From World</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <Card className="p-6">
            <dl className="grid gap-4 text-sm">
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-medium">Product Dimensions</dt>
                <dd className="col-span-2">53.3 x 40.5 x 6.4 cm; 500 Grams</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-medium">Date First Available</dt>
                <dd className="col-span-2">22 September 2023</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-medium">Department</dt>
                <dd className="col-span-2">Men</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-medium">Manufacturer</dt>
                <dd className="col-span-2">Greensboro, NC 27401 Prospa-Pal</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-medium">ASIN</dt>
                <dd className="col-span-2">B0CIMMLL18</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-medium">Item model number</dt>
                <dd className="col-span-2">1137AZ</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-medium">Country of Origin</dt>
                <dd className="col-span-2">U.S.A</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-medium">Manufacturer</dt>
                <dd className="col-span-2">Suite 941 89157 Baumbach Views, Gilbertmouth, TX 31542-2135</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-medium">Packer</dt>
                <dd className="col-span-2">Apt. 726 80915 Hung Stream, Rowetown, WV 44364</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-medium">Importer</dt>
                <dd className="col-span-2">Apt. 726 80915 Hung Stream, Rowetown, WV 44364</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-medium">Item Weight</dt>
                <dd className="col-span-2">500 g</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-medium">Item Dimensions LxWxH</dt>
                <dd className="col-span-2">53.3 x 40.5 x 6.4 Centimeters</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-medium">Generic Name</dt>
                <dd className="col-span-2">T-Shirt</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-medium">Best Sellers Rank</dt>
                <dd className="col-span-2">#13 in Clothing & Accessories</dd>
              </div>
            </dl>
            <Button variant="link" className="mt-4 px-0 text-primary">
              View More Details →
            </Button>
          </Card>
        </TabsContent>
        <TabsContent value="reviews">
          <Card className="p-6">
            <div className="space-y-8">
              {reviews.map((review) => (
                <div key={review.id} className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={review.avatar}
                      alt={review.author}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{review.author}</h3>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(Math.floor(review.rating))].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                          {review.rating % 1 !== 0 && (
                            <Star className="w-4 h-4 fill-primary text-primary" />
                          )}
                        </div>
                        <span className="text-sm font-medium">{review.quality}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Reviewed in {review.location} on {format(new Date(review.date), 'dd MMMM yyyy')}
                  </div>
                  <p className="text-sm">{review.content}</p>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm">
                      Helpful
                    </Button>
                    <Button variant="ghost" size="sm">
                      Report
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

