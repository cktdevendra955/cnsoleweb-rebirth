"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      
      {/* Desktop Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* ✅ MOBILE SIDEBAR (FULL HEIGHT FIXED) */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 left-0 w-64 h-[100dvh] bg-white z-50 shadow-2xl flex flex-col"
            >
              <Sidebar isOpen={true} isMobile={true} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main */}
      <main className="flex-1 flex flex-col min-w-0">
        <Header
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          openMobile={() => setIsMobileOpen(true)}
        />

        <div className="flex-1 overflow-auto bg-[#f7f9fb] text-[#191c1e]">{children}</div>
      </main>
    </div>
  );
}