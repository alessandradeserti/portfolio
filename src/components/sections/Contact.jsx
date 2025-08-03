import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="text-center px-6">
          <h2 className="text-3xl font-bold mb-8 emoji-title text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            📬 Contact
          </h2>
          <p className="text-gray-300 text-lg mb-4">
            📧 Mail:{" "}
            <a
              href="mailto:alessandra.deserti01@gmail.com"
              className="text-blue-400 hover:underline"
            >
              alessandra.deserti01@gmail.com
            </a>
          </p>
          <p className="text-gray-300 text-lg mb-4">
            📞 Mobile Phone:{" "}
            <a
              href="tel:+39 3758183570"
              className="text-blue-400 hover:underline"
            >
              +39 389 944 1212
            </a>
          </p>
          <p className="text-gray-300 text-lg mb-4 flex items-center justify-center gap-2">
            <FaInstagram className="text-blue-400" size={20} />
            <a
              href="https://www.instagram.com/alex_dese/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              @alex_dese
            </a>
          </p>
          <p className="text-gray-300 text-lg">
            🌍 Location: Bologna (BO), Italy
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};
