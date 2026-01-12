"use client";
import { useRouter } from "next/navigation";

export default function AiTool() {
  const router = useRouter();
  return (
    <section className="px-6 pb-10 my-20">
      <div className="mx-auto">
        {/* 헤더 라인 */}
        <div className="flex items-center justify-between gap-4 mx-auto max-w-6xl">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              추천 AI 도구
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              총 4개의 도구를 추천합니다.
            </p>
          </div>

          <button
            type="button"
            onClick={() => router.push("/compare")}
            className="inline-flex h-10 w-50 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#9810FA] to-[#155DFC] px-8 text-sm font-medium text-white shadow-sm hover:opacity-95 hover:cursor-pointer active:opacity-90"
          >
            <span aria-hidden>✨</span>
            지금 비교하기
          </button>
        </div>

        {/* 카드 4개 */}
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mx-auto max-w-[1400px]">
          {/* 1) ChatGPT */}
          <div className="rounded-2xl border border-[#E9D4FF] bg-white p-5 flex flex-col min-h-[180px]">
            {/* 상단 라벨 */}
            <div className="flex items-start justify-between">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-b from-[#9810FA] to-[#155DFC] text-[11px] font-bold text-white">
                1
              </div>
              <span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] font-semibold text-gray-600">
                부분유료
              </span>
            </div>

            {/* 타이틀 */}
            <div className="mt-4 flex items-center gap-2">
              <span className="text-lg leading-none">🤖</span>
              <p className="text-sm font-extrabold text-gray-900">ChatGPT</p>
            </div>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              대화형 AI로 글쓰기, 분석, 코딩 등 다양한 작업 수행
            </p>

            <p className="mt-8 text-[11px] font-semibold text-gray-500">
              주요 강점
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="rounded-full bg-white px-2 py-1 text-[10px] font-medium text-gray-700 ring-1 ring-gray-200">
                자연스러운 대화
              </span>
              <span className="rounded-full bg-white px-2 py-1 text-[10px] font-medium text-gray-700 ring-1 ring-gray-200">
                다양한 주제 커버
              </span>
              <span className="rounded-full bg-white px-2 py-1 text-[10px] font-medium text-gray-700 ring-1 ring-gray-200">
                코드 생성
              </span>
            </div>

            <button
              type="button"
              className="mt-auto pt-5 text-left text-xs font-semibold text-[#9810FA] hover:underline hover:cursor-pointer"
            >
              바로가기 &gt;
            </button>
          </div>

          {/* 2) Claude */}
          <div className="rounded-2xl border border-[#E9D4FF] bg-white p-5 flex flex-col min-h-[180px]">
            <div className="flex items-start justify-between">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-b from-[#9810FA] to-[#155DFC] text-[11px] font-bold text-white">
                2
              </div>
              <span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] font-semibold text-gray-600">
                부분유료
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <span className="text-lg leading-none">🧠</span>
              <p className="text-sm font-extrabold text-gray-900">Claude</p>
            </div>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              긴 문서 분석과 안전한 대화에 특화된 AI
            </p>

            <p className="mt-8 text-[11px] font-semibold text-gray-500">
              주요 강점
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="rounded-full bg-white px-2 py-1 text-[10px] font-medium text-gray-700 ring-1 ring-gray-200">
                긴 문서 처리
              </span>
              <span className="rounded-full bg-white px-2 py-1 text-[10px] font-medium text-gray-700 ring-1 ring-gray-200">
                윤리적 답변
              </span>
              <span className="rounded-full bg-white px-2 py-1 text-[10px] font-medium text-gray-700 ring-1 ring-gray-200">
                코드 분석
              </span>
            </div>

            <button
              type="button"
              className="mt-auto pt-3 text-left text-xs font-semibold text-[#9810FA] hover:underline  hover:cursor-pointer"
            >
              바로가기 &gt;
            </button>
          </div>

          {/* 3) DALL·E 3 */}
          <div className="rounded-2xl border border-[#E9D4FF] bg-white p-5 flex flex-col min-h-[180px]">
            <div className="flex items-start justify-between">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-b from-[#9810FA] to-[#155DFC] text-[11px] font-bold text-white">
                3
              </div>
              <span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] font-semibold text-gray-600">
                유료
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <span className="text-lg leading-none">🖼️</span>
              <p className="text-sm font-extrabold text-gray-900">DALL·E 3</p>
            </div>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              OpenAI의 이미지 생성 AI
            </p>

            <p className="mt-8 text-[11px] font-semibold text-gray-500">
              주요 강점
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="rounded-full bg-white px-2 py-1 text-[10px] font-medium text-gray-700 ring-1 ring-gray-200">
                정확한 프롬프트 이해
              </span>
              <span className="rounded-full bg-white px-2 py-1 text-[10px] font-medium text-gray-700 ring-1 ring-gray-200">
                ChatGPT 통합
              </span>
            </div>

            <button
              type="button"
              className="mt-auto pt-3 text-left text-xs font-semibold text-[#9810FA] hover:underline  hover:cursor-pointer"
            >
              바로가기 &gt;
            </button>
          </div>

          {/* 4) Notion AI */}
          <div className="rounded-2xl border border-[#E9D4FF] bg-white p-5 flex flex-col min-h-[180px]">
            <div className="flex items-start justify-between">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-b from-[#9810FA] to-[#155DFC] text-[11px] font-bold text-white">
                4
              </div>
              <span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] font-semibold text-gray-600">
                유료
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <span className="text-lg leading-none">📝</span>
              <p className="text-sm font-extrabold text-gray-900">Notion AI</p>
            </div>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              노션 통합 AI 글쓰기 도우미
            </p>

            <p className="mt-8 text-[11px] font-semibold text-gray-500">
              주요 강점
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="rounded-full bg-white px-2 py-1 text-[10px] font-medium text-gray-700 ring-1 ring-gray-200">
                문서 작성
              </span>
              <span className="rounded-full bg-white px-2 py-1 text-[10px] font-medium text-gray-700 ring-1 ring-gray-200">
                요약
              </span>
              <span className="rounded-full bg-white px-2 py-1 text-[10px] font-medium text-gray-700 ring-1 ring-gray-200">
                번역
              </span>
            </div>

            <button
              type="button"
              className="mt-auto pt-3 text-left text-xs font-semibold text-[#9810FA] hover:underline hover:cursor-pointer"
            >
              바로가기 &gt;
            </button>
          </div>
        </div>

        {/* 추천 워크플로우 박스 */}
        <div className="mt-15 rounded-2xl border border-violet-200/60 bg-gradient-to-r from-[#EFF6FF] to-[#FAF5FF] px-6 py-5 mx-auto max-w-6xl">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-violet-100 text-violet-700 text-xs font-bold">
                ↗
              </span>
              <p className="text-sm font-semibold text-gray-900">
                추천 워크플로우
              </p>
            </div>
            <div>
              <p className="mt-1 text-xs text-gray-500">
                여러 도구를 조합하여 더 나은 결과를 만드세요
              </p>
              <p className="mt-2 text-sm text-gray-600">
                ChatGPT로 아이디어를 브레인스토밍하고, Claude로 전략을 수립한
                뒤, DALL·E로 비주얼을 생성하고, Notion AI로 최종 문서화하세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
