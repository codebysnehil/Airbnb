import React from "react";

const PropertyDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3a000b] to-[#1a0003] text-[#f5e6cc] font-[Inter]">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6">
        <div className="text-xl font-semibold tracking-wide">Airbnb</div>
        <div className="flex gap-4 text-sm">
          <button className="px-4 py-2 rounded-md hover:bg-white/10 transition">
            Log in
          </button>
          <button className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition">
            Sign up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-6">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="Villa in Acapulco"
            className="w-full h-[70vh] object-cover brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-5xl md:text-6xl font-[Playfair_Display] font-medium">
              Villa in Acapulco
            </h1>
            <p className="mt-2 text-lg text-gray-200">Acapulco, Mexico</p>
            <p className="mt-1 text-xl font-semibold">$1,200 / night</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mt-12">
          {/* Left content */}
          <div className="flex-1">
            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-3xl font-[Playfair_Display] mb-4">
                Overview
              </h2>
              <p className="text-[#e8d6b8] leading-relaxed">
                Nestled in the hills of Acapulco, this luxurious villa offers
                breathtaking views of the Pacific. The villa features an
                infinity pool, an open-concept living space, and contemporary
                design with elegant furnishings.
              </p>
            </section>

            {/* Amenities */}
            <section className="mb-12">
              <h2 className="text-3xl font-[Playfair_Display] mb-4">
                Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[#e8d6b8]">
                <div className="flex items-center gap-2">
                  🛏️ <span>3 bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  🛁 <span>3.5 bathrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  📶 <span>Wi-Fi</span>
                </div>
                <div className="flex items-center gap-2">
                  🍳 <span>Kitchen</span>
                </div>
              </div>
            </section>

            {/* Location */}
            {/* <section>
              <h2 className="text-3xl font-[Playfair_Display] mb-4">
                Where you’ll be
              </h2>
              <div className="w-full h-64 rounded-xl overflow-hidden bg-gray-800">
                <iframe
                  title="map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Acapulco,Mexico"
                ></iframe>
              </div>
            </section> */}

            {/* Location */}
            <section className="mt-20">
              <h2 className="text-3xl font-[Playfair_Display] text-[#f5deb3] mb-6 tracking-wide">
                Where you’ll be
              </h2>

              <div
                className="relative overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(212,175,55,0.1)]"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  background:
                    "linear-gradient(145deg, rgba(47,8,18,0.95), rgba(55,10,20,0.98))",
                }}
              >
                <iframe
                  title="map"
                  width="100%"
                  height="400"
                  style={{
                    border: "none",
                    filter: "brightness(0.9) contrast(1.05) saturate(1.1)",
                    borderRadius: "1rem",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.4656376650787!2d-99.91236722592343!3d16.853108918712713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85caf7c35aa963a7%3A0x7e0df8417efc47e7!2sAcapulco%2C%20Gro.%2C%20Mexico!5e0!3m2!1sen!2sin!4v1697293942814!5m2!1sen!2sin"
                ></iframe>

                {/* Overlay Label */}
                <div className="absolute bottom-4 right-4 bg-[#B8860B]/90 text-white text-sm px-4 py-2 rounded-md backdrop-blur-md hover:bg-[#D4AF37]/90 transition-all cursor-pointer">
                  View on Google Maps
                </div>
              </div>
            </section>
          </div>

          {/* Booking Card */}
          <div className="w-full lg:w-[320px]">
            <div className="bg-[#2b0007]/60 backdrop-blur-md p-6 rounded-2xl shadow-lg sticky top-20">
              <p className="text-3xl font-[Playfair_Display] mb-4">$1,200</p>
              <button className="w-full bg-[#a67c52] text-white font-semibold py-3 rounded-md hover:bg-[#b68b63] transition">
                Reserve Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-[#bfa58a] pb-10">
        © 2025 Airbnb Lux · Crafted with elegance
      </footer>
    </div>
  );
};

export default PropertyDetails;
