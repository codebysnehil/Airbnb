import React, { useState, useEffect } from "react";
import { Heart, Share2, Star, Wifi, Utensils, Wind, Tv, MapPin, Calendar, Users, Shield, Award, Check, ChevronLeft, ChevronRight, Sparkles, Clock, MessageCircle } from "lucide-react";
import Header from "./Header";

const PropertyDetails = () => {
  const [scrolled, setScrolled] = useState(false);
  const [liked, setLiked] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80"
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const amenities = [
    { icon: Wifi, label: "High-Speed WiFi", desc: "Fiber 1Gbps" },
    { icon: Utensils, label: "Gourmet Kitchen", desc: "Chef equipped" },
    { icon: Wind, label: "Climate Control", desc: "Smart system" },
    { icon: Tv, label: "Entertainment", desc: "Premium 4K" },
  ];

  const highlights = [
    { icon: Star, value: "4.96", label: "Rating" },
    { icon: Award, value: "Superhost", label: "Verified" },
    { icon: Shield, value: "247", label: "Reviews" },
  ];

  const features = [
    "Ocean view infinity pool",
    "Private beach access",
    "24/7 concierge service",
    "Gourmet chef available",
    "Spa & wellness center",
    "Home theater system",
    "Smart home automation",
    "Electric vehicle charging",
    "Helipad access",
    "Wine cellar"
  ];

  return (
    <div className="min-h-screen text-[#f5e6cc]">
      {/* Gradient Background - Dark to Light to Dark */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0003] via-[#5a0a1e] to-[#1a0003]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#a67c52] rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-[#d4af37] rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8b4513] rounded-full blur-[120px]" />
        </div>
      </div>

      {/* Premium Navbar */}
      <Header/>

      <div className="pt-24 pb-20">
        {/* Hero Gallery */}
        <div className="max-w-7xl mx-auto px-8 mt-4">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/60 border border-[#a67c52]/20">
            <div className="grid grid-cols-4 gap-2 h-[650px]">
              <div className="col-span-2 row-span-2 relative group overflow-hidden">
                <img
                  src={images[imageIndex]}
                  alt="Main villa view"
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0003]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                
                <button 
                  onClick={() => setImageIndex((imageIndex - 1 + images.length) % images.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-xl border border-[#a67c52]/30 flex items-center justify-center hover:bg-black/70 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => setImageIndex((imageIndex + 1) % images.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-xl border border-[#a67c52]/30 flex items-center justify-center hover:bg-black/70 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              {images.slice(1, 4).map((img, idx) => (
                <div key={idx} className="relative group overflow-hidden cursor-pointer" onClick={() => setImageIndex(idx + 1)}>
                  <img
                    src={img}
                    alt={`Villa view ${idx + 2}`}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
                  {imageIndex === idx + 1 && (
                    <div className="absolute inset-0 border-4 border-[#d4af37]" />
                  )}
                </div>
              ))}
              <button className="relative bg-[#2b0007]/90 backdrop-blur-xl hover:bg-[#3a000b]/90 transition-all duration-300 flex items-center justify-center gap-2 font-semibold border border-[#a67c52]/40 hover:border-[#d4af37]/60 group">
                <Sparkles className="w-5 h-5 text-[#d4af37]" />
                <span>View All Photos</span>
              </button>
            </div>
          </div>

          {/* Title & Actions */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mt-10">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {highlights.map((h, idx) => {
                  const Icon = h.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2b0007]/60 backdrop-blur-xl border border-[#a67c52]/30 hover:border-[#d4af37]/50 transition-all duration-300 hover:scale-105">
                      <Icon className="w-4 h-4 text-[#d4af37]" />
                      <span className="font-bold text-sm">{h.value}</span>
                      <span className="text-[#bfa58a] text-xs">{h.label}</span>
                    </div>
                  );
                })}
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-[#f5e6cc] via-[#d4af37] to-[#f5e6cc] bg-clip-text text-transparent">
                  Infinity Villa
                </span>
                <br />
                <span className="text-[#e8d6b8]">Acapulco</span>
              </h1>
              <div className="flex items-center gap-3 text-[#bfa58a] text-lg">
                <MapPin className="w-5 h-5 text-[#a67c52]" />
                <span>Las Brisas, Acapulco, Guerrero, Mexico</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setLiked(!liked)}
                className={`p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-110 ${
                  liked
                    ? "bg-gradient-to-br from-[#d4af37] to-[#a67c52] border-[#d4af37] shadow-lg shadow-[#d4af37]/50"
                    : "bg-[#2b0007]/60 border-[#a67c52]/40 hover:bg-[#2b0007]/80 hover:border-[#d4af37]/60 backdrop-blur-xl"
                }`}
              >
                <Heart className={`w-6 h-6 ${liked ? "fill-[#1a0003]" : ""}`} />
              </button>
              <button className="p-4 rounded-2xl bg-[#2b0007]/60 border-2 border-[#a67c52]/40 hover:bg-[#2b0007]/80 hover:border-[#d4af37]/60 backdrop-blur-xl transition-all duration-300 hover:scale-110">
                <Share2 className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mt-16">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Host Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 to-[#a67c52]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center gap-6 p-8 rounded-3xl bg-[#2b0007]/50 backdrop-blur-2xl border border-[#a67c52]/30 hover:border-[#d4af37]/50 transition-all duration-500">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37] to-[#a67c52] rounded-2xl blur-md opacity-60" />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
                      alt="Host"
                      className="relative w-24 h-24 rounded-2xl object-cover border-4 border-[#d4af37]/50"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-[#d4af37] to-[#a67c52] text-[#1a0003] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                      <Star className="w-3 h-3 fill-[#1a0003]" />
                      Superhost
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">Hosted by Carlos Montenegro</h3>
                    <p className="text-[#bfa58a] mb-2">Luxury property specialist · 10 years hosting</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1.5 text-[#a67c52]">
                        <Clock className="w-4 h-4" />
                        <span>Responds within 1 hour</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#a67c52]">
                        <MessageCircle className="w-4 h-4" />
                        <span>100% response rate</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37]/20 to-[#a67c52]/20 hover:from-[#d4af37]/30 hover:to-[#a67c52]/30 backdrop-blur-xl border border-[#a67c52]/40 font-semibold transition-all duration-300 hover:scale-105">
                    Contact Host
                  </button>
                </div>
              </div>

              {/* About Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-12 bg-gradient-to-b from-[#d4af37] to-[#a67c52] rounded-full" />
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-[#f5e6cc] to-[#d4af37] bg-clip-text text-transparent">
                    About this sanctuary
                  </h2>
                </div>
                <div className="space-y-4 text-[#e8d6b8] text-lg leading-relaxed pl-7">
                  <p>
                    Perched majestically on the cliffs of Las Brisas, this architectural masterpiece redefines luxury living. 
                    The villa seamlessly blends contemporary design with tropical elegance, featuring floor-to-ceiling windows 
                    that frame breathtaking Pacific vistas.
                  </p>
                  <p>
                    An infinity pool appears to merge with the ocean horizon, creating an illusion of endless blue. The open-concept 
                    living areas flow effortlessly between indoor and outdoor spaces, perfect for both intimate gatherings and grand 
                    celebrations under the Mexican sun.
                  </p>
                  <p className="text-[#d4af37] font-semibold">
                    Every detail has been meticulously curated to provide an unparalleled experience of coastal sophistication.
                  </p>
                </div>
              </div>

              {/* Property Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37] to-[#a67c52] rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="relative p-8 rounded-2xl bg-[#2b0007]/50 backdrop-blur-xl border border-[#a67c52]/30 group-hover:border-[#d4af37]/60 transition-all duration-500 text-center">
                    <div className="text-5xl font-bold bg-gradient-to-br from-[#f5e6cc] to-[#d4af37] bg-clip-text text-transparent mb-2">3</div>
                    <div className="text-[#bfa58a] font-medium">Bedrooms</div>
                    <div className="text-xs text-[#a67c52] mt-1">King & Queen suites</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#a67c52] to-[#8b4513] rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="relative p-8 rounded-2xl bg-[#2b0007]/50 backdrop-blur-xl border border-[#a67c52]/30 group-hover:border-[#d4af37]/60 transition-all duration-500 text-center">
                    <div className="text-5xl font-bold bg-gradient-to-br from-[#f5e6cc] to-[#d4af37] bg-clip-text text-transparent mb-2">3.5</div>
                    <div className="text-[#bfa58a] font-medium">Bathrooms</div>
                    <div className="text-xs text-[#a67c52] mt-1">Spa-inspired</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8b4513] to-[#d4af37] rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="relative p-8 rounded-2xl bg-[#2b0007]/50 backdrop-blur-xl border border-[#a67c52]/30 group-hover:border-[#d4af37]/60 transition-all duration-500 text-center">
                    <div className="text-5xl font-bold bg-gradient-to-br from-[#f5e6cc] to-[#d4af37] bg-clip-text text-transparent mb-2">8</div>
                    <div className="text-[#bfa58a] font-medium">Guests</div>
                    <div className="text-xs text-[#a67c52] mt-1">Maximum capacity</div>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-12 bg-gradient-to-b from-[#d4af37] to-[#a67c52] rounded-full" />
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-[#f5e6cc] to-[#d4af37] bg-clip-text text-transparent">
                    Premium Amenities
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {amenities.map((amenity, idx) => {
                    const Icon = amenity.icon;
                    return (
                      <div key={idx} className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 to-[#a67c52]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative p-6 rounded-2xl bg-[#2b0007]/40 backdrop-blur-xl border border-[#a67c52]/30 hover:border-[#d4af37]/60 transition-all duration-500 hover:scale-105 cursor-pointer">
                          <Icon className="w-10 h-10 mb-4 text-[#d4af37] group-hover:scale-110 transition-transform duration-300" />
                          <h3 className="font-bold text-xl mb-1 text-[#f5e6cc]">{amenity.label}</h3>
                          <p className="text-[#bfa58a]">{amenity.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="grid md:grid-cols-2 gap-3 mt-6">
                  {features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 rounded-xl bg-[#2b0007]/30 backdrop-blur-xl border border-[#a67c52]/20 hover:border-[#d4af37]/40 transition-all duration-300 hover:scale-105 cursor-pointer group"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#d4af37] to-[#a67c52] flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-[#1a0003]" />
                      </div>
                      <span className="text-[#e8d6b8] font-medium group-hover:text-[#f5e6cc] transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Map */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-12 bg-gradient-to-b from-[#d4af37] to-[#a67c52] rounded-full" />
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-[#f5e6cc] to-[#d4af37] bg-clip-text text-transparent">
                    Location & Surroundings
                  </h2>
                </div>
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#a67c52]/30 shadow-2xl shadow-black/60 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-[#a67c52]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  <iframe
                    title="map"
                    width="100%"
                    height="500"
                    style={{ border: "none" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.4656376650787!2d-99.91236722592343!3d16.853108918712713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85caf7c35aa963a7%3A0x7e0df8417efc47e7!2sAcapulco%2C%20Gro.%2C%20Mexico!5e0!3m2!1sen!2sin!4v1697293942814!5m2!1sen!2sin"
                    className="brightness-90 contrast-110 saturate-110"
                  />
                  <button className="absolute bottom-6 right-6 px-6 py-3 rounded-xl bg-[#1a0003]/90 backdrop-blur-2xl border border-[#a67c52]/50 hover:border-[#d4af37] hover:bg-[#2b0007]/90 transition-all duration-300 font-semibold hover:scale-105 shadow-xl flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#d4af37]" />
                    Open in Maps
                  </button>
                </div>
                <p className="text-[#bfa58a] pl-7">
                  Nestled in the exclusive Las Brisas neighborhood, minutes from La Quebrada cliffs and Playa Caleta. 
                  Easy access to Acapulco's finest restaurants, nightlife, and cultural attractions.
                </p>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37] to-[#a67c52] rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative p-8 rounded-3xl bg-[#2b0007]/80 backdrop-blur-2xl border-2 border-[#a67c52]/40 shadow-2xl">
                    <div className="flex items-end gap-2 mb-8">
                      <span className="text-6xl font-bold bg-gradient-to-r from-[#f5e6cc] to-[#d4af37] bg-clip-text text-transparent">
                        $1,200
                      </span>
                      <span className="text-[#bfa58a] text-xl mb-3">/ night</span>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="relative group/input">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a67c52] group-focus-within/input:text-[#d4af37] transition-colors" />
                        <input
                          type="date"
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#1a0003]/50 border-2 border-[#a67c52]/30 focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/30 transition-all duration-300 text-[#f5e6cc] placeholder-[#bfa58a]"
                          placeholder="Check-in"
                        />
                      </div>
                      <div className="relative group/input">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a67c52] group-focus-within/input:text-[#d4af37] transition-colors" />
                        <input
                          type="date"
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#1a0003]/50 border-2 border-[#a67c52]/30 focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/30 transition-all duration-300 text-[#f5e6cc] placeholder-[#bfa58a]"
                          placeholder="Check-out"
                        />
                      </div>
                      <div className="relative group/input">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a67c52] group-focus-within/input:text-[#d4af37] transition-colors" />
                        <select
                          value={guests}
                          onChange={(e) => setGuests(Number(e.target.value))}
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#1a0003]/50 border-2 border-[#a67c52]/30 focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/30 transition-all duration-300 text-[#f5e6cc] appearance-none cursor-pointer"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                            <option key={n} value={n} className="bg-[#2b0007]">
                              {n} {n === 1 ? "guest" : "guests"}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#a67c52] hover:from-[#e5bf47] hover:to-[#b68c62] text-[#1a0003] font-bold text-lg shadow-lg shadow-[#a67c52]/50 hover:shadow-[#d4af37]/70 transition-all duration-300 hover:scale-105 mb-4 flex items-center justify-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Reserve Now
                    </button>

                    <p className="text-center text-[#bfa58a] text-sm mb-6">
                      You won't be charged yet
                    </p>

                    <div className="space-y-3 pt-6 border-t border-[#a67c52]/30">
                      <div className="flex justify-between text-[#e8d6b8]">
                        <span>$1,200 × 5 nights</span>
                        <span>$6,000</span>
                      </div>
                      <div className="flex justify-between text-[#e8d6b8]">
                        <span>Cleaning fee</span>
                        <span>$150</span>
                      </div>
                      <div className="flex justify-between text-[#e8d6b8]">
                        <span>Service fee</span>
                        <span>$300</span>
                      </div>
                      <div className="flex justify-between text-[#e8d6b8]">
                        <span>Taxes</span>
                        <span>$350</span>
                      </div>
                      <div className="flex justify-between font-bold text-xl pt-4 border-t border-[#a67c52]/30 bg-gradient-to-r from-[#f5e6cc] to-[#d4af37] bg-clip-text text-transparent">
                        <span>Total</span>
                        <span>$6,800</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30">
                      <p className="text-sm text-[#e8d6b8] text-center">
                        <span className="font-bold text-[#d4af37]">Free cancellation</span> for 48 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="max-w-7xl mx-auto px-8 mt-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1 h-12 bg-gradient-to-b from-[#d4af37] to-[#a67c52] rounded-full" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#f5e6cc] to-[#d4af37] bg-clip-text text-transparent">
              Guest Reviews
            </h2>
            <div className="flex items-center gap-2 ml-4">
              <Star className="w-6 h-6 fill-[#d4af37] text-[#d4af37]" />
              <span className="text-2xl font-bold text-[#f5e6cc]">4.96</span>
              <span className="text-[#bfa58a]">· 247 reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Sarah Johnson",
                date: "October 2024",
                rating: 5,
                text: "Absolutely spectacular! The infinity pool with ocean views was breathtaking. Carlos was an exceptional host, very responsive and helpful. The villa exceeded all our expectations.",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              },
              {
                name: "Michael Chen",
                date: "September 2024",
                rating: 5,
                text: "Perfect for our family vacation. The location in Las Brisas is stunning, and the villa itself is even better than the photos. Every amenity you could want, and the sunset views are incredible.",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
              },
              {
                name: "Emma Rodriguez",
                date: "August 2024",
                rating: 5,
                text: "A truly luxurious experience! The smart home features, gourmet kitchen, and private beach access made our stay unforgettable. Will definitely return!",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
              },
              {
                name: "David Martinez",
                date: "July 2024",
                rating: 5,
                text: "Outstanding property in every way. The concierge service was top-notch, and the villa's design is simply stunning. Perfect for entertaining or relaxing.",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
              }
            ].map((review, idx) => (
              <div
                key={idx}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-[#a67c52]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6 rounded-2xl bg-[#2b0007]/40 backdrop-blur-xl border border-[#a67c52]/30 hover:border-[#d4af37]/50 transition-all duration-500">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#d4af37]/50"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-[#f5e6cc]">{review.name}</h4>
                      <p className="text-sm text-[#bfa58a]">{review.date}</p>
                    </div>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[#e8d6b8] leading-relaxed">{review.text}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-8 mx-auto block px-8 py-3 rounded-xl bg-gradient-to-r from-[#d4af37]/20 to-[#a67c52]/20 hover:from-[#d4af37]/30 hover:to-[#a67c52]/30 backdrop-blur-xl border border-[#a67c52]/40 font-semibold transition-all duration-300 hover:scale-105">
            Show all 247 reviews
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-32 border-t border-[#a67c52]/30 bg-[#1a0003]/60 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-8 py-16">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <h4 className="font-bold mb-6 text-xl text-[#d4af37]">Support</h4>
                <ul className="space-y-3 text-[#bfa58a]">
                  <li className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Help Center</li>
                  <li className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Safety Information</li>
                  <li className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Cancellation Options</li>
                  <li className="hover:text-[#f5e6cc] transition-colors cursor-pointer">COVID-19 Response</li>
                  <li className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Report Issue</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-xl text-[#d4af37]">Community</h4>
                <ul className="space-y-3 text-[#bfa58a]">
                  <li className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Airbnb.org</li>
                  <li className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Guest Referrals</li>
                  <li className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Careers</li>
                  <li className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Investors</li>
                  <li className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Gift Cards</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-xl text-[#d4af37]">Hosting</h4>
                <ul className="space-y-3 text-[#bfa58a]">
                  <li className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Try Hosting</li>
                  <li className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Protection</li>
                  <li className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Resources</li>
                  <li className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Community Forum</li>
                  <li className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Hosting Responsibly</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-xl text-[#d4af37]">About</h4>
                <ul className="space-y-3 text-[#bfa58a]">
                  <li className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Newsroom</li>
                  <li className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Features</li>
                  <li className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Partnerships</li>
                  <li className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Diversity</li>
                  <li className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Accessibility</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#a67c52]/30 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#d4af37] to-[#a67c52] rounded-lg flex items-center justify-center font-bold text-[#1a0003]">
                  A
                </div>
                <p className="text-[#bfa58a]">© 2025 AirbnbLux, Inc. · Redefining luxury stays</p>
              </div>
              <div className="flex gap-8 text-[#bfa58a]">
                <span className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Privacy</span>
                <span className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Terms</span>
                <span className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Sitemap</span>
                <span className="hover:text-[#f5e6cc] transition-colors cursor-pointer">Company Details</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PropertyDetails;