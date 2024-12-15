
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
  Trash2 
} from 'lucide-react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Attribute Types Enum
const AttributeTypes = {
  TEXT: 'text',
  NUMBER: 'number',
  SELECT: 'select',
  MULTISELECT: 'multiselect',
  BOOLEAN: 'boolean',
  COLOR: 'color'
};

// Attribute Schema
const attributeSchema = z.object({
  name: z.string().min(2, { message: "Attribute name must be at least 2 characters" }),
  slug: z.string().min(2, { message: "Slug must be at least 2 characters" }),
  type: z.nativeEnum(AttributeTypes),
  values: z.array(z.string()).optional(),
  required: z.boolean().default(false),
  filterable: z.boolean().default(true),
  isActive: z.boolean().default(true)
});

const Attributes = () => {
  const [attributes, setAttributes] = useState([
    {
      id: '1',
      name: 'Color',
      slug: 'color',
      type: AttributeTypes.COLOR,
      values: ['Red', 'Blue', 'Green'],
      required: true,
      filterable: true,
      isActive: true
    },
    {
      id: '2',
      name: 'Size',
      slug: 'size',
      type: AttributeTypes.SELECT,
      values: ['Small', 'Medium', 'Large'],
      required: false,
      filterable: true,
      isActive: true
    }
  ]);

  const [attributeValues, setAttributeValues] = useState('');

  const form = useForm({
    resolver: zodResolver(attributeSchema),
    defaultValues: {
      name: '',
      slug: '',
      type: AttributeTypes.TEXT,
      values: [],
      required: false,
      filterable: true,
      isActive: true
    }
  });

  const onSubmit = (data: any) => {
    const newAttribute = {
      ...data,
      id: `${attributes.length + 1}`,
      values: attributeValues.split(',').map(v => v.trim()).filter(v => v)
    };
    setAttributes([...attributes, newAttribute]);
    form.reset();
    setAttributeValues('');
  };

  const handleDelete = (id: any) => {
    setAttributes(attributes.filter(attr => attr.id !== id));
  };

  const toggleActiveStatus = (id: any) => {
    setAttributes(attributes.map(attr => 
      attr.id === id ? { ...attr, isActive: !attr.isActive } : attr
    ));
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between border-b">
          <CardTitle className="text-2xl font-bold">Product Attributes</CardTitle>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Plus className="w-5 h-5" /> Add Attribute
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Create New Attribute</DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Attribute Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter attribute name" {...field} />
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
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Attribute Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select attribute type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {Object.entries(AttributeTypes).map(([key, value]) => (
                              <SelectItem key={key} value={value}>
                                {key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />

                  {/* Conditional Attribute Values Input */}
                  {['SELECT', 'MULTISELECT', 'COLOR'].includes(form.watch('type')?.toUpperCase()) && (
                    <FormItem>
                      <FormLabel>Attribute Values</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter comma-separated values" 
                          value={attributeValues}
                          onChange={(e) => setAttributeValues(e.target.value)}
                        />
                      </FormControl>
                      <FormLabel className="text-sm text-muted-foreground">
                        Separate multiple values with commas
                      </FormLabel>
                    </FormItem>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="required"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">
                              Required
                            </FormLabel>
                            <FormLabel className="text-sm text-muted-foreground">
                              Make this attribute mandatory
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

                    <FormField
                      control={form.control}
                      name="filterable"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">
                              Filterable
                            </FormLabel>
                            <FormLabel className="text-sm text-muted-foreground">
                              Allow filtering by this attribute
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

                  <FormField
                    control={form.control}
                    name="isActive"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">
                            Attribute Status
                          </FormLabel>
                          <FormLabel className="text-sm text-muted-foreground">
                            Activate or deactivate this attribute
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

                  <Button type="submit" className="w-full">Create Attribute</Button>
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
                <TableCell>Type</TableCell>
                <TableCell>Values</TableCell>
                <TableCell>Required</TableCell>
                <TableCell>Filterable</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attributes.map((attribute) => (
                <TableRow 
                  key={attribute.id} 
                  className={!attribute.isActive ? 'opacity-50' : ''}
                >
                  <TableCell>{attribute.name}</TableCell>
                  <TableCell>{attribute.slug}</TableCell>
                  <TableCell>{attribute.type}</TableCell>
                  <TableCell>{attribute.values?.join(', ') || 'N/A'}</TableCell>
                  <TableCell>
                    <span className={attribute.required ? 'text-green-600' : 'text-gray-400'}>
                      {attribute.required ? 'Yes' : 'No'}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={attribute.filterable ? 'text-green-600' : 'text-gray-400'}>
                      {attribute.filterable ? 'Yes' : 'No'}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Switch
                      checked={attribute.isActive}
                      onCheckedChange={() => toggleActiveStatus(attribute.id)}
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
                        onClick={() => handleDelete(attribute.id)}
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

export default Attributes;