'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

const mockFreelancers = [
  {
    id: 1,
    name: 'Sophia Lee',
    title: 'Full Stack Developer',
    skills: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    hourlyRate: '$45/hr',
    rating: 4.9,
    location: 'Berlin, Germany',
    bio: 'I’m a passionate full-stack developer with 5+ years of experience building scalable web applications and RESTful APIs. I love solving problems and crafting clean, reusable code.',
    avatar: '/ui.jpg',
    experience: '5+ years in software development, led multiple startup projects.',
    education: 'BSc in Computer Science, Technical University of Berlin',
    availability: '30 hrs/week',
    languages: ['English', 'German'],
    certifications: ['AWS Certified Developer', 'Scrum Master'],
    portfolioLinks: ['https://sophia.dev', 'https://github.com/sophia-lee'],
    socials: {
      linkedIn: 'https://linkedin.com/in/sophia-lee',
      github: 'https://github.com/sophia-lee',
    },
    isVerified: true,
    timezone: 'GMT+1',
  },
  {
    id: 2,
    name: 'James Carter',
    title: 'UI/UX Designer',
    skills: ['Figma', 'Adobe XD', 'UX Research', 'Prototyping'],
    hourlyRate: '$35/hr',
    rating: 4.7,
    location: 'Austin, TX',
    bio: 'I specialize in crafting intuitive and engaging user experiences. I’ve worked with agencies, startups, and large corporations to bring ideas to life through user-centric design.',
    avatar: '/im.png',
    experience: '4 years in product design and UI/UX.',
    education: 'BFA in Design, University of Texas',
    availability: '20 hrs/week',
    languages: ['English', 'Spanish'],
    certifications: ['Google UX Design Certificate'],
    portfolioLinks: ['https://jamescarter.design'],
    socials: {
      linkedIn: 'https://linkedin.com/in/jamescarterux',
      dribbble: 'https://dribbble.com/jcarter',
    },
    isVerified: false,
    timezone: 'GMT-5',
  },
  {
    id: 3,
    name: 'Liya Mekonnen',
    title: 'Mobile App Developer',
    skills: ['Flutter', 'Firebase', 'Dart'],
    hourlyRate: '$40/hr',
    rating: 4.8,
    location: 'Addis Ababa, Ethiopia',
    bio: 'Cross-platform app developer with a strong background in Flutter and Dart. I enjoy turning product requirements into smooth and interactive mobile experiences.',
    avatar: '/Work_from_home.jpg',
    experience: '3 years building mobile apps for Android and iOS.',
    education: 'BSc in Software Engineering, AAiT',
    availability: 'Full-time',
    languages: ['English', 'Amharic'],
    certifications: ['Flutter & Dart Certificate by Google'],
    portfolioLinks: ['https://liyacode.dev'],
    socials: {
      linkedIn: 'https://linkedin.com/in/liyamekonnen',
      github: 'https://github.com/liyamek',
    },
    isVerified: true,
    timezone: 'GMT+3',
  },
  {
    id: 4,
    name: 'Carlos Ramirez',
    title: 'DevOps Engineer',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    hourlyRate: '$50/hr',
    rating: 4.6,
    location: 'Barcelona, Spain',
    bio: 'Experienced DevOps specialist with a focus on cloud infrastructure, automation, and deployment pipelines. I ensure apps scale and perform efficiently.',
    avatar: '/Work_from_home.jpg',
    experience: '6+ years with AWS & cloud-native solutions.',
    education: 'MSc in Information Systems, University of Barcelona',
    availability: '25 hrs/week',
    languages: ['English', 'Spanish', 'Catalan'],
    certifications: ['AWS DevOps Engineer – Professional', 'Certified Kubernetes Administrator (CKA)'],
    portfolioLinks: ['https://carlosdevops.tech'],
    socials: {
      linkedIn: 'https://linkedin.com/in/carlos-ramirez-devops',
      github: 'https://github.com/carlosdevops',
    },
    isVerified: true,
    timezone: 'GMT+2',
  },
  {
    id: 5,
    name: 'Aisha Khan',
    title: 'Data Analyst',
    skills: ['Python', 'Pandas', 'SQL', 'Power BI'],
    hourlyRate: '$38/hr',
    rating: 4.9,
    location: 'Lahore, Pakistan',
    bio: 'I help businesses make data-driven decisions through insightful dashboards, reports, and machine learning models.',
    avatar: '/im.png',
    experience: '5 years in data analytics and BI reporting.',
    education: 'BSc in Data Science, LUMS',
    availability: '15 hrs/week',
    languages: ['English', 'Urdu'],
    certifications: ['Google Data Analytics Professional Certificate'],
    portfolioLinks: ['https://aishakhan-analytics.com'],
    socials: {
      linkedIn: 'https://linkedin.com/in/aishakhan-analytics',
      kaggle: 'https://kaggle.com/aishakhan',
    },
    isVerified: true,
    timezone: 'GMT+5',
  },
  {
    id: 6,
    name: 'Daniel Okeke',
    title: 'Backend Engineer',
    skills: ['Go', 'GraphQL', 'PostgreSQL', 'gRPC'],
    hourlyRate: '$55/hr',
    rating: 4.8,
    location: 'Lagos, Nigeria',
    bio: 'Backend-focused engineer with experience building scalable APIs and microservices using Golang and GraphQL.',
    avatar: '/ui.jpg',
    experience: '5+ years with Go in production systems.',
    education: 'BSc in Computer Engineering, University of Lagos',
    availability: '20 hrs/week',
    languages: ['English', 'Igbo'],
    certifications: ['Go Developer Certification'],
    portfolioLinks: ['https://danielokeke.dev'],
    socials: {
      linkedIn: 'https://linkedin.com/in/danielokeke',
      github: 'https://github.com/dokeke',
    },
    isVerified: true,
    timezone: 'GMT+1',
  },
];


const FreelancerDetailPage = () => {
  const { freelancerId } = useParams();
  const freelancer = mockFreelancers.find((f) => f.id === Number(freelancerId));
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  if (!freelancer) {
    return (
      <div className="text-center py-20 text-gray-500">Freelancer not found.</div>
    );
  }

  const handleSubmit = () => {
    // Mock success
    setShowSuccess(true);
    setMessage('');
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-6">
        <img
          src={freelancer.avatar}
          alt={freelancer.name}
          className="w-20 h-20 rounded-full object-cover border"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{freelancer.name}</h1>
          <p className="text-gray-600">{freelancer.title}</p>
          <p className="text-sm text-gray-500">{freelancer.location}</p>
        </div>
      </div>

      {/* Bio */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-1">About</h2>
        <p className="text-gray-700">{freelancer.bio}</p>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {freelancer.skills.map((skill, index) => (
            <Badge key={index} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </div>

      {/* Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
        <div>
          <p><span className="font-semibold">Hourly Rate:</span> {freelancer.hourlyRate}</p>
          <p><span className="font-semibold">Rating:</span> ⭐ {freelancer.rating}</p>
          <p><span className="font-semibold">Availability:</span> {freelancer.availability}</p>
        </div>
        <div>
          <p><span className="font-semibold">Experience:</span> {freelancer.experience}</p>
          <p><span className="font-semibold">Education:</span> {freelancer.education}</p>
        </div>
      </div>

      {/* CTA with Contact Modal */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-base">
            Contact Freelancer
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Send a Message to {freelancer.name}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <Input placeholder="Your Name (optional)" />
            <Textarea
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </div>

          <DialogFooter className="mt-4">
            <Button onClick={handleSubmit}>Send</Button>
          </DialogFooter>

          {showSuccess && (
            <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FreelancerDetailPage;
