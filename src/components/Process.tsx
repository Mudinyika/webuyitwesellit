"use client";
import { motion } from "framer-motion";
import { FaCamera, FaHandshake, FaMoneyBillWave } from "react-icons/fa";

const steps = [
  {
    icon: <FaCamera className="text-4xl text-blue-500" />,
    title: "Snap & Upload",
    description:
      "Take a quick photo of your item — phone, gadget, or anything of value — and upload it in seconds.",
  },
  {
    icon: <FaHandshake className="text-4xl text-green-500" />,
    title: "Instant Deal",
    description:
      "Choose what suits you best: sell outright for quick cash, or leave your item with us and unlock instant money — with the option to reclaim it later.",
  },
  {
    icon: <FaMoneyBillWave className="text-4xl text-yellow-500" />,
    title: "Cash in Hand",
    description:
      "Walk away with money the same day. Fast, easy, and hassle-free — no paperwork, no long waits.",
  },
];

export default function Process({ id }: { id?: string } = {}) {
  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-black">
          How It Works — Simple & Fast
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {step.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2 text-black">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
