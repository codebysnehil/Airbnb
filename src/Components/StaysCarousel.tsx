import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star, MapPin } from "lucide-react";

const StaysCarousel = () => {
  const [activeFilter, setActiveFilter] = useState("All Locations");
  const [isHovered, setIsHovered] = useState(false);
const [hoveredCard, setHoveredCard] = useState<number | null>(null);
const carouselRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    if (!isHovered && carouselRef.current) {
      const scrollSpeed = 0.3;
      const interval = setInterval(() => {
        if (carouselRef.current) {
          scrollPositionRef.current += scrollSpeed;
          carouselRef.current.scrollLeft = scrollPositionRef.current;

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
      carouselRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  const luxuryPlaces = [
    {
      id: "villa-acapulco",
      title: "Villa in Acapulco",
      location: "Acapulco, Mexico",
      price: "1,200",
      rating: 4.98,
      reviews: 247,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    },
    {
      id: 2,
      title: "Penthouse in New York",
      location: "New York, USA",
      price: "3,500",
      rating: 4.95,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    },
    {
      id: 3,
      title: "Seaside Villa in Santorini",
      location: "Santorini, Greece",
      price: "2,800",
      rating: 5.0,
      reviews: 312,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    },
    {
      id: 4,
      title: "Modern Loft in Tokyo",
      location: "Tokyo, Japan",
      price: "2,200",
      rating: 4.92,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    },
    {
      id: 5,
      title: "Beachfront Paradise in Maldives",
      location: "Maldives",
      price: "4,500",
      rating: 4.99,
      reviews: 428,
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
    },
    {
      id: 6,
      title: "Alpine Chalet in Switzerland",
      location: "Zermatt, Switzerland",
      price: "3,200",
      rating: 4.96,
      reviews: 201,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    },
  ];

  const infinitePlaces = [...luxuryPlaces, ...luxuryPlaces, ...luxuryPlaces];

  const filters = ["All Locations", "Coastal", "Urban", "Mountain"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
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

      {/* Seamless Transition */}
      <div className="relative" style={{ backgroundColor: "#1a0003" }}>
        <div
          className="relative"
          style={{
            background: "linear-gradient(to bottom, rgba(47, 8, 18, 0.96) 0%, #1a0003 100%)",
            paddingTop: "100px",
            paddingBottom: "0px",
          }}
        />
      </div>

      {/* Main Section */}
      <div className="relative" style={{ 
        backgroundColor: "#1a0003",
        paddingTop: "80px",
        paddingBottom: "100px"
      }}>
        {/* Subtle Background Gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#3a000b] rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#2b0007] rounded-full blur-[150px]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative">
          {/* Header */}
          <div className="mb-16">
            <h2
              className="text-6xl md:text-7xl font-normal text-[#f5e6cc] mb-6 tracking-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Featured Properties
            </h2>
            <p className="text-lg text-[#bfa58a] max-w-2xl font-light leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              Meticulously curated estates and residences in the world's most coveted destinations
            </p>
          </div>

          {/* Filter Navigation */}
          <div className="flex gap-8 mb-14 border-b border-[#a67c52]/20 pb-1">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`pb-4 text-sm font-medium transition-all duration-300 relative ${
                  activeFilter === filter
                    ? "text-[#d4af37]"
                    : "text-[#bfa58a] hover:text-[#f5e6cc]"
                }`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {filter}
                {activeFilter === filter && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
                )}
              </button>
            ))}
          </div>

          {/* Carousel */}
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Navigation */}
            {isHovered && (
              <>
                <button
                  onClick={handleScrollLeft}
                  className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#2b0007]/80 backdrop-blur-xl border border-[#a67c52]/40 hover:border-[#d4af37]/60 flex items-center justify-center transition-all duration-300 hover:bg-[#2b0007]"
                >
                  <ChevronLeft className="w-5 h-5 text-[#f5e6cc]" />
                </button>
                
                <button
                  onClick={handleScrollRight}
                  className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#2b0007]/80 backdrop-blur-xl border border-[#a67c52]/40 hover:border-[#d4af37]/60 flex items-center justify-center transition-all duration-300 hover:bg-[#2b0007]"
                >
                  <ChevronRight className="w-5 h-5 text-[#f5e6cc]" />
                </button>
              </>
            )}

            {/* Cards Container */}
            <div
              ref={carouselRef}
              className="carousel-container flex gap-6 pb-2"
            >
              {infinitePlaces.map((place, index) => (
                <Link 
                  to={`/stay/${place.id}`} 
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className="group cursor-pointer flex-shrink-0 relative"
                    style={{ width: "440px" }}
                  >
                    <div className="relative bg-[#2b0007]/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#a67c52]/20 hover:border-[#a67c52]/40 transition-all duration-500">
                      {/* Image */}
                      <div className="relative overflow-hidden h-[320px]">
                        <img
                          src={place.image}
                          alt={place.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0003] via-transparent to-transparent opacity-60" />
                        
                        {/* Rating Overlay */}
                        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a0003]/70 backdrop-blur-md border border-[#a67c52]/30">
                          <Star className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
                          <span className="text-[#f5e6cc] font-medium text-sm">{place.rating}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="mb-4">
                          <h3
                            className="text-[#f5e6cc] text-2xl font-normal mb-2 group-hover:text-[#d4af37] transition-colors duration-300"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            {place.title}
                          </h3>
                          <div className="flex items-center gap-2 text-[#bfa58a] text-sm">
                            <MapPin className="w-3.5 h-3.5" />
                            <span style={{ fontFamily: "Inter, sans-serif" }}>{place.location}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-[#a67c52]/20">
                          <div className="flex items-baseline gap-1">
                            <span className="text-[#f5e6cc] text-3xl font-light" style={{ fontFamily: "Inter, sans-serif" }}>
                              ${place.price}
                            </span>
                            <span className="text-[#bfa58a] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>per night</span>
                          </div>
                          
                          <div className="flex items-center gap-1 text-[#bfa58a] text-xs">
                            <span style={{ fontFamily: "Inter, sans-serif" }}>{place.reviews} reviews</span>
                          </div>
                        </div>
                      </div>

                      {/* Hover indicator */}
                      <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaysCarousel;