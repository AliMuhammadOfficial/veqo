import React from "react";

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomSelect from "../common/CustomSelect";

const options = [
  { label: "Pending", value: "Pending" },
  { label: "Processing", value: "Processing" },
  { label: "Completed", value: "Completed" },
  { label: "Cancelled", value: "Cancelled" },
];

interface ProductAddDialogProps {
  product: any;
}

const ProductAddDialog = (props: ProductAddDialogProps) => {
  const { product } = props;

  const handleSelectChange = (selected: any) => {
    console.log("Selected ", selected, product);
  };

  return (
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle>Order Details - 1</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardHeader className="text-sm font-medium">
              Customer Info
            </CardHeader>
            <CardContent>
              <p className="text-sm">Test product</p>
              <p className="text-sm text-gray-500">test email</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-sm font-medium">
              Order Status
            </CardHeader>
            <CardContent>
              <CustomSelect
                options={options}
                handleChange={handleSelectChange}
                selected="Pending"
              />
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader className="text-sm font-medium">Products</CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {product?.products.map((product: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>
                      ${(product.quantity * product.price).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DialogContent>
  );
};

export default ProductAddDialog;
