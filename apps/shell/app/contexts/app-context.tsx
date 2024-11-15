"use client";

import React, { createContext, ReactNode, useState } from "react";
import type { MicroApp } from '@prisma/client'

export interface AppContextProps {
  microApps: MicroApp[];
  // eslint-disable-next-line no-unused-vars
  onSetMicroApps: (microApps: MicroApp[]) => void;
}

const initialState: AppContextProps = {
  microApps: [],
  onSetMicroApps: () => {},
};

const AppContext = createContext(initialState);

interface Props {
    children: ReactNode;
    apps: MicroApp[]
}

const AppProvider: React.FC<Props> = ({ children, apps }) => {
  const [microAppState, setMicroAppState] =
    useState<AppContextProps>({microApps: apps, onSetMicroApps: () => {}});

  const onSetMicroApps = (microApps: MicroApp[]) => {
    setMicroAppState({ ...microAppState, microApps });
  };

  return (
    <AppContext.Provider
      value={{
        ...microAppState,
        onSetMicroApps,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
