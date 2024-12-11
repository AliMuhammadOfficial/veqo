"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Link } from "@/i18n/routing";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup className="w-full">
      <SidebarGroupLabel className="px-4 py-3 text-lg font-semibold">
        Platform
      </SidebarGroupLabel>
      <SidebarMenu className="w-full space-y-1">
        {items.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  className={`w-full px-4 py-3 transition-colors cursor-pointer
            ${
              item.isActive
                ? "bg-accent/80 text-accent-foreground"
                : "hover:bg-accent/50"
            }`}
                >
                  {!item.items?.length ? (
                    <Link
                      href={item.url}
                      className="flex items-center gap-4 w-full"
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      <span className="text-[15px] font-medium">
                        {item.title}
                      </span>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-4 w-full">
                      <item.icon className="h-5 w-5 shrink-0" />
                      <span className="text-[15px] font-medium">
                        {item.title}
                      </span>
                      <ChevronRight
                        className="ml-auto h-4 w-4 shrink-0 transition-transform 
              duration-200 data-[state=open]:rotate-90"
                      />
                    </div>
                  )}
                </SidebarMenuButton>
              </CollapsibleTrigger>
              {item.items?.length ? (
                <CollapsibleContent>
                  <SidebarMenuSub className="py-1">
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          className={`w-full px-4 py-2.5 transition-colors 
                cursor-pointer group hover:bg-accent/30
                ${
                  subItem.url === window.location.pathname
                    ? "bg-accent/50 text-accent-foreground"
                    : ""
                }`}
                        >
                          <Link
                            href={subItem.url}
                            className="flex items-center gap-3 w-full"
                          >
                            <span
                              className="text-[14px] pl-4 group-hover:translate-x-1 
                  transition-transform duration-200"
                            >
                              {subItem.title}
                            </span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
