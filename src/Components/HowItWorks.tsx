import React, { useState, useEffect } from "react";
import { Search, Home, Calendar, Users, CreditCard, Sparkles } from "lucide-react";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 5);
      }, 1300); // Change step every 2.5 seconds

      return () => clearInterval(interval);
    }
  }, [isHovering]);

  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "Browse our curated collection of luxury properties across the world's most coveted destinations",
      icon: Search,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    },
    {
      number: "02",
      title: "Select",
      description: "Choose your perfect sanctuary from our handpicked selection of exceptional estates",
      icon: Home,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
    },
    {
      number: "03",
      title: "Reserve",
      description: "Pick your travel dates and specify the number of guests for your exclusive experience",
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
    },
    {
      number: "04",
      title: "Confirm",
      description: "Secure your reservation with our seamless and protected booking process",
      icon: CreditCard,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    },
    {
      number: "05",
      title: "Experience",
      description: "Embark on your journey and create unforgettable memories in unparalleled luxury",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .step-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .step-card:hover {
          transform: translateY(-12px);
        }

        .step-line {
          position: relative;
          overflow: hidden;
        }

        .step-line::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
          transform: translateX(-100%);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }

        .number-glow {
          text-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
        }
      `}</style>

      <div className="relative" style={{ 
        backgroundColor: "#0d0001",
        paddingTop: "140px",
        paddingBottom: "140px"
      }}>
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/3 left-1/4 w-[900px] h-[900px] bg-[#4a0010] rounded-full blur-[200px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[800px] h-[800px] bg-[#3a000b] rounded-full blur-[180px]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative">
          {/* Header */}
          <div className="text-center mb-24">
            <div className="inline-block mb-5">
              <span 
                className="text-sm tracking-[0.35em] text-[#d4af37] uppercase font-semibold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Seamless Journey
              </span>
            </div>
            <h2
              className="text-6xl md:text-7xl font-normal text-[#f5e6cc] mb-8 tracking-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              How It Works
            </h2>
            <p 
              className="text-lg text-[#bfa58a] max-w-3xl mx-auto font-light leading-relaxed" 
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Your path to extraordinary luxury is remarkably simple. Five elegant steps from discovery to experience.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {/* Connecting Lines */}
            <div className="hidden md:block absolute top-28 left-0 right-0 h-[2px] mx-24">
              <div className="step-line h-full bg-gradient-to-r from-[#a67c52]/20 via-[#a67c52]/40 to-[#a67c52]/20" />
            </div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => {
                    setIsHovering(true);
                    setActiveStep(index);
                  }}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className={`step-card relative ${isActive ? 'z-10' : 'z-0'}`}>
                    {/* Card */}
                    <div className={`relative rounded-2xl overflow-hidden border transition-all duration-500 ${
                      isActive 
                        ? 'border-[#d4af37]/60 bg-[#1a0003]/80' 
                        : 'border-[#a67c52]/20 bg-[#1a0003]/40'
                    } backdrop-blur-sm`}>
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={step.image}
                          alt={step.title}
                          className={`w-full h-full object-cover transition-all duration-700 ${
                            isActive ? 'scale-110' : 'scale-100'
                          }`}
                        />
                        <div className={`absolute inset-0 transition-all duration-500 ${
                          isActive 
                            ? 'bg-gradient-to-t from-[#0d0001] via-[#0d0001]/60 to-transparent' 
                            : 'bg-gradient-to-t from-[#0d0001] via-[#0d0001]/80 to-transparent'
                        }`} />
                        
                        {/* Icon */}
                        <div className={`absolute top-6 right-6 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive 
                            ? 'bg-[#d4af37]/20 border-2 border-[#d4af37]/60' 
                            : 'bg-[#1a0003]/60 border border-[#a67c52]/30'
                        } backdrop-blur-md`}>
                          <Icon className={`transition-all duration-500 ${
                            isActive ? 'w-6 h-6 text-[#d4af37]' : 'w-5 h-5 text-[#bfa58a]'
                          }`} />
                        </div>

                        {/* Step Number */}
                        <div className="absolute bottom-4 left-6">
                          <div 
                            className={`text-7xl font-light transition-all duration-500 ${
                              isActive ? 'text-[#d4af37] number-glow' : 'text-[#a67c52]/40'
                            }`}
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            {step.number}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3
                          className={`text-2xl font-normal mb-3 transition-colors duration-500 ${
                            isActive ? 'text-[#d4af37]' : 'text-[#f5e6cc]'
                          }`}
                          style={{ fontFamily: "Playfair Display, serif" }}
                        >
                          {step.title}
                        </h3>
                        <p 
                          className="text-[#bfa58a] text-sm leading-relaxed font-light min-h-[4rem]"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {step.description}
                        </p>
                      </div>

                      {/* Bottom Accent */}
                      <div className={`h-1 transition-all duration-500 ${
                        isActive 
                          ? 'bg-gradient-to-r from-transparent via-[#d4af37] to-transparent' 
                          : 'bg-gradient-to-r from-transparent via-[#a67c52]/30 to-transparent'
                      }`} />
                    </div>

                    {/* Connection Dot */}
                    <div className="hidden md:flex absolute -top-14 left-1/2 -translate-x-1/2 w-8 h-8 items-center justify-center">
                      <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
                        isActive 
                          ? 'bg-[#d4af37] shadow-lg shadow-[#d4af37]/50 scale-125' 
                          : 'bg-[#a67c52]/40'
                      }`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-24 text-center">
            <button className="group px-12 py-4 bg-transparent hover:bg-[#d4af37]/10 backdrop-blur-sm border-2 border-[#d4af37]/40 hover:border-[#d4af37] rounded-lg transition-all duration-500">
              <span
                className="text-[#f5e6cc] group-hover:text-[#d4af37] text-base font-medium tracking-wide transition-colors duration-500"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Start Your Journey
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;