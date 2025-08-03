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

export const Gallery = () => {
  const items = [
    { img: image1, alt: "Gallery image 1", caption: "" },
    { img: image2, alt: "Gallery image 2", caption: "" },
    { img: image3, alt: "Gallery image 3", caption: "" },
    { img: image4, alt: "Gallery image 4", caption: "" },
    { img: image5, alt: "Gallery image 5", caption: "" },
    { img: image6, alt: "Gallery image 6", caption: "" },
    { img: image7, alt: "Gallery image 7", caption: "" },
    { img: image8, alt: "Gallery image 8", caption: "" },
    { img: image9, alt: "Gallery image 9", caption: "" },
    { img: image10, alt: "Gallery image 10", caption: "" },
  ];

  return (
    <section
      id="gallery"
      className="min-h-screen py-20 bg-black flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 emoji-title bg-gradient-to-r from-pink-500 to-red-400 bg-clip-text text-transparent">
          📸 Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map(({ img, alt, caption }, index) => (
            <RevealOnScroll key={index}>
              <div className="flex flex-col items-center">
                <img
                  src={img}
                  alt={alt}
                  className="rounded-xl shadow-lg object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
                />
                <p className="mt-3 text-gray-400 text-sm">{caption}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
