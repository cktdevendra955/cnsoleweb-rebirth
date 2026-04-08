"use client";

import {
  MdAnalytics,
  MdChevronRight,
  MdArticle,
  MdGridView,
  MdPayments,
  MdSchedule,
  MdLocationOn,
  MdVerified,
} from "react-icons/md";

export default function DashboardContent() {
  return (
    <main className="pt-5 px-4 md:px-8 pb-12 min-h-screen bg-[#f9f9ff]">
      
      {/* Header */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          Good Morning, Alex
        </h2>
        <p className="text-slate-500 mt-1">
          You have 4 new referrals and 12 curated job matches waiting for you.
        </p>
      </section>

      {/* Top Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">

        {/* ATS Score */}
        <div className="lg:col-span-4 bg-white/70 backdrop-blur-md border rounded-2xl p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between mb-6">
              <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs font-bold">
                ATS Score
              </span>
              <MdAnalytics className="text-slate-400" size={22} />
            </div>

            <div className="flex items-end gap-2 mb-4">
              <span className="text-4xl md:text-5xl font-black">85</span>
              <span className="text-xl text-slate-400">/100</span>
            </div>

            <p className="text-sm text-slate-500 mb-6">
              Your resume is highly optimized. Only 4% score higher.
            </p>
          </div>

          <div className="w-full bg-slate-200 h-2 rounded-full">
            <div className="bg-gradient-to-r from-indigo-500 to-violet-500 h-full w-[85%] rounded-full"></div>
          </div>
        </div>

        {/* Profile Strength */}
        <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl shadow-sm flex flex-col md:flex-row items-center gap-6 relative">
          
          {/* Circle */}
          <div className="relative w-28 h-28">
            <svg className="w-full h-full -rotate-90">
              <circle cx="56" cy="56" r="50" strokeWidth="8" className="text-slate-200" fill="transparent" />
              <circle
                cx="56"
                cy="56"
                r="50"
                strokeWidth="8"
                className="text-indigo-600"
                fill="transparent"
                strokeDasharray="314"
                strokeDashoffset="80"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xl font-bold">78%</span>
              <span className="text-xs text-slate-500">Strength</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-lg font-bold mb-2">Profile Integrity</h3>
            <p className="text-sm text-slate-500 mb-3">
              Complete your portfolio to increase visibility.
            </p>
            <button className="flex items-center gap-1 text-indigo-600 font-semibold">
              Finish setup <MdChevronRight />
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <QuickCard
            icon={<MdArticle />}
            title="Resume Preview"
            subtitle="Updated 2 days ago"
          />
          <QuickCard
            icon={<MdGridView />}
            title="Portfolio Link"
            subtitle="4 active projects"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Skills */}
        <div className="lg:col-span-4 bg-white p-6 md:p-8 rounded-2xl">
          <h3 className="font-bold mb-6">Skill Benchmarks</h3>

          {[
            { name: "UI Design", value: 94 },
            { name: "Prototyping", value: 82 },
            { name: "Strategy", value: 75 },
            { name: "Research", value: 68 },
            { name: "Design Systems", value: 88 },
          ].map((skill) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between text-xs text-slate-500">
                <span>{skill.name}</span>
                <span className="text-indigo-600">{skill.value}%</span>
              </div>
              <div className="h-1.5 bg-slate-200 rounded-full mt-1">
                <div
                  className="h-full bg-indigo-600 rounded-full"
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Jobs */}
        <div className="lg:col-span-8">
          <div className="flex justify-between mb-6">
            <h3 className="font-bold text-lg">Recommended for You</h3>
            <span className="text-indigo-600 text-sm cursor-pointer">
              View All
            </span>
          </div>

          <div className="space-y-4">
            <JobCard
              title="Senior Product Designer"
              company="Stripe • Remote"
              salary="$180k - $240k"
              type="Full-time"
              match="92%"
            />

            <JobCard
              title="Visual Interaction Lead"
              company="Airbnb • NY"
              salary="$210k - $265k"
              type="On-site"
              match="88%"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

function QuickCard({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4 hover:bg-slate-50 cursor-pointer">
      <div className="w-10 h-10 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-lg">
        {icon}
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-xs text-slate-500">{subtitle}</p>
      </div>
    </div>
  );
}

function JobCard({
  title,
  company,
  salary,
  type,
  match,
}: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex justify-between">
      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="text-sm text-slate-500">{company}</p>

        <div className="flex gap-3 mt-3 text-xs">
          <span className="bg-slate-100 px-2 py-1 rounded flex items-center gap-1">
            <MdPayments /> {salary}
          </span>
          <span className="bg-slate-100 px-2 py-1 rounded flex items-center gap-1">
            <MdSchedule /> {type}
          </span>
        </div>
      </div>

      <div className="text-right">
        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded flex items-center gap-1">
          <MdVerified /> {match}
        </span>
        <p className="text-xs text-slate-400 mt-2">Updated</p>
      </div>
    </div>
  );
}