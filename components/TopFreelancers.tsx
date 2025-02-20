import React from 'react'

const TopFreelancers = () => (
  <section className="py-12 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold text-gray-800">Top Freelancers</h2>
    <div className="flex flex-wrap justify-center mt-8 gap-6">
      {["John Doe", "Jane Smith", "David Lee"]
        .map((freelancer, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded-lg w-64">
            <h3 className="text-lg font-semibold">{freelancer}</h3>
            <p className="text-gray-600">⭐ 4.9 Rating</p>
          </div>
        ))}
    </div>
  </section>
);

export default TopFreelancers