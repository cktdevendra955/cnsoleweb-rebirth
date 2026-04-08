"use client";

import { useState } from "react";
import Sidebar from "@/src/app/dashboard/components/layout/Sidebar";
import Header from "@/src/app/dashboard/components/layout/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#f9f9ff] min-h-screen">
      
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header setIsOpen={setIsOpen} />

      <main className="pt-16 px-4 md:px-8 md:ml-[260px] transition-all">
        {children}
      </main>
    </div>
  );
}