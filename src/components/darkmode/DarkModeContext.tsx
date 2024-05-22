import React, { createContext, useContext, useState, ReactNode } from "react";

interface DarkModeContextType {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<string>("dark");
  
  return (
    <DarkModeContext.Provider value={{ mode, setMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
