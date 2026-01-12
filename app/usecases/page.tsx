'use client';

import { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function UseCasesPage() {
  // 선택된 카테고리 상태 관리
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['전체']);
  // 검색어 상태 관리
  const [searchQuery, setSearchQuery] = useState('');

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

  // 카테고리 클릭 핸들러
  const handleCategoryClick = (category: string) => {
    if (category === '전체') {
      setSelectedCategories(['전체']);
    } else {
      setSelectedCategories((prev) => {
        // 전체 제거
        const withoutAll = prev.filter(c => c !== '전체');
        
        // 이미 선택된 카테고리면 제거
        if (withoutAll.includes(category)) {
          const newCategories = withoutAll.filter(c => c !== category);
          // 아무것도 선택 안 되면 전체로
          return newCategories.length === 0 ? ['전체'] : newCategories;
        }
        
        // 새로 추가
        return [...withoutAll, category];
      });
    }
  };

  // 필터링된 유스케이스 (카테고리 + 검색어)
  const filteredUseCases = useCases.filter(useCase => {
    // 카테고리 필터
    const matchesCategory = selectedCategories.includes('전체') || 
      useCase.category.some(cat => selectedCategories.includes(cat));
    
    // 검색어 필터
    const matchesSearch = searchQuery === '' || 
      useCase.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      useCase.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      useCase.promptExample.toLowerCase().includes(searchQuery.toLowerCase()) ||
      useCase.aiCombination.some(ai => ai.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pr-12 border border-line-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#467EFF]"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-[#467EFF] text-white rounded-lg hover:opacity-90">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* 카테고리 필터 */}
          <div className="flex gap-2 mb-10 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategories.includes(category)
                    ? 'bg-[#467EFF] text-[#FFFFFF]'
                    : 'bg-[#F3F4F6] text-[#364153] hover:bg-line-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 검색 결과 개수 표시 */}
          {searchQuery && (
            <p className="text-sm text-subtext-300 mb-4">
              "<span className="font-semibold text-text-900">{searchQuery}</span>" 검색 결과: {filteredUseCases.length}개
            </p>
          )}

          {/* 유스케이스 카드 그리드 */}
          {filteredUseCases.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredUseCases.map((useCase) => (
                <div
                  key={useCase.id}
                  className="border border-line-100 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col"
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
                    <p className="text-xs text-subtext-300 mb-2">사용 AI:</p>
                    <div className="flex gap-2 flex-wrap">
                      {useCase.aiCombination.map((ai, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-purple-50 text-[#8200DB] text-xs rounded-full font-medium"
                        >
                          {ai}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 프롬프트 예시 */}
                  <div className="mb-4">
                    <p className="text-xs text-subtext-300 mb-1">프롬프트 예시</p>
                    <p className="text-sm text-[#1E2939]">
                      {useCase.promptExample}
                    </p>
                  </div>

                  {/* 버튼 - mt-auto로 하단 고정 */}
                  <button className="w-full py-3 bg-[#2B7FFF] text-white rounded-lg hover:opacity-90 transition-opacity mt-auto flex items-center justify-center gap-2">
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.33496 8.66824C1.2088 8.66867 1.08511 8.6333 0.978258 8.56623C0.871406 8.49916 0.785778 8.40314 0.731322 8.28935C0.676866 8.17555 0.655818 8.04863 0.670622 7.92335C0.685426 7.79806 0.735476 7.67955 0.814956 7.58157L7.41496 0.781574C7.46446 0.724428 7.53193 0.685811 7.60628 0.672062C7.68063 0.658313 7.75744 0.670248 7.82411 0.70591C7.89078 0.741571 7.94335 0.798838 7.97318 0.868312C8.00301 0.937786 8.00834 1.01534 7.98829 1.08824L6.70829 5.10157C6.67055 5.20259 6.65787 5.31125 6.67135 5.41825C6.68483 5.52524 6.72406 5.62736 6.78568 5.71586C6.8473 5.80436 6.92947 5.87658 7.02514 5.92635C7.12081 5.97611 7.22712 6.00192 7.33496 6.00157H12.0016C12.1278 6.00114 12.2515 6.03652 12.3583 6.10359C12.4652 6.17066 12.5508 6.26667 12.6053 6.38047C12.6597 6.49427 12.6808 6.62118 12.666 6.74647C12.6512 6.87175 12.6011 6.99027 12.5216 7.08824L5.92162 13.8882C5.87211 13.9454 5.80465 13.984 5.7303 13.9978C5.65595 14.0115 5.57914 13.9996 5.51247 13.9639C5.4458 13.9282 5.39323 13.871 5.3634 13.8015C5.33357 13.732 5.32824 13.6545 5.34829 13.5816L6.62829 9.56824C6.66603 9.46723 6.67871 9.35856 6.66523 9.25157C6.65175 9.14458 6.61252 9.04245 6.5509 8.95396C6.48928 8.86546 6.40711 8.79323 6.31144 8.74347C6.21577 8.6937 6.10946 8.66789 6.00162 8.66824H1.33496Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    이 프롬프트로 비교하기
                  </button>
                </div>
              ))}
            </div>
          ) : (
            // 검색 결과 없을 때
            <div className="text-center py-16">
              <p className="text-subtext-300 text-lg mb-2">검색 결과가 없습니다</p>
              <p className="text-subtext-300 text-sm">다른 검색어나 카테고리를 선택해보세요</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </main>
  );
}