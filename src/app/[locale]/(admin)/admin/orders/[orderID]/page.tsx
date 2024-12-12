import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface OrderDetails {
  id: string;
  orderNumber: string;
  status: "pending" | "processing" | "completed" | "cancelled";
  customerName: string;
  customerEmail: string;
  totalAmount: number;
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
  createdAt: string;
  shippingAddress: {
    street: string;
    city: string;
    country: string;
    postalCode: string;
  };
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function OrderDetailsPage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const locale = (await params).locale;
  const orderID = "ORD001"; // Replace with your actual order ID
  const order: OrderDetails = {
    id: orderID,
    orderNumber: "ORD001",
    status: "pending" as const,
    customerName: "John Doe",
    customerEmail: "john@example.com",
    totalAmount: 250.0,
    items: [
      {
        id: "P001",
        name: "Product 1",
        quantity: 1,
        price: 250.0,
      },
    ],
    createdAt: "2024-01-15",
    shippingAddress: {
      street: "1234 Main St",
      city: "Springfield",
      country: "USA",
      postalCode: "12345",
    },
  };

  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Order Details</h1>
        <Badge variant={getStatusVariant(order.status)}>
          {order.status.toUpperCase()}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Order Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Order Number
                </dt>
                <dd>{order.orderNumber}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Date</dt>
                <dd>{format(new Date(order.createdAt), "PPP")}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Total Amount
                </dt>
                <dd>${order.totalAmount.toFixed(2)}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Details</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd>{order.customerName}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd>{order.customerEmail}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Order Items</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">Item</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2">{item.name}</td>
                    <td className="py-2">{item.quantity}</td>
                    <td className="py-2">${item.price.toFixed(2)}</td>
                    <td className="py-2">
                      ${(item.quantity * item.price).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Actions</CardTitle>
            <CardDescription>Update order status</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Button disabled={order.status === "processing"}>
              Mark Processing
            </Button>
            <Button disabled={order.status === "completed"}>
              Mark Completed
            </Button>
            <Button
              variant="destructive"
              disabled={order.status === "cancelled"}
            >
              Cancel Order
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// function OrderDetailsSkeleton() {
//   return (
//     <div className="container mx-auto py-8 space-y-6">
//       <div className="flex justify-between items-center">
//         <Skeleton className="h-8 w-48" />
//         <Skeleton className="h-6 w-24" />
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {[1, 2, 3, 4].map((i) => (
//           <Card key={i}>
//             <CardHeader>
//               <Skeleton className="h-6 w-32" />
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 <Skeleton className="h-4 w-full" />
//                 <Skeleton className="h-4 w-full" />
//                 <Skeleton className="h-4 w-full" />
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

function getStatusVariant(
  status: OrderDetails["status"]
): "default" | "destructive" | "secondary" | "outline" {
  switch (status) {
    case "pending":
      return "secondary";
    case "processing":
      return "outline";
    case "completed":
      return "default";
    case "cancelled":
      return "destructive";
    default:
      return "default";
  }
}
