'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import RegistrationModal from "./RegistrationModal";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";

interface Job {
  id: number;
  title: string;
}

const mockJobs: Job[] = [
  { id: 1, title: "Frontend Developer for Portfolio Website" },
  { id: 2, title: "Mobile App Developer for Event Booking" },
  { id: 3, title: "Backend API Developer (Node.js + Prisma)" },
  { id: 4, title: "Landing Page Design for SaaS Startup" },
  { id: 5, title: "Logo Designer for New Brand" },
];

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredJobs = mockJobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16">
      {/* Left Side */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Are you looking for <span className="text-blue-600">Freelancers?</span>
        </h1>
        <p className="text-gray-500 mt-4">
          Hire great freelancers, fast. Arfiget helps you find elite freelancers at a moment’s notice.
        </p>

        <div className="mt-6 flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setIsModalOpen(true)}>
            Hire a Freelancer
          </Button>
          <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

          {/* SearchBar with correct onChange */}
          <SearchBar
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search freelance work"
          />
        </div>

        {/* Filtered job list */}
        {searchTerm && (
          <div className="mt-4 bg-white rounded-lg shadow p-4 space-y-2">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <Link
                  href={`/jobs/${job.id}`}
                  key={job.id}
                  className="block text-blue-600 hover:underline border-b pb-2 last:border-0"
                >
                  {job.title}
                </Link>
              ))
            ) : (
              <div className="text-gray-500">No matching jobs found.</div>
            )}
          </div>
        )}
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/6963-removebg.png"
          alt="Freelancer working"
          width={500}
          height={400}
          className="w-full h-full max-w-md"
        />
      </div>
    </section>
  );
}
