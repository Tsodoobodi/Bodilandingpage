"use client";

import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { ChevronDown, ChevronRight, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NAV_LEFT = [
  { label: "Нүүр хуудас", href: "/" },
  {
    label: "Бидний тухай",
    dropdown: true,
    href: "/about",
    subItems: [
      { label: "Эрхэм зорилго", href: "/about" },
      { label: "Үнэт зүйл", href: "/about" },
      { label: "Түүхэн замнал", href: "/about" },
      { label: "Бизнесийн салбарууд", href: "/" },
      { label: "Удирдлагууд", href: "/" },
      { label: "Бидний бахархал", href: "/" },
    ],
  },
  { label: "Бүтээн байгуулалт", href: "/construction" },
  {
    label: "Мэдээ",
    dropdown: true,
    href: "/news",
    subItems: [
      { label: "Шинэ мэдээ", href: "/" },
      { label: "Видео мэдээ", href: "/" },
    ],
  },
];

const NAV_RIGHT = [
  {
    label: "R&D",
    dropdown: true,
    href: "/rd",
    subItems: [
      { label: "Танилцуулга", href: "/" },
      { label: "Хамтын ажиллагаа", href: "/" },
      { label: "Судалгаа нийтлэл", href: "/" },
    ],
  },
  { label: "БОНЗ", href: "/bonz" },
  {
    label: "Хүний нөөц",
    dropdown: true,
    href: "/hr",
    subItems: [
      { label: "Why Bodi Group?", href: "/" },
      { label: "Vacancies", href: "/" },
    ],
  },
];

const FlagEN = () => (
  <Image src="/icons/en.png" alt="EN" width={32} height={32} />
);

const FlagMN = () => (
  <Image src="/icons/mn.png" alt="MN" width={36} height={36} />
);

function NavItem({ label, href, mobile = false, onClick }: any) {
  return (
    <Link href={href} onClick={onClick} className="block">
      <div className="flex flex-col items-start group cursor-pointer relative w-[150px]">
        <span className="block h-[2px] w-full bg-white/50" />
        {!mobile && (
          <span className="absolute top-0 left-1/2 h-[2px] w-0 bg-[#0C72BA] transition-all duration-500 ease-in-out origin-center group-hover:w-full group-hover:left-0" />
        )}
        <p className="mt-2 text-white relative z-10 transition-colors duration-300 ">
          {label}
        </p>
      </div>
    </Link>
  );
}

function NavDropdown({
  label,
  href,
  mobile = false,
  subItems = [],
  onClick,
}: any) {
  const [open, setOpen] = useState(false);

  if (mobile) {
    return (
      <div className="w-full">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex justify-between items-center w-full px-2 py-2 bg-black/30 rounded-md"
        >
          <span>{label}</span>
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <div className="pl-4 flex flex-col gap-2 mt-2">
            {subItems.map((item: any) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-2 py-1 text-white bg-black/20 hover:bg-[#0C72BA] transition-colors rounded"
                onClick={onClick}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop хэвээр үлдэнэ
  return (
    <div className="relative group w-[150px]">
      <Link href={href} onClick={onClick} className="block">
        <div className="flex flex-col items-start cursor-pointer relative">
          <span className="block h-[2px] w-full bg-white/50" />
          {!mobile && (
            <span className="absolute top-0 left-1/2 h-[2px] w-0 bg-[#0C72BA] transition-all duration-500 ease-in-out origin-center group-hover:w-full group-hover:left-0" />
          )}
          <div className="flex justify-between items-center mt-2 text-white w-full">
            <p>{label}</p>
            <ChevronRight
              size={16}
              className="transform transition-transform duration-300 ease-in-out group-hover:rotate-90"
            />
          </div>
        </div>
      </Link>

      {subItems.length > 0 && !mobile && (
        <div className="absolute top-full left-0 mt-4 w-[223px] bg-[#D9D9D9]/57 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 overflow-hidden">
          {subItems.map((item: any, index: number) => (
            <div key={item.label} className="relative">
              <Link
                href={item.href}
                className={`block px-4 py-2 text-white hover:bg-[#152b4c] transition-all duration-200 ease-out transform translate-y-2 opacity-0
                  group-hover:translate-y-0 group-hover:opacity-100`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                {item.label}
              </Link>
              {index !== subItems.length - 1 && (
                <span className="absolute bottom-0 left-0 w-[172px] h-[1px] bg-white/50 ml-[15px]"></span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "mn">("en");
  const [animating, setAnimating] = useState(false);

  const handleSwitch = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setLang((prev) => (prev === "en" ? "mn" : "en"));
      setAnimating(false);
    }, 250);
  };

  return (
    <header className="relative z-10 w-full">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center h-16 md:h-20 px-4 md:px-6">
        <Link href="/" aria-label="Home">
          <Image
            src="/images/logowhite.png"
            width={160}
            height={40}
            alt="Logo"
            priority
          />
        </Link>
        <div className="hidden md:flex gap-4 lg:gap-6 items-center">
          <div className="relative w-[200px] lg:w-[260px]">
            <input
              aria-label="Search"
              className="w-full bg-black/30 rounded-3xl text-white placeholder-white/70 pl-4 pr-10 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
              placeholder="Хайх..."
              type="text"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white">
              <Search />
            </span>
          </div>
          <button
            type="button"
            className="relative flex items-center rounded-3xl justify-center bg-black/30 select-none ring-1 ring-white/20 cursor-pointer"
            style={{ minWidth: 78, minHeight: 40 }}
            onClick={handleSwitch}
          >
            <span
              className={`absolute left-1 top-1 transition-all duration-200 ease-in-out ${
                lang === "en" && !animating
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-75 z-0 pointer-events-none"
              }`}
              style={{ width: 36, height: 36 }}
              aria-hidden={lang !== "en"}
            >
              <FlagEN />
            </span>
            <span
              className={`absolute right-0.5 top-0.5 transition-all duration-200 ease-in-out ${
                lang === "mn" && !animating
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-75 z-0 pointer-events-none"
              }`}
              style={{ width: 36, height: 36 }}
              aria-hidden={lang !== "mn"}
            >
              <FlagMN />
            </span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <nav className="hidden md:flex max-w-screen-2xl mx-auto justify-between mt-3 px-4 md:px-6 text-white">
        <div className="flex gap-6 lg:gap-10">
          {NAV_LEFT.map((item) =>
            item.dropdown ? (
              <NavDropdown key={item.label} {...item} />
            ) : (
              <NavItem key={item.label} {...item} />
            )
          )}
        </div>
        <div className="flex gap-6 lg:gap-10">
          {NAV_RIGHT.map((item) =>
            item.dropdown ? (
              <NavDropdown key={item.label} {...item} />
            ) : (
              <NavItem key={item.label} {...item} />
            )
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-md px-4 py-4 text-white space-y-6">
          <div className="flex gap-3 items-center">
            <Input className="flex-1 text-black" placeholder="Хайх..." />
            <Switch />
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[...NAV_LEFT, ...NAV_RIGHT].map((item) =>
              item.dropdown ? (
                <NavDropdown key={item.label} {...item} mobile />
              ) : (
                <NavItem key={item.label} {...item} mobile />
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
