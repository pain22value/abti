import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative z-20 w-full bg-white/80 backdrop-blur-sm">
      <div className="max-w-screen-3xl mx-auto px-24 py-4">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="text-2xl font-bold text-gray-900 cursor-pointer hover:opacity-80 transition-opacity">
            AIGO
          </Link>

          {/* 네비게이션 */}
          <nav className="flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              AI 조합 추천
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              AI 비교
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              유스케이스
            </a>
            
            {/* 프로필 */}
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-semibold">
                D
              </div>
              <span className="text-gray-700 text-sm">daun.friend</span>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}