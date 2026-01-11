export default function Footer() {
  return (
    <footer className="relative z-20 w-full bg-white border-t border-gray-100">
      <div className="max-w-screen-3xl mx-auto px-24 py-8">
        <div className="flex justify-between items-center">
          {/* 왼쪽: 로고 및 설명 */}
          <div className="max-w-md">
            <h3 className="text-xl font-bold text-gray-400 mb-2">AIGO</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              AIGO는 사용자의 목적과 상황에 맞는 최적의 AI 도구를<br />
              찾아주고 비교해주는 마지막 지점 플랫폼입니다.
            </p>
          </div>

          {/* 중간: 링크들 */}
          <div className="flex gap-8">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              서비스 소개
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              이용약관
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              개인정보처리방침
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              문의하기
            </a>
          </div>

          {/* 오른쪽: 저작권 */}
          <div>
            <p className="text-xs text-gray-400">
              © 2024 AIGO. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}