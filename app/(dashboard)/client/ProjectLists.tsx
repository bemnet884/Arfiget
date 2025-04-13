'use client';

import React from 'react';
import { Card } from '@/components/ui/card';

interface ClientProject {
  id: number;
  title: string;
  freelancerName: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  bids: number;
}

const mockClientProjects: ClientProject[] = [
  {
    id: 1,
    title: 'Build a landing page for my SaaS product',
    freelancerName: 'Jane Doe',
    status: 'In Progress',
    bids: 5,
  },
  {
    id: 2,
    title: 'Design a logo for new brand',
    freelancerName: 'Awaiting Assignment',
    status: 'Pending',
    bids: 12,
  },
  {
    id: 3,
    title: 'SEO Optimization for website',
    freelancerName: 'John Smith',
    status: 'Completed',
    bids: 3,
  },
];

const statusColorMap = {
  Pending: 'text-yellow-600',
  'In Progress': 'text-blue-600',
  Completed: 'text-green-600',
};

const ProjectList: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Your Posted Projects</h2>
      {mockClientProjects.map((project) => (
        <Card key={project.id} className="p-4 border rounded-xl shadow hover:shadow-md transition">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium">{project.title}</h3>
              <p className="text-sm text-gray-500">
                Freelancer: {project.freelancerName}
              </p>
              <p className={`text-sm font-semibold ${statusColorMap[project.status]}`}>
                Status: {project.status}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">{project.bids} bids received</p>
              <button className="text-blue-500 hover:underline text-sm mt-1">View Details</button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProjectList;
