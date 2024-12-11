/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

const topProducts = [
  { name: "Product A", sales: 120, revenue: "$2,400", progress: 100 },
  { name: "Product B", sales: 80, revenue: "$1,600", progress: 66 },
  { name: "Product C", sales: 60, revenue: "$1,200", progress: 50 },
  { name: "Product D", sales: 40, revenue: "$800", progress: 33 },
  { name: "Product E", sales: 20, revenue: "$400", progress: 16 },
  { name: "Product F", sales: 15, revenue: "$300", progress: 12 },
  { name: "Product G", sales: 10, revenue: "$200", progress: 8 },
];

export function TopProducts() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <ul className="space-y-6">
            {topProducts.map((product, _index) => (
              <li key={product.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{product.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {product.revenue}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={product.progress} className="h-2" />
                  <span className="text-sm text-muted-foreground w-10">
                    {product.sales}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
