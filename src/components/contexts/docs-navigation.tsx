"use client";

import { createContext, useContext, type ReactNode } from "react";

export interface DocsNeighbour {
  name: string;
  url: string;
}

interface DocsNavigationContextValue {
  previous?: DocsNeighbour;
  next?: DocsNeighbour;
}

const DocsNavigationContext = createContext<DocsNavigationContextValue>({});

export function DocsNavigationProvider({
  previous,
  next,
  children,
}: DocsNavigationContextValue & { children: ReactNode }) {
  return (
    <DocsNavigationContext.Provider value={{ previous, next }}>
      {children}
    </DocsNavigationContext.Provider>
  );
}

export function useDocsNavigation(): DocsNavigationContextValue {
  return useContext(DocsNavigationContext);
}
