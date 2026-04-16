"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-background text-on-surface antialiased">     
      
      <main className="pt-24 px-10 pb-16 min-h-screen">
        <section className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <p className="text-primary font-label text-[10px] tracking-widest mb-3">
              MONDAY, OCTOBER 24
            </p>
            <h1 className="text-5xl font-bold text-editorial-tight text-on-surface mb-4">
              Welcome back, Alex.
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
              Your profile strength is{" "}
              <span className="text-primary font-semibold">Excellent</span>. You
              have 3 new matching roles and an interview scheduled for tomorrow.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex gap-4">
            <button className="px-6 py-3 rounded-xxl bg-surface-container-high text-primary font-semibold text-sm hover:opacity-80 transition-all">
              Update Resume
            </button>
            <button className="px-8 py-3 rounded-xxl bg-gradient-to-br from-primary to-primary-container text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all">
              Quick Apply
            </button>
          </div>
        </section>
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-3 bg-surface-container-lowest p-8 rounded-xxl border-none shadow-sm flex flex-col justify-between h-48">
            <span
              className="material-symbols-outlined text-primary-container text-3xl"
              data-icon="send"
            >
              send
            </span>
            <div>
              <h3 className="text-4xl font-bold text-editorial-tight text-on-surface">
                24
              </h3>
              <p className="text-xs font-label text-on-surface-variant mt-1">
                JOBS APPLIED
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3 bg-surface-container-lowest p-8 rounded-xxl border-none shadow-sm flex flex-col justify-between h-48">
            <span
              className="material-symbols-outlined text-tertiary-container text-3xl"
              data-icon="event_available"
            >
              event_available
            </span>
            <div>
              <h3 className="text-4xl font-bold text-editorial-tight text-on-surface">
                03
              </h3>
              <p className="text-xs font-label text-on-surface-variant mt-1">
                INTERVIEWS
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 bg-surface-container-low p-8 rounded-xxl flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-2">Profile Completion</h3>
              <p className="text-sm text-on-surface-variant mb-6">
                Complete your portfolio to unlock Premium visibility.
              </p>
              <div className="w-full bg-white/50 rounded-full h-2 mb-2">
                <div className="bg-primary h-full rounded-full transition-all duration-1000"></div>
              </div>
              <p className="text-[10px] font-bold text-primary">
                85% COMPLETE — ALMOST THERE
              </p>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span
                className="material-symbols-outlined text-[120px]"
                data-icon="verified"
              >
                verified
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 space-y-12">
            <div>
              <div className="flex justify-between items-end mb-6">
                <h2 className="text-2xl font-bold text-editorial-headline">
                  Recommended for You
                </h2>
                <button className="text-sm font-semibold text-primary hover:underline">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:translate-y-[-2px] transition-all duration-300 flex items-center gap-6">
                  <div className="w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                      alt="Company Logo"
                      className="w-full h-full object-cover"
                      data-alt="Minimalist abstract vector logo of a tech company in dark grey on a clean white background"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXP5atBHte9civgS8JJnxXYlDJ4ESwgYjKAKa2Cnobdc68X6nknmQMeV4NkbZgVcFVbaf9NspFmqq3_n1FHQfRBJ2W4N5X-thoD7bFBVRtSuSLZsvaf2O2ljLMLc6ya8pkDxJ7me8z5miwPQC55pDo06uhY_ES2fUAXXOi7yGhc7qX4_jXPz2a2PQ84z1zkcX_o_5IxqGaH_FPRgOuFW0NCLgXIZB1qmzo72Z199oa_nOC3dRQVHuSDT0Wph_ijVDVFwwNVsLMJEOd"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-bold text-lg text-on-surface">
                        Lead Experience Designer
                      </h4>
                      <span className="px-2 py-0.5 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold">
                        98% MATCH
                      </span>
                    </div>
                    <p className="text-sm text-on-surface-variant">
                      Lumina Systems • San Francisco, CA • $160k - $210k
                    </p>
                  </div>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center text-outline hover:text-primary transition-colors">
                    <span
                      className="material-symbols-outlined"
                      data-icon="bookmark"
                    >
                      bookmark
                    </span>
                  </button>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:translate-y-[-2px] transition-all duration-300 flex items-center gap-6">
                  <div className="w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                      alt="Company Logo"
                      className="w-full h-full object-cover"
                      data-alt="Modern geometric emblem logo for a creative agency, subtle soft blue and white palette"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjB_Adntt8yynw3LBs5sf40lnlcMxHneJ0P4C91h50uJqD-g1sUG3lky2L4caaGym2-DlbETIP07kVm8TEqQIwDo8sTHwEPRqiofBpiufv5eAFXLda-JcHyVLTFxZzqmW98UT864GNYktyY5m3RiUlNodeDXo9h4FKdw26zkRQXSuV4CsGslnGtgtvpTlHwbt_7SHVtjwSINrDEv2tnuZetruXWWXih342ZzvGb808K07mN85cGUVqxyDkVRagLwj32oEnjGCqouYO"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-bold text-lg text-on-surface">
                        Senior Visual Architect
                      </h4>
                      <span className="px-2 py-0.5 rounded-lg bg-surface-container-high text-on-surface-variant text-[10px] font-bold uppercase">
                        Remote
                      </span>
                    </div>
                    <p className="text-sm text-on-surface-variant">
                      Prism Creative • London, UK • £75k - £90k
                    </p>
                  </div>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center text-primary transition-colors">
                    <span
                      className="material-symbols-outlined"
                      data-icon="bookmark"
                    >
                      bookmark
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-editorial-headline mb-6">
                Application History
              </h2>
              <div className="bg-surface-container-lowest rounded-xxl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low">
                      <th className="px-6 py-4 text-xs font-label text-on-surface-variant">
                        COMPANY
                      </th>
                      <th className="px-6 py-4 text-xs font-label text-on-surface-variant">
                        ROLE
                      </th>
                      <th className="px-6 py-4 text-xs font-label text-on-surface-variant">
                        DATE
                      </th>
                      <th className="px-6 py-4 text-xs font-label text-on-surface-variant">
                        STATUS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container">
                    <tr>
                      <td className="px-6 py-5 flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-surface-container-low"></div>
                        <span className="font-semibold text-sm">
                          DesignStudio
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm">Product Designer</td>
                      <td className="px-6 py-5 text-sm text-on-surface-variant">
                        Oct 21, 2023
                      </td>
                      <td className="px-6 py-5">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase">
                          Interviewing
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-5 flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-surface-container-low"></div>
                        <span className="font-semibold text-sm">Figma</span>
                      </td>
                      <td className="px-6 py-5 text-sm">
                        Senior Interaction Lead
                      </td>
                      <td className="px-6 py-5 text-sm text-on-surface-variant">
                        Oct 18, 2023
                      </td>
                      <td className="px-6 py-5">
                        <span className="px-3 py-1 rounded-full bg-secondary-container/30 text-secondary text-[10px] font-bold uppercase">
                          Under Review
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 space-y-8">
            <div className="bg-primary text-white p-8 rounded-xxl shadow-xl relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <span
                    className="material-symbols-outlined text-4xl"
                    data-icon="videocam"
                  >
                    videocam
                  </span>
                  <span className="text-[10px] font-label px-2 py-1 bg-white/20 rounded-lg">
                    TOMORROW
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">
                  Interview with Lumina
                </h3>
                <p className="text-primary-fixed text-sm mb-6 opacity-90">
                  10:30 AM - 11:30 AM (PST)
                </p>
                <button className="w-full bg-white text-primary font-bold py-3 rounded-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
                  Join Meeting
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="open_in_new"
                  >
                    open_in_new
                  </span>
                </button>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                <span
                  className="material-symbols-outlined text-8xl"
                  data-icon="calendar_month"
                >
                  calendar_month
                </span>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xxl">
              <h3 className="text-sm font-label text-on-surface-variant mb-6">
                QUICK ACTIONS
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-surface-container-lowest p-4 rounded-xl flex flex-col items-center gap-2 hover:bg-white transition-all shadow-sm">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="description"
                  >
                    description
                  </span>
                  <span className="text-[11px] font-bold">New Resume</span>
                </button>
                <button className="bg-surface-container-lowest p-4 rounded-xl flex flex-col items-center gap-2 hover:bg-white transition-all shadow-sm">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="edit_note"
                  >
                    edit_note
                  </span>
                  <span className="text-[11px] font-bold">Cover Letter</span>
                </button>
                <button className="bg-surface-container-lowest p-4 rounded-xl flex flex-col items-center gap-2 hover:bg-white transition-all shadow-sm">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="share"
                  >
                    share
                  </span>
                  <span className="text-[11px] font-bold">Share Profile</span>
                </button>
                <button className="bg-surface-container-lowest p-4 rounded-xl flex flex-col items-center gap-2 hover:bg-white transition-all shadow-sm">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="insights"
                  >
                    insights
                  </span>
                  <span className="text-[11px] font-bold">Salaries</span>
                </button>
              </div>
            </div>
            <div className="border-l-4 border-tertiary-fixed-dim px-6 py-4">
              <p className="text-xs font-label text-tertiary mb-2">PRO TIP</p>
              <p className="text-sm italic text-on-surface-variant leading-relaxed">
                "Customizing your portfolio's thumbnail images increases
                click-through rates from recruiters by up to 40%."
              </p>
            </div>
          </div>
        </div>
      </main>
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-50">
        <span className="material-symbols-outlined" data-icon="add">
          add
        </span>
      </button>
    </div>
  );
}
