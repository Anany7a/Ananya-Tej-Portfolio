import React, { useState, useEffect } from 'react';
import ImageWithFallback from "@/components/ui/ImageWithFallback";

const ProfileCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const profileImages = [
    "/Profile/Profile-3.jpeg",
    "/Profile/Profile-5.jpeg",
    "/Profile/Profile-6.jpeg",
    "/Profile/Profile-7.jpeg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profileImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [profileImages.length]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      {profileImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentIndex 
              ? 'opacity-100 translate-y-0' 
              : index < currentIndex 
                ? 'opacity-0 -translate-y-full' 
                : 'opacity-0 translate-y-full'
          }`}
        >
          <ImageWithFallback
            src={image}
            alt={`Profile ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
        </div>
      ))}
      
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        {profileImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 transition-all duration-300 ${
              index === currentIndex 
                ? 'h-6 bg-red-600' 
                : 'h-1.5 bg-white/30 hover:bg-white/50'
            } rounded-full`}
            aria-label={`Go to profile ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileCarousel;