import React from 'react';
import PerformancePage from './PerformancePage';

const SholayPage = () => {
  const performanceData = {
    title: "Sholay",
    year: "2024",
    role: "Gabbar Singh",
    description: (
      <>
        <p>
          Taking on the iconic role of Gabbar Singh in this theatrical adaptation of the legendary Bollywood film pushed me far beyond my comfort zone. The character demanded not only mastering Hindi dialogue delivery but also maintaining an intense screen presence even when not in the spotlight.
        </p>
        <p className="mt-4">
          Through rigorous practice and dedication, I was able to channel the same intensity that made Gabbar Singh such a memorable character in Indian cinema. Working alongside talented actors and technical crew deepened my understanding of storytelling in theater.
        </p>
        <p className="mt-4">
          This performance was particularly challenging as it required maintaining the delicate balance between paying homage to the original portrayal while bringing my own interpretation to the character. The production's success and subsequent Best Team Performance Award served as validation of our collective artistic vision and execution.
        </p>
      </>
    ),
    images: [
      "/Proofs photos/Sholay-1.jpeg",
      "/Proofs photos/Sholay-2.jpeg"
    ],
    achievements: [
      "Best Team Performance Award",
      "Successfully portrayed the iconic character of Gabbar Singh",
      "Mastered complex Hindi dialogues and character mannerisms",
      "Received critical acclaim for performance intensity",
      "Demonstrated versatility in character portrayal"
    ],
    video: [
      {
        url: "https://drive.google.com/file/d/1_qaBwyBN0TUX2tC-Lv_wcyJ5JrECJWha/preview",
        title: "Sholay Performance"
      },
      {
        url: "https://drive.google.com/file/d/1P3_IxS97A2p_CUogodIV5BdU7SXIP-bS/preview",
        title: "Sholay Performance"
      }
    ],
    script: {
      content: [
        {
          description: "Opening Scene - Gabbar's Introduction",
          dialogue: [
            { character: "Gabbar Singh", text: "Kitne aadmi the?" },
            { character: "Kaliya", text: "Sardar... do aadmi the." }
          ]
        },
        {
          description: "Climax Scene - Gabbar's Last Words",
          dialogue: [
            { character: "Gabbar Singh", text: "Jo darr gaya, samjho mar gaya!" },
            { character: "Thakur", text: "Gabbar! Tumhara ant aa chuka hai!" }
          ]
        }
      ],
      scriptLink: "https://docs.google.com/document/d/1oSc_n64AszzDMLT0MPH7N35LvdVpdQjD/edit?usp=sharing"
    }
  };

  return <PerformancePage {...performanceData} />;
};

export default SholayPage;
