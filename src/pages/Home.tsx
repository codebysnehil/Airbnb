  import React, { useState, useEffect, useRef } from 'react';
  import { Link } from 'react-router-dom';
  import { ChevronLeft, ChevronRight } from 'lucide-react';

  const AirbnbLuxury = () => {
    const [scrollY, setScrollY] = useState(0);
    const [activeFilter, setActiveFilter] = useState('Location');
    const [isHovered, setIsHovered] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);
    const scrollPositionRef = useRef(0);

    useEffect(() => {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
      if (!isHovered && carouselRef.current) {
        const scrollSpeed = 1;
        const interval = setInterval(() => {
          if (carouselRef.current) {
            scrollPositionRef.current += scrollSpeed;
            carouselRef.current.scrollLeft = scrollPositionRef.current;
            
            // Reset to beginning when reaching the end for infinite loop
            if (scrollPositionRef.current >= carouselRef.current.scrollWidth / 2) {
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
        carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
      }
    };

    const handleScrollRight = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
      }
    };

    const luxuryPlaces = [
      {
        title: "Villa in Acapulco",
        location: "Acapulco, Mexico",
        price: "$1,200 / night",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      },
      {
        title: "Penthouse in New York",
        location: "New York, USA",
        price: "$3,500 / night",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      },
      {
        title: "Seaside villa in Santorini",
        location: "Santorini, Greece",
        price: "$2,800 / night",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      },
      {
        title: "Modern Loft in Tokyo",
        location: "Tokyo, Japan",
        price: "$2,200 / night",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      },
      {
        title: "Beachfront Paradise in Maldives",
        location: "Maldives",
        price: "$4,500 / night",
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
      },
      {
        title: "Alpine Chalet in Switzerland",
        location: "Zermatt, Switzerland",
        price: "$3,200 / night",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      },
    ];

    // Duplicate places for infinite scroll effect
    const infinitePlaces = [...luxuryPlaces, ...luxuryPlaces];

    const filters = ['Location', 'Type of stay', 'Price', 'More'];

    return (
      <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#2F0812' }}>
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
        <nav 
          className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
          style={{
            backgroundColor: scrollY > 50 ? 'rgba(47, 8, 18, 0.98)' : 'transparent',
            backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
          }}
        >
          <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
            <Link to="/">
              <div className="flex items-center gap-3">
                <svg className="w-[35px] h-[35px]" viewBox="0 0 1991.3 2143.2" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="logoGold" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#D4AF37", stopOpacity: 0.9 }} />
                      <stop offset="100%" style={{ stopColor: "#B8932F", stopOpacity: 0.9 }} />
                    </linearGradient>
                  </defs>
                  <path
                    d="m1851.6 1735.6c-15 111.6-90.1 208.1-195.2 251-51.5 21.4-107.3 27.9-163.1 21.4-53.6-6.4-107.3-23.6-163-55.7-77.2-43-154.5-109.4-244.6-208.1 141.6-173.8 227.4-332.5 259.6-474.1 15-66.5 17.2-126.6 10.7-182.4-8.6-53.6-27.9-103-57.9-145.9-66.5-96.5-178.1-152.3-302.5-152.3s-236 57.9-302.5 152.3c-30 42.9-49.3 92.3-57.9 145.9-8.6 55.8-6.4 118 10.7 182.4 32.2 141.6 120.1 302.5 259.6 476.2-88 98.7-167.3 165.2-244.6 208.1-55.8 32.2-109.4 49.4-163 55.8-55.3 6.2-111.2-1.2-163-21.4-105.1-42.9-180.2-139.5-195.2-251-6.4-53.6-2.1-107.2 19.3-167.3 6.4-21.5 17.2-42.9 27.9-68.6 15-34.3 32.2-70.8 49.3-107.3l2.2-4.3c148-319.7 306.8-645.8 472-963.3l6.4-12.9c17.2-32.1 34.3-66.5 51.5-98.7 17.2-34.3 36.5-66.5 60.1-94.4 45.1-51.5 105.1-79.4 171.6-79.4s126.6 27.9 171.6 79.4c23.6 27.9 42.9 60.1 60.1 94.4 17.2 32.2 34.3 66.5 51.5 98.6l6.5 12.9c163 319.6 321.8 645.7 469.8 965.4v2.1c17.2 34.3 32.2 73 49.3 107.3 10.7 25.8 21.5 47.2 27.9 68.6 17.1 55.9 23.5 109.5 14.9 165.3z"
                    fill="url(#logoGold)"
                  />
                </svg>
                <span className="text-xl text-white font-normal tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                  airbnb
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-4">
    <Link to="/login">
      <button
        className="text-white text-sm font-medium px-6 py-2.5 rounded-full bg-transparent hover:text-white/80 transition-all duration-300"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Log in
      </button>
    </Link>

    <Link to="/signup">
      <button
        className="relative overflow-hidden text-white text-sm font-semibold px-6 py-2.5 rounded-full 
                  bg-gradient-to-r from-[#B8860B] to-[#8B6D00] 
                  hover:from-[#D4AF37] hover:to-[#B88B00] 
                  transition-all duration-300 
                  shadow-md hover:shadow-lg 
                  hover:scale-105"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        <span className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-15 rounded-full transition-all duration-500"></span>
        <span className="relative z-10">Sign up</span>
      </button>
    </Link>
  </div>

          </div>
        </nav>

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
                background: 'linear-gradient(to bottom, rgba(55, 10, 20, 0.95) 0%, rgba(75, 15, 28, 0.78) 50%, rgba(47, 8, 18, 0.96) 100%)',
              }}
            />
          </div>

          <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
            <h1 
              className="text-8xl md:text-9xl font-normal text-white mb-6 tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Airbnb
            </h1>
            <p 
              className="text-2xl md:text-3xl text-white mb-12 font-normal"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Where journeys turn into rare experiences.
            </p>
            <button 
              className="px-10 py-3 bg-transparent hover:bg-white/10 backdrop-blur-sm border border-white/40 rounded-md transition-all duration-300"
            >
              <span className="text-white text-base font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>
                Explore Stays
              </span>
            </button>
          </div>
        </div>

        {/* Seamless Gradient Transition */}
        <div 
          className="relative"
          style={{
            background: 'linear-gradient(to bottom, rgba(47, 8, 18, 0.96) 0%, rgba(47, 8, 18, 0.98) 50%, #2F0812 100%)',
            paddingTop: '120px',
            paddingBottom: '0px',
          }}
        />

        {/* Stays Section */}
        <div className="relative py-24" style={{ backgroundColor: '#2F0812' }}>
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 
                className="text-8xl md:text-9xl font-normal text-white mb-12"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Stays
              </h2>
            </div>

            <div className="flex justify-center gap-8 mb-16">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-base transition-all duration-300 ${
                    activeFilter === filter 
                      ? 'text-white opacity-100' 
                      : 'text-white/60 hover:text-white/80'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Left Arrow */}
              {isHovered && (
                <button
                  onClick={handleScrollLeft}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
                  style={{ backdropFilter: 'blur(10px)' }}
                >
                  <ChevronLeft className="w-6 h-6 text-[#2F0812]" />
                </button>
              )}

              {/* Right Arrow */}
              {isHovered && (
                <button
                  onClick={handleScrollRight}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
                  style={{ backdropFilter: 'blur(10px)' }}
                >
                  <ChevronRight className="w-6 h-6 text-[#2F0812]" />
                </button>
              )}

              <div 
                ref={carouselRef}
                className="carousel-container flex gap-10 pb-6"
              >
                {infinitePlaces.map((place, index) => (
                  <div 
                    key={index} 
                    className="group cursor-pointer flex-shrink-0"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '16px',
                      padding: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      width: '380px',
                    }}
                  >
                    <div 
                      className="relative overflow-hidden mb-5"
                      style={{
                        height: '340px',
                        borderRadius: '12px',
                      }}
                    >
                      <img
                        src={place.image}
                        alt={place.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="px-3 pb-3">
                      <h3 
                        className="text-white text-2xl font-normal mb-2"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {place.title}
                      </h3>
                      <p 
                        className="text-white/70 text-base mb-3 font-normal"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {place.location}
                      </p>
                      <p 
                        className="text-white text-base font-normal"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {place.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default AirbnbLuxury;