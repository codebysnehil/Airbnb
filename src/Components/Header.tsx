import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
      style={{
        backgroundColor: scrollY > 50 ? "rgba(26, 0, 3, 0.95)" : "transparent",
        backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center gap-3">
            <svg
              className="w-[35px] h-[35px]"
              viewBox="0 0 1991.3 2143.2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="logoGold"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#D4AF37", stopOpacity: 0.9 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#B8932F", stopOpacity: 0.9 }}
                  />
                </linearGradient>
              </defs>
              <path
                d="m1851.6 1735.6c-15 111.6-90.1 208.1-195.2 251-51.5 21.4-107.3 27.9-163.1 21.4-53.6-6.4-107.3-23.6-163-55.7-77.2-43-154.5-109.4-244.6-208.1 141.6-173.8 227.4-332.5 259.6-474.1 15-66.5 17.2-126.6 10.7-182.4-8.6-53.6-27.9-103-57.9-145.9-66.5-96.5-178.1-152.3-302.5-152.3s-236 57.9-302.5 152.3c-30 42.9-49.3 92.3-57.9 145.9-8.6 55.8-6.4 118 10.7 182.4 32.2 141.6 120.1 302.5 259.6 476.2-88 98.7-167.3 165.2-244.6 208.1-55.8 32.2-109.4 49.4-163 55.8-55.3 6.2-111.2-1.2-163-21.4-105.1-42.9-180.2-139.5-195.2-251-6.4-53.6-2.1-107.2 19.3-167.3 6.4-21.5 17.2-42.9 27.9-68.6 15-34.3 32.2-70.8 49.3-107.3l2.2-4.3c148-319.7 306.8-645.8 472-963.3l6.4-12.9c17.2-32.1 34.3-66.5 51.5-98.7 17.2-34.3 36.5-66.5 60.1-94.4 45.1-51.5 105.1-79.4 171.6-79.4s126.6 27.9 171.6 79.4c23.6 27.9 42.9 60.1 60.1 94.4 17.2 32.2 34.3 66.5 51.5 98.6l6.5 12.9c163 319.6 321.8 645.7 469.8 965.4v2.1c17.2 34.3 32.2 73 49.3 107.3 10.7 25.8 21.5 47.2 27.9 68.6 17.1 55.9 23.5 109.5 14.9 165.3z"
                fill="url(#logoGold)"
              />
            </svg>
            <span
              className="text-xl text-[#f5e6cc] font-normal tracking-wide"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              airbnb
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/login">
            <button
              className="text-[#f5e6cc] text-sm font-medium px-6 py-2.5 rounded-full bg-transparent hover:text-[#d4af37] transition-all duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Log in
            </button>
          </Link>

          <Link to="/signup">
            <button
              className="relative overflow-hidden text-[#1a0003] text-sm font-semibold px-6 py-2.5 rounded-full 
                bg-gradient-to-r from-[#d4af37] to-[#a67c52] 
                hover:from-[#e5bf47] hover:to-[#b68c62] 
                transition-all duration-300 
                shadow-lg shadow-[#a67c52]/30
                hover:shadow-[#d4af37]/50
                hover:scale-105"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 rounded-full transition-all duration-500"></span>
              <span className="relative z-10">Sign up</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;