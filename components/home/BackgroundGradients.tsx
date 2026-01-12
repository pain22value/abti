// components/home/BackgroundGradients.tsx
export default function BackgroundGradients() {
  return (
    <>
      {/* 왼쪽 위 그라디언트 */}
      <div className="absolute top-[10%] left-[22%] pointer-events-none">
        <svg width="596" height="525" viewBox="0 0 596 525" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3" filter="url(#filter0_f_204_947)">
            <rect width="258.917" height="243.529" transform="translate(306.651 404.711) rotate(-136.128)" fill="url(#paint0_linear_204_947)"/>
          </g>
          <defs>
            <filter id="filter0_f_204_947" x="0" y="-70.2891" width="595.428" height="595" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_204_947"/>
            </filter>
            <linearGradient id="paint0_linear_204_947" x1="129.458" y1="0" x2="129.458" y2="243.529" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4E47FF"/>
              <stop offset="0.5" stopColor="#A855F7"/>
              <stop offset="1" stopColor="#EC4899"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 오른쪽 아래 그라디언트 */}
      <div className="absolute bottom-[23%] right-[26%] pointer-events-none">
        <svg width="510" height="400" viewBox="0 0 510 498" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.25" filter="url(#filter0_f_204_962)">
            <rect width="307.282" height="297.558" transform="translate(409.671 397.548) rotate(179.538)" fill="url(#paint0_linear_204_962)"/>
          </g>
          <defs>
            <filter id="filter0_f_204_962" x="0" y="0" width="509.671" height="500.025" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_204_962"/>
            </filter>
            <linearGradient id="paint0_linear_204_962" x1="153.641" y1="0" x2="153.641" y2="297.558" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366F1"/>
              <stop offset="1" stopColor="#0EA5E9"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 회전하는 점선 원 - 큰 원 */}
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[600px] h-[600px] animate-spin-slow">
          <svg className="w-full h-full" viewBox="0 0 600 600">
            <circle
              cx="300"
              cy="300"
              r="295"
              fill="none"
              stroke="rgba(87, 54, 245, 0.2)"
              strokeWidth="2"
              strokeDasharray="6 15"
            />
          </svg>
        </div>
      </div>

      {/* 회전하는 점선 원 - 중간 원 */}
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[450px] h-[450px] animate-spin-reverse">
          <svg className="w-full h-full" viewBox="0 0 450 450">
            <circle
              cx="225"
              cy="225"
              r="220"
              fill="none"
              stroke="rgba(168, 85, 247, 0.15)"
              strokeWidth="2"
              strokeDasharray="5 12.5"
            />
          </svg>
        </div>
      </div>

      {/* 떠다니는 물방울들 - 왼쪽 물방울 위로 조정 */}
      <div className="absolute top-[30%] left-[40%] w-2 h-2 rounded-full glow-bubble-purple animate-float-bubble-1"></div>
      <div className="absolute top-[40%] right-[38%] w-3 h-3 rounded-full glow-bubble-purple animate-float-bubble-2"></div>
      <div className="absolute bottom-[45%] left-[42%] w-2.5 h-2.5 rounded-full glow-bubble-indigo animate-float-bubble-3"></div>
      <div className="absolute bottom-[45%] right-[42%] w-1.5 h-1.5 rounded-full glow-bubble-purple animate-float-bubble-4"></div>
      <div className="absolute top-[45%] left-[38%] w-2 h-2 rounded-full glow-bubble-pink animate-float-bubble-5"></div>
      <div className="absolute top-[55%] right-[40%] w-2.5 h-2.5 rounded-full glow-bubble-indigo animate-float-bubble-6"></div>
      
      {/* 추가 물방울 6개 - 왼쪽 물방울 위로 조정 */}
      <div className="absolute top-[30%] right-[45%] w-1.5 h-1.5 rounded-full glow-bubble-indigo animate-float-bubble-1"></div>
      <div className="absolute top-[43%] left-[35%] w-2.5 h-2.5 rounded-full glow-bubble-pink animate-float-bubble-2"></div>
      <div className="absolute bottom-[35%] right-[37%] w-2 h-2 rounded-full glow-bubble-purple animate-float-bubble-3"></div>
      <div className="absolute top-[55%] left-[45%] w-3 h-3 rounded-full glow-bubble-indigo animate-float-bubble-4"></div>
      <div className="absolute bottom-[55%] left-[37%] w-1.5 h-1.5 rounded-full glow-bubble-pink animate-float-bubble-5"></div>
      <div className="absolute top-[42%] right-[35%] w-2 h-2 rounded-full glow-bubble-purple animate-float-bubble-6"></div>
    </>
  );
}