// File: app/dashboard/freelancer/page.tsx

import { OverviewCard } from "@/components/OverviewCard";
import { ProfileWidget } from "@/components/ProfileWidget";
import { ProjectList } from "@/components/ProjectList";
import { mockProjects } from "@/lib/mockProjects";


export default function FreelancerDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Welcome, Freelancer!</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <OverviewCard title="Total Projects" value="5" />
        <OverviewCard title="Earnings" value="$1,250" />
        <OverviewCard title="Rating" value="4.8/5" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProjectList projects={mockProjects} />
        </div>
        <ProfileWidget />
      </div>
    </div>
  );
}