"use client";

import { motion } from "framer-motion";
import {
  User,
  Bell,
  Lock,
  Globe,
  Shield,
  CreditCard,
  HelpCircle,
  ChevronRight,
  Moon,
  Smartphone,
} from "lucide-react";

const settingsSections = [
  {
    title: "Account Settings",
    items: [
      {
        icon: User,
        label: "Personal Information",
        description: "Update your name, email, and profile photo",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: Lock,
        label: "Password & Security",
        description: "Manage your password and 2FA settings",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: Smartphone,
        label: "Connected Devices",
        description: "Manage where you are logged in",
        color: "text-slate-600",
        bg: "bg-slate-50",
      },
    ],
  },
  {
    title: "Preferences",
    items: [
      {
        icon: Bell,
        label: "Notifications",
        description: "Choose what alerts you want to receive",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: Moon,
        label: "Appearance",
        description: "Toggle dark mode and theme settings",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
      },
      {
        icon: Globe,
        label: "Language & Region",
        description: "Set your preferred language and timezone",
        color: "text-green-600",
        bg: "bg-green-50",
      },
    ],
  },
  {
    title: "Privacy & Billing",
    items: [
      {
        icon: Shield,
        label: "Privacy Policy",
        description: "Review how we handle your data",
        color: "text-red-600",
        bg: "bg-red-50",
      },
      {
        icon: CreditCard,
        label: "Subscription",
        description: "Manage your plan and billing history",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },
];

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20 lg:pb-12">
      
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Settings</h2>
        <p className="text-slate-500 mt-1">
          Manage your account settings and preferences.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-10">
        {settingsSections.map((section, i) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">
              {section.title}
            </h3>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              {section.items.map((item, j) => (
                <button
                  key={item.label}
                  className={`
                    w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-all group
                    ${j !== section.items.length - 1 ? "border-b border-slate-100" : ""}
                  `}
                >
                  <div className="flex items-center gap-4">
                    
                    {/* Icon */}
                    <div
                      className={`${item.bg} ${item.color} p-3 rounded-xl group-hover:scale-110 transition`}
                    >
                      <item.icon className="w-5 h-5" />
                    </div>

                    {/* Text */}
                    <div className="text-left">
                      <h4 className="font-semibold text-slate-900">
                        {item.label}
                      </h4>
                      <p className="text-sm text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition" />
                </button>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <HelpCircle size={18} />
          <span>
            Need help?{" "}
            <a href="#" className="text-primary font-semibold hover:underline">
              Support Center
            </a>
          </span>
        </div>

        <button className="w-full sm:w-auto px-6 py-2.5 bg-red-50 text-red-600 font-semibold rounded-xl hover:bg-red-100 transition">
          Deactivate Account
        </button>
      </div>
    </div>
  );
}