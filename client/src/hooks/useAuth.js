import React, { createContext, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);
  
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAuth = () => useContext(AppContext);
