import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

const revenueData = [
  { source: "Direct Sales", revenue: "$5,000", growth: "+12%" },
  { source: "Partner Sales", revenue: "$3,500", growth: "+8%" },
  { source: "Online Store", revenue: "$4,200", growth: "+15%" },
  { source: "Marketplace", revenue: "$2,800", growth: "+5%" },
  { source: "Affiliate", revenue: "$1,500", growth: "+20%" },
  { source: "Social Media", revenue: "$1,200", growth: "+25%" },
  { source: "Email Marketing", revenue: "$2,300", growth: "+10%" },
];

export function RevenueReport() {
  const totalRevenue = revenueData.reduce(
    (sum, item) =>
      sum + parseFloat(item.revenue.replace("$", "").replace(",", "")),
    0
  );

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Revenue Report</CardTitle>
        <CardDescription>
          Breakdown of revenue sources and growth
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-4">
          ${totalRevenue.toLocaleString()}
        </div>
        <ScrollArea className="h-[300px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Source</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Growth</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {revenueData.map((item) => (
                <TableRow key={item.source}>
                  <TableCell>{item.source}</TableCell>
                  <TableCell>{item.revenue}</TableCell>
                  <TableCell className="text-green-500">
                    {item.growth}
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
