'use client'

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import B1 from "../b1";

export default function HomeClient() {
  return (
    <div className="mx-auto min-h-screen max-w-[1990px]">
      <Header />
      <B1 />
      <Footer />
    </div>
  );
}