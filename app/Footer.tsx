import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#152b4c] text-white py-16 px-6 sm:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-12 border-b border-gray-700 text-center">
          <img
            src="/images/logowhite.png"
            alt="Bodi Group Logo"
            className="h-12 mb-4"
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-6">
          <div className="lg:w-[331px]">
            <p className="leading-relaxed text-sm">
              Бодь Интернэшнл ХХК нь 1993 онд үндэсний хөрөнгө оруулагчдын
              санаачлагаар үүсгэн байгуулагдсан бөгөөд барилга, дэд бүтэц, уул
              уурхай, банк санхүү, хэвлэл мэдээлэл, хүнс, хөдөө аж ахуй эрэг
              салбаруудад тэргүүлэгч бизнесүүдийн нэгдэл болох Бодь группийн
              тэргүүн компани юм.
            </p>
          </div>

          <div className="lg:w-[216px]">
            <ul className="space-y-4">
              {[
                "Танилцуулга",
                "Удирдлагын баг",
                "Судалгаа хөгжүүлэлт",
                "Тогтвортой хөгжил",
                "Хүний нөөц",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="relative text-gray-300 text-sm font-medium transition-all duration-300 hover:text-white hover:-translate-y-1 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[1px] before:bg-gradient-to-r before:from-white before:to-white before:transition-all before:duration-300 hover:before:w-full"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-[216px]">
            <ul className="space-y-4">
              {[
                "Нээлттэй ажлын байр",
                "Мэдээ",
                "Онлайн брошүр",
                "Лого татах",
                "Төслүүд",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="relative text-gray-300 text-sm font-medium transition-all duration-300 hover:text-white hover:-translate-y-1 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[1px] before:bg-gradient-to-r before:from-white before:to-white before:transition-all before:duration-300 hover:before:w-full"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:w-[245px]">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+976-11315144</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>info@bodigroup.mn</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  Монгол Улс, Улаанбаатар хот, Сүхбаатар дүүрэг, Чингисийн Өргөн
                  Чөлөө, "Парк Плейс" оффис, 7 давхарт.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="card max-sm:mt-[25px]">
          <ul>
            <li className="iso-pro">
              <span></span>
              <span></span>
              <span></span>
              <a href="https://www.facebook.com/bodigroup.mn/" target="_blank">
                <svg
                  className="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
              <div className="text">Facebook</div>
            </li>
            <li className="iso-pro">
              <span></span>
              <span></span>
              <span></span>
              <a href="https://x.com/bodi_group">
                <svg
                  viewBox="0 0 512 512"
                  target="_blank"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
              </a>
              <div className="text">Twitter</div>
            </li>
            <li className="iso-pro">
              <span></span>
              <span></span>
              <span></span>
              <a
                href="https://www.youtube.com/@bodigroupofficial2464"
                target="_blank" // Шинэ таб дээр нээх
                rel="noopener noreferrer" // Аюулгүй байдлын зөвлөмж
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a2.997 2.997 0 0 0-2.112-2.113C19.301 3.5 12 3.5 12 3.5s-7.301 0-9.386.573a2.997 2.997 0 0 0-2.112 2.113A31.676 31.676 0 0 0 0 12a31.676 31.676 0 0 0 .502 5.814 2.997 2.997 0 0 0 2.112 2.113C4.699 20.5 12 20.5 12 20.5s7.301 0 9.386-.573a2.997 2.997 0 0 0 2.112-2.113A31.676 31.676 0 0 0 24 12a31.676 31.676 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
              </a>
              <div className="text">YouTube</div>
            </li>

            <li className="iso-pro">
              <span></span>
              <span></span>
              <span></span>
              <a
                href="https://mn.linkedin.com/company/bodi-group"
                target="_blank"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.036-1.851-3.036-1.851 0-2.136 1.445-2.136 2.938v5.667h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.604 0 4.271 2.372 4.271 5.455v6.286zM5.337 7.433c-1.144 0-2.069-.927-2.069-2.069 0-1.142.925-2.069 2.069-2.069s2.069.927 2.069 2.069c0 1.142-.925 2.069-2.069 2.069zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
                </svg>
              </a>
              <div className="text">LinkedIn</div>
            </li>
            <li className="iso-pro">
              <span></span>
              <span></span>
              <span></span>
              <a
                href="https://www.instagram.com/bodigroup.official/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="svg"
                  fill="currentColor"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
              <div className="text">Instagram</div>
            </li>
          </ul>
        </div>

        <div className="mt-10 border-t border-gray-700">
          <p className="text-gray-400 text-sm text-center mt-8">
            © 2025 "Бодь Интернэшнл" ХХК бүх эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </div>
    </footer>
  );
}
