"use client";
import BlogSection from "@/components/Blog";
import CallToAction from "@/components/Cta";
import FAQ from "@/components/FAQ";
import FeaturedSection from "@/components/Feature";
import HeroSection from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import JobCategories from "@/components/JobCategories";
import Testimonials from "@/components/Testimonials";
import TopFreelancers from "@/components/TopFreelancers";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturedSection />
      <HowItWorks />
      <JobCategories />
      <TopFreelancers />
      <Testimonials />
      <CallToAction />
      <FAQ />
      <BlogSection />
    </main>
  );
}

