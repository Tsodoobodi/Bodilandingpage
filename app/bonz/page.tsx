"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TABS = [
  {
    id: "environment",
    label: "Байгаль орчин",
    color: "bg-[#53c823]",
  },
  {
    id: "health",
    label: "Эрүүл мэнд",
    color: "bg-[#48a432]",
  },
  {
    id: "education",
    label: "Боловсрол",
    color: "bg-[#ce1026]",
  },
  {
    id: "others",
    label: "Бүс нутгийн хөгжил",
    color: "bg-[#2A919D]",
  },
] as const;

const CARDS = {
  environment: Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: `Зэрлэг амьтдыг хамгаалах ${i + 1}`,
    description: "Энэ бол Байгаль орчны төслийн тайлбар хэсэг.",
    image: "/images/bg1.png",
    date: "2025/08/05",
  })),
  health: Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    title: `Эрүүл мэндийн төсөл ${i + 1}`,
    description: "Эрүүл мэндийг дэмжих төсөл, аянуудын мэдээлэл.",
    image: "/images/train.png",
    date: "2025/08/05",
  })),
  education: Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title: `Боловсролын санаачилга ${i + 1}`,
    description: "Хүүхэд, залуучуудын боловсролын төслийн тайлбар.",
    image: "/images/build.png",
    date: "2025/08/05",
  })),
  others: Array.from({ length: 3 }, (_, i) => ({
    id: i + 1,
    title: `Бусад нийгмийн ажил ${i + 1}`,
    description: "Бусад ангиллын төслийн товч танилцуулга.",
    image: "/images/buuruljuut.png",
    date: "2025/08/05",
  })),
};

export default function CSRSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof CARDS>("environment");
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const activeCards = CARDS[activeTab];
  const totalPages = Math.ceil(activeCards.length / itemsPerPage);
  const paginatedCards = activeCards.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Title */}
      <div className="flex items-center gap-[15px] mt-[54px]">
        <Image width={40} height={40} src="/images/logo.png" alt="About Us" />
        <h1 className="text-3xl font-bold text-center text-[#152b4c]">
          Нийгмийн хариуцлага
        </h1>
      </div>

      <p className="mt-[33px]">
        Бид улс орны эдийн засгийн өсөлт, нийгмийн хөгжилд дорвитой хувь нэмэр
        оруулахын зэрэгцээ нийгэмд чиглэсэн үйлсийг бодитоор хэрэгжүүлэх тэр
        дундаа боловсролын чанар, хүртээмжийг сайжруулах, спорт хөгжлийг дэмжих,
        байгаль хамгаалал зэрэгт онцгой анхаарал хандуулж хүн, нийгэм, хүрээлэн
        буй орчинд ээлтэй үйл ажиллагаа явуулахыг эрхэмлэн ажиллаж байна.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 border-b mb-8 mt-[40px]">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setPage(1);
            }}
            className={cn(
              "px-4 py-2 font-medium relative transition-all duration-200 cursor-pointer border-b-2",
              activeTab === tab.id
                ? tab.id === "environment"
                  ? "text-[#53c823] border-[#53c823]"
                  : tab.id === "health"
                  ? "text-[#48a432] border-[#48a432]"
                  : tab.id === "education"
                  ? "text-[#ce1026] border-[#ce1026]"
                  : "text-[#2A919D] border-[#2A919D]"
                : "text-gray-600 border-transparent hover:opacity-80"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedCards.map((card) => (
          <div
            key={card.id}
            className={cn(
              "bg-white shadow-md hover:shadow-xl transition overflow-hidden border border-gray-200 cursor-pointer group duration-300 ease-in-out relative",
              "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:transition-all after:duration-300",
              activeTab === "environment" &&
                "hover:after:h-1 hover:after:bg-[#53c823]",
              activeTab === "health" &&
                "hover:after:h-1 hover:after:bg-[#48a432]",
              activeTab === "education" &&
                "hover:after:h-1 hover:after:bg-[#ce1026]",
              activeTab === "others" &&
                "hover:after:h-1 hover:after:bg-[#2A919D]"
            )}
          >
            {/* Image */}
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                {card.description}
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-blue-500 text-sm">{card.date}</span>
                <Button
                  variant="outline"
                  className="cursor-pointer rounded-none border-none shadow-none"
                >
                  Дэлгэрэнгүй
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (page > 1) setPage(page - 1);
                }}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }).map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  isActive={page === i + 1}
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(i + 1);
                  }}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (page < totalPages) setPage(page + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
