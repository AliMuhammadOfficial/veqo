"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { MoreVertical, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import ProductAddDialog from "@/components/dashboard/products/ProductAddDialog";
import CustomSearch from "@/components/dashboard/common/CustomSearch";
import CustomDropdown from "@/components/dashboard/common/CustomDropdown";
import { useRouter } from "next/navigation";
import ProductWrapper from "@/components/dashboard/products/ProductWrapper";

interface Products {
  id: string;
  product: string;
  category: string;
  status: "pending" | "processing" | "completed" | "cancelled";
  date: string;
  total: number;
  price: number;
}

const MOCK_PRODUCTS: Products[] = [
  {
    id: "ORD001",
    product: "Test Product",
    category: "test",
    status: "pending",
    date: "2024-01-20",
    total: 10,
    price: 299.99,
  },
  {
    id: "ORD002",
    product: "Test Product",
    category: "test",
    status: "processing",
    date: "2024-01-19",
    total: 34,
    price: 299.99,
  },
  {
    id: "ORD003",
    product: "Test Product",
    category: "test",
    status: "completed",
    date: "2024-01-18",
    total: 55,
    price: 299.99,
  },
];

const dropdownOptions = [
  { label: "published", value: "published" },
  { label: "pending", value: "pending" },
  { label: "Sold", value: "Sold" },
];

export const getStatusColor = (status: string) => {
  const colors = {
    pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
    processing: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    completed: "bg-green-100 text-green-800 hover:bg-green-200",
    cancelled: "bg-red-100 text-red-800 hover:bg-red-200",
  };
  return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800";
};

export default function AllProducts() {
  const router = useRouter();
  const [filteredProducts, setFilteredProducts] =
    useState<Products[]>(MOCK_PRODUCTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Products | null>(null);
  const { toast } = useToast();

  //   const filteredOrders = products?.filter((product) => {
  //     const matchesSearch =
  //       order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       order.email.toLowerCase().includes(searchQuery.toLowerCase());
  //     const matchesStatus = !statusFilter || order.status === statusFilter;
  //     return matchesSearch && matchesStatus;
  //   });

  //   const handleStatusChange = async (
  //     orderId: string,
  //     newStatus: Order["status"]
  //   ) => {
  //     setIsLoading(true);
  //     try {
  //       // Simulate API call
  //       await new Promise((resolve) => setTimeout(resolve, 1000));

  //       setProducts(
  //         orders.map((order) =>
  //           order.id === orderId ? { ...order, status: newStatus } : order
  //         )
  //       );

  //       toast({
  //         title: "Status Updated",
  //         description: `Order ${orderId} has been marked as ${newStatus}`,
  //       });
  //     } catch (error: unknown) {
  //       console.error(error);
  //       toast({
  //         title: "Error",
  //         description: "Failed to update order status",
  //         variant: "destructive",
  //       });
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground">Manage your products</p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => router.push("/en/admin/products/create-product")}
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Product
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4 mb-6">
            <CustomSearch
              handleSearch={(e) => setSearchQuery(e.target.value)}
              search={searchQuery}
              placeholder="Search products..."
            />
            <CustomDropdown
              options={dropdownOptions}
              onChange={(selected: string) => setStatusFilter(selected)}
              selected="pending"
            />
          </div>

          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((n) => (
                <Skeleton key={n} className="h-16 w-full" />
              ))}
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product ID</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product?.id}>
                    <TableCell className="font-medium">{product?.id}</TableCell>
                    <TableCell>
                      <ProductWrapper />
                    </TableCell>
                    <TableCell className="capitalize">
                      <Badge className={getStatusColor(product?.status)}>
                        {product?.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(product?.date).toLocaleDateString()}
                    </TableCell>
                    <TableCell>{product?.total}</TableCell>
                    <TableCell>${product?.price?.toFixed(2)}</TableCell>
                    <TableCell>
                      <Dialog>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DialogTrigger asChild>
                              <DropdownMenuItem
                                onSelect={() => setSelectedOrder(product)}
                              >
                                View Details
                              </DropdownMenuItem>
                            </DialogTrigger>
                            <DropdownMenuItem>Edit Order</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              Cancel Order
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        {selectedOrder && (
                          <ProductAddDialog product={selectedOrder} />
                        )}
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
