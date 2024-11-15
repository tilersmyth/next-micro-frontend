import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  await prisma.microApp.createMany({
    data: [
      { title: "Dashboard", key: "dashboard", port: 3001 },
      { title: "Inventory", key: "inventory", port: 3002 },
      { title: "Orders", key: "orders", port: 3003 },
      { title: "Customers", key: "customers", port: 3004 },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
