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

const orders = [
  { id: "ORD001", customer: "John Doe", total: "$250.00", status: "Completed" },
  {
    id: "ORD002",
    customer: "Jane Smith",
    total: "$120.50",
    status: "Processing",
  },
  { id: "ORD003", customer: "Bob Johnson", total: "$75.20", status: "Shipped" },
  {
    id: "ORD004",
    customer: "Alice Brown",
    total: "$180.00",
    status: "Pending",
  },
  {
    id: "ORD005",
    customer: "Charlie Wilson",
    total: "$95.60",
    status: "Completed",
  },
  {
    id: "ORD006",
    customer: "Eva Martinez",
    total: "$310.75",
    status: "Processing",
  },
  { id: "ORD007", customer: "David Lee", total: "$55.30", status: "Shipped" },
  {
    id: "ORD008",
    customer: "Grace Taylor",
    total: "$140.20",
    status: "Pending",
  },
];

export function RecentOrders() {
  return (
    <Card className="col-span-4 lg:col-span-3">
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Total</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell className="text-right">
                    <Badge
                      variant={
                        order.status === "Completed"
                          ? "secondary"
                          : order.status === "Processing"
                          ? "outline"
                          : "default"
                      }
                    >
                      {order.status}
                    </Badge>
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
