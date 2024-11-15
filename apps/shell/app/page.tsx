import { SandboxForm } from "./components/sandbox-form";


export default function Home() {
  return (
    <div className="p-10"> 
      <h1 className="text-3xl font-bold">Sandbox</h1>
      <p className="max-w-2xl text-lg font-light text-foreground">Activate/deactivate micro apps. Make sure all apps are running.</p>
      <div className="mt-5">
        <SandboxForm />
      </div>
    </div>
  );
}
