"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PriceOfTheYear from "../price/page";
import HistoricalTimeline from "../components/roundhistory/page";

const values = [
  {
    title: "БОДЬ СЭТГЭЛГЭЭ",
    description:
      "Хүн ба байгальдаа ээлтэй, хамтын хөгжил дэвшилд оюун ухаан, сэтгэл зүрхээ зориулдаг, ёс зүйг дээдлэгч",
    image: "/honor/first.png",
  },
  {
    title: "БОДИТ МАНЛАЙЛАЛ",
    description:
      "Зарчмаа тэргүүнд эрэмбэлэн, сорилт бүрд дэх боломжийг соргог тусгаж, үйл хэргээрээ үлгэрлэн манлайлагч байна.",
    image: "/honor/second.png",
  },
  {
    title: "ЦОГЦЛООН БҮТЭЭГЧ",
    description:
      "Инновац, сайн туршлагыг шингээсэн ухаалаг шийдлээр өнөөдрийг ирээдүйтэй холбож, зорьсноо хариуцлагатайгаар цогцлоон бүтээгч байна",
    image: "/honor/third.png",
  },
];

// Scroll animation hook
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(node); // зөвхөн нэг удаа ажиллана
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return { ref, isVisible };
}

export default function About() {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 py-16">
        {/* Бидний тухай */}
        <div className="flex items-center gap-[15px]">
          <Image width={40} height={40} src="/images/logo.png" alt="About Us" />
          <h1 className="text-3xl font-bold text-center text-[#152b4c]">
            Бидний тухай
          </h1>
        </div>
        <p className="text-gray-700 mb-4 mt-[54px]">
          Бодь Интернэшнл ХХК нь 1993 онд үндэсний хөрөнгө оруулагчдын
          санаачлагаар үүсгэн байгуулагдсан бөгөөд барилга, дэд бүтэц, уул
          уурхай, банк санхүү, хэвлэл мэдээлэл, хүнс, хөдөө аж ахуй зэрэг
          салбаруудад тэргүүлэгч бизнесүүдийн нэгдэл болох Бодь группийн тэргүүн
          компани юм.
        </p>
        <p className="text-gray-700">
          Бидний эрхэм зорилго бол Монгол Улсын эдийн засгийн хөгжилд хувь
          нэмрээ оруулах, тогтвортой хөгжлийг дэмжих явдал юм. Бидний үйл
          ажиллагаа нь чанар, инноваци, нийгмийн хариуцлага дээр суурилдаг
          бөгөөд бидний зорилго нь Монголын ирээдүйг гэрэлтүүлэхэд оршино.
        </p>

        <div>
          <Image
            src="/images/aboutus.png"
            width={1420}
            height={428}
            alt="About Us Image"
            className="mt-8 w-full h-full object-cover"
          />
        </div>

        {/* Амжилтууд */}
        <div className="flex flex-col mt-[80px]">
          <h1 className="text-3xl font-bold text-[#152b4c] text-center">
            Бизнесийн амжилтууд
          </h1>
          <p className="text-gray-700 mt-[40px]">
            Бодь групп нь бүтээн байгуулалтын салбаруудад зөв менежментийн
            бодлого баримтлан, чадварлаг үндэсний мэргэжлийн инженер техникийн
            ажилтантай хамт олныг бүрдүүлж, тэргүүн арга туршлагыг амьдралд
            бодитойгоор хэрэгжүүлж ирсэн Монгол улсын ТОП-100 аж ахуй нэгжийн
            нэг, хөгжлийг бүтээгч, үндэсний хөрөнгө оруулагч аж ахуй нэгж юм.
          </p>
        </div>
        <div>
          <Image
            src="/images/longbanner.png"
            alt="Business Success"
            className="mt-12 w-full h-full object-cover"
            height={40}
            width={1420}
          />
        </div>

        {/* Үнэт зүйлс */}
        <div className="flex flex-col mt-[20px]">
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-[#152b4c] mb-4 tracking-tight">
                Үнэт зүйлс
              </h2>
              <p className="text-[#152b4c] mb-12 max-w-2xl mx-auto">
                Компани бидний үйл ажиллагааг чиглүүлдэг үндсэн 3 үнэт зүйлс.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {values.map((item, idx) => {
                  const { ref, isVisible } = useScrollAnimation();
                  return (
                    <div
                      key={idx}
                      ref={ref}
                      className={`relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 flex flex-col items-center text-center shadow-lg transition-all duration-700 ease-out ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                      }`}
                    >
                      <div className="relative transition-transform duration-700">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={96}
                          height={96}
                          className="object-contain"
                        />
                      </div>
                      <h3
                        className={`text-xl font-semibold text-[#152b4c] mb-2 mt-4 transition-all duration-700 delay-200 ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-5"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-[#152b4c] text-sm transition-all duration-700 delay-300 ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-5"
                        }`}
                      >
                        {item.description}
                      </p>

                      {/* Decorative blur circles */}
                      <div className="absolute -top-6 -left-6 w-16 h-16 bg-cyan-400/20 rounded-full blur-3xl"></div>
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        {/* Banner */}
        <div>
          <Image
            src="/images/longbanner.png"
            alt="Business Success"
            className="mt-8 w-full h-full object-cover"
            height={40}
            width={1420}
          />
        </div>

        {/* Эрхэм зорилго */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-[#152b4c] mt-[80px] text-center">
            Эрхэм зорилго
          </h1>
          <section className="text-[#152b4c] py-12 px-6 mt-[33px]">
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <p className="text-lg leading-relaxed">
                Бидний өнгөрсөн хугацаанд хийж хэрэгжүүлж байсан бизнесийн үйл
                ажиллагаанууд нь салбартаа үргэлж шинэлэг, шинийг санаачлагын
                байр сууринд байсаар ирсэн төдийгүй улс орны эдийн засгийн
                хөгжилд бодитой хувь нэмэрээ оруулсаар ирсэн.
              </p>
              <p className="text-lg leading-relaxed">
                Монгол улсын хөгжлийн голлох салбаруудад олон улсын жишигт
                нийцсэн, чанар, өндөр бүтээмжтэй, нийгмийн хариуцлагатай, ёс
                зүйтэй бизнесийг төлөвшүүлсэн үлгэр жишээ сайн засаглалтай
                компани байхад оршино.
              </p>
            </div>
          </section>
        </div>

        {/* Banner */}
        <div>
          <Image
            src="/images/longbanner.png"
            alt="Business Success"
            className="mt-[30px] w-full h-full object-cover"
            height={40}
            width={1420}
          />
        </div>

        {/* Extra components */}
        <div className="flex flex-col items-center mt-[80px]">
          <HistoricalTimeline />
          <PriceOfTheYear />
        </div>
      </div>
    </div>
  );
}
