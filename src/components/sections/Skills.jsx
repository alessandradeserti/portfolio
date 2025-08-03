import { RevealOnScroll } from "../RevealOnScroll";

export const Skills = () => {
  const FashionAndModeling = [
    "Editorial & Commercial Modeling",
    "Posing & Body Expression",
    "High Fashion Campaigns",
    "Photographic Adaptability"
  ];

  const CommunicationAndBusiness = [
    "Brand Communication",
    "Marketing Fundamentals",
    "Content Strategy",
    "Business Planning",
  ];

  const SoftSkills = [
    "Cultural Adaptability",
    "Multilingual Communication",
    "Client-Oriented Mindset",
    "Team Collaboration",
  ];

  const ToolsAndLanguages = [
    "Italian (native)",
    "English (C1)",
    "Spanish (B2)",
    "German (B1)",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto p-6 border border-white/10 rounded-xl hover:-translate-y-1 transition-all">
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            🛠️ Skills & Competencies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fashion & Modeling */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Fashion & Modeling</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {FashionAndModeling.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Communication & Business */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Communication & Business</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {CommunicationAndBusiness.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {SoftSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Languages */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Tools & Languages</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {ToolsAndLanguages.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
