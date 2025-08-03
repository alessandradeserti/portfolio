import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 emoji-title text-center bg-gradient-to-r from-pink-500 to-red-400 bg-clip-text text-transparent">
            ✨ About Me
          </h2>

          {/* Education & Work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Master’s Degree in Management e Comunicazione d’Impresa</strong>
                  <br />
                  <span className="text-sm text-gray-400">University of Bologna (UNIBO)</span>
                  <br />
                  <span className="text-sm text-gray-400">Currently attending</span>
                </li>
                <li>
                  <strong>Bachelor’s Degree in Communication Sciences</strong>
                  <br />
                  <span className="text-sm text-gray-400">University of Bologna (UNIBO)</span>
                  <br />
                  <span className="text-sm text-gray-400">2020 – Ongoing</span>
                </li>
                <li>
                  <strong>High School Diploma in Languages</strong>
                  <br />
                  <span className="text-sm text-gray-400">Liceo Linguistico Ludovico Ariosto, Ferrara</span>
                  <br />
                  <span className="text-sm text-gray-400">Graduated: 2020</span>
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Freelance Fashion Model – IMG Models, WMM Models</strong>
                  <br />
                  <span className="text-sm text-gray-400">2017 – Present</span>
                  <div className="mt-2 pl-4 border-l-2 border-pink-500">
                    <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                      <li>Active collaborations with IMG Models and WMM Models (Milan).</li>
                      <li>Runway, editorial, and campaign work for major brands including Gucci, Pupa, and Macron.</li>
                      <li>International experience with THE FACE Paris, DUO Models London, and CLEAR Management Barcelona.</li>
                    </ul>
                  </div>
                </li>

                <li>
                  <strong>Fashion Model – SusyMix</strong>
                  <br />
                  <span className="text-sm text-gray-400">2022 – Present</span>
                  <div className="mt-2 pl-4 border-l-2 border-pink-500">
                    <p className="text-sm text-gray-400">
                      Corporate image model for SusyMix (Centergross, Bologna).
                    </p>
                  </div>
                </li>

                <li>
                  <strong>International Modeling – Elite Miami (USA)</strong>
                  <br />
                  <span className="text-sm text-gray-400">1-month assignment</span>
                  <div className="mt-2 pl-4 border-l-2 border-pink-500">
                    <p className="text-sm text-gray-400">
                      U.S. modeling experience through Elite agency in Miami.
                    </p>
                  </div>
                </li>

                <li>
                  <strong>Receptionist – I Portici Hotel Bologna</strong>
                  <br />
                  <span className="text-sm text-gray-400">2021</span>
                  <div className="mt-2 pl-4 border-l-2 border-pink-500">
                    <p className="text-sm text-gray-400">
                      Worked at the Michelin-starred restaurant front office, handling guest reception and event organization.
                    </p>
                  </div>
                </li>

                <li>
                  <strong>Event Hostess – Bologna Fiere</strong>
                  <br />
                  <span className="text-sm text-gray-400">2019</span>
                  <p className="text-sm text-gray-400">
                    Supported various stands during major trade shows and public exhibitions.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Personal Info */}
          <div className="p-6 mt-8 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🧾 Personal Skills & Interests</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Languages:</strong> Italian (native), English (C1), Spanish (B2), German (B1)
              </li>
              <li>
                <strong>Soft Skills:</strong> Empathy, adaptability, mental agility, and client-oriented communication
              </li>
              <li>
                <strong>Strengths:</strong> Entrepreneurial mindset, international exposure, cultural fluency
              </li>
              <li>
                <strong>Interests:</strong> Fashion, brand communication, marketing, tennis, personal development
              </li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};



/* Brands
Brickell Magazine https://www.instagram.com/brickellmag/ https://brickellmag.com/

Key Biscayne Magazine https://www.instagram.com/keybiscaynemag/ https://keybiscaynemag.com/

Pepco https://www.instagram.com/pepco_it/ https://www.instagram.com/pepcopl/ https://pepco.it/

DiverseSystem https://www.instagram.com/diversesystem/ https://diversesystem.com/en

Oltre Fashion https://www.instagram.com/oltrefashion/ https://www.oltre.com/

Pesavento https://www.instagram.com/pesavento_artexpressions/ https://www.pesavento.com/

Vanity Fair https://www.instagram.com/vanityfairitalia/ https://www.vanityfair.it/

Luisa Via Roma https://www.instagram.com/luisaviaroma/ https://www.luisaviaroma.com/

Sammontana https://www.instagram.com/gelatisammontana/ https://www.sammontana.it/

Nee Make Up https://www.instagram.com/neemakeupmilano/ https://en.neemakeupmilano.com/

Vanbruun https://www.instagram.com/vanbruun/ https://vanbruun.com/en-se

Piazza Italia https://www.instagram.com/piazzaitaliaofficial/ https://www.piazzaitalia.it/

Pupa Milano https://www.instagram.com/pupamilanoitaly/ https://www.pupa.it/home

Saint James https://www.instagram.com/saintjames/ https://eu.saint-james.com/

OrioCenter https://www.instagram.com/oriocenter/ https://www.oriocenter.it/it

IMG Models (Milan) https://www.instagram.com/imgmodels/ https://imgmodels.com/

WMM Models (Milan) https://www.instagram.com/wmmmodels/ https://www.wmm-models.com/

THE FACE (Paris) https://www.instagram.com/thefaceparis/ https://models.com/agency/the-face

DUO Model (London) https://www.instagram.com/duomodelmgmt/ https://www.duomodelmgmt.com/

CLEAR Management (Barcelona) https://www.instagram.com/clearmodelsmgmt/ https://www.clearmanagement.es/

Elite (Miami, USA) https://www.instagram.com/elitemodelworld/ https://www.elitemodels.com/

Gucci https://www.instagram.com/gucci/ https://www.gucci.com/it/it/

Macron https://www.instagram.com/macron/ https://www.macron.com/it/

SusyMix https://www.instagram.com/susymixofficial/ https://www.susymix.com/en/

Rinascente https://www.instagram.com/rinascente/ https://www.rinascente.it/it/

Wyld Box Jewelry (Miami) https://www.instagram.com/wyldboxjewelry/ https://wyldboxjewelry.com/

*/