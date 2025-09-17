"use client";

import { useRef } from "react";
import { FaStar } from "react-icons/fa";

interface Testimonial {
  name: string;
  text: string;
  rating: number; // 1 to 5
}

const testimonials: Testimonial[] = [
  { name: "John Doe", text: "Absolutely fantastic service! My car looks brand new again.", rating: 5 },
  { name: "Mary Smith", text: "Quick, professional, and friendly. Highly recommended!", rating: 4 },
  { name: "Alex Johnson", text: "Great attention to detail, the paint job was perfect.", rating: 5 },
  { name: "Samantha Lee", text: "They handled my car with care. Very happy!", rating: 5 },
  { name: "Michael Brown", text: "Excellent service and fast turnaround.", rating: 4 },
  { name: "Emily Davis", text: "Friendly staff and amazing results!", rating: 5 },
  { name: "David Wilson", text: "They fixed everything perfectly. Highly recommend.", rating: 5 },
  { name: "Olivia Taylor", text: "Professional, clean, and reliable service.", rating: 5 },
  { name: "Daniel Harris", text: "They went above and beyond for my car repair.", rating: 5 },
  { name: "Sophia Martinez", text: "Truly impressed with their work and attention to detail.", rating: 5 },
];

export default function Testimonials({ id }: { id?: string } = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section id={id} className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          What Our Clients Say
        </h2>

        {/* Carousel arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 z-10"
        >
          &#8592;
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 z-10"
        >
          &#8594;
        </button>

        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-6"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[250px] flex-shrink-0 p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`mr-1 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
