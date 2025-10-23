import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
<div
  className="min-h-screen flex flex-col md:flex-row w-full justify-between relative overflow-hidden md:items-stretch"
      style={{
        background:
          "radial-gradient(ellipse at center, #4A1a1a 0%, #2d0a0f 50%, #1a0000 100%)",
      }}
    >
      {/* Glow layers */}
      <div
        className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full opacity-20 blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] rounded-full opacity-15 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,26,26,0.4) 0%, transparent 70%)",
        }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');

        .premium-golden-text {
          background: linear-gradient(180deg, #FFD700 0%, #E6BE5A 20%, #D4AF37 40%, #B8932F 60%, #E6BE5A 80%, #FFD700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 2px 8px rgba(255, 215, 0, 0.4)) drop-shadow(0 0 20px rgba(212, 175, 55, 0.3));
        }

        .premium-border {
          border: 1.5px solid rgba(212, 175, 55, 0.4);
          box-shadow: 0 0 25px rgba(212, 175, 55, 0.15), inset 0 0 15px rgba(0, 0, 0, 0.3);
          background: linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(20,5,5,0.3) 100%);
        }

        .premium-border:focus {
          border-color: rgba(230, 190, 90, 0.6);
          box-shadow: 0 0 30px rgba(255, 215, 0, 0.25), inset 0 0 20px rgba(212, 175, 55, 0.1);
        }

        .premium-button {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(255, 215, 0, 0.1) 50%, rgba(212, 175, 55, 0.15) 100%);
          border: 1.5px solid rgba(212, 175, 55, 0.5);
          box-shadow: 0 4px 30px rgba(212, 175, 55, 0.2), inset 0 1px 10px rgba(255, 215, 0, 0.1);
          transition: all 0.4s ease;
        }

        .premium-button:hover {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.25) 0%, rgba(255, 215, 0, 0.2) 50%, rgba(212, 175, 55, 0.25) 100%);
          border-color: rgba(230, 190, 90, 0.7);
          box-shadow: 0 6px 40px rgba(255, 215, 0, 0.3), inset 0 1px 15px rgba(255, 215, 0, 0.15);
          transform: translateY(-2px);
        }

        .premium-link {
          color: rgba(230, 190, 90, 0.85);
          transition: all 0.3s ease;
        }

        .premium-link:hover {
          color: rgba(255, 215, 0, 1);
          text-shadow: 0 0 12px rgba(255, 215, 0, 0.4);
        }
      `}</style>

      {/* Left side: hero image */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-20 w-14 h-14 md:w-16 md:h-16 transition-transform hover:scale-110"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1991.3 2143.2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="premiumGold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
              <stop offset="20%" style={{ stopColor: "#E6BE5A", stopOpacity: 1 }} />
              <stop offset="40%" style={{ stopColor: "#252525", stopOpacity: 1 }} />
              <stop offset="60%" style={{ stopColor: "#252525", stopOpacity: 1 }} />
              <stop offset="80%" style={{ stopColor: "#E6BE5A", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
            </linearGradient>
            <filter id="premiumGlow">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="m1851.6 1735.6c-15 111.6-90.1 208.1-195.2 251-51.5 21.4-107.3 27.9-163.1 21.4-53.6-6.4-107.3-23.6-163-55.7-77.2-43-154.5-109.4-244.6-208.1 141.6-173.8 227.4-332.5 259.6-474.1 15-66.5 17.2-126.6 10.7-182.4-8.6-53.6-27.9-103-57.9-145.9-66.5-96.5-178.1-152.3-302.5-152.3s-236 57.9-302.5 152.3c-30 42.9-49.3 92.3-57.9 145.9-8.6 55.8-6.4 118 10.7 182.4 32.2 141.6 120.1 302.5 259.6 476.2-88 98.7-167.3 165.2-244.6 208.1-55.8 32.2-109.4 49.4-163 55.8-55.3 6.2-111.2-1.2-163-21.4-105.1-42.9-180.2-139.5-195.2-251-6.4-53.6-2.1-107.2 19.3-167.3 6.4-21.5 17.2-42.9 27.9-68.6 15-34.3 32.2-70.8 49.3-107.3l2.2-4.3c148-319.7 306.8-645.8 472-963.3l6.4-12.9c17.2-32.1 34.3-66.5 51.5-98.7 17.2-34.3 36.5-66.5 60.1-94.4 45.1-51.5 105.1-79.4 171.6-79.4s126.6 27.9 171.6 79.4c23.6 27.9 42.9 60.1 60.1 94.4 17.2 32.2 34.3 66.5 51.5 98.6l6.5 12.9c163 319.6 321.8 645.7 469.8 965.4v2.1c17.2 34.3 32.2 73 49.3 107.3 10.7 25.8 21.5 47.2 27.9 68.6 17.1 55.9 23.5 109.5 14.9 165.3z"
            fill="url(#premiumGold)"
            filter="url(#premiumGlow)"
          />
        </svg>
      </Link>


      {/* Left side: hero image */}
      <div className="hidden md:block md:w-1/2 h-screen relative overflow-hidden">
        <img
          src="/airbnb1.jpg"
          alt="Airbnb stays"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Optional soft overlay for golden tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b0a0a]/40 via-[#4A1a1a]/30 to-[#2d0a0f]/60 mix-blend-overlay" />
      </div>


      {/* Right side: login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative z-10 p-6 md:p-12">
  <div className="w-full max-w-md flex flex-col justify-center">

        {/* Logo */}
{/* Premium Logo Section */}
  <div className="text-center mb-10">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <svg 
                        className="relative z-10 w-40 h-40" 
                        viewBox="0 0 1991.3 2143.2" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient id="premiumGold" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
                            <stop offset="20%" style={{ stopColor: '#E6BE5A', stopOpacity: 1 }} />
                            <stop offset="40%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
                            <stop offset="60%" style={{ stopColor: '#B8932F', stopOpacity: 1 }} />
                            <stop offset="80%" style={{ stopColor: '#E6BE5A', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
                          </linearGradient>
                          <filter id="premiumGlow">
                            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                            <feMerge>
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>
                        <path 
                          d="m1851.6 1735.6c-15 111.6-90.1 208.1-195.2 251-51.5 21.4-107.3 27.9-163.1 21.4-53.6-6.4-107.3-23.6-163-55.7-77.2-43-154.5-109.4-244.6-208.1 141.6-173.8 227.4-332.5 259.6-474.1 15-66.5 17.2-126.6 10.7-182.4-8.6-53.6-27.9-103-57.9-145.9-66.5-96.5-178.1-152.3-302.5-152.3s-236 57.9-302.5 152.3c-30 42.9-49.3 92.3-57.9 145.9-8.6 55.8-6.4 118 10.7 182.4 32.2 141.6 120.1 302.5 259.6 476.2-88 98.7-167.3 165.2-244.6 208.1-55.8 32.2-109.4 49.4-163 55.8-55.3 6.2-111.2-1.2-163-21.4-105.1-42.9-180.2-139.5-195.2-251-6.4-53.6-2.1-107.2 19.3-167.3 6.4-21.5 17.2-42.9 27.9-68.6 15-34.3 32.2-70.8 49.3-107.3l2.2-4.3c148-319.7 306.8-645.8 472-963.3l6.4-12.9c17.2-32.1 34.3-66.5 51.5-98.7 17.2-34.3 36.5-66.5 60.1-94.4 45.1-51.5 105.1-79.4 171.6-79.4s126.6 27.9 171.6 79.4c23.6 27.9 42.9 60.1 60.1 94.4 17.2 32.2 34.3 66.5 51.5 98.6l6.5 12.9c163 319.6 321.8 645.7 469.8 965.4v2.1c17.2 34.3 32.2 73 49.3 107.3 10.7 25.8 21.5 47.2 27.9 68.6 17.1 55.9 23.5 109.5 14.9 165.3zm-856-100.9c-115.8-145.9-190.9-283.2-216.7-399-10.7-49.4-12.9-92.3-6.4-130.9 4.3-34.3 17.2-64.4 34.3-90.1 40.8-57.9 109.4-94.4 188.8-94.4s150.2 34.4 188.8 94.4c17.2 25.8 30 55.8 34.3 90.1 6.4 38.6 4.3 83.7-6.4 130.9-25.7 113.7-100.8 251-216.7 399zm967.6-111.5c-10.7-25.7-21.5-53.6-32.2-77.2-17.2-38.6-34.3-75.1-49.4-109.4l-2.1-2.1c-148-321.8-306.8-647.9-474.1-969.7l-6.4-12.9c-17.2-32.2-34.3-66.5-51.5-100.8-21.5-38.6-42.9-79.4-77.2-118-68.7-85.9-167.4-133.1-272.5-133.1-107.3 0-203.8 47.2-274.7 128.7-32.2 38.6-55.8 79.4-77.2 118-17.2 34.3-34.3 68.6-51.5 100.8l-6.4 12.8c-165.2 321.8-326.1 647.9-474.1 969.7l-2.1 4.3c-15 34.3-32.2 70.8-49.4 109.4-11.5 25.4-22.2 51.2-32.2 77.2-27.9 79.4-36.5 154.5-25.8 231.7 23.6 160.9 130.9 296.1 278.9 356.1 55.8 23.6 113.7 34.3 173.8 34.3 17.2 0 38.6-2.1 55.8-4.3 70.8-8.6 143.7-32.1 214.5-72.9 88-49.3 171.6-120.1 266-223.1 94.4 103 180.2 173.8 266 223.1 70.8 40.8 143.7 64.3 214.5 72.9 17.2 2.2 38.6 4.3 55.8 4.3 60.1 0 120.1-10.7 173.8-34.3 150.2-60.1 255.3-197.4 278.9-356.1 17.2-75 8.6-150-19.2-229.4z" 
                          fill="url(#premiumGold)"
                          filter="url(#premiumGlow)"
                        />
                      </svg>
                      <div className="absolute inset-0 blur-3xl opacity-40" 
                        style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.6) 0%, rgba(212,175,55,0.3) 50%, transparent 70%)' }} />
                    </div>
                  </div>
                  
                  {/* Airbnb text logo */}
                  <h1 className="premium-golden-text text-5xl mb-2 tracking-wide premium-golden-stroke" 
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
                    airbnb
                  </h1>
                </div>


        {/* Log in Title */}
        <h2 className="premium-golden-text text-8xl text-center mb-16" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 300, letterSpacing: '0.05em' }}>
          Log in
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full premium-border rounded-xl px-7 py-4 text-white placeholder-white/30 focus:outline-none"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "17px",
            }}
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full premium-border rounded-xl px-7 py-4 text-white placeholder-white/30 focus:outline-none"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "17px",
            }}
            required
          />

          <button type="submit" className="premium-button w-full py-4 rounded-xl mt-6">
            <span
              className="premium-golden-text text-xl"
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 500,
                letterSpacing: "0.12em",
              }}
            >
              Log in
            </span>
          </button>

          <div className="text-center pt-4">
            <button
              type="button"
              className="premium-golden-text text-sm"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                backgroundColor: "transparent",
              }}
            >
              Forgot password?
            </button>
          </div>
        </form>

        <div className="text-center mt-10">
          <p
            className="text-white/50 text-sm"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Don’t have an account?{" "}
            <Link to="/signup" className="premium-link font-medium">
              Sign up
            </Link>
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
