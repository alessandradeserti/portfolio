import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Alessandra Deserti
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            I’m an Italian fashion model and Master’s student in Management and Business Communication.
            With almost ten years of international freelance experience, I’ve worked with top brands and agencies across Europe and the U.S.
            I’m now seeking a company-based Master’s thesis to connect academic knowledge with practical experience in a professional environment.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#home"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Home
            </a>
            <a
              href="#about"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              About
            </a>
            <a
              href="#skills"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Skills
            </a>
            <a
              href="#collaborations"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Collaborations
            </a>
            <a
              href="#contact"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Contact
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
