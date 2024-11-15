import prisma from "@/lib/prisma";
import type { MicroApp } from "@prisma/client";

export async function POST(req: Request) {
  const updates = (await req.json()) as MicroApp[];

  try {
    Promise.all(
      updates.map(async (update) => {
        await prisma.microApp.update({
          where: { id: update.id },
          data: update,
        });
      })
    );

    return Response.json({})
  } catch (error) {
    return Response.json({error}, {status: 500})
  }
}
