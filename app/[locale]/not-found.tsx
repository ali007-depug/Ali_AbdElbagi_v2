'use client'
import { BiError } from "react-icons/bi";
import { FiHome, FiArrowLeft } from "react-icons/fi";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function NotFound() {
    const t = useTranslations('errorPage');
  return (
    <html lang="en">
      <body>
    <div className="min-h-screen  mt-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 with Icon */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-p-color to-p-color/70 animate-pulse">
            404
          </h1>
        </div>

        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-4 rounded-full animate-pulse">
            <BiError className="text-5xl text-red-500" />
          </div>
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('defaultMsg')}
        </h2>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-s-color to-p-color text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <FiHome className="text-xl group-hover:rotate-12 transition-transform" />
            {t('backToHome')}
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-indigo-300 transform hover:scale-105 transition-all duration-300"
          >
            <FiArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
            {t('back')}
          </button>
        </div>


        {/* Decorative Elements */}
        <div className="mt-8 flex justify-center gap-2">
          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </div>

      </body>
    </html>
  );
}