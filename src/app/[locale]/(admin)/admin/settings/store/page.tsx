'use client'

import { useState } from 'react'
import { Settings, ShoppingBag, CreditCard, Truck, Calculator, Users, BarChart2, Link, ChevronRight, Globe, Mail, Bell, Shield, Zap } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general")

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Store Settings</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 space-y-2">
          <Button 
            variant={activeTab === "general" ? "secondary" : "ghost"} 
            className="w-full justify-start"
            onClick={() => setActiveTab("general")}
          >
            <Settings className="mr-2 h-4 w-4" />
            General
          </Button>
          <Button 
            variant={activeTab === "products" ? "secondary" : "ghost"} 
            className="w-full justify-start"
            onClick={() => setActiveTab("products")}
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Products
          </Button>
          <Button 
            variant={activeTab === "payments" ? "secondary" : "ghost"} 
            className="w-full justify-start"
            onClick={() => setActiveTab("payments")}
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Payments
          </Button>
          <Button 
            variant={activeTab === "shipping" ? "secondary" : "ghost"} 
            className="w-full justify-start"
            onClick={() => setActiveTab("shipping")}
          >
            <Truck className="mr-2 h-4 w-4" />
            Shipping
          </Button>
          <Button 
            variant={activeTab === "taxes" ? "secondary" : "ghost"} 
            className="w-full justify-start"
            onClick={() => setActiveTab("taxes")}
          >
            <Calculator className="mr-2 h-4 w-4" />
            Taxes
          </Button>
          <Button 
            variant={activeTab === "customers" ? "secondary" : "ghost"} 
            className="w-full justify-start"
            onClick={() => setActiveTab("customers")}
          >
            <Users className="mr-2 h-4 w-4" />
            Customers
          </Button>
          <Button 
            variant={activeTab === "analytics" ? "secondary" : "ghost"} 
            className="w-full justify-start"
            onClick={() => setActiveTab("analytics")}
          >
            <BarChart2 className="mr-2 h-4 w-4" />
            Analytics
          </Button>
          <Button 
            variant={activeTab === "integrations" ? "secondary" : "ghost"} 
            className="w-full justify-start"
            onClick={() => setActiveTab("integrations")}
          >
            <Link className="mr-2 h-4 w-4" />
            Integrations
          </Button>
        </aside>
        <main className="flex-1">
          {activeTab === "general" && (
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>Manage your store's general settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="store-name">Store Name</Label>
                  <Input id="store-name" placeholder="Your Store Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="store-url">Store URL</Label>
                  <Input id="store-url" placeholder="https://yourstore.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="store-email">Store Email</Label>
                  <Input id="store-email" type="email" placeholder="contact@yourstore.com" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                    <p className="text-sm text-muted-foreground">Temporarily disable your store for maintenance</p>
                  </div>
                  <Switch id="maintenance-mode" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          )}
          {activeTab === "products" && (
            <Card>
              <CardHeader>
                <CardTitle>Product Settings</CardTitle>
                <CardDescription>Configure how products are displayed and managed</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="products-per-page">Products per Page</Label>
                  <Input id="products-per-page" type="number" placeholder="24" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="show-out-of-stock">Show Out of Stock Products</Label>
                    <p className="text-sm text-muted-foreground">Display products that are currently out of stock</p>
                  </div>
                  <Switch id="show-out-of-stock" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enable-reviews">Enable Product Reviews</Label>
                    <p className="text-sm text-muted-foreground">Allow customers to leave reviews on products</p>
                  </div>
                  <Switch id="enable-reviews" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          )}
          {activeTab === "payments" && (
            <Card>
              <CardHeader>
                <CardTitle>Payment Settings</CardTitle>
                <CardDescription>Configure payment methods and options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="currency">Store Currency</Label>
                  <Select>
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD - US Dollar</SelectItem>
                      <SelectItem value="eur">EUR - Euro</SelectItem>
                      <SelectItem value="gbp">GBP - British Pound</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enable-paypal">Enable PayPal</Label>
                    <p className="text-sm text-muted-foreground">Accept payments through PayPal</p>
                  </div>
                  <Switch id="enable-paypal" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enable-stripe">Enable Stripe</Label>
                    <p className="text-sm text-muted-foreground">Accept credit card payments through Stripe</p>
                  </div>
                  <Switch id="enable-stripe" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          )}
          {activeTab === "shipping" && (
            <Card>
              <CardHeader>
                <CardTitle>Shipping Settings</CardTitle>
                <CardDescription>Manage shipping zones and methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="shipping-origin">Shipping Origin</Label>
                  <Input id="shipping-origin" placeholder="Enter your store's shipping origin address" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enable-free-shipping">Enable Free Shipping</Label>
                    <p className="text-sm text-muted-foreground">Offer free shipping for orders above a certain amount</p>
                  </div>
                  <Switch id="enable-free-shipping" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="free-shipping-threshold">Free Shipping Threshold</Label>
                  <Input id="free-shipping-threshold" type="number" placeholder="100" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          )}
          {activeTab === "taxes" && (
            <Card>
              <CardHeader>
                <CardTitle>Tax Settings</CardTitle>
                <CardDescription>Configure tax rates and calculations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enable-tax-calculation">Enable Tax Calculation</Label>
                    <p className="text-sm text-muted-foreground">Automatically calculate taxes for orders</p>
                  </div>
                  <Switch id="enable-tax-calculation" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tax-rate">Default Tax Rate (%)</Label>
                  <Input id="tax-rate" type="number" placeholder="10" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="prices-include-tax">Prices Include Tax</Label>
                    <p className="text-sm text-muted-foreground">Display product prices with tax included</p>
                  </div>
                  <Switch id="prices-include-tax" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          )}
          {activeTab === "customers" && (
            <Card>
              <CardHeader>
                <CardTitle>Customer Settings</CardTitle>
                <CardDescription>Manage customer accounts and permissions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enable-guest-checkout">Enable Guest Checkout</Label>
                    <p className="text-sm text-muted-foreground">Allow customers to check out without creating an account</p>
                  </div>
                  <Switch id="enable-guest-checkout" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enable-account-creation">Enable Account Creation</Label>
                    <p className="text-sm text-muted-foreground">Allow customers to create accounts on your store</p>
                  </div>
                  <Switch id="enable-account-creation" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="account-creation-default-role">Default Customer Role</Label>
                  <Select>
                    <SelectTrigger id="account-creation-default-role">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="customer">Customer</SelectItem>
                      <SelectItem value="wholesale">Wholesale</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          )}
          {activeTab === "analytics" && (
            <Card>
              <CardHeader>
                <CardTitle>Analytics Settings</CardTitle>
                <CardDescription>Configure analytics and tracking</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="google-analytics-id">Google Analytics ID</Label>
                  <Input id="google-analytics-id" placeholder="UA-XXXXXXXXX-X" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enable-facebook-pixel">Enable Facebook Pixel</Label>
                    <p className="text-sm text-muted-foreground">Track conversions and optimize Facebook ads</p>
                  </div>
                  <Switch id="enable-facebook-pixel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="facebook-pixel-id">Facebook Pixel ID</Label>
                  <Input id="facebook-pixel-id" placeholder="XXXXXXXXXXXXXXXXXX" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          )}
          {activeTab === "integrations" && (
            <Card>
              <CardHeader>
                <CardTitle>Integrations</CardTitle>
                <CardDescription>Connect your store with third-party services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="mailchimp-integration">Mailchimp Integration</Label>
                    <p className="text-sm text-muted-foreground">Sync customers and orders with Mailchimp</p>
                  </div>
                  <Switch id="mailchimp-integration" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="zapier-integration">Zapier Integration</Label>
                    <p className="text-sm text-muted-foreground">Connect your store with 1000+ apps through Zapier</p>
                  </div>
                  <Switch id="zapier-integration" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="google-shopping-integration">Google Shopping Integration</Label>
                    <p className="text-sm text-muted-foreground">List your products on Google Shopping</p>
                  </div>
                  <Switch id="google-shopping-integration" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          )}
        </main>
      </div>
    </div>
  )
}

