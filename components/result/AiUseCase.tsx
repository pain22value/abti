"use client";
import { useRouter } from "next/navigation";

export default function AiUseCase() {
  const router = useRouter();
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl">
        {/* 헤더 */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              관련 유스케이스
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              비슷한 작업을 한 다른 사용자들의 사례를 참고하세요.
            </p>
          </div>

          <button
            type="button"
            onClick={() => router.push("/usecases")}
            className="inline-flex h-10 w-50 items-center justify-center rounded-md bg-gradient-to-r from-[#9810FA] to-[#155DFC]  text-sm font-medium text-white shadow-sm hover:cursor-pointer hover:opacity-95 active:opacity-90"
          >
            유스케이스 더 보러가기
          </button>
        </div>

        {/* 상단 유스케이스 2개 카드 */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* 카드 1 */}
          <div className="rounded-2xl border border-violet-200/70 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <span className="rounded-full bg-gray-100 px-2 py-1 text-[11px] font-semibold text-gray-700">
                마케팅
              </span>
              <span className="rounded-md bg-amber-50 px-2 py-1 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-200">
                중급
              </span>
            </div>

            <h3 className="mt-4 text-base font-bold text-gray-900">
              마케팅 캠페인 기획서 작성
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-6">
              ChatGPT로 아이디어를 브레인스토밍하고, Claude로 전략 수립, Notion
              AI로 최종 정리
            </p>

            <div className="mt-10">
              <p className="text-[12px] font-semibold text-gray-400">
                사용 도구
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-gray-700 ring-1 ring-gray-200">
                  🤖 ChatGPT
                </span>
                <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-gray-700 ring-1 ring-gray-200">
                  🧠 Claude
                </span>
                <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-gray-700 ring-1 ring-gray-200">
                  📝 Notion AI
                </span>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-[12px] font-semibold text-gray-400">
                기대 결과
              </p>
              <p className="mt-1 text-sm text-gray-700">
                타겟 분석, 콘텐츠 전략, 실행 계획이 포함된 캠페인 기획서
              </p>
            </div>

            <button
              type="button"
              className="w-full bg-[#4E47FF1A] rounded-md mt-4 py-2 items-center gap-2 text-sm font-semibold text-[var(--color-main-600)] border border-[#0000001A] hover:cursor-pointer"
            >
              이 케이스로 비교하기 &gt;
            </button>
          </div>

          {/* 카드 2 */}
          <div className="rounded-2xl border border-violet-200/70 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <span className="rounded-full bg-gray-100 px-2 py-1 text-[11px] font-semibold text-gray-700">
                SNS 매니저
              </span>
              <span className="rounded-md bg-amber-50 px-2 py-1 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-200">
                중급
              </span>
            </div>

            <h3 className="mt-4 text-base font-bold text-gray-900">
              SNS 콘텐츠 일괄 생성
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-6">
              ChatGPT로 카피 작성, DALL·E로 이미지 생성, Notion AI로 일정 관리
            </p>

            <div className="mt-10">
              <p className="text-[12px] font-semibold text-gray-400">
                사용 도구
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-gray-700 ring-1 ring-gray-200">
                  🤖 ChatGPT
                </span>
                <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-gray-700 ring-1 ring-gray-200">
                  🖼️ DALL·E 3
                </span>
                <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-gray-700 ring-1 ring-gray-200">
                  📝 Notion AI
                </span>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-[12px] font-semibold text-gray-400">
                기대 결과
              </p>
              <p className="mt-1 text-sm text-gray-700">
                즉시 발행 가능한 캡션 + 이미지 세트
              </p>
            </div>

            <button
              type="button"
              className="w-full bg-[#4E47FF1A] rounded-md mt-4 py-2 items-center gap-2 text-sm font-semibold text-[var(--color-main-600)] border border-[#0000001A] hover:cursor-pointer"
            >
              이 케이스로 비교하기 &gt;
            </button>
          </div>
        </div>

        {/* 하단: 비슷한 상황에서 이렇게 사용했어요 */}
        <div className="mt-10">
          <h3 className="text-md font-bold text-gray-900">
            비슷한 상황에서 이렇게 사용했어요
          </h3>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* 후기 1 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className=" h-10 w-10 rounded-full bg-gray-200" />
                <div className="flex flex-col">
                  <p className="text-sm font-semibold text-gray-900">
                    김OO 마케터
                  </p>
                  <p className="text-sm font-medium text-gray-400">
                    스타트업 3년차
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-800 leading-6">
                “저는 초안은 뤼튼으로 잡고, 다듬는 건 Claude한테 시켜요. 뤼튼이
                한국어 템플릿이 많아서 시작하기 편하더라고요.”
              </p>
            </div>

            {/* 후기 2 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className=" h-10 w-10 rounded-full bg-gray-200" />
                <div className="flex flex-col">
                  <p className="text-sm font-semibold text-gray-900">
                    김OO 마케터
                  </p>
                  <p className="text-sm font-medium text-gray-400">
                    스타트업 3년차
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-800 leading-6">
                “긴 문서 정리는 Claude가 최고였고 최종 산출물은 Notion AI로
                깔끔하게 정리했어요.”
              </p>
            </div>

            {/* 후기 3 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className=" h-10 w-10 rounded-full bg-gray-200" />
                <div className="flex flex-col">
                  <p className="text-sm font-semibold text-gray-900">
                    김OO 마케터
                  </p>
                  <p className="text-sm font-medium text-gray-400">
                    스타트업 3년차
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-800 leading-6">
                “캡션 A/B 테스트 문구 뽑고 바로 이미지까지 만들어서 캠페인
                준비가 쉬웠어요.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
