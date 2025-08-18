import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Тавантолгой - Гашуун сухайт чиглэлийн төмөр замын цогцолбор төсөл",
    description:
      "Монгол улсад анх удаа 1-р зэрэглэлийн, уулзваргүй, хүнд даацын, жилд 30-50 сая тонн нүүрс тээвэрлэх хүчин чадалтай 233.6 км урт төмөр замыг бүтээн байгууллаа.",
    image: "/images/bg1.png",
  },
  {
    id: 2,
    title: "Тавантолгойн нүүрс ачих ложистикийн төв төсөл",
    description:
      "“Эрдэнэс Тавантолгой” ХК-ийн экспортыг нэмэгдүүлэх, тээврийн зардлыг бууруулах “ТАВАНТОЛГОЙН НҮҮРС АЧИХ ЛОГИСТИКИЙН ТӨВ” – төслийн бүтээн байгуулалтыг энэ оноос хэрэгжүүлж эхэллээ.",
    image: "/images/bg1.png",
  },
  {
    id: 3,
    title: "Богдхан төмөр зам - төсөл",
    description:
      "“Богдхан төмөр зам” төсөл нь Рашаант өртөөнөөс Мааньт өртөө хүртэл 144.9 км төмөр зам болон түүнийг дагалдах дэд бүтцийн бүтээн байгуулалтын төсөл юм.",
    image: "/images/bg1.png",
  },
  {
    id: 4,
    title: "Бөөрөлжүүтийн цахилгаан станц - төсөл",
    description:
      "Жилд 80-100МВт-аар өсөн нэмэгдэж буй Монгол Улсын эрчим хүчний хэрэглээг хангах зорилгоор “Бөөрөлжүүтийн уурхай, цахилгаан станцын цогц төсөл”-ийг үе шаттай хэрэгжүүлж байна.",
    image: "/images/buuruljuut.png",
  },
];

const miniprojects = [
  {
    title: "Бодь цамхаг",
    image: "/images/bg1.png",
  },
  {
    title: "Эмбасси Резиденс",
    image: "/images/bg1.png",
  },
  {
    title: "Шинэ төгөл, Голомт, Санзай хотхон",
    image: "/images/bg1.png",
  },
  {
    title: "Үндэсний соёл амралтын хүрээлэн",
    image: "/images/bg1.png",
  },
  {
    title: "Рэд Рок ресорт",
    image: "/images/bg1.png",
  },
  {
    title: "Мөнгөн гүүр эмнэлэг",
    image: "/images/bg1.png",
  },
  {
    title: "Хүннү эйр",
    image: "/images/bg1.png",
  },
  {
    title:
      "Тавантолгой-Гашуунсухайт - Тавантолгой-Зүүнбаян холболтын төмөр зам",
    image: "/images/bg1.png",
  },
  {
    title: "Бөөрөлжүүл тал - нүүрсний уурхай, цахилгаан станцын цогц төсөл",
    image: "/images/bg1.png",
  },
  {
    title: "Цахилгаан дамжуулах агаарын шугам",
    image: "/images/bg1.png",
  },
  {
    title: "Нисэх онгоцны бодит ажиглалтын систем",
    image: "/images/bg1.png",
  },
  {
    title: "Иргэний ухаалаг үнэмлэхийн төсөл",
    image: "/images/bg1.png",
  },
];

function Construction() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 py-16">
      {/* Title */}
      <div className="flex items-center gap-[15px]">
        <Image width={40} height={40} src="/images/logo.png" alt="About Us" />
        <h1 className="text-3xl font-bold text-[#152b4c]">
          Хэрэгжүүлж буй төслүүд
        </h1>
      </div>

      <p className="text-gray-700 mb-4 mt-[33px]">
        Бодь групп нь дэлхийн стандарт, инноваци, дэвшилтэт техник, технологийг
        эх орондоо нэвтрүүлж, салбартаа үргэлж шинэлэг, шинийг санаачлагчийн
        байр сууринд байсаар ирсэн төдийгүй улс орны нийгэм, эдийн засгийн
        хөгжилд бодит хувь нэмрийг оруулсаар байна.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="relative group w-full max-w-[690px] h-[380px] overflow-hidden shadow-lg cursor-pointer"
          >
            {/* Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay for text */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <h2 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-200 text-sm mt-[15px]">
                {project.description}
              </p>
              <div className="flex justify-end">
                <Button className="border w-12 h-12 border-white ml-auto rounded-none mt-[15px] bg-transparent hover:bg-[#152b4c] hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,255,0.7)] transition-all duration-300 ease-out">
                  <a href={`/projects/${project.id}`} className="text-white">
                    <ChevronRight />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-[15px] mt-[80px]">
        <Image width={40} height={40} src="/images/logo.png" alt="About Us" />
        <h1 className="text-3xl font-bold text-[#152b4c]">
          Хэрэгжүүлсэн төслүүд
        </h1>
      </div>

      <p className="text-gray-700 mb-4 mt-[33px]">
        Бодь групп нь барилга угсралт, барилгын удирдлага, дэд бүтэц, уул
        уурхай, үл хөдлөх хөрөнгийн удирдлага, үйлчилгээ зэрэг чиглэлээр хэд
        хэдэн салбар компанитайгаар үйл ажиллагаа явуулдаг. Энэ хүрээнд Монгол
        Улсын хөгжлийг хурдасгасан, анхдагч, үр ашигтай төслүүдийг амжилттай
        хэрэгжүүлcэн үндэсний хөрөнгө оруулагч аж ахуйн нэгж юм.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        {miniprojects.map((project, index) => (
          <div
            key={index}
            className="relative group w-full max-w-[340px] h-[350px] overflow-hidden shadow-lg cursor-pointer"
          >
            {/* Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay for text */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <div className="flex items-center justify-between">
                <h2 className="font-medium text-white mb-2 w-[250px]">
                  {project.title}
                </h2>
                <Button className="border border-white ml-auto bg-transparent rounded-none w-12 h-12 hover:bg-[#152b4c] hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,255,0.7)] transition-all duration-300 ease-out">
                  <a href="/" className="text-white">
                    <ChevronRight />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Construction;
