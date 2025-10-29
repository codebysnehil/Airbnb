import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../Components/Header";
import StaysCarousel from "../Components/StaysCarousel";

const AirbnbLuxury = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeFilter, setActiveFilter] = useState("Location");
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHovered && carouselRef.current) {
      const scrollSpeed = 1;
      const interval = setInterval(() => {
        if (carouselRef.current) {
          scrollPositionRef.current += scrollSpeed;
          carouselRef.current.scrollLeft = scrollPositionRef.current;

          // Reset to beginning when reaching the end for infinite loop
          if (
            scrollPositionRef.current >=
            carouselRef.current.scrollWidth / 2
          ) {
            scrollPositionRef.current = 0;
            carouselRef.current.scrollLeft = 0;
          }
        }
      }, 20);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const luxuryPlaces = [
    {
      id: "villa-acapulco",
      title: "Villa in Acapulco",
      location: "Acapulco, Mexico",
      price: "$1,200 / night",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    },
    {
      id: 2,
      title: "Penthouse in New York",
      location: "New York, USA",
      price: "$3,500 / night",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    },
    {
      id: 3,
      title: "Seaside villa in Santorini",
      location: "Santorini, Greece",
      price: "$2,800 / night",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    },
    {
      id: 4,
      title: "Modern Loft in Tokyo",
      location: "Tokyo, Japan",
      price: "$2,200 / night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    },
    {
      id: 5,
      title: "Beachfront Paradise in Maldives",
      location: "Maldives",
      price: "$4,500 / night",
      image:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
    },
    {
      id: 6,
      title: "Alpine Chalet in Switzerland",
      location: "Zermatt, Switzerland",
      price: "$3,200 / night",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    },
  ];

  // Duplicate places for infinite scroll effect
  const infinitePlaces = [...luxuryPlaces, ...luxuryPlaces];

  const filters = ["Location", "Type of stay", "Price", "More"];

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ backgroundColor: "#2F0812" }}
    >
      <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .carousel-container {
            overflow-x: auto;
            overflow-y: hidden;
            scroll-behavior: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .carousel-container::-webkit-scrollbar {
            display: none;
          }
        `}</style>

      {/* Navigation */}
      <Header/>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Luxury Villa"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(55, 10, 20, 0.95) 0%, rgba(75, 15, 28, 0.78) 50%, rgba(47, 8, 18, 0.96) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1
            className="text-8xl md:text-9xl font-normal text-white mb-6 tracking-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Airbnb
          </h1>
          <p
            className="text-2xl md:text-3xl text-white mb-12 font-normal"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Where journeys turn into rare experiences.
          </p>
          <button className="px-10 py-3 bg-transparent hover:bg-white/10 backdrop-blur-sm border border-white/40 rounded-md transition-all duration-300">
            <span
              className="text-white text-base font-normal"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Explore Stays
            </span>
          </button>
        </div>
      </div>

      {/* Seamless Gradient Transition */}
    
      {/* Stays Section */}
      <StaysCarousel/>
    </div>
  );
};

export default AirbnbLuxury;
