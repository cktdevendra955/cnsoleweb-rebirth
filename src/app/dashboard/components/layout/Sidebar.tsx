"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";

import { NAV_ITEMS } from "../../route/navigation";

export default function Sidebar({
  isOpen,
  isMobile = false,
}: {
  isOpen: boolean;
  isMobile?: boolean;
}) {
  const pathname = usePathname();

  
  const isActiveRoute = (path: string) => pathname.startsWith(path);
  
  const mainItems = NAV_ITEMS.filter((item) => item.section === "main");
  const secondaryItems = NAV_ITEMS.filter(
    (item) => item.section === "secondary"
  );

  
  const renderNavItem = (item: any) => {
    const isActive = isActiveRoute(item.path);

    return (
      <Link key={item.label} href={item.path}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`flex items-center gap-3 h-11 px-3 rounded-md transition ${
            isActive
              ? "bg-primary text-black shadow-sm"
              : "text-muted-foreground hover:bg-muted"
          } ${!isOpen && !isMobile && "justify-center px-0"}`}
        >
          <item.icon className="h-5 w-5 shrink-0" />
          {(isOpen || isMobile) && <span>{item.label}</span>}
        </motion.div>
      </Link>
    );
  };

  return (
    <motion.aside
      animate={{ width: isMobile ? 256 : isOpen ? 256 : 80 }}
      className={`flex flex-col border-r ${
        isMobile
          ? "w-64 bg-white"
          : "hidden md:flex bg-card/80 backdrop-blur-xl"
      }`}
    >
      <div className="flex flex-col h-[100dvh]">
        
        
        <div className="p-6 flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 bg-primary text-white flex items-center justify-center rounded-lg font-bold">
            Z
          </div>
          {(isOpen || isMobile) && (
            <span className="font-bold text-lg">Zenith</span>
          )}
        </div>

        
        <div className="flex-1 overflow-y-auto px-3 space-y-1 overscroll-contain">
          {mainItems.map(renderNavItem)}
          <div className="my-4 border-t" />        
          {secondaryItems.map(renderNavItem)}
        </div>

        
        <div className="p-4 border-t shrink-0">
          <button className="flex items-center gap-3 text-muted-foreground hover:text-red-500 transition">
            <LogOut className="h-5 w-5" />
            {(isOpen || isMobile) && "Logout"}
          </button>
        </div>
      </div>
    </motion.aside>
  );
}