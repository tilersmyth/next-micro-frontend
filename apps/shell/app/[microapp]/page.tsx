import { microAppConfig } from "@/lib/config";

export default async function Home({
  params,
}: {
  params: Promise<{ microapp: string }>;
}) {
  const microapp = (await params).microapp;

  const app = microAppConfig.find((app) => app.key === microapp);

  if (!app) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">404 page not found</h1>
      </div>
    );
  }

  return (
    <iframe
      className="border-0 w-full h-full block overflow-hidden"
      src={`http://localhost:${app.port}`}
    ></iframe>
  );
}
