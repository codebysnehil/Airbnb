import React, { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";

interface Place {
  title: string;
  description: string;
  image: string;
  price: string;
  location?: string;
  rating?: number;
  guestFavourite?: boolean;
}

function PlaceCard({ place }: { place: Place }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="relative bg-white rounded-3xl cursor-pointer transition-shadow overflow-hidden shadow hover:shadow-xl group min-h-[320px] max-h-[340px] flex flex-col">
      {/* Image and overlays */}
      <div className="relative">
        <img
          src={place.image}
          alt={place.title}
          className="w-full h-40 object-cover rounded-3xl"
        />
        {/* Guest favourite badge */}
        {place.guestFavourite && (
          <div className="absolute top-3 left-3 bg-white bg-opacity-90 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            Guest favourite
          </div>
        )}
        {/* Heart icon */}
        <button
          className="absolute top-3 right-3 bg-white bg-opacity-90 rounded-full p-2 shadow-sm hover:bg-opacity-100 transition"
          onClick={e => {
            e.stopPropagation();
            setLiked(l => !l);
          }}
          aria-label="Add to favourites"
        >
          <FaHeart className={`text-xl ${liked ? "text-[#FF385C]" : "text-gray-400"}`} />
        </button>
      </div>
      {/* Card content */}
      <div className="py-2 px-3 flex flex-col flex-1 justify-between">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm text-gray-700 font-medium truncate max-w-[60%]">{place.location}</span>
          {place.rating && (
            <span className="flex items-center gap-1 text-sm font-semibold text-gray-800">
              <FaStar className="text-yellow-400 text-base" />
              {place.rating.toFixed(2)}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between mt-1">
          <h3 className="text-base font-bold truncate mr-2 max-w-[60%]">{place.title}</h3>
          <span className="font-semibold text-gray-900 text-sm truncate">₹{place.price}</span>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
