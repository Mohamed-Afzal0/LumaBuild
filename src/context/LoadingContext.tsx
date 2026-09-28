import React, { createContext, useContext } from "react";

export interface LoadingContextType {
  /** True while the loading screen is visible or exiting */
  isLoading: boolean;
  /** True once the loading screen has completely finished and left, allowing animations to run */
  isReady: boolean;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  isReady: true,
});

export const LoadingProvider: React.FC<{
  isLoading: boolean;
  isReady: boolean;
  children: React.ReactNode;
}> = ({ isLoading, isReady, children }) => {
  return (
    <LoadingContext.Provider value={{ isLoading, isReady }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = (): LoadingContextType => {
  return useContext(LoadingContext);
};

export default LoadingContext;
