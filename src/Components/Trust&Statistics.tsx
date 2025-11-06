import React, { useState, useEffect, useRef } from "react";
import { Users, Home, Globe, Star, TrendingUp, Award, Shield, Clock } from "lucide-react";

const TrustStatistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    guests: 0,
    properties: 0,
    countries: 0,
    rating: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const targets = {
        guests: 10,
        properties: 50,
        countries: 195,
        rating: 4.9,
      };

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setCounts({
          guests: Math.floor(targets.guests * progress * 10) / 10,
          properties: Math.floor(targets.properties * progress * 10) / 10,
          countries: Math.floor(targets.countries * progress),
          rating: Math.floor(targets.rating * progress * 10) / 10,
        });

        if (step >= steps) {
          setCounts(targets);
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats = [
    {
      icon: Users,
      value: `${counts.guests}M+`,
      label: "Happy Guests",
      description: "Travelers who experienced luxury",
      color: "#d4af37",
    },
    {
      icon: Home,
      value: `${counts.properties}K+`,
      label: "Premium Properties",
      description: "Handpicked luxury estates worldwide",
      color: "#d4af37",
    },
    {
      icon: Globe,
      value: `${counts.countries}`,
      label: "Countries",
      description: "Global presence across continents",
      color: "#d4af37",
    },
    {
      icon: Star,
      value: `${counts.rating}★`,
      label: "Average Rating",
      description: "Consistently exceptional service",
      color: "#d4af37",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Verified Properties",
      description: "Every listing personally inspected",
    },
    {
      icon: Clock,
      title: "24/7 Concierge",
      description: "Premium support anytime, anywhere",
    },
    {
      icon: Award,
      title: "Best Price Guarantee",
      description: "Competitive luxury pricing",
    },
    {
      icon: TrendingUp,
      title: "Instant Booking",
      description: "Secure your stay immediately",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .stat-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stat-card:hover {
          transform: translateY(-8px) scale(1.02);
        }

        .stat-glow {
          box-shadow: 0 0 40px rgba(212, 175, 55, 0.15);
        }

        .stat-card:hover .stat-glow {
          box-shadow: 0 0 60px rgba(212, 175, 55, 0.3);
        }

        .feature-card {
          transition: all 0.4s ease;
        }

        .feature-card:hover {
          transform: translateX(8px);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div 
        ref={sectionRef}
        className="relative" 
        style={{ 
          backgroundColor: "#1a0003",
          paddingTop: "120px",
          paddingBottom: "120px"
        }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-[1000px] h-[1000px] bg-[#4a0010] rounded-full blur-[250px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[900px] h-[900px] bg-[#3a000b] rounded-full blur-[220px]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span 
                className="text-sm tracking-[0.35em] text-[#d4af37] uppercase font-semibold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Trusted Worldwide
              </span>
            </div>
            <h2
              className="text-6xl md:text-7xl font-normal text-[#f5e6cc] mb-6 tracking-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              By The Numbers
            </h2>
            <p 
              className="text-lg text-[#bfa58a] max-w-2xl mx-auto font-light leading-relaxed" 
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              A testament to excellence in luxury hospitality and unparalleled guest satisfaction
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="stat-card"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="relative rounded-3xl overflow-hidden border border-[#a67c52]/30 hover:border-[#d4af37]/60 bg-[#0d0001]/80 backdrop-blur-md p-10 h-full group">
                    {/* Subtle corner accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Value - Made Larger */}
                    <div 
                      className="text-7xl font-light text-[#d4af37] mb-4 tracking-tight"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {stat.value}
                    </div>

                    {/* Label */}
                    <h3 
                      className="text-2xl font-normal text-[#f5e6cc] mb-3"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {stat.label}
                    </h3>

                    {/* Icon - Moved to bottom */}
                    <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#a67c52]/20">
                      <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-all duration-400">
                        <Icon className="w-5 h-5 text-[#d4af37]" />
                      </div>
                      <p 
                        className="text-xs text-[#bfa58a] font-light uppercase tracking-wider"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Features Grid */}
          <div className="relative">
            <div className="text-center mb-14">
              <h3
                className="text-5xl font-normal text-[#f5e6cc] mb-5"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Why Choose Us
              </h3>
              <div className="w-20 h-[2px] bg-[#d4af37] mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="feature-card group cursor-pointer text-center"
                  >
                    <div className="rounded-2xl border border-[#a67c52]/25 hover:border-[#d4af37]/50 bg-[#0d0001]/60 backdrop-blur-sm p-8 h-full transition-all duration-400 hover:bg-[#0d0001]/80">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#d4af37]/20 group-hover:scale-110 transition-all duration-400">
                        <Icon className="w-8 h-8 text-[#d4af37]" />
                      </div>
                      
                      {/* Title */}
                      <h4 
                        className="text-xl font-normal text-[#f5e6cc] mb-3 group-hover:text-[#d4af37] transition-colors duration-400"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {feature.title}
                      </h4>
                      
                      {/* Description */}
                      <p 
                        className="text-sm text-[#bfa58a] font-light leading-relaxed"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="mt-20 flex items-center justify-center gap-4">
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-[#a67c52]/40" />
            <div className="w-2 h-2 rounded-full bg-[#d4af37]/60" />
            <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-[#a67c52]/40" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustStatistics;