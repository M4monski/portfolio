// src/app/ActiveSectionContext.js (or a new 'contexts' folder)
'use client';

import { createContext, useState, useContext } from 'react';

const ActiveSectionContext = createContext(null);

export function ActiveSectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState(''); // Default active section

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      'useActiveSection must be used within an ActiveSectionProvider'
    );
  }
  return context;
}
