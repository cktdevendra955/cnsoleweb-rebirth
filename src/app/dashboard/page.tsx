import Sidebar from "@/src/app/dashboard/components/layout/Sidebar";
import Header from "@/src/app/dashboard/components/layout/Header";
import DashboardContent from "@/src/app/dashboard/components/dashboard/DashboardContent";

export default function Page() {
  return (
    <div className="bg-[#f9f9ff] min-h-screen">      
      <DashboardContent />
    </div>
  );
}