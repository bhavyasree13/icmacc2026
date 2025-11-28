"use client";

import { useRef, useEffect, useState } from "react";

// Enhanced Card component with multiple animation variants
const Card = ({
  children,
  bg = "white",
  animationType = "slideUp",
  delay = 0,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out transform";

    switch (animationType) {
      case "slideLeft":
        return `${baseClasses} ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
        }`;
      case "slideRight":
        return `${baseClasses} ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
        }`;
      case "fadeScale":
        return `${baseClasses} ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`;
      case "rotate":
        return `${baseClasses} ${
          visible ? "opacity-100 rotate-0" : "opacity-0 rotate-3"
        }`;
      default: // slideUp
        return `${baseClasses} ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`;
    }
  };

  return (
    <section
      ref={ref}
      className={`mx-4 md:mx-16 my-8 p-6 md:p-12 rounded-2xl border border-gray-200/50 shadow-lg backdrop-blur-sm
        ${getAnimationClasses()}
        hover:shadow-xl hover:scale-[1.01] hover:-translate-y-1
        transition-all duration-300 ease-out
        ${
          bg === "gray"
            ? "bg-gradient-to-br from-gray-50/90 to-gray-100/90"
            : "bg-gradient-to-br from-white/90 to-gray-50/90"
        }
        relative overflow-hidden group`}
      style={{
        transform: `translateY(${scrollY * 0.05}px)`,
      }}
    >
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

      <div className="relative z-10">{children}</div>
    </section>
  );
};

// Animated text component
const AnimatedText = ({ children, delay = 0 }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-800 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
};

// Floating particles background
const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default function ConferenceScroll() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 font-sans relative">
      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/50 z-50">
        <div
          className="h-full bg-black transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating particles */}
      <FloatingParticles />

      {/* Hero section with enhanced animations */}
      <div className="relative z-10 pt-8">
        {/* Theme */}
        <Card animationType="fadeScale" delay={200}>
          <AnimatedText>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Theme: Fusion of Deep and Emerging Technologies: Shaping the
              Future Frontiers of Innovation
            </h2>
          </AnimatedText>
          <AnimatedText delay={400}>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 text-justify">
              The 3rd International Conference on recent trends in
              Microelectronics, Automation, Computing and Communications Systems
              (ICMACC-26) is focused on research and emphasizes on the latest
              technological advancements. The conference aims to provide
              outstanding opportunities for both academic and industrial
              communities to address new trends and challenges and emerging
              technologies on the topics relevant to today's fast-moving areas
              in the fields of Microelectronics, Automation, Computing and
              Communications Systems, and so on.
            </p>
          </AnimatedText>
          <AnimatedText delay={600}>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 mt-4 text-justify">
              The conference comprises keynote addresses, invited talks,
              refereed paper and poster presentations, pre-conference tutorials,
              product exhibition, and panel discussion. The vision of the
              ICMACC-26 is to promote brainstorming and collaboration so that
              critical issues pertaining to individual research activities can
              be addressed and ideas can be exchanged through extensive
              discussions. The conference focuses on specific engineering
              streams, allowing the speakers to dwell deep into the very next
              day. The conference is technically co-sponsored by IEEE Hyderabad
              Section and is approved by IEEE with conference ID: #69869.
            </p>
          </AnimatedText>
        </Card>

        {/* Objectives */}
        <Card bg="gray" animationType="slideLeft" delay={300}>
          <AnimatedText>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              Objectives
            </h2>
          </AnimatedText>
          <div className="space-y-4">
            {[
              "To address practical challenges encountered and discuss innovative solutions adopted in allied fields of electronics, computing, and automation.",
              "To bring Academicians, Researchers and Industry Experts across the globe to submit and present basic and applied work in the wide domains of Microelectronics, Automation, Computing and Communications Systems and allied areas of study.",
              "To create a platform to exchange knowledge, research results, innovations, and developments in the allied fields of electronics, computing, and automation.",
              "To provide an opportunity for students, researchers, and engineers to interact with the experts on technical matters, research methodologies, career advice, vision into the future, and preparedness for better societal impact through technological interventions.",
              "To deliver and discuss the latest developments in VLSI, IoT, Communication, Automation, Signal Processing and Biomedical Engineering applications by eminent personalities from premier institutes and organizations.",
            ].map((objective, index) => (
              <AnimatedText key={index} delay={200 + index * 150}>
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/30 backdrop-blur-sm border border-white/20 hover:bg-white/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 mt-2 flex-shrink-0"></div>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    {objective}
                  </p>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Card>

        {/* About IEEE */}
        <Card animationType="slideRight" delay={400}>
          <AnimatedText>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              About IEEE Hyderabad Section
            </h2>
          </AnimatedText>
          <AnimatedText delay={300}>
            <div className="bg-gradient-to-r from-orange-50/50 to-pink-50/50 p-6 rounded-xl border border-orange-200/30">
              <p className="text-base md:text-lg leading-relaxed text-gray-700 text-justify">
                The IEEE Hyderabad Section is one of the most active sections of
                IEEE in India. IEEE was formally introduced in Hyderabad, in
                June 1981, when a group of engineers in Hyderabad decided to
                form an IEEE sub-section. This sub-section was rapidly elevated
                to a full section, in 1984 (the year of IEEE Centenary
                celebrations). All IEEE members residing in the Indian states of
                Telangana and Andhra Pradesh (excluding geography of Vizag Bay
                section) are members of the IEEE Hyderabad Section.
                <a
                  href="https://ieeehyd.org/"
                  className="inline-block ml-2 px-3 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm rounded-full hover:from-orange-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More Info →
                </a>
              </p>
            </div>
          </AnimatedText>
        </Card>

        {/* About VNRVJIET */}
        <Card bg="gray" animationType="rotate" delay={500}>
          <AnimatedText>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About VNRVJIET
            </h2>
          </AnimatedText>
          <AnimatedText delay={400}>
            <div className="bg-gradient-to-r from-indigo-50/50 to-purple-50/50 p-6 rounded-xl border border-indigo-200/30">
              <p className="text-base md:text-lg leading-relaxed text-gray-700 text-justify">
                Vallurupalli Nageswara Rao Vignana Jyothi Institute of
                Engineering and Technology (VNRVJIET) was established by the
                Vignana Jyothi Society, a not-for-profit organization, in the
                year 1995. Education determines a society's growth and
                development. With a motto to provide value-based higher
                education on par with international standards, the Philosophy of
                Vignana Jyothi unravels education as a process of "Presencing"
                that provides, both individually and collectively, to one's
                deepest capacity to sense and experience the knowledge.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 mt-4 text-justify">
                This process, along with a conscientious will to put Success and
                Happiness first leading to a better future has put VNRVJIET at
                the forefront of academic excellence. The Institute is approved
                by AICTE and is affiliated to JNTU-H. It offers 14 UG
                programmes, 14 PG programmes, and Ph.D. programmes under NDF
                scheme of AICTE—the only Institute in the Telangana State to get
                this recognition!—thus imparting quality education to over 6000
                students every year.
                <a
                  href="https://vnrvjiet.ac.in/"
                  className="inline-block ml-2 px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More Info →
                </a>
              </p>
            </div>
          </AnimatedText>
        </Card>

        {/* Footer spacing */}
        <div className="h-20 m-10"></div>
      </div>
    </div>
  );
}
