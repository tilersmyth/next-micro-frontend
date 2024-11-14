export default async function Home({
  params,
}: {
  params: Promise<{ microapp: string }>;
}) {
  const microapp = (await params).microapp;

  let microapp_port = "";

  if (microapp === "dashboard") {
    microapp_port = "3001";
  } else if (microapp === "inventory") {
    microapp_port = "3002";
  }

  return (
    <iframe
      id="microapp-frame"
      src={`http://localhost:${microapp_port}`}
    ></iframe>
  );
}
