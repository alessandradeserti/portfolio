import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 emoji-title text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            ✨ About Me
          </h2>

          {/* Education & Work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Master’s Degree in Management and Business Communication</strong>
                  <br />
                  <span className="text-sm text-gray-400">University of Modena and Reggio Emilia (UniMore)</span>
                  <br />
                  <span className="text-sm text-gray-400">2023 - ongoing</span>
                </li>
                <li>
                  <strong>Bachelor’s Degree in Communication Sciences</strong>
                  <br />
                  <span className="text-sm text-gray-400">University of Bologna (UniBo)</span>
                  <br />
                  <span className="text-sm text-gray-400">09/2020 – 11/2023</span>
                </li>
                <li>
                  <strong>High School Diploma in Languages</strong>
                  <br />
                  <span className="text-sm text-gray-400">Liceo Linguistico Ludovico Ariosto, Ferrara</span>
                  <br />
                  <span className="text-sm text-gray-400">09/2015 – 07/2020</span>
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                
                <li>
                  <strong>International Modeling – Elite Miami (USA)</strong>
                  <br />
                  <span className="text-sm text-gray-400">03/2025 (1-month)</span>
                  <div className="mt-2 pl-4 border-l-2 border-blue-500">
                    <p className="text-sm text-gray-400">
                      U.S. modeling experience through Elite agency in Miami.
                    </p>
                  </div>
                </li>
                <li>
                  <strong>Freelance Fashion Model – IMG Models, WMM Models</strong>
                  <br />
                  <span className="text-sm text-gray-400">2017 – 2025</span>
                  <div className="mt-2 pl-4 border-l-2 border-blue-500">
                    <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                      <li>Active collaborations with IMG Models and WMM Models (Milan).</li>
                      <li>Runway, editorial, and campaign work for major european brands.</li>
                      <li>International experience with THE FACE Paris, DUO Models London, and CLEAR Management Barcelona.</li>
                    </ul>
                  </div>
                </li>

                <li>
                  <strong>Receptionist – I Portici Hotel Bologna</strong>
                  <br />
                  <span className="text-sm text-gray-400">2021 (1-year)</span>
                  <div className="mt-2 pl-4 border-l-2 border-blue-500">
                    <p className="text-sm text-gray-400">
                      Worked at the Michelin-starred restaurant front office, handling guest reception and event organization.
                    </p>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
