'use client';
import { motion } from 'framer-motion';

const imageLogos = [
  { src: "/s1.png", alt: "Logo 1", href: "#" },
  { src: "/s2.png", alt: "Logo 2", href: "#" },
  { src: "/s3.png", alt: "Logo 3", href: "#" },
  { src: "/s4.png", alt: "Logo 4", href: "#" },
  { src: "/s5.png", alt: "Logo 5", href: "#" },
  { src: "/s6.png", alt: "Logo 6", href: "#" },
  { src: "/s7.png", alt: "Logo 7", href: "#" },
  { src: "/s8.svg", alt: "Logo 8", href: "#" },
  { src: "/s9.png", alt: "Logo 9", href: "#" },
  { src: "/s10.png", alt: "Logo 10", href: "#" },
  { src: "/s11.png", alt: "Logo 11", href: "#" },
  { src: "/s12.png", alt: "Logo 12", href: "#" },
  { src: "/s13.png", alt: "Logo 13", href: "#" },
  { src: "/s14.png", alt: "Logo 14", href: "#" },
];

function App() {
  return (
    <div className="w-full flex flex-col items-center py-10 bg-white">
      
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold italic font-serif text-gray-900 text-center mb-10">
        Our Sponsors / Patrons
      </h1>

      <h2 className="text-2xl md:text-3xl font-bold italic font-serif text-gray-700 text-center mt-2 mb-10">
        In-kind Sponsors
      </h2>

      {/* Logo Loop Section with Animation */}
      <motion.div
        className="relative w-full h-[200px] overflow-hidden mb-12"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <LogoLoop
          logos={imageLogos}
          speed={120}
          direction="left"
          logoHeight={100}
          gap={100}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Company logos"
        />
      </motion.div>

      {/* Technical Sponsors Section with Animation */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold italic font-serif text-gray-700 text-center mb-6">
          Technical Sponsors
        </h2>

        <div className="flex flex-wrap justify-center space-x-10 md:space-x-16 mb-16">
          <a href="#" className="transition-transform duration-300 hover:scale-110">
            <img
              src="/ts1.png"
              alt="Technical Sponsor 1"
              className="h-24 md:h-28 object-contain"
            />
          </a>
          <a href="#" className="transition-transform duration-300 hover:scale-110">
            <img
              src="/ts2.png"
              alt="Technical Sponsor 2"
              className="h-24 md:h-28 object-contain"
            />
          </a>
        </div>
      </motion.div>

      {/* Register Button with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <StarBorder
          as="button"
          color="cyan"
          speed="5s"
        >
          Register Now
        </StarBorder>
      </motion.div>
    </div>
  );
}

export default App;