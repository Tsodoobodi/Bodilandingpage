"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    image: "/images/bg1.png",
    title: "Тавантолгой - Гашуун сухайт чиглэлийн  төмөр замын цогцолбор төсөл",
    description:
      "Уулзваргүй төмөр зам тавих технологийг Монгол инженерүүд эх орондоо нэвтрүүллээ.  Ингэснээр Тавантолгой-Гашуунсухайтын ...",
    category: "Тээвэр",
  },
  {
    id: 2,
    image: "/images/train.png",
    title: "Тавантолгойн нүүрс ачих ложистикийн төв төсөл",
    description:
      "Орчин үеийн технологи ашиглан уул уурхайн үйл ажиллагааг хөгжүүлэх",
    category: "Уул уурхай",
  },
  {
    id: 3,
    image: "/images/build.png",
    title: "Богдхан төмөр зам төсөл",
    description: "Хотын тээврийн орчин үеийн шийдэл",
    category: "Хотын тээвэр",
  },
  {
    id: 4,
    image: "/images/buuruljuut.png",
    title: "Бөөрөлжүүтийн цахилгаан станц төсөл",
    description: "Байгаль орчинд ээлтэй үйлдвэрийн барилга байгууламж",
    category: "Үйлдвэр",
  },
];

export default function ProjectShowcase() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container py-20 pt-24 flex flex-col items-center">
      <p className="text-[#0C72BA] text-sm font-medium tracking-wide mb-2">
        Хэрэгжүүлж буй төслүүд
      </p>
      <h1 className="text-[28px] font-semibold text-[#152b4c]">
        Бүтээн байгуулалтууд
      </h1>

      <div className="w-full mt-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className={`
              relative group overflow-hidden cursor-pointer shadow-sm 
              h-[400px] sm:h-[480px] md:h-[520px] lg:h-[560px]
              transform transition-all duration-700
              ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
            `}
            style={{ transitionDelay: `${idx * 200}ms` }}
          >
            {/* Project Image */}
            <img
              src={project.image || "/"}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

            {/* Text */}
            <div className="absolute left-0 right-0 bottom-10 flex flex-col items-center text-center text-white px-4 sm:px-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 mt-2">
                {project.description}
              </p>
              <Link
                href={`/projects/${project.id}`}
                className="hover:scale-110 transform transition-all duration-500 delay-200 mt-2"
              >
                <img
                  src="/icons/rightcirclearrow.png"
                  width={50}
                  height={50}
                  alt="arrow"
                  className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
