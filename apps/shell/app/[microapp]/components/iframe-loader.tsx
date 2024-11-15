"use client";

import { useApp } from "@/hooks/use-app";
import { microAppConfig } from "@/lib/config";
import React, { useEffect, useState } from "react";

interface IframeState {
  loading: boolean;
  app_port?: number;
}

export const IframeLoader: React.FC<{ pathname: string }> = ({ pathname }) => {
  const config = useApp();

  const [iframeState, setIframeState] = useState<IframeState>({
    loading: true,
  });

  useEffect(() => {
    // const app = config.microApps.find((key) => key === pathname);

    // if (!app) {
    //   setIframeState({ loading: false });
    //   return;
    // }

    // const app_details = microAppConfig.find((details) => (details.key = app));

    // if (!app_details) {
    //   setIframeState({ loading: false });
    //   return;
    // }

    // setIframeState({ loading: false, app_port: app_details.port });
  }, []);

  if (iframeState.loading) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (!iframeState.app_port) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">404 page not found</h1>
      </div>
    );
  }

  return (
    <iframe
      className="border-0 w-full h-full block overflow-hidden"
      src={`http://localhost:${iframeState.app_port}`}
    ></iframe>
  );
};
