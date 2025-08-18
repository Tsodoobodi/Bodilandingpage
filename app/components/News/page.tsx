import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const newsData = [
  {
    img: "/images/bg1.png",
    title: "Бодь Группийн 2025 оны адал явдалт, спорт аялал зохион байгууллаа",
    description:
      "АДАЛ ЯВДАЛТ, СПОРТ ЯВГАН АЯЛАЛ – 2025 Байгальд хайртай, эрүүл амьдрал, нөхөрлөлийг ...",
    date: "2025/08/05",
    href: "#",
  },
  {
    img: "/images/build.png",
    title: "Бодь Группийн 2025 оны адал явдалт, спорт аялал зохион байгууллаа",
    description:
      "АДАЛ ЯВДАЛТ, СПОРТ ЯВГАН АЯЛАЛ – 2025 Байгальд хайртай, эрүүл амьдрал, нөхөрлөлийг ...",
    date: "2025/08/05",
    href: "#",
  },
  {
    img: "/images/buuruljuut.png",
    title: "Бодь Группийн 2025 оны адал явдалт, спорт аялал зохион байгууллаа",
    description:
      "АДАЛ ЯВДАЛТ, СПОРТ ЯВГАН АЯЛАЛ – 2025 Байгальд хайртай, эрүүл амьдрал, нөхөрлөлийг ...",
    date: "2025/08/05",
    href: "#",
  },
  {
    img: "/images/train.png",
    title: "Бодь Группийн 2025 оны адал явдалт, спорт аялал зохион байгууллаа",
    description:
      "АДАЛ ЯВДАЛТ, СПОРТ ЯВГАН АЯЛАЛ – 2025 Байгальд хайртай, эрүүл амьдрал, нөхөрлөлийг ...",
    date: "2025/08/05",
    href: "#",
  },
];

export default function FeaturedNews() {
  return (
    <section className="max-w-[1420px] mx-auto px-4 md:px-6 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[28px] md:text-2xl font-bold text-[#152b4c] flex items-center gap-2">
          Онцлох мэдээ
        </h2>
        <Link href="#" className="font-medium">
          <Button
            variant="outline"
            className="cursor-pointer rounded-none border-none shadow-none text-[16px] text-[#152b4c]"
          >
            Бүгдийн үзэх
            <ChevronRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
        {newsData.map((news, idx) => (
          <Link
            key={idx}
            href={news.href}
            className="block border overflow-hidden shadow-sm bg-white transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={news.img}
                alt={news.title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
                sizes="(max-width: 768px) 100vw, 100%"
              />
            </div>
            <div className="p-4 flex flex-col gap-2 transition-all duration-500">
              <h3 className="text-sm md:text-base font-semibold text-black line-clamp-2">
                {news.title}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm line-clamp-3">
                {news.description}
              </p>
              <div className="flex justify-between items-center text-xs md:text-sm mt-2">
                <span className="text-[#0C72BA]">{news.date}</span>
                <Button
                  variant="outline"
                  className="cursor-pointer rounded-none border-none shadow-none text-[#152b4c]"
                >
                  Дэлгэрэнгүй <ChevronRight className="w-4 h-8" />
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
