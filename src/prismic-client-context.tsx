import React, { createContext, useContext, ReactNode } from 'react';
import * as prismic from '@prismicio/client';

const routes = [
    {
      type: "photos",
      path: "/:uid",
    },
  ];
// Create the Prismic client
const prismicClient = prismic.createClient("caffeineforbreakfast", {
    routes,
    fetch,
    accessToken: import.meta.env.VITE_PRISMIC_ACCESS_TOKEN
  });

// Create context for the Prismic client
const PrismicClientContext = createContext(prismicClient);

// This is a custom hook to use the Prismic client in components
export const usePrismicClient = () => {
  return useContext(PrismicClientContext);
};

// Create a provider to wrap the root of the app and provide the client
interface PrismicProviderProps {
  children: ReactNode;
}

export const PrismicProvider: React.FC<PrismicProviderProps> = ({ children }) => {
  return (
    <PrismicClientContext.Provider value={prismicClient}>
      {children}
    </PrismicClientContext.Provider>
  );
};