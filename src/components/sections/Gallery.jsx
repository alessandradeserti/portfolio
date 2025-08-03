import image1 from "../../assets/gallery/image1.png";
import image2 from "../../assets/gallery/image2.png";
import image3 from "../../assets/gallery/image3.png";
import image4 from "../../assets/gallery/image4.png";
import image5 from "../../assets/gallery/image5.png";
import image6 from "../../assets/gallery/image6.png";
import image7 from "../../assets/gallery/image7.png";
import image8 from "../../assets/gallery/image8.png";
import image9 from "../../assets/gallery/image9.png";
import image10 from "../../assets/gallery/image10.png";

import { RevealOnScroll } from "../RevealOnScroll";
import { FaInstagram, FaGlobe } from "react-icons/fa";

export const Collaborations = () => {
  const featured = [
    {
      img: image1,
      alt: "Key Biscayne Magazine",
      brand: "Key Biscayne Magazine",
      ig: "https://www.instagram.com/keybiscaynemag/",
      site: "https://keybiscaynemag.com/",
    },
    {
      img: image2,
      alt: "Rinascente",
      brand: "Rinascente",
      ig: "https://www.instagram.com/rinascente/",
      site: "https://www.rinascente.it/it/",
    },
    {
      img: image3,
      alt: "Lisanza Intimo",
      brand: "Lisanza Intimo",
      ig: "https://www.instagram.com/lisanzaiintimo/",
      site: "#",
    },
    {
      img: image4,
      alt: "Wyld Box Jewelry",
      brand: "Wyld Box Jewelry",
      ig: "https://www.instagram.com/wyldboxjewelry/",
      site: "https://wyldboxjewelry.com/",
    },
    {
      img: image5,
      alt: "Pupa Milano",
      brand: "Pupa Milano",
      ig: "https://www.instagram.com/pupamilanoitaly/",
      site: "https://www.pupa.it/home",
    },
    {
      img: image6,
      alt: "Vanity Fair Italia",
      brand: "Vanity Fair Italia",
      ig: "https://www.instagram.com/vanityfairitalia/",
      site: "https://www.vanityfair.it/",
    },
    {
      img: image7,
      alt: "Macron",
      brand: "Macron",
      ig: "https://www.instagram.com/macron/",
      site: "https://www.macron.com/it/",
    },
    {
      img: image8,
      alt: "SusyMix",
      brand: "SusyMix",
      ig: "https://www.instagram.com/susymixofficial/",
      site: "https://www.susymix.com/en/",
    },
  ];

  const otherBrands = [
    { name: "Gucci", ig: "https://www.instagram.com/gucci/", site: "https://www.gucci.com/it/it/" },
    { name: "Brickell Magazine", ig: "https://www.instagram.com/brickellmag/", site: "https://brickellmag.com/" },
    { name: "Pepco", ig: "https://www.instagram.com/pepco_it/", site: "https://pepco.it/" },
    { name: "Oltre", ig: "https://www.instagram.com/oltrefashion/", site: "https://www.oltre.com/" },
    { name: "Pesavento", ig: "https://www.instagram.com/pesavento_artexpressions/", site: "https://www.pesavento.com/" },
    { name: "Luisa Via Roma", ig: "https://www.instagram.com/luisaviaroma/", site: "https://www.luisaviaroma.com/" },
    { name: "Sammontana", ig: "https://www.instagram.com/gelatisammontana/", site: "https://www.sammontana.it/" },
    { name: "Nee Make Up", ig: "https://www.instagram.com/neemakeupmilano/", site: "https://en.neemakeupmilano.com/" },
    { name: "Vanbruun", ig: "https://www.instagram.com/vanbruun/", site: "https://vanbruun.com/en-se" },
    { name: "Saint James", ig: "https://www.instagram.com/saintjames/", site: "https://eu.saint-james.com/" },
    { name: "Piazza Italia", ig: "https://www.instagram.com/piazzaitaliaofficial/", site: "https://www.piazzaitalia.it/" },
    { name: "OrioCenter", ig: "https://www.instagram.com/oriocenter/", site: "https://www.oriocenter.it/it" },
  ];

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

        {/* Other Brands */}
        <h3 className="text-xl text-white font-semibold mb-6">Other Collaborations</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {otherBrands.map(({ name, ig, site }, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white/5 p-3 rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              <p className="text-gray-300 text-sm font-medium">{name}</p>
              <div className="flex gap-2 mt-2">
                <a href={ig} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400">
                  <FaInstagram size={16} />
                </a>
                <a href={site} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  <FaGlobe size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
