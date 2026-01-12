export default function AiRecommendResult() {
  return (
    <section className="px-6 pt-10 pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            AI 조합 추천
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            입력하신 조건에 따른 AI 조합을 추천합니다.
          </p>
        </div>

        {/* 입력하신 조건 */}
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-b from-[#FAF5FF] to-[#EFF6FF] px-6 py-5 mt-10">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-violet-700 text-[11px] font-bold">
              ✓
            </span>
            <p className="text-sm font-semibold text-gray-900">입력하신 조건</p>
          </div>
          <p className="mt-5 text-sm text-gray-700">
            신제품 런칭을 위한 SNS 콘텐츠
          </p>
        </div>

        {/* 조건 분석 결과 */}
        <div className="mt-5 rounded-2xl border border-gray-200 bg-white">
          <div className="px-6 py-5">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-bold">
                ✓
              </span>
              <p className="text-sm font-semibold text-gray-900">
                조건 분석 결과
              </p>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              AI가 입력 내용을 분석했습니다.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* 목적 */}
              <div className="rounded-xl bg-[#F9FAFB] px-4 py-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-gray-500">목적</p>
                  <span className="rounded-md bg-[#DCFCE7] px-2 py-1 text-[11px] font-medium text-[#008236] ">
                    완료
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-gray-900">
                  마케팅 콘텐츠 생성
                </p>
              </div>

              {/* 출력 형식 */}
              <div className="rounded-xl bg-[#F9FAFB] px-4 py-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-gray-500">출력 형식</p>
                  <span className="rounded-md bg-[#DCFCE7] px-2 py-1 text-[11px] font-medium text-[#008236] ">
                    완료
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-gray-900">
                  텍스트 + 이미지
                </p>
              </div>

              {/* 예산 */}
              <div className="rounded-xl bg-[#F9FAFB] px-4 py-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-gray-500">예산</p>
                  <span className="rounded-md bg-gray-100 px-2 py-1 text-[11px] font-medium text-gray-600">
                    선택
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-gray-900">
                  미지정
                </p>
              </div>

              {/* 팀 규모 */}
              <div className="rounded-xl bg-[#F9FAFB] px-4 py-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-gray-500">팀 규모</p>
                  <span className="rounded-md bg-gray-100 px-2 py-1 text-[11px] font-medium text-gray-600">
                    선택
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-gray-900">
                  미지정
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
