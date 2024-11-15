"use client";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useApp } from "@/hooks/use-app";
import { Bug } from "lucide-react";
import Link from "next/link";

export function AppSidebarMenu() {
  const appState = useApp();
  const items = appState.microApps.filter((app) =>
   app.active
  );

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="/">
            <Bug />
            <span>Sandbox</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      {items.map((item) => (
        <SidebarMenuItem key={item.key}>
          <SidebarMenuButton asChild>
            <Link href={item.key}>
              {/* <item.icon /> */}
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
