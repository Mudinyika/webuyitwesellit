"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export default function GalleryPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const items: GalleryItem[] = [
    { src: "/images/projects/before-fix.jpg", alt: "Accident Car 1", caption: "Before Repair" },
    { src: "/images/projects/after-fix.jpg", alt: "Accident Car 2", caption: "After Repair" },
    { src: "/images/projects/engine-bay.jpg", alt: "Aircon refilling", caption: "Engine Work" },
    { src: "/images/projects/paint-job2.jpg", alt: "Painting the car", caption: "Paint Job" },
    { src: "/images/projects/picanto-detailing.jpg", alt: "Detailing the car", caption: "Detailing" },
    { src: "/images/projects/suspension-fix.jpg", alt: "Extra work 2", caption: "Suspension Fix" },
    { src: "/images/projects/polo-rear.jpg", alt: "Rear-ended car", caption: "Bodywork" },
    { src: "/images/projects/polo-primed.jpg", alt: "Ready to paint car", caption: "Bodywork" },
    { src: "/images/projects/polo-fixed.jpg", alt: "Final product", caption: "Bodywork" },
    { src: "/images/projects/interior.jpg", alt: "Extra work 4", caption: "Interior Cleaning" },
    // more images here
  ];

  // Show scroll-to-top button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-6">

        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => router.back()}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            &larr; Back
          </button>
        </div>

        <h1 className="text-4xl font-bold text-center mb-12">Our Full Gallery</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
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
                <p className="text-center text-sm text-gray-600 py-2">{item.caption}</p>
              )}
            </div>
          ))}
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
          >
            ↑
          </button>
        )}

        {/* Modal */}
        {selected && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                className="absolute top-2 right-2 text-white text-3xl font-bold"
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
