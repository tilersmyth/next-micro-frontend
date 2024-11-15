import { LayoutDashboard, Boxes, ShoppingBag, Users } from "lucide-react";

export const microAppConfig = [
  {
    title: "Dashboard",
    key: "dashboard",
    port: 3001,
    icon: LayoutDashboard,
  },
  {
    title: "Inventory",
    key: "inventory",
    port: 3002,
    icon: Boxes,
  },
  {
    title: "Orders",
    key: "orders",
    port: 3003,
    icon: ShoppingBag,
  },
  {
    title: "Customers",
    key: "customers",
    port: 3004,
    icon: Users,
  },
];
