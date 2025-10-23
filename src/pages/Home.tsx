import React, { useState, useEffect } from 'react';
import { FaStar, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LuxuryAirbnb = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeFilter, setActiveFilter] = useState('Location');
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const luxuryPlaces = [
    {
      title: "Villa in Acapulco",
      location: "Acapulco, Mexico",
      price: "$1,200",
      period: "night",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      rating: 4.9,
      featured: true,
    },
    {
      title: "Penthouse in New York",
      location: "New York, USA",
      price: "$3,500",
      period: "night",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      rating: 4.8,
      featured: true,
    },
    {
      title: "Seaside villa in Santorini",
      location: "Santorini, Greece",
      price: "$2,800",
      period: "night",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
      rating: 5.0,
      featured: true,
    },
  ];

  const filters = ['Location', 'Type of stay', 'Price', 'More'];

  return (
    <div className="bg-[#1A0509] min-h-screen overflow-x-hidden">
      {/* Custom Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@200;300;400;500;600&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        style={{
          backgroundColor: scrollY > 50 ? 'rgba(26, 5, 9, 0.98)' : 'transparent',
          backdropFilter: scrollY > 50 ? 'blur(30px)' : 'none',
          borderBottom: scrollY > 50 ? '1px solid rgba(200, 75, 49, 0.1)' : 'none',
        }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-7 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none" className="text-white">
                <path d="M16 0.5C7.44 0.5 0.5 7.44 0.5 16s6.94 15.5 15.5 15.5S31.5 24.56 31.5 16 24.56 0.5 16 0.5zm0 2.5c7.18 0 13 5.82 13 13s-5.82 13-13 13S3 23.68 3 16 8.82 3 16 3z" fill="url(#logo-gradient)"/>
                <defs>
                  <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#C84B31"/>
                    <stop offset="100%" stopColor="#8B1A1A"/>
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 blur-lg opacity-50 bg-gradient-to-br from-[#C84B31] to-[#8B1A1A]" />
            </div>
            <span className="text-2xl md:text-3xl font-light text-white tracking-[0.3em]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>airbnb</span>
          </div>
          <div className="flex items-center gap-6 md:gap-8">
            <Link 
              to="/login"
              className="text-white/70 hover:text-white transition-all duration-400 text-sm tracking-[0.2em] hover:scale-105" 
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
            >
              LOG IN
            </Link>
            <Link 
              to="/signup"
              className="relative group px-6 py-2.5 overflow-hidden rounded-full transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B1A1A] via-[#A52A2A] to-[#C84B31] opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#C84B31] via-[#A52A2A] to-[#8B1A1A] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative text-white text-sm tracking-[0.2em] font-light" style={{ fontFamily: 'Montserrat, sans-serif' }}>SIGN UP</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax */}
        <div 
          className="absolute inset-0 transition-transform duration-100"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}>
          <img
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
            alt="Luxury Villa"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A0509]/70 via-[#3D0A0F]/80 to-[#1A0509]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B1A1A]/20 to-[#C84B31]/20" />
        </div>

        {/* Ambient Light Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C84B31]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B1A1A]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Hero Content */}
        <div 
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
          style={{
            opacity: 1 - scrollY / 500,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}>
           <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-light text-white mb-6 md:mb-8 tracking-[-0.03em] leading-none animate-fade-in" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 300 }}>
             Airbnb
           </h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#C84B31] to-transparent mx-auto mb-8 animate-fade-in-delay" />
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white/95 mb-10 md:mb-14 tracking-[0.05em] leading-relaxed animate-fade-in-delay px-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
            Where journeys turn into rare experiences
          </p>
          <button className="group relative px-8 sm:px-12 md:px-14 py-4 md:py-5 rounded-full overflow-hidden transition-all duration-700 hover:scale-110">
          {/* Base maroon background */}
          <div className="absolute inset-0 rounded-full bg-[#8B1A1A] transition-all duration-700" />

          {/* Hover gradient overlay */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#8B1A1A] via-[#A52A2A] to-[#C84B31] transition-all duration-700" />

          {/* Hover glow */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              boxShadow: '0 0 40px rgba(200, 75, 49, 0.6), 0 0 80px rgba(139, 26, 26, 0.4)',
            }}
          />

           <span
             className="relative text-white text-sm sm:text-base md:text-lg tracking-[0.2em] font-light"
             style={{ fontFamily: 'Montserrat, sans-serif' }}
           >
             EXPLORE STAYS
           </span>
        </button>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-7 h-12 border-2 border-white/40 rounded-full flex items-start justify-center p-2.5">
            <div className="w-1.5 h-4 bg-gradient-to-b from-[#C84B31] to-[#8B1A1A] rounded-full animate-scroll" />
          </div>
        </div>
      </div>

      {/* Stays Section */}
      <div className="relative bg-gradient-to-b from-[#1A0509] via-[#2B0A0F] to-[#1A0509] py-32">
        {/* Ambient Background Elements */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#8B1A1A]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#C84B31]/5 rounded-full blur-[150px]" />

         <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white mb-6 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Stays
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#C84B31] to-transparent mx-auto" />
          </div>

          {/* Filters */}
          {/* <div className="flex justify-center gap-5 mb-24 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`group relative px-10 py-4 text-sm tracking-[0.2em] transition-all duration-500 ${
                  activeFilter === filter ? 'text-white' : 'text-white/60'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  activeFilter === filter 
                    ? 'bg-gradient-to-r from-[#8B1A1A] to-[#C84B31] opacity-90 shadow-lg shadow-[#C84B31]/30' 
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-[#C84B31]/40 group-hover:bg-white/10'
                }`} />
                <span className="relative">{filter}</span>
              </button>
            ))}
          </div> */}
           <div className="flex justify-center gap-3 md:gap-5 mb-16 md:mb-24 flex-wrap">
           {filters.map((filter) => (
             <button
               key={filter}
               onClick={() => setActiveFilter(filter)}
               className={`group relative px-6 md:px-10 py-3 md:py-4 text-xs md:text-sm tracking-[0.2em] font-light rounded-full transition-all duration-500 transform ${
                 activeFilter === filter ? 'text-white' : 'text-white/60 hover:text-white group-hover:scale-105'
               }`}
               style={{ fontFamily: 'Montserrat, sans-serif' }}
             >
              {/* Background */}
              <div
                className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[#8B1A1A] via-[#A52A2A] to-[#C84B31] opacity-90 shadow-lg shadow-[#C84B31]/50'
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-[#C84B31]/40 group-hover:bg-white/10'
                }`}
              />

              <span className="relative">{filter}</span>
            </button>
          ))}
        </div>


           {/* Featured Properties */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-20 md:mb-28">
            {luxuryPlaces.map((place, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-sm rounded-3xl overflow-hidden transition-all duration-700 border border-white/5 hover:border-[#C84B31]/30"
                style={{
                  transform: hoveredCard === index ? 'translateY(-16px)' : 'translateY(0)',
                  animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`,
                  boxShadow: hoveredCard === index ? '0 30px 60px rgba(200, 75, 49, 0.15), 0 0 0 1px rgba(200, 75, 49, 0.1)' : 'none',
                }}>
                 {/* Image Container */}
                 <div className="relative h-80 md:h-96 overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Favorite Button */}
                  <button className="absolute top-6 right-6 w-14 h-14 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-500 hover:bg-white hover:scale-110 shadow-2xl group/heart">
                    <FaHeart className="text-gray-700 text-xl group-hover/heart:text-[#C84B31] transition-colors duration-300" />
                  </button>

                  {/* Featured Badge */}
                  {place.featured && (
                    <div className="absolute top-6 left-6 px-5 py-2.5 bg-gradient-to-r from-[#8B1A1A] to-[#C84B31] backdrop-blur-md rounded-full shadow-lg">
                      <span className="text-xs text-white tracking-[0.15em]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>FEATURED</span>
                    </div>
                  )}
                </div>

                 {/* Card Content */}
                 <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-white/50 tracking-[0.1em] mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>{place.location.toUpperCase()}</p>
                      <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{place.title}</h3>
                    </div>
                    <div className="flex items-center gap-2 bg-gradient-to-r from-[#8B1A1A]/20 to-[#C84B31]/20 px-4 py-2 rounded-full backdrop-blur-sm border border-[#C84B31]/20">
                      <FaStar className="text-[#C84B31] text-sm" />
                      <span className="text-sm font-medium text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>{place.rating}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                     <div className="flex items-baseline gap-2">
                       <span className="text-3xl md:text-4xl font-light text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{place.price}</span>
                       <span className="text-sm text-white/50 tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>/ {place.period}</span>
                     </div>
                  </div>
                </div>
              </div>
      ))}
    </div>

          {/* View All Button */}
          <div className="text-center">
           <button className="group relative px-12 md:px-16 py-4 md:py-5 overflow-hidden rounded-full transition-all duration-700 hover:scale-110">
            {/* Base ultra-dark maroon background */}
            <div className="absolute inset-0 bg-[#3A0606] rounded-full transition-all duration-700" />

            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#5C0B0B] via-[#8B1A1A] to-[#C84B31] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />

            {/* Hover glow */}
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                boxShadow: '0 0 40px rgba(200, 75, 49, 0.6), 0 0 80px rgba(58, 6, 6, 0.6)',
              }}
            />

            {/* Button text */}
             <span
               className="relative text-white text-sm md:text-base tracking-[0.2em] font-light"
               style={{ fontFamily: 'Montserrat, sans-serif' }}
             >
               VIEW ALL PROPERTIES
             </span>
          </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }
        
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(16px);
            opacity: 0;
          }
        }
        
        .animate-fade-in {
          animation: fadeInUp 1.2s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fadeInUp 1.2s ease-out 0.4s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fadeInUp 1.2s ease-out 0.8s both;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LuxuryAirbnb;