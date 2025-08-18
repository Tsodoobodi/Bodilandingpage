"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const news = [
  {
    id: 1,
    title:
      "Бодь Группийн 2025 оны адал явдалт, спорт явган аялал зохион байгуулагдлаа",
    desc: "Байгальдаа хайртай, эрүүл амьдралд, нийгэмд үнэтэй хувь нэмэр оруулахыг зорьсон үйл ажиллагаа...",
    date: "2025/08/05",
    image: "/images/bg1.png",
  },
  {
    id: 2,
    title:
      "Бодь Группийн 2025 оны адал явдалт, спорт явган аялал зохион байгуулагдлаа",
    desc: "Байгальдаа хайртай, эрүүл амьдралд, нийгэмд үнэтэй хувь нэмэр оруулахыг зорьсон үйл ажиллагаа...",
    date: "2025/08/05",
    image: "/images/train.png",
  },
  {
    id: 3,
    title:
      "Бодь Группийн 2025 оны адал явдалт, спорт явган аялал зохион байгуулагдлаа",
    desc: "Байгальдаа хайртай, эрүүл амьдралд, нийгэмд үнэтэй хувь нэмэр оруулахыг зорьсон үйл ажиллагаа...",
    date: "2025/08/05",
    image: "/images/build.png",
  },
  {
    id: 4,
    title:
      "Бодь Группийн 2025 оны адал явдалт, спорт явган аялал зохион байгуулагдлаа",
    desc: "Байгальдаа хайртай, эрүүл амьдралд, нийгэмд үнэтэй хувь нэмэр оруулахыг зорьсон үйл ажиллагаа...",
    date: "2025/08/05",
    image: "/images/buuruljuut.png",
  },
  {
    id: 5,
    title:
      "Бодь Группийн 2025 оны адал явдалт, спорт явган аялал зохион байгуулагдлаа",
    desc: "Байгальдаа хайртай, эрүүл амьдралд, нийгэмд үнэтэй хувь нэмэр оруулахыг зорьсон үйл ажиллагаа...",
    date: "2025/08/05",
    image: "/images/bg1.png",
  },
  {
    id: 6,
    title:
      "Бодь Группийн 2025 оны адал явдалт, спорт явган аялал зохион байгуулагдлаа",
    desc: "Байгальдаа хайртай, эрүүл амьдралд, нийгэмд үнэтэй хувь нэмэр оруулахыг зорьсон үйл ажиллагаа...",
    date: "2025/08/05",
    image: "/images/train.png",
  },
];

const PER_PAGE = 6;

export default function NewsPage() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(news.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const end = start + PER_PAGE;
  const currentNews = news.slice(start, end);

  return (
    <div className="max-w-7xl mx-auto p-6 mt-[54px]">
      <div className="flex items-center gap-[15px]">
        <Image width={40} height={40} src="/images/logo.png" alt="About Us" />
        <h1 className="text-3xl font-bold text-center text-[#152b4c]">
          Гадаад харилцаа хамтын ажиллагааны, судалгаа хөгжүүлэлтийн төв
        </h1>
      </div>
      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6 mt-[54px]">
        {currentNews.map((item) => (
          <div
            key={item.id}
            className="border shadow-sm overflow-hidden bg-white cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={400}
              className="w-full h-60 object-cover transition-transform duration-300 hover:scale-[1.05]"
            />
            <div className="p-4 flex flex-col justify-between h-52">
              <h3 className="font-semibold text-lg line-clamp-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">{item.desc}</p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-blue-500 text-sm">{item.date}</span>
                <Button
                  variant="outline"
                  className="cursor-pointer rounded-none border-none shadow-none"
                >
                  Дэлгэрэнгүй <ChevronRight className="w-4 h-8" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage((p) => Math.max(1, p - 1));
                }}
              />
            </PaginationItem>

            {[...Array(totalPages)].map((_, i) => (
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
                  setPage((p) => Math.min(totalPages, p + 1));
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
