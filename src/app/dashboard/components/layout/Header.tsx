"use client";

import { Dispatch, SetStateAction } from "react";
import {
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
      
      <div className="flex items-center gap-4">      
        
        <button
          className="md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <MdMenu size={26} />
        </button>

        
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold">
            R
          </div>
          <span className="text-lg font-bold tracking-tight">
            ReferEdge
          </span>
        </div>
      </div>

      
      <div className="flex items-center gap-4 md:gap-6">
        
        
        <button className="hover:bg-slate-100 p-2 rounded-full transition">
          <MdNotifications size={22} />
        </button>

        
        <button className="hidden md:block hover:bg-slate-100 p-2 rounded-full transition">
          <MdSettings size={22} />
        </button>

        
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmxf1YjQvNV5Ldh6BcLoPKLCCLbmav_dqvMy5ueHGH_zFAJgN4Ln88bkH2aj-fUzfE6toNNEyO16XGvsaPU2Dk9GX_d-Cliz4Kh_egTPqLMxdaBm8hari8XSdEuKcpsAk5s6vRNfvB9qsxSkYuJGqf1-R53B8I5cjva8RLyEEcqmNXg8mPKkNZqnqSlSWQSzB5qM4qjKYBUqbWuRZfwhUZbRSJTD6tg3YGycfjx7jPnNrJXjaJ5xK8cKzjOf1ojB2cAqkrsonzKesz"
          className="w-9 h-9 rounded-full object-cover"
          alt="user"
        />
      </div>
    </header>
  );
}