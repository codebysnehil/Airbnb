import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign Up attempt:", { name, email, password, agreedToTerms });
  };

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row w-full justify-between relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a0000 0%, #2d0a0f 50%, #1a0000 100%)",
      }}
    >
      {/* Subtle ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-[200px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)",
        }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap');

        .luxury-input {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .luxury-input:focus {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(212, 175, 55, 0.3);
          box-shadow: 0 0 0 1px rgba(212, 175, 55, 0.1);
        }

        .luxury-button {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(184, 147, 47, 0.08) 100%);
          border: 1px solid rgba(212, 175, 55, 0.2);
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .luxury-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent);
          transition: left 0.5s;
        }

        .luxury-button:hover::before {
          left: 100%;
        }

        .luxury-button:hover {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(184, 147, 47, 0.12) 100%);
          border-color: rgba(212, 175, 55, 0.35);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(212, 175, 55, 0.15);
        }

        .gold-accent {
          color: rgba(212, 175, 55, 0.9);
        }

        .luxury-link {
          color: rgba(212, 175, 55, 0.8);
          transition: all 0.3s ease;
          position: relative;
        }

        .luxury-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: rgba(212, 175, 55, 0.8);
          transition: width 0.3s ease;
        }

        .luxury-link:hover {
          color: rgba(230, 190, 90, 1);
        }

        .luxury-link:hover::after {
          width: 100%;
        }

        .checkbox-luxury {
          appearance: none;
          width: 18px;
          height: 18px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.03);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          flex-shrink: 0;
        }

        .checkbox-luxury:checked {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(184, 147, 47, 0.15) 100%);
          border-color: rgba(212, 175, 55, 0.5);
        }

        .checkbox-luxury:checked::after {
          content: '✓';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: rgba(212, 175, 55, 1);
          font-size: 12px;
        }

        .divider-text {
          position: relative;
          text-align: center;
          margin: 32px 0;
        }

        .divider-text::before,
        .divider-text::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 45%;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
        }

        .divider-text::before {
          left: 0;
        }

        .divider-text::after {
          right: 0;
        }

        .social-button {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
        }

        .social-button:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.15);
        }
      `}</style>

      {/* Top-left logo */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-20 w-12 h-12 md:w-14 md:h-14 transition-all hover:scale-110 hover:opacity-80"
      >
        <svg className="w-full h-full" viewBox="0 0 1991.3 2143.2" xmlns="http://www.w3.org/2000/svg">
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
      </Link>

      {/* Left side: Hero image */}
      <div className="hidden md:block md:w-1/2 h-screen relative overflow-hidden">
        <img
          src="/signup.jpg"
          alt="Luxury accommodations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0000]/50 via-transparent to-[#1a0000]/70" />
      </div>

      {/* Right side: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative z-10 p-6 md:p-12">
        <div className="w-full max-w-[440px]">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-white text-4xl font-light mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.02em' }}>
              Create your account
            </h1>
            <p className="text-white/50 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Join our exclusive community of hosts and travelers
            </p>
          </div>

          {/* Social signup options */}
          <div className="space-y-3 mb-8">
            <button className="social-button w-full py-3 rounded-lg flex items-center justify-center gap-3 text-white/80 hover:text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>Continue with Google</span>
            </button>

            <button className="social-button w-full py-3 rounded-lg flex items-center justify-center gap-3 text-white/80 hover:text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
              </svg>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>Continue with Facebook</span>
            </button>
          </div>

          <div className="divider-text">
            <span className="text-white/40 text-xs px-4 bg-[#1a0000]" style={{ fontFamily: 'Inter, sans-serif' }}>
              OR CONTINUE WITH EMAIL
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-white/60 text-xs uppercase tracking-wider mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="luxury-input w-full rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px' }}
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-white/60 text-xs uppercase tracking-wider mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="luxury-input w-full rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px' }}
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-white/60 text-xs uppercase tracking-wider mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="luxury-input w-full rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px' }}
                placeholder="Create a strong password"
                required
              />
              <p className="text-white/30 text-xs mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Must be at least 8 characters
              </p>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="checkbox-luxury mt-0.5"
                required
              />
              <label htmlFor="terms" className="text-white/50 text-xs leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                I agree to the{" "}
                <Link to="/terms" className="luxury-link">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="luxury-link">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="luxury-button w-full py-3.5 rounded-lg mt-8 relative z-10"
            >
              <span className="gold-accent text-sm uppercase tracking-wider relative z-10" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Create Account
              </span>
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-white/40 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Already have an account?{" "}
              <Link to="/login" className="luxury-link">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;