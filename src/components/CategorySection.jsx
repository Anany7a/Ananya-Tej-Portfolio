import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

const CategorySection = ({ title, items = [], icon }) => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  
  const opts = {
    align: "center",
    loop: true,
  };

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => {
      api.off("select");
    };
  }, [api]);

  const ItemContent = ({ item }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
      <div className="relative h-[600px]"> {/* Increased height */}
        <div className="h-full rounded-lg overflow-hidden">
          <ImageWithFallback 
            src={item.imageUrl} 
            alt={item.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <Badge variant="destructive" className="absolute top-6 left-6 text-base px-4 py-1"> {/* Increased badge size */}
          AT
        </Badge>
      </div>
      
      <div className="p-8 flex flex-col justify-center min-h-[600px]"> {/* Increased padding and height */}
        <div className="space-y-6"> {/* Increased spacing */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{item.title}</h3> {/* Increased text size */}
            {item.subtitle && (
              <p className="text-green-500 font-semibold text-lg mb-4">{item.subtitle}</p>
            )}
            <p className="text-xl md:text-2xl text-gray-300 mb-4">{item.role}</p> {/* Increased text size */}
            <p className="text-gray-400 text-lg md:text-xl">{item.description}</p> {/* Increased text size */}
          </div>
          
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-base px-4 py-1">{item.year}</Badge> {/* Increased badge size */}
            <span className="text-base text-gray-400">{item.type}</span>
          </div>

          {item.path && (
            <div className="pt-4">
              <span className="text-red-600 flex items-center hover:text-red-500 transition-colors text-lg"> {/* Increased text size */}
                View Details
                <svg className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen flex flex-col justify-center bg-zinc-900/50 py-24"> {/* Increased vertical padding */}
      <div className="max-w-[1400px] mx-auto px-6"> {/* Increased max width and padding */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 flex items-center text-white"> {/* Increased text size and margin */}
          {icon && <span className="scale-150 mr-4">{icon}</span>} {/* Increased icon size */}
          {title}
        </h2>
        
        <div className="relative">
          <Carousel
            opts={opts}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {items.map((item, index) => (
                <CarouselItem key={index} className="basis-full">
                  {item.path ? (
                    <Link to={item.path} className="block">
                      <Card className="bg-zinc-900 border-0 hover:bg-zinc-800/50 transition-colors duration-300">
                        <CardContent className="p-0">
                          <ItemContent item={item} />
                        </CardContent>
                      </Card>
                    </Link>
                  ) : (
                    <Card className="bg-zinc-900 border-0">
                      <CardContent className="p-0">
                        <ItemContent item={item} />
                      </CardContent>
                    </Card>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex left-4 lg:-left-16 h-14 w-14 bg-zinc-800/50 hover:bg-zinc-700/50 border-0" /> {/* Increased size and adjusted position */}
            <CarouselNext className="hidden md:flex right-4 lg:-right-16 h-14 w-14 bg-zinc-800/50 hover:bg-zinc-700/50 border-0" /> {/* Increased size and adjusted position */}
          </Carousel>
        </div>
        
        <div className="mt-12 flex justify-center gap-4"> {/* Increased margin and gap */}
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-3 rounded-full transition-all ${
                index === current ? 'w-12 bg-red-600' : 'w-3 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;