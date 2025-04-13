import { OverviewCard } from '@/components/OverviewCard';
import { ProfileWidget } from '@/components/ProfileWidget';
import { mockProjects } from '@/lib/mockProjects';
import React from 'react';
import ProjectList from './ProjectLists';


const ClientDashboard = () => {
  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      <section className="md:col-span-3 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <OverviewCard title="Posted Projects" value="12" />
          <OverviewCard title="Ongoing" value="5" />
          <OverviewCard title="Completed" value="7" />
        </div>
        <ProjectList />
      </section>
      <aside>
        <ProfileWidget />
      </aside>
    </main>
  );
};

export default ClientDashboard;