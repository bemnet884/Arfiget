// app/jobs/[jobId]/page.tsx
'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const mockJobDetails = [
  {
    id: 1,
    title: 'Build a modern portfolio site',
    description:
      'Looking for a frontend developer to build a sleek and modern portfolio site using React and Tailwind CSS. The site should include project showcases, a blog section, and contact form.',
    budget: '$500 - $700',
    postedAt: '2025-04-10',
    client: 'Creative Agency Ltd.',
    skills: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
    location: 'Remote',
    duration: '2 weeks',
    requirements: [
      'Experience with React and Tailwind CSS',
      'Good design sense',
      'Mobile-first development experience',
    ],
  },
  {
    id: 2,
    title: 'Mobile app for event booking',
    description:
      'Develop a cross-platform Flutter app that allows users to browse, book, and review local events. The app should support secure payments and social sharing.',
    budget: '$1500 - $2000',
    postedAt: '2025-04-08',
    client: 'EventPro Inc.',
    skills: ['Flutter', 'Firebase', 'Payment Integration', 'UI/UX'],
    location: 'Remote',
    duration: '4 weeks',
    requirements: [
      'Strong Flutter experience',
      'Experience with Firebase Auth and Firestore',
      'Knowledge of integrating payment gateways',
    ],
  },
  {
    id: 3,
    title: 'E-commerce backend with Node.js',
    description:
      'Need a Node.js developer to build a scalable backend for an e-commerce website. The project includes user management, product listings, orders, and payments.',
    budget: '$800 - $1200',
    postedAt: '2025-04-09',
    client: 'ShopEase Tech',
    skills: ['Node.js', 'MongoDB', 'REST API', 'JWT Auth'],
    location: 'Remote',
    duration: '3 weeks',
    requirements: [
      'Solid backend experience with Node.js and Express',
      'MongoDB and Mongoose proficiency',
      'Authentication and role management',
    ],
  },
  {
    id: 4,
    title: 'UI/UX Design for SaaS Dashboard',
    description:
      'Redesign the UI of our SaaS dashboard to improve user experience and visual appeal. Deliver Figma designs with components and prototypes.',
    budget: '$400 - $600',
    postedAt: '2025-04-11',
    client: 'Breeze CRM',
    skills: ['Figma', 'UI Design', 'UX Research'],
    location: 'Remote',
    duration: '1 week',
    requirements: [
      'Proficiency in Figma',
      'Portfolio of SaaS or dashboard designs',
      'Understanding of usability principles',
    ],
  },
  {
    id: 5,
    title: 'Landing page for marketing campaign',
    description:
      'Create a beautiful and high-converting landing page for our next product launch using Next.js and Tailwind CSS.',
    budget: '$300 - $500',
    postedAt: '2025-04-07',
    client: 'MarketSpark',
    skills: ['Next.js', 'Tailwind CSS', 'SEO'],
    location: 'Remote',
    duration: '1 week',
    requirements: [
      'Clean responsive design',
      'Optimized performance and SEO',
      'Deployment experience on Vercel',
    ],
  },
  {
    id: 6,
    title: 'AI-powered chatbot integration',
    description:
      'Integrate a GPT-powered chatbot for our website to assist users with automated responses. Should be able to answer FAQs and escalate complex queries.',
    budget: '$1000 - $1300',
    postedAt: '2025-04-06',
    client: 'HelpBot AI',
    skills: ['OpenAI', 'JavaScript', 'APIs', 'Chatbot'],
    location: 'Remote',
    duration: '3 weeks',
    requirements: [
      'Experience with OpenAI API',
      'Frontend/backend integration',
      'Basic NLP understanding',
    ],
  },
  {
    id: 7,
    title: 'Full-stack developer for social app',
    description:
      'Build a basic social media application using the MERN stack. Features should include profiles, posts, likes, and real-time chat.',
    budget: '$2000 - $3000',
    postedAt: '2025-04-05',
    client: 'SocialWave',
    skills: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io'],
    location: 'Remote',
    duration: '5 weeks',
    requirements: [
      'Experience with MERN stack',
      'Real-time messaging using WebSockets',
      'Authentication and file uploads',
    ],
  },
  {
    id: 8,
    title: 'WordPress bug fixing and optimization',
    description:
      'Fix several layout bugs and improve the overall speed and performance of our WordPress website.',
    budget: '$150 - $250',
    postedAt: '2025-04-04',
    client: 'WP Guru',
    skills: ['WordPress', 'PHP', 'Page Speed Optimization', 'Debugging'],
    location: 'Remote',
    duration: '3 days',
    requirements: [
      'Deep understanding of WordPress themes and plugins',
      'Lighthouse and Core Web Vitals optimization',
      'Cross-browser testing',
    ],
  },
  {
    id: 9,
    title: 'Real-time chat app with Next.js',
    description:
      'Create a minimal real-time messaging app with user auth, chat rooms, and typing indicators using Next.js and Socket.io.',
    budget: '$700 - $1000',
    postedAt: '2025-04-03',
    client: 'Chatly Inc.',
    skills: ['Next.js', 'Socket.io', 'Tailwind CSS', 'Redis'],
    location: 'Remote',
    duration: '2 weeks',
    requirements: [
      'Experience with real-time communication',
      'User login and session handling',
      'Responsive layout',
    ],
  },
  {
    id: 10,
    title: 'Design brand assets and logo',
    description:
      'Design a full set of brand assets including logo, typography, color palette, and templates for social media and presentations.',
    budget: '$500 - $750',
    postedAt: '2025-04-02',
    client: 'BoldBrands',
    skills: ['Illustrator', 'Photoshop', 'Figma', 'Branding'],
    location: 'Remote',
    duration: '2 weeks',
    requirements: [
      'Portfolio with branding projects',
      'Multiple logo concepts and iterations',
      'Brand guideline documentation',
    ],
  },
];

import { Badge } from '@/components/ui/badge';

const JobDetailPage = () => {
  const { jobId } = useParams();
  const job = mockJobDetails.find((job) => job.id === Number(jobId));

  const [hasApplied, setHasApplied] = useState(false);
  const [coverLetter, setCoverLetter] = useState('');
  const [resume, setResume] = useState<File | null>(null);

  const handleApply = () => {
    setHasApplied(true);
    // Optional: Console log for testing
    console.log({
      coverLetter,
      resumeName: resume?.name,
    });
  };

  if (!job) {
    return (
      <div className="text-center py-20 text-gray-500">Job not found.</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">{job.title}</h1>
        <div className="text-sm text-gray-500">
          Posted on {job.postedAt} by{' '}
          <span className="font-medium text-gray-700">{job.client}</span>
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Job Description
        </h2>
        <p className="text-gray-700 leading-relaxed">{job.description}</p>
      </div>

      {/* Info Panel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-xl border space-y-2">
          <p>
            <span className="font-semibold">Budget:</span> {job.budget}
          </p>
          <p>
            <span className="font-semibold">Duration:</span> {job.duration}
          </p>
          <p>
            <span className="font-semibold">Location:</span> {job.location}
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl border space-y-2">
          <p className="font-semibold mb-1">Skills Required:</p>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, index) => (
              <Badge key={index} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Requirements
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Apply Section */}
      <div className="pt-4">
        {hasApplied ? (
          <div className="text-green-600 font-semibold">
            ✅ You have successfully applied for this job!
          </div>
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-base">
                Apply Now
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Apply for this job</DialogTitle>
                <DialogDescription>
                  Submit your cover letter and resume for review.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="cover-letter">Cover Letter</Label>
                  <Textarea
                    id="cover-letter"
                    placeholder="Write a short message to the client..."
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="resume">Upload Resume/CV</Label>
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) =>
                      setResume(e.target.files ? e.target.files[0] : null)
                    }
                  />
                  {resume && (
                    <p className="text-sm text-gray-500 mt-1">
                      Selected: {resume.name}
                    </p>
                  )}
                </div>

                <Button
                  className="bg-green-600 hover:bg-green-700"
                  onClick={handleApply}
                >
                  Submit Application
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};


export default JobDetailPage;


