"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/dashboard/nav-main";
import { NavProjects } from "@/components/dashboard/nav-projects";
import { NavSecondary } from "@/components/dashboard/nav-secondary";
import { NavUser } from "@/components/dashboard/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "@/i18n/routing";

const data = {
  user: {
    name: "Admin",
    email: "admin@store.com",
    avatar: "/avatars/admin.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: PieChart,
      isActive: true,
      items: [
        {
          title: "Analytics",
          url: "/admin/dashboard/analytics",
        },
        {
          title: "Reports",
          url: "/admin/dashboard/reports",
        },
        {
          title: "Statistics",
          url: "/admin/dashboard/statistics",
        },
      ],
    },
    {
      title: "Products",
      url: "/admin/products",
      icon: Frame,
      items: [
        {
          title: "All Products",
          url: "/admin/products/all",
        },
        {
          title: "Categories",
          url: "/admin/products/categories",
        },
        {
          title: "Attributes",
          url: "/admin/products/attributes",
        },
        {
          title: "Inventory",
          url: "/admin/products/inventory",
        },
        // {
        //   title: "Collections",
        //   url: "/admin/products/collections",
        // },
      ],
    },
    {
      title: "Orders",
      url: "/admin/orders",
      icon: SquareTerminal,
      items: [
        {
          title: "All Orders",
          url: "/admin/orders/all",
        },
        {
          title: "Pending",
          url: "/admin/orders/pending",
        },
        {
          title: "Fulfilled",
          url: "/admin/orders/fulfilled",
        },
        {
          title: "Returns",
          url: "/admin/orders/returns",
        },
      ],
    },
    {
      title: "Customers",
      url: "/admin/customers",
      icon: Bot,
      items: [
        {
          title: "All Customers",
          url: "/admin/customers/all",
        },
        {
          title: "Segments",
          url: "/admin/customers/segments",
        },
        {
          title: "Reviews",
          url: "/admin/customers/reviews",
        },
      ],
    },
    {
      title: "Settings",
      url: "/admin/settings",
      icon: Settings2,
      items: [
        {
          title: "Store Settings",
          url: "/admin/settings/store",
        },
        {
          title: "Payment",
          url: "/admin/settings/payment",
        },
        {
          title: "Shipping",
          url: "/admin/settings/shipping",
        },
        {
          title: "Team",
          url: "/admin/settings/team",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Help Center",
      url: "/help",
      icon: LifeBuoy,
    },
    {
      title: "Documentation",
      url: "/docs",
      icon: BookOpen,
    },
  ],
  projects: [
    {
      name: "Marketing",
      url: "/marketing",
      icon: Send,
    },
    {
      name: "Discounts",
      url: "/discounts",
      icon: Map,
    },
    {
      name: "Analytics",
      url: "/analytics",
      icon: PieChart,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/" className="flex items-center gap-3 w-full">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="flex flex-col h-full">
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
