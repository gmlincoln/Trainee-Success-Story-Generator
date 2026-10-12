import React from 'react';

// 1. Touch & Solve Official Logo SVG Component
export const TouchAndSolveLogo = ({ className = "h-10", variant = "default" }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <svg viewBox="0 0 450 140" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Dot Matrix Icon */}
        <g transform="translate(0, 5)">
          {/* Green Dots */}
          <circle cx="25" cy="55" r="8" fill="#4EB829" />
          {/* Navy Dots Grid */}
          <circle cx="10" cy="30" r="7" fill="#0E385D" />
          <circle cx="28" cy="38" r="7" fill="#0E385D" />
          <circle cx="46" cy="46" r="7" fill="#0E385D" />
          <circle cx="64" cy="54" r="7" fill="#0E385D" />

          <circle cx="8" cy="50" r="7" fill="#0E385D" />
          <circle cx="44" cy="68" r="7" fill="#4EB829" />
          <circle cx="62" cy="76" r="7" fill="#4EB829" />
          <circle cx="80" cy="84" r="7" fill="#0E385D" />

          <circle cx="8" cy="70" r="7" fill="#0E385D" />
          <circle cx="26" cy="78" r="7" fill="#4EB829" />
          <circle cx="60" cy="98" r="7" fill="#4EB829" />
          <circle cx="78" cy="106" r="7" fill="#0E385D" />

          <circle cx="8" cy="90" r="7" fill="#4EB829" />
          <circle cx="26" cy="98" r="7" fill="#0E385D" />
          <circle cx="44" cy="106" r="7" fill="#0E385D" />
          <circle cx="62" cy="114" r="7" fill="#0E385D" />
          <circle cx="80" cy="122" r="7" fill="#0E385D" />

          <circle cx="80" cy="62" r="7" fill="#0E385D" />
          <circle cx="78" cy="40" r="7" fill="#0E385D" />
        </g>
        
        {/* Text: Touch & Solve */}
        <text x="110" y="72" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="900" fontSize="52" fill={variant === 'white' ? '#FFFFFF' : '#0E385D'} letterSpacing="-1">
          Touch &amp; Solve
        </text>
        {/* Tagline: WE SOLVE JUST IN TOUCH */}
        <text x="112" y="106" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="16" fill={variant === 'white' ? '#E2E8F0' : '#64748B'} letterSpacing="6">
          WE SOLVE JUST IN TOUCH
        </text>
      </svg>
    </div>
  );
};

// 2. InfoSystem Technology Ltd Official Logo SVG Component
export const InfoSystemLogo = ({ className = "h-10", variant = "default" }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <svg viewBox="0 0 380 120" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <text x="5" y="68" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="56" fill={variant === 'white' ? '#FFFFFF' : '#0072CE'}>
            info
          </text>
          <text x="5" y="105" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="38" fill={variant === 'white' ? '#F87171' : '#1E293B'} letterSpacing="2">
            SYSTEM
          </text>
          <circle cx="108" cy="22" r="6" fill="#F97316" />
          <circle cx="122" cy="15" r="4.5" fill="#F97316" />
          <circle cx="128" cy="30" r="5" fill="#F97316" />
          <circle cx="138" cy="20" r="3" fill="#F97316" />
        </g>
        <g transform="translate(180, 50)">
          <text x="0" y="50" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="16" fill={variant === 'white' ? '#CBD5E1' : '#475569'} letterSpacing="2">
            TECHNOLOGY LTD
          </text>
        </g>
      </svg>
    </div>
  );
};

// 3. Bangladesh Govt + ASSET Project Combined Logo (Fixed)
export const AssetGovtLogo = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <svg viewBox="0 0 450 130" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Bangladesh Seal Circle */}
        <g transform="translate(10, 10)">
          <circle cx="55" cy="55" r="52" fill="#006A4E" stroke="#004D38" strokeWidth="2" />
          <circle cx="55" cy="55" r="42" fill="#F42A41" />
          <path d="M47 36 C53 34, 61 38, 63 46 C65 54, 57 60, 59 66 C61 72, 53 76, 47 70 C41 64, 45 48, 47 36 Z" fill="#FFC72C" />
          <polygon points="36,28 38,32 34,32" fill="#FFFFFF" />
          <polygon points="74,28 76,32 72,32" fill="#FFFFFF" />
          <polygon points="36,84 38,88 34,88" fill="#FFFFFF" />
          <polygon points="74,84 76,88 72,88" fill="#FFFFFF" />
          <text x="55" y="18" textAnchor="middle" fontSize="10" fill="#FFFFFF" fontWeight="bold">গণপ্রজাতন্ত্রী বাংলাদেশ</text>
          <text x="55" y="102" textAnchor="middle" fontSize="11" fill="#FFFFFF" fontWeight="bold">সরকার</text>
        </g>

        {/* Vertical Separator */}
        <line x1="135" y1="15" x2="135" y2="115" stroke="#718096" strokeWidth="3" strokeLinecap="round" />

        {/* ASSET Project text */}
        <g transform="translate(155, 10)">
          <text x="0" y="65" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="900" fontSize="66" fill="#80208C">A</text>
          <text x="44" y="65" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="900" fontSize="66" fill="#1C3FB7">S</text>
          <text x="86" y="65" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="900" fontSize="66" fill="#00A651">S</text>
          <text x="128" y="65" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="900" fontSize="66" fill="#E30613">E</text>
          <text x="170" y="65" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="900" fontSize="66" fill="#0080FF">T</text>
          <text x="2" y="105" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="600" fontSize="36" fill="#4A5568" letterSpacing="4">Project</text>
        </g>
      </svg>
    </div>
  );
};

// 4. World Bank Logo Component (Fixed)
export const WorldBankLogo = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <svg viewBox="0 0 460 120" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(10, 10)">
          <circle cx="50" cy="50" r="46" fill="none" stroke="#0072CE" strokeWidth="5" />
          <ellipse cx="50" cy="50" rx="46" ry="22" fill="none" stroke="#0072CE" strokeWidth="4" />
          <ellipse cx="50" cy="50" rx="22" ry="46" fill="none" stroke="#0072CE" strokeWidth="4" />
          <line x1="4" y1="50" x2="96" y2="50" stroke="#0072CE" strokeWidth="4" />
        </g>
        <g transform="translate(125, 40)">
          <text x="0" y="36" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="900" fontSize="42" fill="#002B49" letterSpacing="1.5">
            THE WORLD BANK
          </text>
        </g>
      </svg>
    </div>
  );
};

// 5. Bangladesh Computer Samity (BCS) Official Logo Component
export const BcsLogo = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <svg viewBox="0 0 530 140" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* BCS Icon Group */}
        <g transform="translate(10, 10)">
          {/* Base horizontal green bar */}
          <rect x="0" y="102" width="135" height="8" fill="#00A651" rx="2" />
          {/* Vertical green stem */}
          <rect x="63" y="92" width="8" height="28" fill="#00A651" rx="2" />

          {/* Green stylized 'B' and 'S' shapes */}
          <path 
            d="M 5 65 C 5 25, 45 10, 65 30 C 50 45, 20 50, 20 70 C 20 90, 55 95, 75 80 C 50 100, 5 95, 5 65 Z" 
            fill="#00A651" 
          />
          <path 
            d="M 75 15 C 95 30, 120 40, 135 25 C 115 5, 80 5, 75 15 Z" 
            fill="#00A651" 
          />

          {/* Red stylized 'C' chevron shape */}
          <path 
            d="M 45 35 C 70 -5, 115 -5, 135 15 C 150 30, 150 45, 125 70 L 80 112 C 70 120, 55 110, 65 95 L 115 50 C 125 40, 115 25, 95 25 C 75 25, 60 45, 45 35 Z" 
            fill="#E30613" 
          />
        </g>

        {/* Text Group */}
        <g transform="translate(155, 20)">
          {/* Top Bengali Text: বাংলাদেশ কম্পিউটার সমিতি */}
          <text x="0" y="45" fontFamily="'Anek Bangla', 'Hind Siliguri', sans-serif" fontWeight="800" fontSize="36" fill="#000000" letterSpacing="0.5">
            বাংলাদেশ কম্পিউটার সমিতি
          </text>
          {/* Bottom English Text: Bangladesh Computer Samity */}
          <text x="0" y="85" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="800" fontSize="28" fill="#000000" letterSpacing="0">
            Bangladesh Computer Samity
          </text>
        </g>
      </svg>
    </div>
  );
};

// 6. BWCCI / Partner Logo Component (Legacy)
export const BwcciLogo = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <svg viewBox="0 0 280 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(5, 5)">
          <circle cx="45" cy="45" r="42" fill="#6B21A8" />
          <circle cx="45" cy="45" r="32" fill="#FFFFFF" />
          <circle cx="45" cy="45" r="24" fill="#6B21A8" />
          <text x="45" y="50" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="12" fill="#FFFFFF">BWCCI</text>
        </g>
        <g transform="translate(100, 35)">
          <text x="0" y="25" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="22" fill="#4C1D95">BWCCI</text>
          <text x="0" y="45" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="16" fill="#6B21A8">PARTNER</text>
        </g>
      </svg>
    </div>
  );
};
