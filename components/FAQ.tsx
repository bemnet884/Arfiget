import React from 'react'

// FAQ Section
const FAQ = () => (
  <section className="py-12 text-center">
    <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
    <div className="mt-8">
      {["How does it work?", "How do I get paid?", "Is there a fee?"].map((faq, index) => (
        <div key={index} className="p-4 border-b">
          <h3 className="text-lg font-semibold">{faq}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default FAQ