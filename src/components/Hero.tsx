"use client";

import Image from "next/image";
import Slider from "react-slick";

export default function Hero({ id }: { id?: string } = {}) {
  type CarouselItem =
  | { 
      type: "split-car"; 
      before: string; 
      after: string; 
      bottomBefore: string; 
      bottomAfter: string; 
    }
  | { src: string; alt: string };

  const carouselItems: CarouselItem[] = [
    { 
      type: "split-car", 
      before: "/car-before.jpg", 
      after: "/car-after.jpg",
      bottomBefore: "/bottom-before.jpg",
      bottomAfter: "/bottom-after.jpg"
    },
    { src: "/merch.png", alt: "Exclusive Merch" },
    { src: "/car-parts.jpg", alt: "Car Parts" },
    { src: "/misc-item.png", alt: "Miscellaneous Item" },
  ];



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <section
      id={id}
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Buy, Sell & Shop Unique Items with Confidence
          </h1>
          <p className="mb-6 text-lg md:text-xl text-gray-200">
            From accident cars to car parts, exclusive merch, and everyday items — explore our curated collection or sell what you no longer need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/sell-item"
              className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded shadow hover:bg-yellow-500 transition"
            >
              Sell Your Item
            </a>
            <a
              href="/shop"
              className="px-6 py-3 border border-white rounded hover:bg-white hover:text-gray-900 transition font-semibold"
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div className="md:w-1/2 mb-10 md:mb-0 relative">
          <Slider {...settings}>
            {carouselItems.map((item, index) => {
              if ("type" in item && item.type === "split-car") {
                return (
                  <div key={index} className="w-full flex justify-center">
                    <div className="grid grid-cols-2 gap-2 w-full max-w-[600px]">
                      <Image
                        src={item.before}
                        alt="Car Before Repair"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg w-full h-auto"
                      />
                      <Image
                        src={item.after}
                        alt="Car After Repair"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg w-full h-auto"
                      />
                      {/* Optional: bottom row images */}
                      <Image
                        src={item.bottomBefore} // or a new image
                        alt="Car Before Repair - Bottom"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg w-full h-auto"
                      />
                      <Image
                        src={item.bottomAfter} // or a new image
                        alt="Car After Repair - Bottom"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg w-full h-auto"
                      />
                    </div>
                  </div>
                );
              } else {
                const normalItem = item as { src: string; alt: string };
                return (
                  <div key={index} className="px-2 flex justify-center">
                    <div className="w-full max-w-[600px] h-[400px] relative">
                      <Image
                        src={normalItem.src}
                        alt={normalItem.alt}
                        fill
                        className="rounded-lg shadow-lg object-contain"
                      />
                    </div>
                  </div>

                );
              }
            })}

          </Slider>
        </div>
      </div>
    </section>
  );
}
