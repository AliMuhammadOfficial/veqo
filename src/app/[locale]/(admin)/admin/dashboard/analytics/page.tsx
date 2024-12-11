"use client";

import { KPICards } from "@/components/dashboard/analytics/kpi-cards";
import { SalesChart } from "@/components/dashboard/analytics/sales-chart";
import { RevenueReport } from "@/components/dashboard/analytics/revenue-report";
import { RecentOrders } from "@/components/dashboard/analytics/recent-orders";
import { TopProducts } from "@/components/dashboard/analytics/top-products";
import { CountrySales } from "@/components/dashboard/analytics/country-sales";
import { DeviceAnalytics } from "@/components/dashboard/analytics/device-analytics";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <KPICards />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full h-[400px] min-w-0 overflow-hidden">
          <SalesChart />
        </div>
        <div className="w-full h-[400px] min-w-0 overflow-hidden">
          <RevenueReport />
        </div>
      </div>
      <RecentOrders />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 h-[400px] min-w-0">
          <CountrySales />
        </div>
        <div className="lg:col-span-4 grid grid-cols-1 gap-6">
          <div className="h-[400px] min-w-0 bg-background/50 rounded-lg">
            <DeviceAnalytics />
          </div>
          <div className="h-[400px] min-w-0 bg-background/50 rounded-lg">
            <TopProducts />
          </div>
        </div>
      </div>
    </div>
  );
}
