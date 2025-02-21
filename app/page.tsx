"use client";
import BlogSection from "@/components/Blog";
import CallToAction from "@/components/Cta";
import FAQ from "@/components/FAQ";
import FeaturedSection from "@/components/Feature";
import HeroSection from "@/components/Hero";
import JobCategories from "@/components/JobCategories";
import Testimonials from "@/components/Testimonials";
import TopFreelancers from "@/components/TopFreelancers";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection />
      <FeaturedSection />
      <JobCategories />
      <TopFreelancers />
      <Testimonials />
      <FAQ />
      <BlogSection />
    </main>
  );
}

