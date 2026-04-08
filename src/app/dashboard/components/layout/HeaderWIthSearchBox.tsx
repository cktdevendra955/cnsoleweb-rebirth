"use client";

import { Dispatch, SetStateAction } from "react";
import {
  MdSearch,
  MdNotifications,
  MdSettings,
  MdMenu,
} from "react-icons/md";

interface HeaderProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ setIsOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 md:left-[260px] right-0 h-16 bg-white/80 backdrop-blur-md border-b flex items-center justify-between px-4 md:px-8 z-40">
      
      {/* LEFT */}
      <div className="flex items-center gap-4 w-full max-w-md">
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <MdMenu size={26} />
        </button>

        {/* Search */}
        <div className="relative w-full">
          <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-slate-100 rounded-full py-2 pl-10 pr-4 text-sm"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4 md:gap-6">
        
        {/* Notifications */}
        <button className="hover:bg-slate-100 p-2 rounded-full">
          <MdNotifications size={22} />
        </button>

        {/* Settings (HIDDEN ON MOBILE) */}
        <button className="hidden md:block hover:bg-slate-100 p-2 rounded-full">
          <MdSettings size={22} />
        </button>

        {/* Profile */}
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmxf1YjQvNV5Ldh6BcLoPKLCCLbmav_dqvMy5ueHGH_zFAJgN4Ln88bkH2aj-fUzfE6toNNEyO16XGvsaPU2Dk9GX_d-Cliz4Kh_egTPqLMxdaBm8hari8XSdEuKcpsAk5s6vRNfvB9qsxSkYuJGqf1-R53B8I5cjva8RLyEEcqmNXg8mPKkNZqnqSlSWQSzB5qM4qjKYBUqbWuRZfwhUZbRSJTD6tg3YGycfjx7jPnNrJXjaJ5xK8cKzjOf1ojB2cAqkrsonzKesz"
          className="w-9 h-9 rounded-full object-cover"
          alt="user"
        />
      </div>
    </header>
  );
}