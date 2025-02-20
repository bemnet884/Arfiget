import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const BlogSection = () => (
  <section className="py-24 bg-white">
    <h2 className="text-4xl font-bold text-center text-blue-900">Latest Resources</h2>
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      {[
        { title: "Freelance Success Tips", description: "Learn how to thrive as a freelancer in today's market." },
        { title: "Best Tools for Remote Work", description: "Discover the essential tools to enhance your remote work experience." },
        { title: "How to Price Your Services", description: "Find out how to set competitive and fair pricing for your services." }
      ].map((article, index) => (
        <Card key={index} className="bg-gray-50 shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105">
          <CardHeader className="bg-blue-500 p-5 text-white">
            <CardTitle className="text-xl font-semibold">{article.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-6 text-gray-700">
            <p className="text-base">{article.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);
export default BlogSection;