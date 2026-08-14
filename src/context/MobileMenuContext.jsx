"use client";

import { createContext, useContext, useState } from "react";

const MobileMenuContext = createContext(null);

export function MobileMenuProvider({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <MobileMenuContext.Provider value={{ open, setOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export function useMobileMenu() {
  const ctx = useContext(MobileMenuContext);
  if (!ctx) throw new Error("useMobileMenu must be used within MobileMenuProvider");
  return ctx;
}
