"use client";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { useRouter } from "next/navigation";

export default function RecommendPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <section className="px-6 pt-14 pb-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm font-medium text-[var(--color-main-600)] ">
              <span aria-hidden>✨</span>
              AI 추천 시작하기
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            어떤 작업을 하시나요?
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-500">
            목적과 상황을 자유롭게 입력해주세요. AI가 최적의 조합을
            추천해드립니다.
          </p>
        </div>
      </section>
      {/* 카드 폼 영역 */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-gray-200 bg-white ">
            <div className="p-8 md:p-10 md:px-50">
              <div className="space-y-8">
                {/* 작업 입력 */}
                <div>
                  <p className="text-sm font-medium text-gray-900">작업 입력</p>
                  <p className="mt-1 text-sm text-gray-500">
                    목적/목표/상황을 자유롭게 설명해주세요
                  </p>

                  <div className="mt-8">
                    <label className="block text-sm font-medium text-gray-900">
                      작업 설명 <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      placeholder="예: 신제품 런칭을 위한 SNS 마케팅 캠페인 콘텐츠를 만들고 싶어요. 인스타그램과 페이스북에 올릴 이미지와 캡션이 필요합니다."
                      className="mt-2 h-44 w-full resize-none rounded-xl bg-[#F9FAFB] px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none ring-0 focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                    />
                  </div>
                </div>

                {/* 예산/팀규모 */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-900">
                      예산
                    </label>
                    <div className="mt-2">
                      <select className="h-11 w-full rounded-xl bg-[#F9FAFB] px-4 text-sm text-gray-700 outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100">
                        <option value="">선택하세요</option>
                        <option value="free">무료(Free) 위주</option>
                        <option value="low">월 1~3만원</option>
                        <option value="mid">월 3~10만원</option>
                        <option value="high">월 10만원 이상</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900">
                      팀 규모
                    </label>
                    <div className="mt-2">
                      <select className="h-11 w-full rounded-xl bg-[#F9FAFB] px-4 text-sm text-gray-700 outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100">
                        <option value="">선택하세요</option>
                        <option value="solo">1인</option>
                        <option value="small">2~5명</option>
                        <option value="mid">6~15명</option>
                        <option value="large">16명 이상</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 제약 조건 */}
                <div>
                  <label className="block text-sm font-medium text-gray-900">
                    제약 조건 (선택)
                  </label>
                  <input
                    type="text"
                    placeholder="예: 한국어만 지원, 오프라인 사용 가능"
                    className="mt-2 h-11 w-full rounded-xl bg-[#F9FAFB] px-4 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                  />
                </div>

                {/* 버튼 */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => router.push("/recommend/result")}
                    className="h-12 w-full rounded-xl bg-gradient-to-r from-[#9810FA] to-[#155DFC] text-sm font-semibold text-white shadow-sm hover:opacity-95 active:opacity-90 hover:cursor-pointer"
                  >
                    ✨ 조건 분석하기
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* (선택) 하단 여백 */}
          <div className="h-10" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
