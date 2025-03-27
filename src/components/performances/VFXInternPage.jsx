import React from 'react';
import PerformancePage from './PerformancePage';

const VFXInternPage = () => {
  const performanceData = {
    title: "VFX Internship",
    year: "Aug - Sep 2023",
    role: "VFX Intern",
    description: (
      <>
        <p>
          During my internship at Sri Sarathi Studios in Hyderabad, I gained comprehensive exposure to the VFX post-production pipeline, working with cutting-edge tools and technologies in the film industry.
        </p>
        <p className="mt-4">
          I was deeply involved in various aspects of VFX production, including rotoscoping, compositing, 3D modeling, matte painting, and motion graphics. This hands-on experience allowed me to understand the intricate process of creating seamless visual effects.
        </p>
        <p className="mt-4">
          A significant part of my role involved ensuring the perfect integration of digital elements with live-action footage through precise compositing techniques. I also developed valuable skills in proxy conversion, offline editing, reel creation, and color grading processes.
        </p>
        <p className="mt-4">
          Working alongside the post-production team enhanced not only my technical abilities but also my understanding of the collaborative nature of VFX work, creative problem-solving, and the importance of attention to detail in creating convincing visual effects.
        </p>
      </>
    ),
    images: [
      "Proofs photos/intern.jpg" // Using placeholder image
    ],
    achievements: [
      "Mastered rotoscoping and compositing techniques",
      "Developed proficiency in 3D modeling and matte painting",
      "Gained expertise in motion graphics and color grading",
      "Successfully integrated digital elements with live-action footage",
      "Contributed to the post-production workflow optimization"
    ],
    video: [{
      url: "https://drive.google.com/file/d/1ERC0XQ76Q7L_yNhYBig7lOLO1bHrqvOE/preview",
      title: "Drama Club Highlights"
    }]
  };

  return <PerformancePage {...performanceData} />;
};

export default VFXInternPage;
