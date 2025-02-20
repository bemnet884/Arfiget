import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const FAQ = () => (
  <section className="py-24 bg-gray-50 text-center">
    <h2 className="text-4xl font-bold text-blue-900">Frequently Asked Questions</h2>
    <div className="mt-10 max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="bg-white shadow-lg rounded-xl p-6">
        {[
          { question: "How does it work?", answer: "Our platform connects freelancers with clients who need their services." },
          { question: "How do I get paid?", answer: "Payments are processed through secure methods upon project completion." },
          { question: "Is there a fee?", answer: "Yes, we charge a small service fee on each transaction." }
        ].map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-none">
            <AccordionTrigger className="p-4 font-semibold text-lg text-gray-800 hover:text-blue-600 transition-all">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="p-4 text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
export default FAQ;