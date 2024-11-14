import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import { LayoutDashboard, Boxes, ShoppingBag, Users } from "lucide-react"
import Link from "next/link"

  // Menu items.
const items = [
    {
      title: "dashboard",
      url: "dashboard",
      icon: LayoutDashboard,
    },
    {
        title: "Inventory",
        url: "inventory",
        icon: Boxes,
      },
    {
      title: "Orders",
      url: "orders",
      icon: ShoppingBag,
    },
    {
      title: "Customers",
      url: "customers",
      icon: Users,
    },
   
  ]
   
  export function AppSidebar() {
    return (
        <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }