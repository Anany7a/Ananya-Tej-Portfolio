import React from 'react';
import PerformancePage from './PerformancePage';

const NaughtyBoyPage = () => {
  const performanceData = {
    title: "The Naughty Boy",
    year: "2014",
    role: "Lead Role",
    description: (
      <>
        <p>
          This was my first significant performance that sparked my passion for acting. The performance in fifth grade marked a pivotal moment in my journey, where I discovered my ability to express myself through enactment.
        </p>
        <p className="mt-4">
          Despite initial stage fright that left me petrified and silent, as the performance progressed and the audience responded with applause, I found my confidence and truly owned the stage. This experience was more than just a school play - it was the moment I realized that performance could be a powerful medium for storytelling and creating impact.
        </p>
      </>
    ),
    images: [
      "/Proofs photos/Naughty Boy-1.jpeg",
      "/Proofs photos/Naughty Boy-2.jpeg"
    ],
    achievements: [
      "First lead role in a school production",
      "Overcame stage fright to deliver a compelling performance",
      "Sparked lifelong passion for performing arts"
    ]
  };

  return <PerformancePage {...performanceData} />;
};

export default NaughtyBoyPage;
