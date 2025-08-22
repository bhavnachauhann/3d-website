"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Why’s Agero instead of full-time designer?",
    answer: "",
  },
  {
    question: "Speed of design delivery?",
    answer:
      "Pretty quick! Most designs are delivered in 2–3 business days. We prioritize quality without slowing you down.",
  },
  {
    question: "What’s the Agero progress like?",
    answer:
      "Pretty quick! Most designs are delivered in 2–3 business days. We prioritize quality without slowing you down.",
  },
  {
    question: "How to request a design?",
    answer:
      "Pretty quick! Most designs are delivered in 2–3 business days. We prioritize quality without slowing you down.",
  },
  {
    question: "What if I don’t like design?",
    answer:
      "Pretty quick! Most designs are delivered in 2–3 business days. We prioritize quality without slowing you down.",
  },
  {
    question: "Are there any refund?",
    answer:
      "Pretty quick! Most designs are delivered in 2–3 business days. We prioritize quality without slowing you down.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // second item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#dcdcdc]">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="text-center text-sm text-neutral-500 mb-2">
          (FAQs)
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
          Your Questions, Answered
        </h2>
        <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-12">
          Helping you understand our process and offerings at Agero.
        </p>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="cursor-pointer bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-base md:text-lg font-medium text-neutral-900">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-neutral-600" />
                ) : (
                  <Plus className="w-5 h-5 text-neutral-600" />
                )}
              </div>
              {openIndex === index && faq.answer && (
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
