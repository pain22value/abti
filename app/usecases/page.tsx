import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function UseCasesPage() {
  // 유스케이스 데이터
  const useCases = [
    {
      id: 1,
      category: ['마케터', '중급'],
      title: '마케팅 캠페인 기획서 작성',
      description: 'ChatGPT로 아이디어 브레인스토밍, Claude로 전략 수립, Notion AI로 최종 문서화',
      aiCombination: ['chatgpt', 'claude', 'notion-ai'],
      promptExample: '"신제품 런칭을 위한 SNS 마케팅 캠페인 아이디어를 제시해주세요"',
    },
    {
      id: 2,
      category: ['디자이너', '초급'],
      title: '제품 상세 페이지 이미지 생성',
      description: 'Midjourney로 다양한 컨셉 생성, DALL-E로 텍스트 포함 이미지 제작',
      aiCombination: ['midjourney', 'dalle'],
      promptExample: '"친환경 물병 제품을 위한 미니멀한 라이프스타일 이미지"',
    },
    {
      id: 3,
      category: ['개발자', '중급'],
      title: 'React 컴포넌트 자동 생성',
      description: 'Cursor로 컴포넌트 구조 생성, Copilot으로 세부 로직 완성',
      aiCombination: ['copilot', 'cursor', 'chatgpt'],
      promptExample: '"사용자 프로필 카드 컴포넌트를 TypeScript와 Tailwind로 만들어주세요"',
    },
    {
      id: 4,
      category: ['PM', '초급'],
      title: '회의록 요약 및 액션 아이템 추출',
      description: 'Claude로 긴 회의록 분석 후 Notion AI로 구조화된 문서 작성',
      aiCombination: ['claude', 'notion-ai'],
      promptExample: '"다음 회의록에서 주요 결정사항과 액션 아이템을 정리해주세요"',
    },
    {
      id: 5,
      category: ['콘텐츠 크리에이터', '고급'],
      title: '제품 소개 영상 제작',
      description: 'ChatGPT로 스크립트 작성, ElevenLabs로 나레이션, Runway로 영상 편집',
      aiCombination: ['runway', 'elevenlabs', 'chatgpt'],
      promptExample: '"AI 생산성 도구를 소개하는 30초 영상 스크립트를 작성해주세요"',
    },
    {
      id: 6,
      category: ['CS 매니저', '초급'],
      title: '고객 문의 자동 응답 시스템',
      description: 'ChatGPT로 응답 템플릿 생성, Gemini로 실시간 정보 확인',
      aiCombination: ['chatgpt', 'gemini'],
      promptExample: '"배송 지연에 대한 고객 문의 응답 템플릿을 작성해주세요"',
    },
    {
      id: 7,
      category: ['데이터 애널리스트', '중급'],
      title: '데이터 분석 보고서 작성',
      description: 'Claude로 데이터 해석, ChatGPT로 인사이트 도출 및 시각화 제안',
      aiCombination: ['claude', 'chatgpt'],
      promptExample: '"월간 사용자 데이터를 분석하고 주요 트렌드를 요약해주세요"',
    },
    {
      id: 8,
      category: ['SNS 매니저', '중급'],
      title: 'SNS 콘텐츠 일괄 생성',
      description: 'ChatGPT로 캡션 작성, DALL-E로 이미지 생성, Notion AI로 일정 관리',
      aiCombination: ['chatgpt', 'dalle', 'notion-ai'],
      promptExample: '"한 주간 인스타그램 피드 콘텐츠 5개를 기획해주세요"',
    },
  ];

  const categories = ['전체', '마케터', '디자이너', '개발자', 'PM', '콘텐츠 크리에이터', 'CS 매니저', '데이터 애널리스트', 'SNS 매니저'];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-8 py-16">
          {/* 제목 */}
          <h1 className="text-4xl font-bold text-text-900 mb-3">
            직군별 검증된 유스케이스
          </h1>
          <p className="text-subtext-300 mb-8">
            실무에서 바로 활용 가능한 AI 활용 사례를 확인하세요
          </p>

          {/* 검색바 */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="원하는 조합의 목적이나 상황을 검색해보세요"
              className="w-full px-4 py-3 pr-12 border border-line-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-main-600"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-main-600 text-white rounded-lg hover:opacity-90">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* 카테고리 필터 */}
          <div className="flex gap-2 mb-10 flex-wrap">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  index === 0
                    ? 'bg-main-600 text-white'
                    : 'bg-box-10 text-subtext-300 hover:bg-line-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 유스케이스 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.id}
                className="border border-line-100 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                {/* 카테고리 태그 */}
                <div className="flex gap-2 mb-3">
                  {useCase.category.map((cat, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-box-10 text-subtext-300 text-xs rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* 제목 */}
                <h3 className="text-xl font-bold text-text-900 mb-2">
                  {useCase.title}
                </h3>

                {/* 설명 */}
                <p className="text-sm text-subtext-300 mb-4">
                  {useCase.description}
                </p>

                {/* 추천 AI 조합 */}
                <div className="mb-4">
                  <p className="text-xs text-subtext-300 mb-2">추천 AI 조합</p>
                  <div className="flex gap-2">
                    {useCase.aiCombination.map((ai, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-50 text-main-600 text-xs rounded-full font-medium"
                      >
                        {ai}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 프롬프트 예시 */}
                <div className="mb-4">
                  <p className="text-xs text-subtext-300 mb-1">프롬프트 예시</p>
                  <p className="text-sm text-text-900 italic">
                    {useCase.promptExample}
                  </p>
                </div>

                {/* 버튼 */}
                <button className="w-full py-3 bg-main-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                  바로 조합으로 이동하기
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </main>
  );
}