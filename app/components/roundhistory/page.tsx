"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

interface Milestone {
  year: number;
  title: string;
  description: string;
  image: string;
  category?: string;
}

const milestones: Milestone[] = [
  {
    year: 1993,
    title: "Үүсгэн байгуулагдсан",
    description:
      "Компани анх үүсгэн байгуулагдсан он. Монгол улсын эдийн засгийн шинэ үеийн эхлэл.",
    image: "/images/bg1.png",
    category: "Үндэслэл",
  },
  {
    year: 1995,
    title: "Анхны салбар",
    description:
      "Анхны салбар оффис нээгдэж, үйлчилгээний сүлжээ өргөжин тэлэв.",
    image: "/images/buuruljuut.png",
    category: "Өргөтгөл",
  },
  {
    year: 1997,
    title: "Технологийн шинэчлэл",
    description:
      "Орчин үеийн технологи нэвтрүүлж, үйл ажиллагааны чанарыг дээшлүүлэв.",
    image: "/images/train.png",
    category: "Инноваци",
  },
  {
    year: 2001,
    title: "Олон улсын зах зээл",
    description:
      "Олон улсын зах зээлд амжилттай нэвтэрч, экспортын үйл ажиллагаа эхлүүлэв.",
    image: "/images/build.png",
    category: "Глобалчлал",
  },
  {
    year: 2003,
    title: "Шинэ барилга",
    description:
      "Орчин үеийн стандартад нийцсэн шинэ төв оффис барилгыг ашиглалтад оруулав.",
    image: "/images/bg1.png",
    category: "Дэд бүтэц",
  },
  {
    year: 2006,
    title: "Стратегийн түншлэл",
    description:
      "Олон улсын томоохон компаниудтай стратегийн түншлэлийн гэрээ байгуулав.",
    image: "/images/buuruljuut.png",
    category: "Түншлэл",
  },
  {
    year: 2009,
    title: "Эко санаачилга",
    description:
      "Байгаль орчинд ээлтэй технологи нэвтрүүлж, тогтвортой хөгжлийн зарчмыг баримталав.",
    image: "/images/train.png",
    category: "Тогтвортой байдал",
  },
  {
    year: 2013,
    title: "Дижитал шилжилт",
    description:
      "Дижитал технологид бүрэн шилжиж, автоматжуулсан системүүдийг нэвтрүүлэв.",
    image: "/images/build.png",
    category: "Дижитал",
  },
  {
    year: 2014,
    title: "Шинэ бүтээгдэхүүн",
    description:
      "Зах зээлийн хэрэгцээнд нийцсэн шинэлэг бүтээгдэхүүн, үйлчилгээг танилцуулав.",
    image: "/images/bg1.png",
    category: "Инноваци",
  },
  {
    year: 2015,
    title: "Өргөтгөл",
    description:
      "Бизнесийн салбараа өргөтгөж, шинэ чиглэлүүдэд үйл ажиллагаа эхлүүлэв.",
    image: "/images/buuruljuut.png",
    category: "Өргөтгөл",
  },
  {
    year: 2022,
    title: "AI технологи",
    description:
      "Хиймэл оюун ухаан болон машин сургалтын технологийг үйл ажиллагаанд нэвтрүүлэв.",
    image: "/images/train.png",
    category: "AI",
  },
  {
    year: 2023,
    title: "Гашуунсухайт бөөмт",
    description:
      'Гашуунсухайт бөөмт дахь "Шилжүүлэн ачих терминал" төслийг амжилттай хэрэгжүүлэв.',
    image: "/images/build.png",
    category: "Дэд бүтэц",
  },
  {
    year: 2025,
    title: "Ирээдүйн зорилго",
    description:
      "Цаашдын хөгжлийн стратеги боловсруулж, шинэ зорилгуудыг тодорхойлов.",
    image: "/images/train.png",
    category: "Стратеги",
  },
];

export default function HistoricalTimeline() {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone>(
    milestones.find((m) => m.year === 2023) || milestones[0]
  );
  const [currentIndex, setCurrentIndex] = useState(
    milestones.findIndex((m) => m.year === 2023)
  );
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering for calculations
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Pre-calculate positions to ensure consistency
  const calculatePositions = () => {
    const radius = 250;
    const angleStep = (2 * Math.PI) / milestones.length;
    const logoRadius = 40;

    return milestones.map((milestone, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const x = Math.round(radius * Math.cos(angle) * 100) / 100; // Round to 2 decimal places
      const y = Math.round(radius * Math.sin(angle) * 100) / 100;
      const lineAngle =
        Math.round(Math.atan2(y, x) * (180 / Math.PI) * 100) / 100;
      const lineWidth = Math.round((radius - logoRadius) * 100) / 100;

      return {
        milestone,
        x,
        y,
        lineAngle,
        lineWidth,
        index,
      };
    });
  };

  const positions = isClient ? calculatePositions() : [];

  const handlePrevious = () => {
    const newIndex =
      currentIndex > 0 ? currentIndex - 1 : milestones.length - 1;
    setCurrentIndex(newIndex);
    setSelectedMilestone(milestones[newIndex]);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex < milestones.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedMilestone(milestones[newIndex]);
  };

  const handleMilestoneClick = (milestone: Milestone) => {
    setSelectedMilestone(milestone);
    setCurrentIndex(milestones.findIndex((m) => m.year === milestone.year));
  };

  // Don't render complex calculations on server
  if (!isClient) {
    return (
      <div
        className="h-[900px] w-[1465px] bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-8 relative overflow-hidden"
        id="history-timeline"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <h1 className="text-3xl font-medium text-white mb-4 tracking-tight">
              Түүхэн замнал
            </h1>
          </div>
          <div className="flex items-center justify-center h-96">
            <div className="text-white text-lg">Loading timeline...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[900px] w-[1465px] bg-[#152b4c]  p-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-10 w-48 h-48 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="absolute inset-0 z-5">
        <div className="absolute mt-[430px] left-130 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[500px] h-[500px] border border-cyan-400/30 rounded-full animate-pulse-glow"></div>
          <div className="absolute inset-0 w-[600px] h-[600px] border border-blue-400/20 rounded-full -translate-x-[50px] -translate-y-[50px]"></div>
          <div className="absolute inset-0 w-[700px] h-[700px] border border-indigo-400/10 rounded-full -translate-x-[100px] -translate-y-[100px]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12">
          <h1 className="text-3xl font-medium text-white mb-4 tracking-tight">
            Түүхэн замнал
          </h1>
        </div>

        <div className="flex items-center justify-between gap-12">
          <div className="flex-1 flex justify-center">
            <div className="relative w-[600px] h-[600px]">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 glass rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow z-30">
                <Image
                  src="/images/logo.png"
                  width={200}
                  height={200}
                  alt="History logo"
                />
              </div>

              {selectedMilestone && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {(() => {
                    const selectedPosition = positions.find(
                      (pos) => pos.milestone.year === selectedMilestone.year
                    );
                    if (!selectedPosition) return null;

                    return (
                      <div
                        className="absolute h-1 bg-gradient-to-r from-cyan-400/80 via-blue-400/60 to-transparent origin-left transition-all duration-700 ease-out shadow-lg"
                        style={{
                          width: `${selectedPosition.lineWidth}px`,
                          transform: `rotate(${selectedPosition.lineAngle}deg) translateX(40px)`,
                          boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
                        }}
                      />
                    );
                  })()}
                </div>
              )}

              {positions.map((position) => {
                const { milestone, x, y, index } = position;
                const isSelected = selectedMilestone.year === milestone.year;

                return (
                  <button
                    key={milestone.year}
                    onClick={() => handleMilestoneClick(milestone)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 hover:scale-125 group ${
                      isSelected ? "scale-125 z-20" : "hover:z-10"
                    }`}
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                  >
                    <div className="relative">
                      <div
                        className={`w-18 h-18 rounded-full border-3 overflow-hidden transition-all duration-500 relative cursor-pointer ${
                          isSelected
                            ? "border-cyan-400 shadow-2xl shadow-cyan-400/50 ring-4 ring-cyan-400/30"
                            : "border-white/60 hover:border-cyan-300 shadow-xl hover:shadow-cyan-300/30"
                        }`}
                      >
                        <img
                          src={
                            milestone.image ||
                            "/placeholder.svg?height=72&width=72"
                          }
                          alt={milestone.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {isSelected && (
                          <div className="absolute inset-0 shimmer"></div>
                        )}
                      </div>

                      <div
                        className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-500 ${
                          isSelected
                            ? "glass text-white shadow-lg"
                            : "bg-white/20 text-white/90 backdrop-blur-sm hover:bg-white/30"
                        }`}
                      >
                        {milestone.year}
                      </div>

                      {isSelected && milestone.category && (
                        <div className="absolute w-24 -top-6 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs rounded-[2px] font-medium shadow-lg animate-float">
                          {milestone.category}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="w-96">
            <div className="text-white text-sm mb-6 flex items-center gap-3 font-medium">
              Цаг хугацааны дугуй аялал 1993 - 2025 он
            </div>

            <Card className="glass-dark p-8 shadow-2xl border border-white/20 backdrop-blur-xl rounded-[2px]">
              <div className="flex items-start gap-6 mb-6">
                <div
                  className="relative cursor-pointer"
                  onClick={() => setModalImage(selectedMilestone.image)}
                >
                  <img
                    src={selectedMilestone.image}
                    alt={selectedMilestone.title}
                    className="w-25 h-26 object-cover shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-black mb-2 tracking-tight">
                    {selectedMilestone.year}
                  </h2>
                  <h3 className="text-md font-semibold text-[#152b4c] mb-3 leading-tight">
                    {selectedMilestone.title}
                  </h3>
                  {selectedMilestone.category && (
                    <span className="inline-block px-3 py-1 rounded-[2px] bg-gradient-to-r bg-[#152b4c] text-white text-xs font-medium shadow-md">
                      {selectedMilestone.category}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-[#152b4c] text-sm leading-relaxed mb-8 font-light">
                {selectedMilestone.description}
              </p>

              <div className="flex justify-between">
                <Button
                  onClick={handlePrevious}
                  className="
      w-[130px] 
      bg-gray-300 
      text-[#152b4c] 
      font-medium 
      flex items-center justify-center 
      gap-2 
      transition-all 
      duration-300 
      hover:bg-gray-400
      hover:translate-x-[-3px]
      shadow-sm
      rounded-[2px]
    "
                >
                  <ChevronLeft />
                  Өмнөх
                </Button>

                <Button
                  onClick={handleNext}
                  className="
      w-[130px] 
      bg-cyan-500 
      text-white 
      font-medium 
      flex items-center justify-center 
      gap-2
      transition-all 
      duration-300 
      hover:bg-blue-500
      hover:translate-x-[3px]
      shadow-sm
      rounded-[2px]
    "
                >
                  Дараагийх
                  <ChevronRight />
                </Button>
              </div>
            </Card>
            {modalImage && (
              <div
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                onClick={() => setModalImage(null)}
              >
                <div className="relative max-w-3xl w-full p-4">
                  <X
                    className="absolute top-6 right-6 w-8 h-8 text-white cursor-pointer"
                    onClick={() => setModalImage(null)}
                  />
                  <img
                    src={modalImage}
                    alt="Modal"
                    className="w-full h-auto shadow-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
