import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Eye, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useFormatter } from "next-intl";
import { useRouter } from "@/i18n/routing";

interface Order {
  id: string;
  customer: string;
  total: string;
  status: "Completed" | "Processing" | "Shipped" | "Pending";
  date: string;
}

const orders: Order[] = [
  {
    id: "ORD001",
    customer: "John Doe",
    total: "250.00",
    status: "Completed",
    date: "2024-01-15",
  },
  {
    id: "ORD002",
    customer: "Jane Doe",
    total: "150.00",
    status: "Processing",
    date: "2024-01-14",
  },
  {
    id: "ORD003",
    customer: "Alice Doe",
    total: "350.00",
    status: "Shipped",
    date: "2024-01-13",
  },
  {
    id: "ORD004",
    customer: "Bob Doe",
    total: "450.00",
    status: "Pending",
    date: "2024-01-12",
  },
];

const getStatusColor = (status: Order["status"]) => {
  const styles = {
    Completed: "default",
    Processing: "secondary",
    Shipped: "outline",
    Pending: "secondary",
  } as const;
  return styles[status];
};

export function RecentOrders() {
  const format = useFormatter();
  const formatCurrency = (value: number) =>
    format.number(value, { style: "currency", currency: "USD" });
  const router = useRouter();

  return (
    <Card className="col-span-4 lg:col-span-3">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Orders</CardTitle>
        <Button variant="outline" size="sm">
          View All Orders
        </Button>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full rounded-md border">
          <Table>
            <TableHeader className="bg-muted/50 sticky top-0">
              <TableRow>
                <TableHead className="w-[100px]">Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>
                    {new Date(order.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {formatCurrency(parseFloat(order.total))}
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => {
                            router.push(`/admin/orders/${order.id}`);
                          }}
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>Update Status</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Cancel Order
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
