'use client'

import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Package 
} from 'lucide-react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Inventory Status Enum
const InventoryStatus = {
  IN_STOCK: 'in_stock',
  LOW_STOCK: 'low_stock',
  OUT_OF_STOCK: 'out_of_stock',
  DISCONTINUED: 'discontinued'
};

// Inventory Schema
const inventorySchema = z.object({
  productName: z.string().min(2, { message: "Product name must be at least 2 characters" }),
  sku: z.string().min(2, { message: "SKU must be at least 2 characters" }),
  category: z.string().optional(),
  quantity: z.number().min(0, { message: "Quantity must be non-negative" }),
  lowStockThreshold: z.number().min(0, { message: "Low stock threshold must be non-negative" }),
  price: z.number().min(0, { message: "Price must be non-negative" }),
  costPrice: z.number().min(0, { message: "Cost price must be non-negative" }),
  isTrackingInventory: z.boolean().default(true),
  status: z.nativeEnum(InventoryStatus).default(InventoryStatus.IN_STOCK)
});

const InventoryManagement = () => {
  const [categories] = useState([
    { id: '1', name: 'Electronics' },
    { id: '2', name: 'Clothing' }
  ]);

  const [inventory, setInventory] = useState([
    {
      id: '1',
      productName: 'Wireless Headphones',
      sku: 'WH-001',
      category: 'Electronics',
      quantity: 50,
      lowStockThreshold: 10,
      price: 99.99,
      costPrice: 60.00,
      isTrackingInventory: true,
      status: InventoryStatus.IN_STOCK
    },
    {
      id: '2',
      productName: 'Bluetooth Speaker',
      sku: 'BS-002',
      category: 'Electronics',
      quantity: 8,
      lowStockThreshold: 10,
      price: 79.99,
      costPrice: 45.00,
      isTrackingInventory: true,
      status: InventoryStatus.LOW_STOCK
    }
  ]);

  const form = useForm({
    resolver: zodResolver(inventorySchema),
    defaultValues: {
      productName: '',
      sku: '',
      category: '',
      quantity: 0,
      lowStockThreshold: 10,
      price: 0,
      costPrice: 0,
      isTrackingInventory: true,
      status: InventoryStatus.IN_STOCK
    }
  });

  const onSubmit = (data: any) => {
    const newProduct = {
      ...data,
      id: `${inventory.length + 1}`,
      status: calculateInventoryStatus(data.quantity, data.lowStockThreshold)
    };
    setInventory([...inventory, newProduct]);
    form.reset();
  };

  const calculateInventoryStatus = (quantity: any, lowStockThreshold: any) => {
    if (quantity === 0) return InventoryStatus.OUT_OF_STOCK;
    if (quantity <= lowStockThreshold) return InventoryStatus.LOW_STOCK;
    return InventoryStatus.IN_STOCK;
  };

  const handleDelete = (id: any) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  const getStatusColor = (status: any) => {
    switch (status) {
      case InventoryStatus.IN_STOCK: return 'text-green-600';
      case InventoryStatus.LOW_STOCK: return 'text-yellow-600';
      case InventoryStatus.OUT_OF_STOCK: return 'text-red-600';
      case InventoryStatus.DISCONTINUED: return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between border-b">
          <CardTitle className="text-2xl font-bold">Inventory Management</CardTitle>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Plus className="w-5 h-5" /> Add Product
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px]">
              <DialogHeader>
                <DialogTitle>Add New Product to Inventory</DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="productName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Product Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter product name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="sku"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>SKU</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter SKU" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {categories.map((category) => (
                                <SelectItem key={category.id} value={category.name}>
                                  {category.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="quantity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quantity</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              placeholder="Enter quantity" 
                              {...field} 
                              onChange={(e) => field.onChange(Number(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="lowStockThreshold"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Low Stock Threshold</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              placeholder="Low stock threshold" 
                              {...field} 
                              onChange={(e) => field.onChange(Number(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Selling Price</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              placeholder="Enter price" 
                              {...field} 
                              onChange={(e) => field.onChange(Number(e.target.value))}
                              step="0.01"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="costPrice"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cost Price</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              placeholder="Enter cost price" 
                              {...field} 
                              onChange={(e) => field.onChange(Number(e.target.value))}
                              step="0.01"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="isTrackingInventory"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">
                              Track Inventory
                            </FormLabel>
                            <FormLabel className="text-sm text-muted-foreground">
                              Enable inventory tracking for this product
                            </FormLabel>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" className="w-full">Add Product to Inventory</Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell>SKU</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((product) => (
                <TableRow 
                  key={product.id} 
                  className={product.quantity === 0 ? 'bg-red-50' : ''}
                >
                  <TableCell>{product.productName}</TableCell>
                  <TableCell>{product.sku}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>
                    <span className={
                      product.quantity <= product.lowStockThreshold 
                        ? 'text-yellow-600 font-semibold' 
                        : ''
                    }>
                      {product.quantity}
                    </span>
                  </TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <span className={getStatusColor(product.status)}>
                      {product.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="icon"
                        onClick={() => handleDelete(product.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default InventoryManagement;