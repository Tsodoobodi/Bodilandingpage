"use client";
import Image from "next/image";
import React from "react";

const milestones = [
  {
    year: 1999,
    title: "Шилдэг конпани",
    description: "Худалдаа Аж Үйлдвэрийн Танхим",
    image: "/images/trophy.png",
    category: "Үндэслэл",
  },
  {
    year: 2004,
    title: "Шилдэг 100 Аж Ахуйн Нэгж",
    description: "Худалдаа Аж Үйлдвэрийн Танхим",
    image: "/images/trophy.png",
    category: "Өргөтгөл",
  },
  {
    year: 2006,
    title: "GOLDEN TROPHY FOR QUALITY",
    description: "Шинэ мянганы шагнал гардуулах ёслол",
    descrption2: "-Парис хот, Бүгд Найрамдах Франц улс-",
    image: "/images/trophy.png",
    category: "Инноваци",
  },
  {
    year: 2006,
    title: "GOLDEN AWARDS",
    description: "International Arch of Europe Convention",
    descrption2: "-Франкфурт Хот, Холбооны Бүгд Найрамдах Герман Улс-",
    image: "/images/trophy.png",
    category: "Глобалчлал",
  },
  {
    year: 2007,
    title: "Best Company",
    description: "International Quality Summit Award",
    description2: "Дэлхийн Хөгжлийн Нийгэмлэг",
    image: "/images/trophy.png",
    category: "Дэд бүтэц",
  },
  {
    year: 2009,
    title: "Шилдэг 100 Аж Ахуйн Нэгж",
    description: "Худалдаа Аж Үйлдвэрийн Танхим",
    image: "/images/trophy.png",
    category: "Түншлэл",
  },
  {
    year: 2012,
    title: "Шилдэг конпани",
    description: "Худалдаа Аж Үйлдвэрийн Танхим",
    image: "/images/trophy.png",
    category: "Тогтвортой байдал",
  },
  {
    year: 2016,
    title: "Топ 150 Аж Ахуй Нэгж",
    description: "Худалдаа Аж Үйлдвэрийн Танхим",
    image: "/images/trophy.png",
    category: "Дижитал",
  },
  {
    year: 2017,
    title: "Best Hotel Development",
    description: "Asia Property - Red Rock Resort",
    image: "/images/trophy.png",
    category: "Инноваци",
  },
  {
    year: 2020,
    title: "Топ 100 Аж Ахуй Нэгж",
    description: "Худалдаа Аж Үйлдвэрийн Танхим",
    image: "/images/trophy.png",
    category: "Өргөтгөл",
  },
  {
    year: 2020,
    title: "Топ 100 Аж Ахуй Нэгж",
    description: "Татварын Ерөнхий газар",
    image: "/images/trophy.png",
    category: "Өргөтгөл",
  },
  {
    year: 2021,
    title: "Топ 100 Аж Ахуй Нэгж #25",
    description: "Худалдаа Аж Үйлдвэрийн Танхим",
    image: "/images/trophy.png",
    category: "AI",
  },
  {
    year: 2022,
    title: "Топ 100 Аж Ахуй Нэгж #17",
    description: "Худалдаа Аж Үйлдвэрийн Танхим",
    image: "/images/trophy.png",
    category: "Дэд бүтэц",
  },
  {
    year: 2023,
    title: "Шилдэг Бүтээн Байгуулагч Энтрепренер",
    description: "Худалдаа Аж Үйлдвэрийн Танхим",
    image: "/images/trophy.png",
    category: "Стратеги",
  },
  {
    year: 2023,
    title: "Шилдэг Инновац Нэвтрүүлэгч Энтрепренер",
    description: "Худалдаа Аж Үйлдвэрийн Танхим",
    image: "/images/trophy.png",
    category: "Стратеги",
  },
  {
    year: 2023,
    title: "Шилдэг Бүтээн Байгуулалт",
    description: "Монголын Архитекторуудын Эвлэл",
    image: "/images/trophy.png",
    category: "Стратеги",
  },
];

function PriceOfTheYear() {
  const scrollingLogos = [...milestones, ...milestones];

  return (
    <section className="w-full py-24">
      <div className="container mx-auto px-4 flex items-center gap-12">
        <div className="relative flex-1 overflow-hidden marquee">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="flex w-max animate-scroll gap-8 will-change-transform">
            {scrollingLogos.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="flex-shrink-0 flex flex-col items-center text-center bg-white cursor-pointer w-[320px] p-6 rounded-2xl transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  loading="lazy"
                  className="w-20 h-20 object-contain mb-4"
                />
                <p className="text-3xl text-gray-800">{item.year}</p>
                <p className="mt-2 text-lg font-semibold text-[#152b4c]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                {item.description2 && (
                  <p className="mt-1 text-xs text-gray-500 italic">
                    {item.description2}
                  </p>
                )}
              </div>
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
          animation: scroll 100s linear infinite;
          animation-play-state: running;
        }
        /* ✅ Pause the marquee when hovering anywhere over the area/cards */
        .marquee:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

export default PriceOfTheYear;
