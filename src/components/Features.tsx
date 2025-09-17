"use client";

import { FaCarCrash, FaCogs, FaTshirt, FaBoxOpen } from "react-icons/fa";

export default function Features({ id }: { id?: string } = {}) {
  const services = [
    {
      icon: <FaCarCrash className="text-4xl text-blue-400 mb-4" />,
      title: "Accident Cars",
      description:
        "We buy accident-damaged vehicles, repair them, and resell at competitive prices. See the transformations for yourself.",
    },
    {
      icon: <FaCogs className="text-4xl text-blue-400 mb-4" />,
      title: "Car Parts",
      description:
        "Looking for spares? We source quality car parts to keep your vehicle running smoothly without breaking the bank.",
    },
    {
      icon: <FaTshirt className="text-4xl text-blue-400 mb-4" />,
      title: "Exclusive Merch",
      description:
        "Show your style with our limited edition branded merchandise — designed for car lovers and trendsetters.",
    },
    {
      icon: <FaBoxOpen className="text-4xl text-blue-400 mb-4" />,
      title: "Miscellaneous Items",
      description:
        "From tools to accessories, discover a wide range of items people no longer need — and sell what you don’t use.",
    },
  ];

  return (
    <section
      id={id || "features"}
      className="bg-gray-100 py-20 text-gray-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
