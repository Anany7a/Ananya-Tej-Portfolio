import React from 'react';
import PerformancePage from './PerformancePage';

const DestinyPage = () => {
  const performanceData = {
    title: "Destiny",
    year: "2025",
    role: "Assistant Director, Lead Actor & Co-Producer",
    subtitle: "Featuring soon in World Film Festival",
    description: (
      <>
        <p>
          As a key member of the Telugu-language feature film "Destiny", produced for the World Student Film Festival 2025 in Jaipur, 
          I undertook multiple responsibilities as an Assistant Director, Lead Actor, and Co-Producer.
        </p>
        <p className="mt-4">
          In my role as Co-Producer, I played a pivotal role in overseeing budget allocation, resource management, and production logistics. 
          I worked closely with the production team to ensure smooth execution of schedules, crew coordination, and overall project feasibility 
          while maintaining the film's creative vision.
        </p>
        <p className="mt-4">
          This project represents a significant milestone in my filmmaking journey, combining my passion for acting with my growing expertise 
          in film production and direction. The experience has further strengthened my commitment to creating meaningful cinema that resonates 
          with audiences while pushing creative boundaries.
        </p>
      </>
    ),
    images: [
      "public/Proofs photos/Destiny-2.jpg",
    ],
    achievements: [
      "Selected for screening at World Student Film Festival 2025, Jaipur",
      "Successfully managed triple roles as Lead Actor, Assistant Director, and Co-Producer",
      "Led a team of student filmmakers in creating a feature-length production",
      "Integrated traditional storytelling with modern filmmaking techniques",
      "Coordinated complex production logistics while maintaining artistic vision"
    ],
    video: [
      {
        url: "https://drive.google.com/file/d/1dGVh9mjgNGeu-sBy32wDCIebEGIIOrhO/preview",
        title: "Raw Footage"
      },
    ],
    script: {
      scene: "39. EXT. THE CHANGE – MBA AMPHI – DAY",
      content: [
        {
          description: "Sanjay is sitting in the MBA Amphi. A bag is next to Sanjay. Inside the bag is the Hercules script book.",
          cameraNote: "Wide shot establishing the MBA amphitheater setting. Focus on Sanjay sitting alone, a bag beside him.",
          emotion: "Sanjay appears lost in thought, a bit dejected."
        },
        {
          description: "Vishwa hurriedly comes with cash in his bag. He puts his hand on Sanjay's shoulder and calls Sanjay to go pay the fees.",
          cameraNote: "Follow Vishwa as he enters the frame, perhaps a slight handheld feel to convey his hurriedness. Medium shot as he interacts with Sanjay.",
          emotion: "Vishwa is energetic, concerned, and friendly.",
          dialogue: [
            { character: "Vishwa", text: "Rey Sanjay, ekkada ani vethakali ra ninnu, ayina office daggara unta ani chepav kada, sare padha velli amount kattedham. Rey naduvu ra babu, time ayipotundi, malli office musestaru." }
          ]
        },
        {
          description: "But Sanjay doesn't move from there.",
          dialogue: [
            { character: "Sanjay", text: "Avasaram ledu ra", note: "(low voice)" },
            { character: "Vishwa", text: "Entra natakalu aduthunava enti?" },
            { character: "Sanjay", text: "Nanna vachi fees kattesadu ra." }
          ]
        },
        {
          description: "Here Sanjay pauses, Vishwa is stunned, leaves his bag and sits next to Sanjay.",
          dialogue: [
            { character: "Vishwa", text: "Intlo ela telsindi?", note: "(low voice)" }
          ]
        },
        {
          description: "Sanjay gets up from where he is sitting and comes forward to speak, while Vishwa is in the background.",
          dialogue: [
            { 
              character: "Sanjay", 
              text: "Ninna sayantram office nundi intiki call vellindi. Chinnapudu edaina thappu cheste urkunevadu kadu, thittetodu, kottetodu, eroju intha pedha thappu cheste, kanisam dabbulu em chesav ani kuda adagale raa."
            }
          ]
        },
        {
          dialogue: [
            {
              character: "Sanjay",
              text: "Ooha telisinapudu nundi chustuna ra ayana ni.. Modhati nundi nenu em avuthanu em chestanu ani ayana lo kangaru chusa kani..."
            }
          ]
        },
        {
          description: "Sanjay now turns towards Vishwa and speaks, tears start welling up in Sanjay's eyes, Vishwa has no words, he just listens in silence.",
          dialogue: [
            {
              character: "Sanjay",
              text: "Life lo first time, ayana badha padadam chusanu. kastapadi, rupayi rupayi daachukuni konukunna chinna bhumi ni thakattu petti pettalsi vachindi.. Chala gatti manishi ra, alantidi eroju na valla ila..."
            }
          ]
        },
        {
          description: "Sanjay can't stop his tears, he wipes his eyes with both hands.",
          dialogue: [
            {
              character: "Sanjay",
              text: "Ma vodu edho chesestadu, edho podichestadu ani ikkadaki pampincharu ra.. Kani ikkada nenu em chestuna? Nake sariga telidhu nenem chestunano.."
            }
          ]
        },
        {
          description: "Sanjay goes to his bag, opens it and takes out the Hercules script book, showing it to Vishwa.",
          dialogue: [
            {
              character: "Sanjay",
              text: "Ye matram guarantee leni job ra idhi. Ayina idhi naku set kaadu. Inka deentho pani ledu.."
            }
          ]
        },
        {
          description: "Sanjay throws the script book away. Vishwa reacts by getting up and speaking in a raised tone.",
          dialogue: [
            { character: "Vishwa", text: "Reyy..pichi pattindha, ila cheste nikem vastadi bey." }
          ]
        },
        {
          dialogue: [
            {
              character: "Sanjay",
              text: "Inni rojulu maa nanna, nannu em adagaledu ra, okka job thappa. Ichedham anukuntunna ra. Nuv cheppu ra, em cheyali?"
            }
          ]
        },
        {
          description: "Vishwa folds his hands and walks a little to the side.",
          dialogue: [
            { character: "Vishwa", text: "Inkoka nalugu nelallo campus placements, ippudiki late ayindhi em ledu." }
          ]
        },
        {
          description: "After a thoughtful pause of 5 seconds, Sanjay makes his decision.",
          dialogue: [
            {
              character: "Sanjay",
              text: "Em cheyyamanna chesta ra, elagainaa... degree ayyelopu job kotti thiratha.."
            }
          ]
        },
        {
          description: "While saying this, Sanjay lifts his head, the sadness in his eyes fades away, showing a strong desire to achieve something in life.",
          cameraNote: "Two-shot of Vishwa and Sanjay. Close-up on Vishwa's supportive expression, then a final zoom onto Sanjay's face as his determination solidifies. Fade to black.",
          emotion: "Vishwa is supportive, Sanjay is determined, hopeful."
        }
      ],
      scriptLink: "https://docs.google.com/document/d/15Ta3L1qmj8z8ThdBvLXBF76Jix0rOCLS/edit?usp=sharing&ouid=113078315575395146028&rtpof=true&sd=true"
    }
  };

  return <PerformancePage {...performanceData} />;
};

export default DestinyPage;