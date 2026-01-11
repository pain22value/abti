import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-5xl font-bold text-[#252432] mb-6 leading-tight">
        AI 도구를 찾고 조합하고 비교하는<br />
        가장 확실한 방법
      </h1>
      <p className="text-lg text-[#8987A1] mb-12">
        목적과 제약 조건에 맞는 AI 도구를 추천받고, 동일한 조건에서 직접 비교해보세요.
      </p>
      <Link href="/recommend">
        <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9810FA] to-[#155DFC] hover:opacity-90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl cursor-pointer">
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" 
            />
          </svg>
          목적 기반 추천 시작하기
        </button>
      </Link>
    </div>
  );
}