"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="relative z-20 w-full bg-white/80 backdrop-blur-sm">
      <div className="max-w-screen-3xl mx-auto px-24 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Image src="/logo.png" alt="ABTI Logo" width={120} height={40} />
          </Link>

          <nav className="flex items-center gap-8">
            <Link
              href="/recommend"
              className={`transition-colors ${
                pathname === "/recommend" || pathname === "/recommend/result"
                  ? "text-main-600 font-semibold"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              AI 조합 추천
            </Link>
            <Link
              href="/compare"
              className={`transition-colors ${
                pathname === "/compare"
                  ? "text-main-600 font-semibold"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              AI 비교
            </Link>
            <Link
              href="/usecases"
              className={`transition-colors ${
                pathname === "/usecases"
                  ? "text-main-600 font-semibold"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              유스케이스
            </Link>

            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-semibold">
                D
              </div>
              <span className="text-gray-700 text-sm">daun.friend</span>
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
