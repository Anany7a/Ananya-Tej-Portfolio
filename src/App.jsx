import { Link } from 'react-router-dom';
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import CategorySection from './components/CategorySection'
import ScrollToTop from './components/ui/ScrollToTop'

function App() {
  const performances = [
    {
      title: 'Nukkad Natak',
      role: 'Lead Performer',
      year: '2024',
      type: 'Theater',
      imageUrl: '/Proofs photos/Nukkad Natak-2.jpeg',
      path: '/nukkad-natak',
      description: 'Street play addressing social causes with a powerful message, securing 3rd place at Riviera cultural fest.'
    },
    {
      title: 'Sholay',
      role: 'Gabbar Singh',
      year: '2024',
      type: 'Theater',
      imageUrl: '/Proofs photos/Sholay-1.jpeg',
      path: '/sholay',
      description: 'A challenging portrayal of the iconic antagonist in this theatrical adaptation, earning the Best Team Performance Award.'
    },
    {
      title: 'The Naughty Boy',
      role: 'Lead Role',
      year: '2015',
      type: 'School Play',
      imageUrl: '/Proofs photos/Naughty Boy-1.jpeg',
      path: '/naughty-boy',
      description: 'The transformative first lead role that ignited my passion for acting and storytelling through performance.'
    }
  ];

  const certifications = [
    {
      title: 'Discover Acting',
      role: 'Professional Acting Course',
      year: '2024',
      type: 'Certification',
      imageUrl: '/Proofs photos/Discover Acting.jpeg',
      path: '/discover-acting',
      description: 'Intensive professional acting certification program completed with distinction, focusing on method acting and character development.'
    }
  ];

  const workExperience = [
    {
      title: 'Dramatics Club',
      role: 'Organizing Committee Member',
      year: '2022-2024',
      type: 'Leadership',
      imageUrl: '/Proofs photos/Dramatic3.jpg',
      path: '/drama-club',
      description: 'Led and organized major theatrical productions and cultural events at Chennai. Recognized for exceptional leadership in managing performances, events, and committee responsibilities.'
    },
    {
      title: 'VFX Internship',
      role: 'VFX Intern',
      year: 'Aug - Sep 2023',
      type: 'Professional',
      imageUrl: '/Proofs photos/intern.jpg',
      path: '/vfx-intern',
      description: 'Hands-on experience in VFX post-production at Sri Sarathi Studios, Hyderabad. Worked on rotoscoping, compositing, 3D modeling, and integrated digital elements with live-action footage.'
    }
  ];

  const currentProjects = [
    {
      title: 'Destiny',
      role: 'Assistant Director, Lead Actor & Co-Producer',
      year: '2025',
      type: 'Feature Film',
      imageUrl: 'public/Proofs photos/Denstiny-1.jpg',
      path: '/destiny',
      subtitle: 'Featuring soon in World Film Festival',
      description: 'A Telugu-language feature film for the World Student Film Festival 2025 in Jaipur. Managing multiple roles including Assistant Director, Lead Actor, and Co-Producer.'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <ScrollToTop />
      <HeroSection />
      <AboutSection />
      <CategorySection 
        title="Performance Journey"
        items={performances}
        icon={
          <svg className="h-6 w-6 text-red-600 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19.82 2H4.18C2.97 2 2 2.97 2 4.18v15.64C2 21.03 2.97 22 4.18 22h15.64c1.21 0 2.18-.97 2.18-2.18V4.18C22 2.97 21.03 2 19.82 2z"></path>
            <path d="M7 2v20"></path>
            <path d="M17 2v20"></path>
            <path d="M2 12h20"></path>
            <path d="M2 7h5"></path>
            <path d="M2 17h5"></path>
            <path d="M17 17h5"></path>
            <path d="M17 7h5"></path>
          </svg>
        }
      />

      <CategorySection 
        title="Work Experience"
        items={workExperience}
        icon={
          <svg className="h-6 w-6 text-red-600 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
            <path d="M16 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3"></path>
          </svg>
        }
      />

      <CategorySection 
        title="Professional Development"
        items={certifications}
        icon={
          <svg className="h-6 w-6 text-red-600 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        }
      />

      <CategorySection 
        title="Current Projects"
        items={currentProjects}
        icon={
          <svg className="h-6 w-6 text-red-600 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2a10 10 0 1 1-10 10A10 10 0 0 1 12 2z"></path>
            <path d="M12 6v6l4 2"></path>
          </svg>
        }
      />
    </div>
  )
}

export default App
