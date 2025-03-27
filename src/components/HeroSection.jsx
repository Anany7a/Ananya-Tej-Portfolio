import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const images = [
    "Profile/Profile-5.jpeg"
  ];

  useEffect(() => {
    
  }, [images.length]);

  return (
    <div className="relative h-[90vh] bg-black overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transform transition-all duration-1000 ease-out ${
            index === currentImageIndex 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-110'
          } ${isTransitioning ? 'blur-sm' : 'blur-none'}`}
        >
          <div className="w-full h-full object-cover">
            <ImageWithFallback 
              src={image}
              alt={`Ananya Tej ${index + 1}`} 
              className="w-full h-full object-cover object-[center_35%]"
              style={{
                objectPosition: 'center 35%', // Adjust this value to better frame faces
                transform: 'scale(1.1)', // Slightly zoomed in to avoid empty spaces
              }}
            />
            <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay for better text contrast */}
          </div>
        </div>
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      
      <div className="absolute bottom-0 left-0 p-12 w-full z-10">
        <div className="max-w-4xl">
          <h1 className="text-7xl font-bold mb-6 text-red-600">ANANYA TEJ</h1>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-green-500 font-semibold text-xl">Featured in World Student Film Festival 2025</span>
            <div className="flex gap-3">
              <span className="border border-white/20 px-3 py-1 text-sm bg-black/30 backdrop-blur-sm">JAIPUR</span>
              <span className="border border-white/20 px-3 py-1 text-sm bg-black/30 backdrop-blur-sm">2025</span>
            </div>
          </div>
          
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl font-bold">Destiny</h2>
            <p className="text-xl text-gray-300">Assistant Director, Lead Actor & Co Producer</p>
            <p className="text-lg text-gray-400">A Telugu-language feature film that explores the intersection of tradition and modernity through a compelling narrative of personal transformation.</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentImageIndex(index);
                setIsTransitioning(false);
              }, 200);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'w-6 bg-red-600' 
                : 'w-1.5 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;