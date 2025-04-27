'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // If you don't have it, replace with normal input

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
    avatar: '/im.png',
    experience: '6+ years with AWS & cloud-native solutions.',
    education: 'MSc in Information Systems, University of Barcelona',
    availability: '25 hrs/week',
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
    avatar: '/Work_from_home.jpg',
    experience: '5 years in data analytics and BI reporting.',
    education: 'BSc in Data Science, LUMS',
    availability: '15 hrs/week',
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
  },
];

const FreelancersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFreelancers = mockFreelancers.filter((freelancer) => {
    const term = searchTerm.toLowerCase();
    return (
      freelancer.name.toLowerCase().includes(term) ||
      freelancer.title.toLowerCase().includes(term) ||
      freelancer.location.toLowerCase().includes(term) ||
      freelancer.skills.some(skill => skill.toLowerCase().includes(term))
    );
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Available Freelancers</h1>

      <div className="w-full max-w-md mb-8">
        <Input
          type="text"
          placeholder="Search freelancers by name, title, skills, or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
      </div>

      {filteredFreelancers.length === 0 ? (
        <p className="text-gray-500">No freelancers found.</p>
      ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFreelancers.map((freelancer) => (
              <Card key={freelancer.id} className="p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={freelancer.avatar}
                      alt={freelancer.name}
                      className="w-14 h-14 rounded-full object-cover border"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{freelancer.name}</h2>
                      <p className="text-sm text-gray-500">{freelancer.title}</p>
                    </div>
                  </div>

                <p className="text-gray-600 text-sm line-clamp-3">{freelancer.bio}</p>

                <div className="flex flex-wrap gap-2">
                  {freelancer.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary">{skill}</Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{freelancer.hourlyRate}</span>
                  <span>⭐ {freelancer.rating}</span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <p className="text-sm text-gray-400">{freelancer.location}</p>
                  <Link href={`/freelancers/${freelancer.id}`}>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
      )}
    </div>
  );
};

export default FreelancersPage;
