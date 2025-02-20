import React from "react";
import { FaStar, FaMedal } from "react-icons/fa";

const freelancers = [
  {
    name: "Ahmed Kassa",
    role: "UI/UX Designer",
    rating: 4.9,
    img: "/ui.jpg",
  },
  {
    name: "Abebe K.",
    role: "Full-Stack Developer",
    rating: 5.0,
    img: "/fullstack-dev.jpg",
  },
  {
    name: "Beza A.",
    role: "Digital Marketer",
    rating: 4.8,
    img: "digitalmarkrt.jpg",
  },
];

const TopFreelancers = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">
          🌟 Meet Our Top Freelancers
        </h2>
        <p className="text-gray-600 mt-3">
          Highly-rated professionals, ready to take on your next project!
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {freelancers.map((freelancer, index) => (
          <div
            key={index}
            className="relative w-72 bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105"
          >
            {/* Freelancer Image */}
            <img
              src={freelancer.img}
              alt={freelancer.name}
              className="w-full h-48 object-cover"
            />

            {/* Freelancer Info */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                {freelancer.name}
              </h3>
              <p className="text-gray-600 text-sm">{freelancer.role}</p>
              <div className="flex items-center justify-center mt-2 text-yellow-500">
                <FaStar className="mr-1" />
                <span className="text-lg font-medium">{freelancer.rating}</span>
              </div>
            </div>

            {/* Medal Icon */}
            <div className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full">
              <FaMedal size={20} />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          View More Freelancers
        </button>
      </div>
    </section>
  );
};

export default TopFreelancers;
