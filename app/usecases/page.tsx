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

  // 카테고리별 스타일 함수
  const getCategoryStyle = (category: string) => {
    switch (category) {
      case '초급':
        return 'bg-[#DCFCE7] text-[#016630]';
      case '중급':
        return 'bg-[#FEF9C2] text-[#894B00]';
      case '고급':
        return 'bg-[#FFE2E2] text-[#9F0712]';
      default:
        return 'bg-[#DBEAFE] text-[#193CB8]';
    }
  };

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
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategories.includes(category)
                    ? 'bg-main-600 text-[#FFFFFF]'
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
                  {/* 카테고리 태그 - 색상 적용 */}
                  <div className="flex gap-2 mb-3">
                    {useCase.category.map((cat, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs rounded-full font-medium ${getCategoryStyle(cat)}`}
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
                  <button className="w-full py-3 bg-[#4E47FF]/10 text-[#5736F5] rounded-lg hover:opacity-90 transition-opacity mt-auto flex items-center justify-center gap-2 cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.66699 9.33328C2.54083 9.33371 2.41714 9.29834 2.31029 9.23127C2.20344 9.1642 2.11781 9.06818 2.06335 8.95438C2.0089 8.84059 1.98785 8.71367 2.00265 8.58839C2.01746 8.4631 2.06751 8.34459 2.14699 8.24661L8.74699 1.44661C8.7965 1.38947 8.86396 1.35085 8.93831 1.3371C9.01266 1.32335 9.08947 1.33529 9.15614 1.37095C9.22281 1.40661 9.27538 1.46388 9.30521 1.53335C9.33504 1.60283 9.34037 1.68038 9.32032 1.75328L8.04032 5.76661C8.00258 5.86763 7.9899 5.97629 8.00338 6.08328C8.01686 6.19028 8.05609 6.2924 8.11771 6.3809C8.17933 6.46939 8.2615 6.54162 8.35717 6.59139C8.45284 6.64115 8.55915 6.66696 8.66699 6.66661H13.3337C13.4598 6.66618 13.5835 6.70156 13.6904 6.76863C13.7972 6.8357 13.8828 6.93171 13.9373 7.04551C13.9917 7.15931 14.0128 7.28622 13.998 7.41151C13.9832 7.53679 13.9331 7.65531 13.8537 7.75328L7.25365 14.5533C7.20415 14.6104 7.13668 14.649 7.06233 14.6628C6.98798 14.6765 6.91117 14.6646 6.8445 14.6289C6.77783 14.5933 6.72526 14.536 6.69543 14.4665C6.6656 14.3971 6.66027 14.3195 6.68032 14.2466L7.96032 10.2333C7.99806 10.1323 8.01074 10.0236 7.99726 9.91661C7.98378 9.80962 7.94455 9.70749 7.88293 9.619C7.82131 9.5305 7.73914 9.45827 7.64347 9.40851C7.5478 9.35874 7.44149 9.33293 7.33365 9.33328H2.66699Z" stroke="#5736F5" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
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