import React, { useState } from "react";
import { FaUmbrellaBeach, FaMountain, FaCity, FaTree, FaStar, FaHeart } from "react-icons/fa";
import { MdOutlineCabin, MdOutlinePool, MdOutlineVilla } from "react-icons/md";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

interface Place {
  title: string;
  description: string;
  image: string;
  price: string;
  location?: string;
  rating?: number;
  guestFavourite?: boolean;
}

const categories = [
  { label: "Beach", icon: <FaUmbrellaBeach className="text-xl" /> },
  { label: "Cabins", icon: <MdOutlineCabin className="text-xl" /> },
  { label: "Trending", icon: <FaStar className="text-xl" /> },
  { label: "Luxe", icon: <MdOutlineVilla className="text-xl" /> },
  { label: "City", icon: <FaCity className="text-xl" /> },
  { label: "Mountains", icon: <FaMountain className="text-xl" /> },
  { label: "Nature", icon: <FaTree className="text-xl" /> },
  { label: "Pool", icon: <MdOutlinePool className="text-xl" /> },
];

const sections = [
  {
    title: "Popular homes in Gurgaon District",
    places: [
      {
        title: "Flat in Gurugram",
        description: "Spacious flat with modern amenities.",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        price: "₹7,418 for 2 nights",
        location: "Gurugram",
        rating: 4.99,
        guestFavourite: true,
      },
      {
        title: "Flat in Gurugram",
        description: "Cozy and bright, perfect for families.",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2389&q=80",
        price: "₹5,830 for 2 nights",
        location: "Gurugram",
        rating: 4.91,
        guestFavourite: true,
      },
      {
        title: "Flat in Gurugram",
        description: "Modern interiors and great location.",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        price: "₹9,872 for 2 nights",
        location: "Gurugram",
        rating: 4.92,
        guestFavourite: true,
      },
      {
        title: "Flat in Gurugram",
        description: "Peaceful stay with balcony view.",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2349&q=80",
        price: "₹5,200 for 2 nights",
        location: "Gurugram",
        rating: 4.82,
      },
      {
        title: "Flat in Gurugram",
        description: "Luxury living in the city center.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2158&q=80",
        price: "₹13,626 for 2 nights",
        location: "Gurugram",
        rating: 4.96,
        guestFavourite: true,
      },
      {
        title: "Flat in Gurugram",
        description: "Bright and airy, close to parks.",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        price: "₹6,848 for 2 nights",
        location: "Gurugram",
        rating: 5.0,
        guestFavourite: true,
      },
      {
        title: "Farm stay in Gurugram",
        description: "Relaxing farm stay with pool.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        price: "₹20,000 for 2 nights",
        location: "Gurugram",
        rating: 4.83,
      },
    ],
  },
  {
    title: "Available in Gautam Buddha Nagar next weekend",
    places: [
      {
        title: "Villa in Noida",
        description: "Spacious villa with private garden.",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2175&q=80",
        price: "₹8,500 for 2 nights",
        location: "Noida",
        rating: 4.95,
      },
      {
        title: "Flat in Greater Noida",
        description: "Modern flat with all amenities.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        price: "₹6,200 for 2 nights",
        location: "Greater Noida",
        rating: 4.89,
        guestFavourite: true,
      },
      {
        title: "Flat in Noida",
        description: "Cozy and comfortable for couples.",
        image: "https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        price: "₹5,900 for 2 nights",
        location: "Noida",
        rating: 4.87,
      },
      {
        title: "Flat in Noida",
        description: "Bright interiors, great location.",
        image: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2355&q=80",
        price: "₹7,100 for 2 nights",
        location: "Noida",
        rating: 4.91,
      },
      {
        title: "Flat in Greater Noida",
        description: "Modern, stylish, and affordable.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2387&q=80",
        price: "₹6,800 for 2 nights",
        location: "Greater Noida",
        rating: 4.93,
        guestFavourite: true,
      },
      {
        title: "Flat in Noida",
        description: "Perfect for business travelers.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        price: "₹7,200 for 2 nights",
        location: "Noida",
        rating: 4.85,
      },
      {
        title: "Penthouse in Noida",
        description: "Luxury penthouse with city views.",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        price: "₹15,000 for 2 nights",
        location: "Noida",
        rating: 5.0,
        guestFavourite: true,
      },
    ],
  },
];

function PlaceCard({ place }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group cursor-pointer">
      <div className="relative mb-3">
        <img
          src={place.image}
          alt={place.title}
          className="w-full h-64 object-cover rounded-xl"
        />
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
        >
          <Heart
            className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`}
          />
        </button>
        {place.guestFavourite && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-white rounded-full text-xs font-medium text-gray-700">
            Guest favourite
          </div>
        )}
      </div>
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 truncate">{place.title}</h3>
          <div className="flex items-center gap-1 ml-2">
            <FaStar className="w-3 h-3 text-black fill-current" />
            <span className="text-sm font-medium">{place.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm truncate">{place.description}</p>
        <p className="font-semibold text-gray-900">{place.price}</p>
      </div>
    </div>
  );
}

function Index() {
  const scrollContainer = (containerId, direction) => {
    const container = document.getElementById(containerId);
    const scrollAmount = 320;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      {/* <div className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-b from-white to-gray-50 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">Find your next stay</h1>
        <p className="text-lg text-gray-600 mb-6 text-center max-w-xl">Discover unique homes and experiences around the world. Book unforgettable places to stay and things to do, all in one place.</p>
      </div> */}

      {/* Category Navigation */}
      {/* <div className="w-full px-6 mb-8">
        <div className="flex overflow-x-auto gap-8 py-4 scrollbar-hide">
          {categories.map((cat) => (
            <button 
              key={cat.label} 
              className="flex flex-col items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all min-w-fit whitespace-nowrap border-b-2 border-transparent hover:border-gray-300"
            >
              {cat.icon}
              <span className="text-sm font-medium text-gray-700">{cat.label}</span>
            </button>
          ))}
        </div>
      </div> */}

      {/* Sectioned Listings */}
      <div className="max-w-[1600px] mx-auto px-2">
        {sections.map((section, idx) => (
          <div key={section.title} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                {section.title}
                <ChevronRight className="inline-block w-6 h-6 ml-2" />
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => scrollContainer(`scroll-${idx}`, 'left')}
                  className="p-2 rounded-full border border-gray-300 hover:border-gray-400 hover:shadow-md transition-all bg-white"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollContainer(`scroll-${idx}`, 'right')}
                  className="p-2 rounded-full border border-gray-300 hover:border-gray-400 hover:shadow-md transition-all bg-white"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div 
              id={`scroll-${idx}`}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {section.places.map((place: Place, index: number) => (
                <div key={index} className="min-w-[220px] max-w-[240px] flex-shrink-0">
                  <PlaceCard place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;