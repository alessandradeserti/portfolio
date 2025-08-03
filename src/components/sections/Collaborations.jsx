import angelacarpio from "../../assets/gallery/angelacarpio.png";
import brickell from "../../assets/gallery/brickell.png";
import iltedelle5 from "../../assets/gallery/iltedelle5.png";
import keybiscayne from "../../assets/gallery/keybiscayne.png";
import liscostanzo from "../../assets/gallery/liscostanzo.png";
import maredimoda from "../../assets/gallery/maredimoda.png";
import missitalia from "../../assets/gallery/missitalia.png";
import neemakeup from "../../assets/gallery/neemakeup.png";
import oltre from "../../assets/gallery/oltre.png";
import pepco from "../../assets/gallery/pepco.png";
import pesavento from "../../assets/gallery/pesavento.png";
import piazzaitalia from "../../assets/gallery/piazzaitalia.png";
import pupamilano from "../../assets/gallery/pupamilano.png";
import rinascente from "../../assets/gallery/rinascente.png";
import sammontana from "../../assets/gallery/sammontana.png";
import vanbruun from "../../assets/gallery/vanbruun.png";
import vanityfair from "../../assets/gallery/vanityfair.png";

import { RevealOnScroll } from "../RevealOnScroll";
import { FaInstagram, FaGlobe } from "react-icons/fa";

export const Collaborations = () => {
  const featured = [
    {
      img: angelacarpio,
      alt: "Angela Carpio",
      brand: "Angela Carpio Firenze",
      ig: "https://www.instagram.com/angelacarpio_firenze/",
      site: "https://angelacarpio.com/",
    },
    {
      img: brickell,
      alt: "Brickell Magazine",
      brand: "Brickell Magazine",
      ig: "https://www.instagram.com/brickellmag/",
      site: "https://brickellmag.com/",
    },
    {
      img: keybiscayne,
      alt: "Key Biscayne Magazine",
      brand: "Key Biscayne Magazine",
      ig: "https://www.instagram.com/keybiscaynemag/",
      site: "https://keybiscaynemag.com/",
    },
    {
      img: liscostanzo,
      alt: "Lis Costanzo",
      brand: "Lis Costanzo",
      ig: "https://www.instagram.com/liscostanzo/",
      site: "https://models.com/people/irina-lis-costanzo",
    },
    {
      img: missitalia,
      alt: "Miss Italia",
      brand: "Miss Italia",
      ig: "https://www.instagram.com/missitaliaemiliaromagna/",
      site: "https://www.missitalia.it/",
    },
    {
      img: pepco,
      alt: "Pepco",
      brand: "Pepco",
      ig: "https://www.instagram.com/pepco_it/",
      site: "https://pepco.it/",
    },
    {
      img: pesavento,
      alt: "Pesavento",
      brand: "Pesavento",
      ig: "https://www.instagram.com/pesavento_artexpressions/",
      site: "https://www.pesavento.com/",
    },
    {
      img: pupamilano,
      alt: "Pupa Milano",
      brand: "Pupa Milano",
      ig: "https://www.instagram.com/pupamilanoitaly/",
      site: "https://www.pupa.it/home",
    },
    {
      img: rinascente,
      alt: "Rinascente",
      brand: "Rinascente",
      ig: "https://www.instagram.com/rinascente/",
      site: "https://www.rinascente.it/it/",
    },
    {
      img: sammontana,
      alt: "Sammontana",
      brand: "Sammontana",
      ig: "https://www.instagram.com/gelatisammontana/",
      site: "https://www.sammontana.it/",
    },
    {
      img: vanbruun,
      alt: "Vanbruun",
      brand: "Vanbruun",
      ig: "https://www.instagram.com/vanbruun/",
      site: "https://vanbruun.com/en-se",
    },
    {
      img: vanityfair,
      alt: "Vanity Fair",
      brand: "Vanity Fair",
      ig: "https://www.instagram.com/vanityfairitalia/",
      site: "https://www.vanityfair.it/",
    },
  ];

  const otherCollaborations = {
    "Fashion & Retail": [
      "Gucci", "Macron", "Piazza Italia", "Pepco", "Oltre Fashion",
      "Luisa Via Roma", "Rinascente", "Sinsay", "SusyMix"
    ],
    "Beauty & Jewelry": [
      "Nee Make Up", "Wyld Box Jewelry (Miami)", "Pesavento", "Bulgari", "Vanbruun"
    ],
    "Magazines & Editorial": [
      "Vanity Fair", "Brickell Magazine", "Il Te delle 5", "Key Biscayne Magazine"
    ],
    "Agencies & Management": [
      "IMG Models (Milan)", "WMM Models (Milan)", "DUO Model (London)",
      "Elite (Miami, USA)", "THE FACE (Paris)", "CLEAR Management (Barcelona)"
    ],
    "Events & Misc": [
      "OrioCenter", "Mare di Moda", "Saint James", "Luxottica", "DiverseSystem"
    ]
  };

  return (
    <section
      id="collaborations"
      className="min-h-screen py-20 bg-black flex flex-col items-center justify-center"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 emoji-title bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          🤝 Professional Collaborations
        </h2>

        {/* Featured Brands */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {featured.map(({ img, alt, brand, ig, site }, index) => (
            <RevealOnScroll key={index}>
              <div className="flex flex-col items-center">
                <img
                  src={img}
                  alt={alt}
                  className="rounded-xl shadow-lg object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
                />
                <p className="mt-3 text-gray-200 font-medium text-lg">{brand}</p>
                <div className="flex gap-3 mt-2">
                  <a href={ig} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400">
                    <FaInstagram size={20} />
                  </a>
                  <a href={site} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    <FaGlobe size={20} />
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Other Collaborations */}
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto p-6 border border-white/10 rounded-xl hover:-translate-y-1 transition-all">
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              🌐 Other Collaborations
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(otherCollaborations).map(([sectionTitle, brandList]) => (
                <div key={sectionTitle} className="flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold mb-4 text-white">{sectionTitle}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {brandList.map((brand, i) => (
                      <span key={i} className="bg-white/10 text-white py-1 px-3 rounded-full text-sm hover:bg-white/20 transition">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
