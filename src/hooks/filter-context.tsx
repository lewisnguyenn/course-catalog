"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface FilterContextType {
  selectedFilter1: string;
  selectedFilter2: string;
  searchQuery: string;
  setSelectedFilter1: (filter: string) => void;
  setSelectedFilter2: (filter: string) => void;
  setSearchQuery: (query: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedFilter1, setSelectedFilter1] = useState<string>("All Course");
  const [selectedFilter2, setSelectedFilter2] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <FilterContext.Provider
      value={{
        selectedFilter1,
        selectedFilter2,
        searchQuery,
        setSelectedFilter1,
        setSelectedFilter2,
        setSearchQuery,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
