import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import ImageWithFallback from '../ui/ImageWithFallback';

const PerformancePage = ({ title, year, description, images = [], role, achievements, video = [], script }) => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (api) {
      api.on("scroll", () => setCurrent(api.selectedScrollSnap()));
      return () => api.off("scroll");
    }
  }, [api]);

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-10">
        <Link to="/">
          <Button variant="outline" className="bg-zinc-900/70 hover:bg-zinc-900">
            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Carousel */}
      {images.length > 0 && (
        <div className="relative max-h-[70vh]">
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0 bg-transparent">
                    <CardContent className="p-0">
                      <div className="relative h-[70vh]">
                        <ImageWithFallback src={image} alt={`${title} - Image ${index + 1}`} className="w-full h-full object-contain" />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${index === current ? 'w-8 bg-red-600' : 'w-2 bg-white/40 hover:bg-white/60'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Title & Year */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-3">{title}</h1>
          <p className="text-2xl text-gray-400">{year}</p>
        </div>

        {/* Section Component */}
        {role && <Section title="Role" index="01" content={role} />}
        {description && <Section title="About" index="02" content={description} />}
        {achievements?.length > 0 && <Section title="Achievements" index="03" list={achievements} />}
        
        {/* Video Section */}
        {video.length > 0 && (
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-6 flex items-center pl-8">
              <span className="text-red-600 mr-3">04</span>
             Creative Showcase 
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {video.map((videoItem, index) => (
                <div key={index} className="aspect-video h-[80vh] max-h-[500px] bg-zinc-800 rounded-lg shadow-2xl overflow-hidden">
                  <iframe src={videoItem.url} className="w-full h-full" allow="autoplay" allowFullScreen title={videoItem.title || `Performance Video ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Script Section */}
        {script?.content?.length > 0 && (
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-red-600"></div>
            <div className="pl-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="text-red-600 mr-3">05</span>
                Performance Script
              </h2>
              <div className="bg-zinc-800/50 rounded-lg p-8">
                {script.content.map((item, index) => (
                  <div key={index} className="mb-4">
                    {item.description && <p><strong>Description:</strong> {item.description}</p>}
                    {item.dialogue?.map((dialogue, i) => (
                      <p key={i}><strong>{dialogue.character}:</strong> {dialogue.text}</p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Show "View Full Script" Button Only for Sholay and Destiny */}
              {(title === "Sholay" || title === "Destiny") && script.scriptLink && (
                <div className="text-center mt-4">
                  <a href={script.scriptLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    View Full Script
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, index, content, list }) => (
  <div className="relative mb-24">
    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-red-600"></div>
    <div className="pl-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center">
        <span className="text-red-600 mr-3">{index}</span>
        {title}
      </h2>
      <div className="bg-zinc-800/50 rounded-lg p-8">
        {list ? <ul className="list-disc pl-6">{list.map((item, i) => <li key={i}>{item}</li>)}</ul> : <p className="text-xl">{content}</p>}
      </div>
    </div>
  </div>
);

export default PerformancePage;
