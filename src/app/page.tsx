import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";

// Server-side metadata
export const metadata = {
  title: "WeBuyItWeSellIt - Accident Cars, Parts & Merch",
  description:
    "We buy accident vehicles, source car parts, repair cars, and sell exclusive merch. See before & after pictures and testimonials from happy customers.",
};

export default function Home() {
  return (
    <div>
      <Header id="header" />
      <Hero id="hero" />
      <Features id="features" />
      <Process id="process" />
      <Stats id="stats" />
      <Gallery id="gallery" />
      <Testimonials id="testimonials" />
  
    </div>
  );
}
