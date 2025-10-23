import React from "react";
import { FaGlobe, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerLinks = [
  {
    title: "Support",
    links: [
      "Help Centre",
      "AirCover",
      "Anti-discrimination",
      "Disability support",
      "Cancellation options",
      "Report neighbourhood concern",
    ],
  },
  {
    title: "Hosting",
    links: [
      "Airbnb your home",
      "AirCover for Hosts",
      "Hosting resources",
      "Community forum",
      "Hosting responsibly",
      "Join a free Hosting class",
      "Find a co-host",
    ],
  },
  {
    title: "Airbnb",
    links: [
      "2025 Summer Release",
      "Newsroom",
      "New features",
      "Careers",
      "Investors",
      "Airbnb.org emergency stays",
    ],
  },
];

function Footer() {
  return (
    <footer className="w-full bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {footerLinks.map((col) => (
          <div key={col.title}>
            <h3 className="font-semibold mb-3 text-lg">{col.title}</h3>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-700 hover:underline text-base">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t pt-6 pb-4 px-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto text-sm text-gray-600 gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span>© 2025 Airbnb, Inc.</span>
          <span className="mx-1">·</span>
          <a href="#" className="hover:underline">Privacy</a>
          <span className="mx-1">·</span>
          <a href="#" className="hover:underline">Terms</a>
          <span className="mx-1">·</span>
          <a href="#" className="hover:underline">Sitemap</a>
          <span className="mx-1">·</span>
          <a href="#" className="hover:underline">Company details</a>
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <span className="flex items-center gap-1"><FaGlobe className="inline text-lg" /> English (IN)</span>
          <span>₹ INR</span>
          <a href="#" aria-label="Facebook"><FaFacebook className="text-lg" /></a>
          <a href="#" aria-label="X"><FaXTwitter className="text-lg" /></a>
          <a href="#" aria-label="Instagram"><FaInstagram className="text-lg" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 