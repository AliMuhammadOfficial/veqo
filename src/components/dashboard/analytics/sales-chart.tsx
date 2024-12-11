"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = {
  daily: [
    { name: "Mon", sales: 400, revenue: 240 },
    { name: "Tue", sales: 300, revenue: 139 },
    { name: "Wed", sales: 500, revenue: 380 },
    { name: "Thu", sales: 450, revenue: 390 },
    { name: "Fri", sales: 600, revenue: 480 },
    { name: "Sat", sales: 550, revenue: 380 },
    { name: "Sun", sales: 700, revenue: 430 },
  ],
  weekly: [
    { name: "Week 1", sales: 2000, revenue: 1200 },
    { name: "Week 2", sales: 2200, revenue: 1300 },
    { name: "Week 3", sales: 2100, revenue: 1250 },
    { name: "Week 4", sales: 2300, revenue: 1400 },
  ],
  monthly: [
    { name: "Jan", sales: 4000, revenue: 2400 },
    { name: "Feb", sales: 3000, revenue: 1398 },
    { name: "Mar", sales: 5000, revenue: 3800 },
    { name: "Apr", sales: 4500, revenue: 3908 },
    { name: "May", sales: 6000, revenue: 4800 },
    { name: "Jun", sales: 5500, revenue: 3800 },
    { name: "Jul", sales: 7000, revenue: 4300 },
  ],
};

export function SalesChart() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [period, setPeriod] = useState<"daily" | "weekly" | "monthly">(
    "monthly"
  );

  return (
    <Card className="col-span-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Sales Overview</CardTitle>
      </CardHeader>
      <CardContent className="h-[400px]">
        <ChartContainer
          config={{
            sales: {
              label: "Sales",
              color: "hsl(var(--primary))",
            },
            revenue: {
              label: "Revenue",
              color: "hsl(var(--secondary))",
            },
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data[period]}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-sales)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-sales)"
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-revenue)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-revenue)"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="var(--color-sales)"
                fillOpacity={1}
                fill="url(#colorSales)"
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="var(--color-revenue)"
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
