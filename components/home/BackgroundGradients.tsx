export default function BackgroundGradients() {
  return (
    <>
      {/* 왼쪽 위 그라디언트 - 피그마 원본 */}
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

      {/* 오른쪽 아래 그라디언트 - 피그마 원본 */}
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
    </>
  );
}