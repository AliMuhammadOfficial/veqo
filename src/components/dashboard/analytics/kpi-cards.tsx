"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const kpiData = [
  {
    title: "Total Revenue",
    value: { daily: "$1,450.72", weekly: "$10,155.04", monthly: "$45,231.89" },
    change: { daily: 5.2, weekly: 12.5, monthly: 20.1 },
    icon: DollarSign,
    description: "Compared to previous period",
  },
  {
    title: "Orders",
    value: { daily: "45", weekly: "315", monthly: "1,205" },
    change: { daily: -1.5, weekly: 2.3, monthly: -3.2 },
    icon: ShoppingCart,
    description: "Conversion rate: 3.2%",
  },
  {
    title: "New Customers",
    value: { daily: "12", weekly: "84", monthly: "324" },
    change: { daily: 8.5, weekly: 12.7, monthly: 18.5 },
    icon: Users,
    description: "Retention rate: 68%",
  },
  {
    title: "Conversion Rate",
    value: { daily: "2.1%", weekly: "2.3%", monthly: "2.4%" },
    change: { daily: 3.1, weekly: 5.4, monthly: 7.2 },
    icon: TrendingUp,
    description: "Goal: 3.0%",
  },
];

const formatValue = (value: string | number) => {
  if (typeof value === "string") {
    if (value.includes("%")) return value;
    if (value.includes("$")) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(parseFloat(value.replace("$", "")));
    }
    return value;
  }
  return new Intl.NumberFormat("en-US").format(Number(value));
};

// Gradient backgrounds for cards
const gradients = {
  revenue: "bg-gradient-to-br from-blue-50 to-blue-100",
  orders: "bg-gradient-to-br from-purple-50 to-purple-100",
  customers: "bg-gradient-to-br from-green-50 to-green-100",
  conversion: "bg-gradient-to-br from-orange-50 to-orange-100",
};

export const KPISkeleton = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-10 w-[400px] bg-gray-200 rounded" />
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-[150px] bg-gray-200 rounded" />
      ))}
    </div>
  </div>
);

export function KPICards() {
  const [period, setPeriod] = useState<"daily" | "weekly" | "monthly">(
    "monthly"
  );

  return (
    <div className="space-y-4">
      <Tabs
        value={period}
        onValueChange={(value) =>
          setPeriod(value as "daily" | "weekly" | "monthly")
        }
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi) => (
          <Card
            key={kpi.title}
            className={`relative overflow-hidden transition-all hover:shadow-lg ${
              kpi.title === "Total Revenue"
                ? gradients.revenue
                : kpi.title === "Orders"
                ? gradients.orders
                : kpi.title === "New Customers"
                ? gradients.customers
                : gradients.conversion
            }`}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatValue(kpi.value[period])}
              </div>
              <p className="text-xs text-muted-foreground">{kpi.description}</p>
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 ${
                  kpi.change[period] > 0 ? "bg-green-500" : "bg-red-500"
                }`}
                style={{ width: `${Math.abs(kpi.change[period])}%` }}
              />
              <p
                className={`text-xs ${
                  kpi.change[period] > 0 ? "text-green-500" : "text-red-500"
                } flex items-center absolute top-2 right-2`}
              >
                {kpi.change[period] > 0 ? (
                  <ArrowUpRight className="w-3 h-3 mr-1" />
                ) : (
                  <ArrowDownRight className="w-3 h-3 mr-1" />
                )}
                {Math.abs(kpi.change[period])}%
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
