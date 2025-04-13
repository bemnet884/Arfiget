// app/jobs/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

const mockJobs = [
  {
    id: 1,
    title: 'Build a modern portfolio site',
    description: 'Looking for a frontend developer to build a portfolio site with React.',
    budget: '$500 - $700',
  },
  {
    id: 2,
    title: 'Mobile app for event booking',
    description: 'Need a cross-platform Flutter app for booking local events.',
    budget: '$1500 - $2000',
  },
  {
    id: 3,
    title: 'E-commerce backend with Node.js',
    description: 'Require backend development for an online store using Node.js and MongoDB.',
    budget: '$800 - $1200',
  },
  {
    id: 4,
    title: 'UI/UX Design for SaaS Dashboard',
    description: 'Seeking a creative UI/UX designer to revamp the look of our admin dashboard.',
    budget: '$400 - $600',
  },
  {
    id: 5,
    title: 'Landing page for marketing campaign',
    description: 'Design and develop a responsive landing page with Tailwind CSS and Next.js.',
    budget: '$300 - $500',
  },
  {
    id: 6,
    title: 'AI-powered chatbot integration',
    description: 'Integrate a chatbot using GPT API for customer support on our website.',
    budget: '$1000 - $1300',
  },
  {
    id: 7,
    title: 'Full-stack developer for social app',
    description: 'Need a MERN stack developer to build a small social networking app.',
    budget: '$2000 - $3000',
  },
  {
    id: 8,
    title: 'Bug fixing and optimization for WordPress',
    description: 'Fix loading speed issues and plugin conflicts on an existing WordPress site.',
    budget: '$150 - $250',
  },
  {
    id: 9,
    title: 'Develop a real-time chat app',
    description: 'Using Socket.io and Next.js to create a lightweight chat system.',
    budget: '$700 - $1000',
  },
  {
    id: 10,
    title: 'Design brand assets and logo',
    description: 'Looking for a graphic designer to create a new brand identity package.',
    budget: '$500 - $750',
  },
];


const JobsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">🚀 Explore Open Jobs</h1>

      <div className="grid lg:grid-cols-3 gap-6 sm:grid-cols-1 md:grid-cols-2">
        {mockJobs.map((job) => (
          <Link key={job.id} href={`/jobs/${job.id}`} className="block">
            <Card className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-200 hover:border-blue-500">
              <h2 className="text-2xl font-semibold text-gray-800">{job.title}</h2>
              <p className="text-gray-600 mt-2 line-clamp-3">{job.description}</p>
              <p className="text-blue-600 font-medium mt-4">{job.budget}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
