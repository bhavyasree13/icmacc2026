import Image from "next/image";
import Link from "next/link";

export default function Sponsors() {
  const inkind = [
    {
      name: "Ananth Technology",
      logo: "/sponsors/ananth-tech.png",
      href: "https://ananthtech.com/index.htm",
    },
    {
      name: "VNRVJIET",
      logo: "/sponsors/vnrvjiet.png",
      href: "https://www.vnrvjiet.ac.in/",
    },
  ];
  const technical = [
    {
      name: "IEEE Hyderabad Section",
      logo: "/sponsors/hydsec.png",
      href: "https://ieeehyd.org/",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div id="in-kind-sponsors" className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            In-Kind Sponsors
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
          <div className="flex justify-center items-center flex-wrap gap-12 sm:gap-16 md:gap-24 lg:gap-36 group">
            {inkind.map((sponsor, index) => (
              <Link
                href={sponsor.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-105"
              >
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={1000}
                    height={1000}
                    className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto object-contain"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div id="technical-sponsors" className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Technical Sponsors
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
          <div className="flex justify-center items-center flex-wrap gap-8 sm:gap-10">
            {technical.map((sponsor, index) => (
              <Link
                href={sponsor.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-105"
              >
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={1000}
                    height={1000}
                    className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto object-contain"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
