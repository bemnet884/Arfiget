'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import RegistrationModal from "./RegistrationModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16">
      {/* Left Side - Text */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Are you looking for <span className="text-blue-600">Freelancers?</span>
        </h1>
        <p className="text-gray-500 mt-4">
          Hire great freelancers, fast. Arfiget helps you find elite freelancers at a moment’s notice.
        </p>

        {/* CTA and Search Bar */}
        <div className="mt-6 flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setIsModalOpen(true)}>Hire a Freelancer</Button>
          <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

          <div className="relative w-full md:w-80">
            <Input placeholder="Search freelance work" className="pl-10 pr-4 py-2 w-full" />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/6963-removebg.png" // Replace with actual image path
          alt="Freelancer working"
          width={500}
          height={400}
          className="w-full h-full max-w-md"
        />
      </div>
    </section>
  );
}
