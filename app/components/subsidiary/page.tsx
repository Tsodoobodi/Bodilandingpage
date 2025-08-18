// "use client";

// import Image from "next/image";

// const subsidiaryLogos = [
//   { name: "Buuruljuut", src: "/subsidiary/inter.jpg", alt: "international" },
//   {
//     name: "NationalPark",
//     src: "/subsidiary/park.png",
//     alt: "NationalPark",
//   },
//   { name: "Incon", src: "/subsidiary/redrock.png", alt: "incon" },
//   { name: "Bodipro", src: "/subsidiary/plus.png", alt: "pro" },
//   { name: "Redrock", src: "/subsidiary/proporties.png", alt: "redrock" },
//   { name: "Major", src: "/subsidiary/major.png", alt: "major" },
//   { name: "Major", src: "/subsidiary/buuruljuut.jpg", alt: "major" },
// ];

// export default function SubsidiaryCarousel() {
//   const duplicatedLogos = [...subsidiaryLogos, ...subsidiaryLogos];

//   return (
//     <section className="w-full max-w-[1420px] py-24 mx-auto px-4">
//       <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
//         <div className="flex items-center gap-4">
//           <h2 className="text-2xl font-semibold text-[#152b4c] w-[180px]">
//             Group Companies
//           </h2>
//           <div className="hidden md:block w-1 h-16 bg-gray-300" />
//         </div>

//         <div className="relative flex-1 w-full overflow-hidden">
//           <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
//           <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
//           <div className="flex w-max animate-scroll">
//             {duplicatedLogos.map((logo, index) => (
//               <div
//                 key={`${logo.name}-${index}`}
//                 className="flex-shrink-0 mx-6 md:mx-8 flex items-center justify-center min-w-[150px] sm:min-w-[180px] md:min-w-[200px]"
//               >
//                 <Image
//                   src={logo.src || "/"}
//                   alt={logo.alt}
//                   width={150}
//                   height={80}
//                   className="h-[80px] w-[150px] object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-scroll {
//           display: flex;
//           animation: scroll 25s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { useState } from "react";

const subsidiaryLogos = [
  {
    name: "International",
    src: "/subsidiary/inter.jpg",
    alt: "international",
    href: "https://bodigroup.mn",
  },
  {
    name: "NationalPark",
    src: "/subsidiary/park.png",
    alt: "NationalPark",
    href: "https://mypark.mn",
  },
  {
    name: "Incon",
    src: "/subsidiary/incon.png",
    alt: "incon",
    href: "https://incon.com",
  },
  {
    name: "Bodipro",
    src: "/subsidiary/proporties.png",
    alt: "pro",
    href: "https://bodiproperties.mn",
  },
  {
    name: "Redrock",
    src: "/subsidiary/redrock.png",
    alt: "redrock",
    href: "https://redrockresort.mn",
  },
  {
    name: "Major",
    src: "/subsidiary/major.png",
    alt: "major",
    href: "https://majorsupply.mn",
  },
  {
    name: "Buuruljuut",
    src: "/subsidiary/buuruljuut.jpg",
    alt: "major",
    href: "https://buuruljuut.mn",
  },
];

export default function SubsidiaryCarousel() {
  const [isHovered, setIsHovered] = useState(false);
  const duplicatedLogos = [...subsidiaryLogos, ...subsidiaryLogos];

  return (
    <section className="w-full max-w-[1420px] py-24 mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold text-[#152b4c] w-[180px]">
            Group Companies
          </h2>
          <div className="hidden md:block w-1 h-16 bg-gray-300" />
        </div>

        <div
          className="relative flex-1 w-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            className="flex w-max animate-scroll"
            style={{ animationPlayState: isHovered ? "paused" : "running" }}
          >
            {duplicatedLogos.map((logo, index) => (
              <a
                key={`${logo.name}-${index}`}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-6 md:mx-8 flex items-center justify-center min-w-[150px] sm:min-w-[180px] md:min-w-[200px] transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={logo.src || "/"}
                  alt={logo.alt}
                  width={150}
                  height={80}
                  className="h-[80px] w-[150px] object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
