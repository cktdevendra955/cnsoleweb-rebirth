"use client";

import { Dispatch, SetStateAction } from "react";
import {
  MdDashboard,
  MdWork,
  MdDescription,
  MdClose,
} from "react-icons/md";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-[260px] bg-white border-r p-6 z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Mobile Close */}
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <MdClose size={24} />
          </button>
        </div>

        {/* Logo */}
        <div className="hidden md:block mb-8">
          <h1 className="text-xl font-bold text-indigo-600">ReferEdge</h1>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-2">
          <NavItem icon={<MdDashboard />} label="Dashboard" />
          <NavItem icon={<MdWork />} label="Jobs" />
          <NavItem icon={<MdDescription />} label="Resume" />
        </nav>
      </aside>
    </>
  );
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer text-slate-600 hover:bg-slate-100">
      {icon}
      <span>{label}</span>
    </div>
  );
}