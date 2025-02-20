import React from 'react'

const BlogSection = () => (
  <section className="py-12 text-center bg-gray-100">
    <h2 className="text-3xl font-bold text-gray-800">Latest Resources</h2>
    <div className="mt-8">
      {["Freelance Success Tips", "Best Tools for Remote Work", "How to Price Your Services"]
        .map((article, index) => (
          <div key={index} className="p-4 border-b">
            <h3 className="text-lg font-semibold">{article}</h3>
          </div>
        ))}
    </div>
  </section>
);
export default BlogSection