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

  const otherSections = {
    "Fashion & Retail": [
      { name: "Gucci", ig: "https://www.instagram.com/gucci/", site: "https://www.gucci.com/it/it/" },
      { name: "Macron", ig: "https://www.instagram.com/macron/", site: "https://www.macron.com/it/" },
      { name: "Piazza Italia", ig: "https://www.instagram.com/piazzaitaliaofficial/", site: "https://www.piazzaitalia.it/" },
      { name: "Pepco", ig: "https://www.instagram.com/pepco_it/", site: "https://pepco.it/" },
      { name: "Oltre Fashion", ig: "https://www.instagram.com/oltrefashion/", site: "https://www.oltre.com/" },
      { name: "Luisa Via Roma", ig: "https://www.instagram.com/luisaviaroma/", site: "https://www.luisaviaroma.com/" },
      { name: "Rinascente", ig: "https://www.instagram.com/rinascente/", site: "https://www.rinascente.it/it/" },
      { name: "Sinsay", ig: "https://www.instagram.com/sinsay/", site: "https://www.sinsay.com/it/" },
      { name: "SusyMix", ig: "https://www.instagram.com/susymixofficial/", site: "https://www.susymix.com/en/" },
    ],
    "Beauty & Jewelry": [
      { name: "Nee Make Up", ig: "https://www.instagram.com/neemakeupmilano/", site: "https://en.neemakeupmilano.com/" },
      { name: "Wyld Box Jewelry (Miami)", ig: "https://www.instagram.com/wyldboxjewelry/", site: "https://wyldboxjewelry.com/" },
      { name: "Pesavento", ig: "https://www.instagram.com/pesavento_artexpressions/", site: "https://www.pesavento.com/" },
      { name: "Bulgari", ig: "https://www.instagram.com/bvlgari/", site: "https://www.bulgari.com/it-it/" },
      { name: "Vanbruun", ig: "https://www.instagram.com/vanbruun/", site: "https://vanbruun.com/en-se" },
    ],
    "Magazines & Editorial": [
      { name: "Vanity Fair", ig: "https://www.instagram.com/vanityfairitalia/", site: "https://www.vanityfair.it/" },
      { name: "Brickell Magazine", ig: "https://www.instagram.com/brickellmag/", site: "https://brickellmag.com/" },
      { name: "Il Te delle 5", ig: "https://www.instagram.com/ilthedelle5/", site: "https://ilthedelle5.com/" },
      { name: "Key Biscayne Magazine", ig: "https://www.instagram.com/keybiscaynemag/", site: "https://keybiscaynemag.com/" },
    ],
    "Agencies & Management": [
      { name: "IMG Models (Milan)", ig: "https://www.instagram.com/imgmodels/", site: "https://imgmodels.com/" },
      { name: "WMM Models (Milan)", ig: "https://www.instagram.com/wmmmodels/", site: "https://www.wmm-models.com/" },
      { name: "DUO Model (London)", ig: "https://www.instagram.com/duomodelmgmt/", site: "https://www.duomodelmgmt.com/" },
      { name: "Elite (Miami, USA)", ig: "https://www.instagram.com/elitemodelworld/", site: "https://www.elitemodels.com/" },
      { name: "THE FACE (Paris)", ig: "https://www.instagram.com/thefaceparis/", site: "https://models.com/agency/the-face" },
      { name: "CLEAR Management (Barcelona)", ig: "https://www.instagram.com/clearmodelsmgmt/", site: "https://www.clearmanagement.es/" },
    ],
    "Events & Misc": [
      { name: "OrioCenter", ig: "https://www.instagram.com/oriocenter/", site: "https://www.oriocenter.it/it" },
      { name: "Mare di Moda", ig: "https://www.instagram.com/maredimoda/", site: "https://maredimoda.com/en/home-en/" },
      { name: "Saint James", ig: "https://www.instagram.com/saintjames/", site: "https://eu.saint-james.com/" },
      { name: "Luxottica", ig: "https://www.instagram.com/essilorluxottica/", site: "https://www.essilorluxottica.com/it/" },
      { name: "DiverseSystem", ig: "https://www.instagram.com/diversesystem/", site: "https://diversesystem.com/en" },
    ],
  };

  return (
    <section
      id="collaborations"
      className="min-h-screen py-20 bg-black flex flex-col items-center justify-center"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 emoji-title bg-gradient-to-r from-pink-500 to-red-400 bg-clip-text text-transparent">
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
          <div className="max-w-6xl mx-auto p-6 border border-white/10 rounded-xl hover:-translate-y-1 transition-all">
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-red-400 bg-clip-text text-transparent text-center">
              🌐 Other Collaborations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(otherSections).map(([category, brands]) => (
                <div key={category} className="flex flex-col items-center text-center">
                  <h4 className="text-xl font-bold mb-4 text-white">{category}</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {brands.map(({ name, ig, site }, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-2 bg-white/5 py-1 px-3 rounded-full text-sm text-white shadow-sm hover:shadow-lg transition"
                      >
                        {name}
                        <a href={ig} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400">
                          <FaInstagram size={14} />
                        </a>
                        <a href={site} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                          <FaGlobe size={14} />
                        </a>
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
