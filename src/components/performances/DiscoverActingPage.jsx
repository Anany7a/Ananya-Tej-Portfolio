import React from 'react';
import PerformancePage from './PerformancePage';

const DiscoverActingPage = () => {
  const performanceData = {
    title: "Discover Acting Course",
    year: "2024",
    role: "Learner (University of London - Royal Central School of Speech and Drama, via Coursera)",
    description: (
      <>
        <p>
          The Discover Acting course, developed by the Royal Central School of Speech and Drama, University of London, 
          provided an in-depth introduction to the fundamentals of acting. This highly interactive course combined 
          practical exercises, theoretical insights, and performance analysis to help learners develop a strong 
          foundation in the art of acting.
        </p>
        <p className="mt-4">
          Through a structured curriculum that covered text analysis, vocal and physical training, and monologue 
          performance, I was able to explore the actor's craft in a way that directly complements my journey as a filmmaker.
        </p>
        <p className="mt-4">
          The course introduced acting as more than just reciting lines—it is a multi-layered process where the actor 
          must inhabit a character's physical, emotional, and psychological world. This knowledge broadened my 
          perspective as a filmmaker, emphasizing how an actor's gestures, expressions, and silences can shape the narrative.
        </p>
        <p className="mt-4">
          Beyond acting, this course deepened my understanding of how actors build compelling characters, allowing me 
          to approach filmmaking with a stronger directorial vision. It helped me see how movement, silence, and 
          subtle expressions contribute to a scene's emotional impact.
        </p>
        <p className="mt-4">
          Completing Discover Acting was a transformative experience that sharpened my skills not only as a performer 
          but also as a storyteller. The ability to analyze scripts, guide actors, and recognize the nuances of 
          physical and vocal performance will greatly influence my approach to filmmaking.
        </p>
      </>
    ),
    images: [
      "/Proofs photos/Discover Acting.jpeg"
    ],
    achievements: [
      "Perfect Score: Successfully completed the course with a 100% grade",
      "Mastered script analysis and character development techniques",
      "Applied techniques to prepare and deliver compelling monologues",
      "Enhanced physical and vocal awareness for character portrayal",
      "Developed proficiency in analyzing and constructing emotionally rich performances"
    ]
  };

  return <PerformancePage {...performanceData} />;
};

export default DiscoverActingPage;