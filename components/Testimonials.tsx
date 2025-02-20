import React from 'react'

const Testimonials = () => (
  <section className="py-12 text-center">
    <h2 className="text-3xl font-bold text-gray-800">What Clients Say</h2>
    <div className="flex flex-wrap justify-center mt-8 gap-6">
      {["Amazing platform!", "Best freelancers ever!", "Highly recommended!"]
        .map((review, index) => (
          <div key={index} className="p-6 bg-blue-500 text-white rounded-lg shadow-md w-64">
            &quot;{review}&ldquo;
          </div>
        ))}
    </div>
  </section>
);

export default Testimonials