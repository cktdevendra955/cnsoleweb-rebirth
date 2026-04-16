"use client";

import {
  LayoutDashboard,
  User,
  Search,
  Briefcase,
  Bookmark,
  Calendar,
  MessageCircle,
  Bell,
  Settings,
  Trash2,
  Sparkles,
} from "lucide-react";

export default function Page() {
  return (
    <div className="">
      
     

      {/* ================= MAIN ================= */}
      <main className=" w-full min-h-screen">
        {/* CONTENT */}
        <div className="pt-24 px-12 mx-auto">
          
          {/* HEADER TEXT */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs text-indigo-600 uppercase font-bold">
                Curation
              </span>
              <h2 className="text-4xl font-bold">Saved Jobs</h2>
              <p className="text-gray-500 mt-2">
                Manage your shortlisted opportunities.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-2 rounded-full bg-gray-200 text-sm">
                Filter
              </button>
              <button className="px-6 py-2 rounded-full bg-indigo-600 text-white text-sm">
                Search Jobs
              </button>
            </div>
          </div>

          {/* GRID */}
          <div className="grid lg:grid-cols-12 gap-6">

            {/* BIG CARD */}
            <div className="lg:col-span-8 bg-white p-8 rounded-3xl shadow">
              <div className="flex justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold">
                    Senior Product Designer
                  </h3>
                  <p className="text-gray-500">Linear · Remote</p>
                </div>
                <span className="text-indigo-600 font-bold">98%</span>
              </div>

              <div className="flex gap-3 mb-6">
                <Tag text="Figma" />
                <Tag text="Design Systems" />
                <Tag text="Strategy" />
              </div>

              <div className="flex justify-between">
                <p className="text-sm text-gray-400">Saved 2 days ago</p>
                <div className="flex gap-3">
                  <button className="p-3 bg-gray-100 rounded-xl">
                    <Trash2 size={18} />
                  </button>
                  <button className="px-6 bg-indigo-600 text-white rounded-xl">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* SIDE CARD */}
            <div className="lg:col-span-4 bg-indigo-600 text-white p-8 rounded-3xl">
              <Sparkles className="mb-4" />
              <h4 className="font-bold mb-2">Alignment</h4>
              <p className="text-sm opacity-80">
                Your profile matches 98% of this role.
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function SidebarItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer ${
        active
          ? "bg-white text-indigo-600 font-semibold"
          : "text-gray-500 hover:bg-white"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="px-4 py-2 bg-gray-100 rounded-xl text-sm text-gray-600">
      {text}
    </span>
  );
}