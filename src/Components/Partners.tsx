import React, { useState, useEffect, useRef } from "react";

const PartnersCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    if (!isHovered && carouselRef.current) {
      const scrollSpeed = 0.8;
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

  const partners = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Amazon AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "Google Cloud",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    },
    {
      name: "Stripe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
    },
    {
      name: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    },
    {
      name: "Adobe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg",
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    },
    {
      name: "Oracle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    },
  ];

  const infinitePartners = [...partners, ...partners, ...partners, ...partners];

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

        .partner-logo-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .partner-logo-card:hover {
          transform: translateY(-8px);
        }

        .logo-filter {
          filter: brightness(0) invert(1) opacity(0.7);
          transition: all 0.4s ease;
        }

        .partner-logo-card:hover .logo-filter {
          filter: brightness(0) invert(1) opacity(1);
        }
      `}</style>

      <div className="relative" style={{ 
        backgroundColor: "#0d0001",
        paddingTop: "100px",
        paddingBottom: "100px"
      }}>
        {/* Subtle Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-[#4a0010] rounded-full blur-[250px]" />
        </div>

        <div className="max-w-[1600px] mx-auto px-8 relative">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-3">
              <span 
                className="text-xs tracking-[0.4em] text-[#d4af37] uppercase font-semibold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Trusted By Industry Leaders
              </span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-normal text-[#f5e6cc] tracking-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Our Technology Partners
            </h2>
          </div>

          {/* Logo Carousel */}
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              ref={carouselRef}
              className="carousel-container flex gap-16 items-center pb-4"
            >
              {infinitePartners.map((partner, index) => (
                <div
                  key={index}
                  className="partner-logo-card flex-shrink-0 flex items-center justify-center cursor-pointer"
                  style={{ width: "200px", height: "100px" }}
                >
                  <div className="w-full h-full flex items-center justify-center p-6 rounded-xl bg-[#1a0003]/40 backdrop-blur-sm border border-[#a67c52]/10 hover:border-[#a67c52]/30 hover:bg-[#1a0003]/60">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="logo-filter max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Optional Divider Line */}
          <div className="mt-16 flex items-center justify-center">
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#a67c52]/30 to-transparent" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersCarousel;