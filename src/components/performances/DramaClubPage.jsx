import React, { useEffect } from 'react';
import PerformancePage from './PerformancePage';
import { Button } from '../ui/button';

const DramaClubPage = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const performanceData = {
    title: "Dramatics Club, Chennai",
    year: "June 2022 - Sep 2024",
    role: "Organizing Committee Member",
    description: (
      <>
        <p>
          As an active member of the Organizing Committee at the Dramatics Club in Chennai, I played a pivotal role in shaping the theatrical landscape of our institution through diverse performances and event management.
        </p>
        <p className="mt-4">
          My responsibilities encompassed organizing and participating in a wide range of theatrical productions, including stage plays like Aaghaz 2.0, Tamasha, and Field Trip. I also contributed to street plays (Nukkad Natak), silent skits, and mime acts, showcasing versatility in performance styles.
        </p>

        <p className="mt-4">
          A significant portion of my role involved event coordination and marketing for major cultural festivals. For Vibrance and Rivera, I handled promotions through initiatives like Inked Stories and Chameleon, while also managing photography and live coverage to ensure comprehensive event documentation.
        </p>
        <p className="mt-4">
          I took the lead in managing the Dramatics Expo and Summer Expo, overseeing all aspects from stall setup to logistics. Additionally, I fulfilled various committee responsibilities, including discipline management for Mehfil-e-Mushaira, advisory roles for Drama League '24, and execution of specialized events like the Gla Event and Food Event.
        </p>
        <p className="mt-4">
          Our collective efforts and dedication were recognized when we were awarded as the Best Club in the Recreational Category, a testament to our commitment to fostering artistic excellence and cultural engagement.
        </p>
      </>
    ),
    images: [
      "Proofs photos/Dramatic2.jpg",
      "Proofs photos/Dramatic1.jpg",
      "Proofs photos/Dramatic3.jpg"
    ],
    achievements: [
      "Best Club in the Recreational Category Award",
      "Successfully organized major theatrical productions (Aaghaz 2.0, Tamasha, Field Trip)",
      "Led marketing and promotions for cultural festivals",
      "Managed Dramatics Expo and Summer Expo logistics",
      "Served in key committee positions (Discipline, Advisory, Event Execution)",
      "Coordinated photography and live coverage for events"
    ],
    video: [{
      url: "https://drive.google.com/file/d/1GG034NPgqQ1PZ--4P3Ig27x0Xhj-udkg/preview",
      title: "Drama Club Highlights"
    }]
  };

  return (
    <>
      <PerformancePage {...performanceData} /> 
      <iframe
          src="https://www.youtube.com/embed/w9JMUyYWvvs"
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
          className="w-[800px] h-[450px]"
        />
      </div>
      <div className="flex justify-center items-center mt-8 mb-8">
        <a href="https://www.instagram.com/stories/highlights/17945702750220146/" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
          Check out on Instagram
        </a>
      </div>
    </>
  )
};

export default DramaClubPage;
