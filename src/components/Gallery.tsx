"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export default function Gallery({ id }: { id?: string } = {}) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  // All gallery images (auto-update later possible)
  const items: GalleryItem[] = [
    { src: "/images/before-fix.jpg", alt: "Accident Car 1", caption: "Before Repair" },
    { src: "/images/after-fix.jpg", alt: "Accident Car 2", caption: "After Repair" },
    { src: "/images/engine-bay.jpg", alt: "Aircon refilling", caption: "Engine Work" },
    { src: "/images/paint-job2.jpg", alt: "Painting the car", caption: "Paint Job" },
    { src: "/images/extra1.jpg", alt: "Extra work 1", caption: "Detailing" },
    { src: "/images/extra2.jpg", alt: "Extra work 2", caption: "Suspension Fix" },
    // more images
  ];

  // Show only 4 on homepage
  const previewItems = items.slice(0, 4);

  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Gallery
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {previewItems.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer overflow-hidden rounded-lg shadow hover:scale-105 transition-transform"
              onClick={() => setSelected(item)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={300}
                className="object-cover w-full h-60"
              />
              {item.caption && (
                <p className="text-center text-sm text-gray-600 py-2">
                  {item.caption}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* View More button */}
        <div className="text-right mt-4">
          <Link
            href="/gallery"
            className="text-blue-600 font-semibold hover:underline"
          >
            View our accomplishments &rarr;
          </Link>
        </div>

        {/* Modal */}
        {selected && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <div className="relative max-w-3xl w-full">
              <button
                className="absolute top-2 right-2 text-white text-2xl font-bold"
                onClick={() => setSelected(null)}
              >
                &times;
              </button>
              <Image
                src={selected.src}
                alt={selected.alt}
                width={1200}
                height={800}
                className="rounded-lg shadow-lg object-contain w-full h-auto"
              />
              {selected.caption && (
                <p className="text-center text-white mt-4">{selected.caption}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
