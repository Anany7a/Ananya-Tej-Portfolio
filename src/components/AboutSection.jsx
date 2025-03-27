import { Card, CardHeader, CardContent } from "@/components/ui/card"
import SkillsCard from "./SkillsCard"

const AboutSection = () => {
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Telugu", level: "Native" },
    { name: "Hindi", level: "Fluent" },
    { name: "Tamil", level: "Basic" },
    { name: "French", level: "Basic" }
  ];

  const skills = [
    {
      name: "Acting",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
        </svg>
      )
    },
    {
      name: "Directing",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      name: "Production Management",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path>
        </svg>
      )
    },
    {
      name: "VFX",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full py-16 bg-zinc-900" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-zinc-800 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">About Me</h2>
              </CardHeader>
              <CardContent>
                <div className="text-gray-300 space-y-6 leading-relaxed border-l-4 border-red-500 pl-4">
                  <p className="text-lg">
                    I am a Computer Science Engineering undergraduate with hands-on experience in VFX, acting, and direction,
                    seeking to pursue a Master's degree in Filmmaking to blend technical expertise with creative storytelling.
                  </p>
                  <p className="text-lg">
                    My passion for filmmaking started with theatrical productions and student films, evolving from school plays
                    to significant roles in productions like Sholay and Nukkad Natak. In these, I have not only acted but also
                    contributed to direction and production aspects.
                  </p>
                  <p className="text-lg">
                    With this realization, my quest for dramatics and filmmaking became more fervent—I wanted to use storytelling
                    as a medium to capture, challenge, and inspire audiences. To sharpen my skills as a filmmaker and actor,
                    I am committed to pursuing a Master's degree in Filmmaking, which will equip me with the expertise to bring
                    thought-provoking and impactful stories to life on screen.
                  </p>
                  <p className="text-lg">
                    My unique combination of technical knowledge in Computer Science and creative expertise in performing arts
                    allows me to bring innovative perspectives to storytelling. I am particularly fascinated by how technology
                    can enhance theatrical and cinematic experiences, especially in areas like VFX production and digital storytelling.
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Career Goals</h3>
                    <p className="text-lg mb-4">
                      <strong className="text-white">Short-term goal:</strong> Gain hands-on experience in the film industry by
                      securing internships with high-class production houses that specialize in both artistic and commercial cinema.
                      I aspire to intern with Disney, Warner Bros., or Paramount Productions, where I can work on projects that push
                      the boundaries of visual storytelling and acting. Exploring diverse acting roles alongside filmmaking will
                      help me develop a deeper understanding of performance dynamics in cinema.
                    </p>
                    <p className="text-lg">
                      <strong className="text-white">Long-term goal:</strong> Establish myself as a filmmaker and actor known for
                      intense characterization and emotional storytelling, creating visually dynamic films and powerful on-screen
                      performances that offer audiences an unforgettable experience. By merging the art of filmmaking with technical
                      expertise, I aim to contribute to the evolution of cinema, breaking conventional boundaries and crafting
                      long-lasting stories that resonate with global audiences—both behind the camera and in front of it.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-zinc-800 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
                  <svg className="mr-3 h-5 w-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  Skills
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-3 rounded-lg bg-zinc-700/50 hover:bg-zinc-700 transition-colors duration-200"
                    >
                      <div className="text-red-500 mr-3">
                        {skill.icon}
                      </div>
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
                  <svg className="mr-3 h-5 w-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                    <line x1="4" y1="22" x2="4" y2="15"></line>
                  </svg>
                  Languages
                </h3>
                <ul className="text-gray-300 space-y-3">
                  {languages.map((lang, idx) => (
                    <li key={idx} className="flex items-center text-lg">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-gray-400 ml-2">({lang.level})</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
                  <svg className="mr-3 h-5 w-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                  Contact
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p className="flex items-center text-lg">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>
                    <span className="hover:text-red-400 transition-colors">ananyatej7777@gmail.com</span>
                  </p>
                  <p className="flex items-center text-lg">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>
                    <span className="hover:text-red-400 transition-colors">+916302071904</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
