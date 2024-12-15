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
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
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
  ChevronDown 
} from 'lucide-react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Updated Category Schema to include isActive
const categorySchema = z.object({
  name: z.string().min(2, { message: "Category name must be at least 2 characters" }),
  slug: z.string().min(2, { message: "Slug must be at least 2 characters" }),
  parentCategory: z.string().optional(),
  description: z.string().optional(),
  visibility: z.enum(['public', 'hidden']).default('public'),
  displayOrder: z.number().min(0).optional(),
  isActive: z.boolean().default(true) // New active/inactive switch
});

const CategoryManagement = () => {
  const [categories, setCategories] = useState([
    {
      id: '1',
      name: 'Electronics',
      slug: 'electronics',
      parentCategory: null,
      description: 'All electronic devices and gadgets',
      visibility: 'public',
      displayOrder: 1,
      isActive: true // Added isActive field
    },
    {
      id: '2',
      name: 'Smartphones',
      slug: 'smartphones',
      parentCategory: '1',
      description: 'Latest mobile phones and accessories',
      visibility: 'public',
      displayOrder: 2,
      isActive: true // Added isActive field
    }
  ]);

  const form = useForm({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: '',
      slug: '',
      parentCategory: '',
      description: '',
      visibility: 'public',
      displayOrder: 0,
      isActive: true // Default to active
    }
  });

  const onSubmit = (data: any) => {
    const newCategory = {
      ...data,
      id: `${categories.length + 1}`,
    };
    setCategories([...categories, newCategory]);
    form.reset();
  };

  const handleDelete = (id: string) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  // Toggle active status
  const toggleActiveStatus = (id: string) => {
    setCategories(categories.map(cat => 
      cat.id === id ? { ...cat, isActive: !cat.isActive } : cat
    ));
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between border-b">
          <CardTitle className="text-2xl font-bold">Product Categories</CardTitle>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Plus className="w-5 h-5" /> Add Category
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Create New Category</DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter category name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="slug"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Slug</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter slug" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="parentCategory"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Parent Category</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select parent category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {categories.map(cat => (
                              <SelectItem key={cat.id} value={cat.id}>
                                {cat.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Category description" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="visibility"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Visibility</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select visibility" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="public">Public</SelectItem>
                              <SelectItem value="hidden">Hidden</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="displayOrder"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Display Order</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              placeholder="Display order" 
                              {...field} 
                              onChange={(e) => field.onChange(Number(e.target.value))}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* New Active/Inactive Switch */}
                  <FormField
                    control={form.control}
                    name="isActive"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">
                            Category Status
                          </FormLabel>
                          <FormLabel className="text-sm text-muted-foreground">
                            Activate or deactivate this category
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
                  <Button type="submit" className="w-full">Create Category</Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Slug</TableCell>
                <TableCell>Parent Category</TableCell>
                <TableCell>Visibility</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <TableRow 
                  key={category.id} 
                  className={!category.isActive ? 'opacity-50' : ''}
                >
                  <TableCell>{category.name}</TableCell>
                  <TableCell>{category.slug}</TableCell>
                  <TableCell>
                    {categories.find(c => c.id === category.parentCategory)?.name || 'None'}
                  </TableCell>
                  <TableCell>{category.visibility}</TableCell>
                  <TableCell>
                    <Switch
                      checked={category.isActive}
                      onCheckedChange={() => toggleActiveStatus(category.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="icon"
                        onClick={() => handleDelete(category.id)}
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

export default CategoryManagement;