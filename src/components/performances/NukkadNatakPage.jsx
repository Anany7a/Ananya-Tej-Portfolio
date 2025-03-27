import React, { useEffect } from 'react';
import PerformancePage from './PerformancePage';

const NukkadNatakPage = () => {
  useEffect(() => {
    // Dynamically load Instagram's embed script
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const performanceData = {
    title: "Nukkad Natak",
    year: "2024",
    role: "Lead Performer",
    description: (
      <>
        <p>
          Selected for this powerful street play at VIT Chennai's Dramatics Club, this performance was a significant milestone in my journey. The play focused on important social causes and required intensive voice training to develop my vocal range from whispers to commanding tones.
        </p>
        <p className="mt-4">
          Despite Hindi not being my mother tongue, I immersed myself in the language, practicing with peers to master both the dialogue delivery and emotional nuances. The challenge increased when I had to take on multiple roles due to a reduced cast, requiring quick character transitions.
        </p>
        <div className="mt-4">
          <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/tv/CmWYyXYDMLY/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: '0', borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: '0', width: '99.375%' }}>
            <div style={{ padding: '16px' }}>
              <a href="https://www.instagram.com/tv/CmWYyXYDMLY/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background: '#FFFFFF', lineHeight: '0', padding: '0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank" rel="noreferrer">
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: '0', height: '40px', marginRight: '14px', width: '40px' }}></div>
                  <div style={{ display: 'flex', flexDirection: 'column', flexGrow: '1', justifyContent: 'center' }}>
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: '0', height: '14px', marginBottom: '6px', width: '100px' }}></div>
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: '0', height: '14px', width: '60px' }}></div>
                  </div>
                </div>
                <div style={{ padding: '19% 0' }}></div>
              </a>
            </div>
          </blockquote>
        </div>
        <p className="mt-4">
          Our dedication and hard work culminated in a memorable performance at Riviera, a prestigious national-level cultural fest, where we secured third place among tough competition.
        </p>
      </>
    ),
    images: [
      "public/Proofs photos/Nukkad Natak-2.jpeg",
      "/public/Proofs photos/img1.jpg"
    ],
    achievements: [
      "Third place at Riviera national-level cultural fest",
      "Mastered Hindi dialogue delivery and voice modulation",
      "Successfully performed multiple character roles",
      "Contributed to social awareness through street theater"
    ],
    instagramVideo: {
      url: "https://www.instagram.com/reel/CmWYyXYDMLY/",
      embedUrl: "https://www.instagram.com/reel/CmWYyXYDMLY/embed"
    }
  };

  return <PerformancePage {...performanceData} />;
};

export default NukkadNatakPage;