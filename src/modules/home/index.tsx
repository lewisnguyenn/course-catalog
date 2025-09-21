"use client";

import Header from "@/layout/header";
import B1 from "../b1";
import { FilterProvider } from "@/hooks/filter-context";

export default function HomeClient() {
  return (
    <FilterProvider>
      <div className="mx-auto min-h-screen max-w-[1990px] px-5 md:px-20">
        <Header />
        <B1 />
      </div>
    </FilterProvider>
  );
}
