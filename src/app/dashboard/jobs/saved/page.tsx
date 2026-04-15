"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  DollarSign,
  Clock,
  Briefcase,
  Search,
  Trash2,
  ExternalLink,
} from "lucide-react";

const savedJobs = [
  {
    id: 1,
    company: "Tesla",
    logo: "https://picsum.photos/seed/tesla/100/100",
    role: "Interface Designer",
    location: "Austin, TX",
    salary: "$140k - $200k",
    type: "Full-time",
    posted: "3 days ago",
  },
  {
    id: 2,
    company: "Slack",
    logo: "https://picsum.photos/seed/slack/100/100",
    role: "Senior UI Engineer",
    location: "Remote",
    salary: "$160k - $210k",
    type: "Full-time",
    posted: "5 days ago",
  },
  {
    id: 3,
    company: "Uber",
    logo: "https://picsum.photos/seed/uber/100/100",
    role: "Product Designer",
    location: "San Francisco, CA",
    salary: "$150k - $220k",
    type: "Hybrid",
    posted: "1 week ago",
  },
];

export default function SavedJobsPage() {
  return (
    <div className="space-y-8 pb-20">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Saved Jobs
          </h2>
          <p className="text-slate-500 mt-1">
            Jobs you've bookmarked for later review.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search saved jobs..."
            className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none text-sm"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedJobs.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-all group"
          >
            {/* Top */}
            <div className="flex justify-between items-start mb-5">
              <img
                src={job.logo}
                alt={job.company}
                className="w-14 h-14 rounded-xl object-cover shadow-sm"
              />

              <div className="flex gap-2">
                <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition">
                  <Trash2 size={18} />
                </button>
                <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition">
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-2">
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary truncate">
                {job.role}
              </h3>
              <p className="text-primary font-semibold">
                {job.company}
              </p>

              <div className="pt-3 space-y-2 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  {job.location}
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign size={14} />
                  {job.salary}
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={14} />
                  {job.type}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t flex items-center justify-between">
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock size={12} />
                Saved {job.posted}
              </span>

              <button className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg shadow hover:scale-105 transition">
                Apply
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}