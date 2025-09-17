"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface StatItem {
  label: string;
  value: number;
  color: string;
}

const stats: StatItem[] = [
  { label: "Items Sold", value: 1200, color: "text-indigo-600" },
  { label: "Happy Sellers", value: 800, color: "text-green-500" },
  { label: "Cash Paid Out", value: 50000, color: "text-yellow-500" },
  { label: "Fastest Payment (hrs)", value: 24, color: "text-red-500" },
];

export default function Stats({ id }: { id?: string } = {}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, idx) => {
        let start = 0;
        const duration = 1500; // ms
        const increment = stat.value / (duration / 30); // update every 30ms
        const interval = setInterval(() => {
          start += increment;
          if (start >= stat.value) {
            start = stat.value;
            clearInterval(interval);
          }
          setCounts(prev => {
            const copy = [...prev];
            copy[idx] = Math.floor(start);
            return copy;
          });
        }, 30);
      });
    }
  }, [inView]);

  return (
    <section id={id} className="py-20 bg-indigo-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-black">Fast. Reliable. Trusted.</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex flex-col items-center"
            >
              <span className={`text-4xl font-bold ${stat.color}`}>
                {stat.label.includes("Cash") ? `$${counts[idx].toLocaleString()}` : counts[idx]}
              </span>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
