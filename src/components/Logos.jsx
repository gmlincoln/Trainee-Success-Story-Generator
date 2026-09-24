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
        {/* Logo Text "info" (blue) "SYSTEM" (orange/red) */}
        <g>
          <text x="5" y="68" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="56" fill={variant === 'white' ? '#FFFFFF' : '#0072CE'}>
            info
          </text>
          <text x="5" y="105" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="38" fill={variant === 'white' ? '#F87171' : '#1E293B'} letterSpacing="2">
            SYSTEM
          </text>
          {/* Dot Cluster on top right of info */}
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

// 3. Bangladesh Govt + ASSET Project Combined Logo
export const AssetGovtLogo = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <svg viewBox="0 0 420 120" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Bangladesh Seal Circle */}
        <g transform="translate(5, 5)">
          <circle cx="50" cy="50" r="48" fill="#006A4E" stroke="#004D38" strokeWidth="2" />
          <circle cx="50" cy="50" r="38" fill="#F42A41" />
          {/* Golden Yellow Bangladesh Map outline / star graphics */}
          <path d="M42 32 C48 30, 56 34, 58 42 C60 50, 52 56, 54 62 C56 68, 48 72, 42 66 C36 60, 40 44, 42 32 Z" fill="#FFC72C" />
          {/* Stars */}
          <polygon points="32,24 34,28 30,28" fill="#FFFFFF" />
          <polygon points="68,24 70,28 66,28" fill="#FFFFFF" />
          <polygon points="32,76 34,80 30,80" fill="#FFFFFF" />
          <polygon points="68,76 70,80 66,80" fill="#FFFFFF" />
          <text x="50" y="16" textAnchor="middle" fontSize="9" fill="#FFFFFF" fontWeight="bold">গণপ্রজাতন্ত্রী বাংলাদেশ</text>
          <text x="50" y="93" textAnchor="middle" fontSize="10" fill="#FFFFFF" fontWeight="bold">সরকার</text>
        </g>

        {/* Vertical Separator */}
        <line x1="120" y1="15" x2="120" y2="95" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />

        {/* ASSET Project text */}
        <g transform="translate(140, 10)">
          {/* A */}
          <text x="0" y="65" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="62" fill="#8B5CF6">A</text>
          {/* S */}
          <text x="42" y="65" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="62" fill="#1D4ED8">S</text>
          {/* S */}
          <text x="82" y="65" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="62" fill="#10B981">S</text>
          {/* E */}
          <text x="122" y="65" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="62" fill="#EF4444">E</text>
          {/* T */}
          <text x="162" y="65" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="62" fill="#0284C7">T</text>

          <text x="5" y="98" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="32" fill="#475569" letterSpacing="4">Project</text>
        </g>
      </svg>
    </div>
  );
};

// 4. World Bank Logo Component
export const WorldBankLogo = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <svg viewBox="0 0 350 110" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Globe Icon */}
        <g transform="translate(5, 5)">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#0072CE" strokeWidth="4" />
          <ellipse cx="50" cy="50" rx="45" ry="20" fill="none" stroke="#0072CE" strokeWidth="3" />
          <ellipse cx="50" cy="50" rx="20" ry="45" fill="none" stroke="#0072CE" strokeWidth="3" />
          <line x1="5" y1="50" x2="95" y2="50" stroke="#0072CE" strokeWidth="3" />
        </g>
        {/* Text */}
        <g transform="translate(115, 35)">
          <text x="0" y="32" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="32" fill="#002244" letterSpacing="1">
            THE WORLD BANK
          </text>
          <text x="2" y="54" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="13" fill="#64748B" letterSpacing="1">
            IBRD • IDA | WORLD BANK GROUP
          </text>
        </g>
      </svg>
    </div>
  );
};

// 5. BWCCI / Partner Logo Component
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

// 6. Technical Education Board / DTE Logo
export const DteLogo = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="12" fill="#0284C7" />
        <path d="M20 70 L50 20 L80 70 Z" fill="none" stroke="#FFFFFF" strokeWidth="6" />
        <line x1="30" y1="55" x2="70" y2="55" stroke="#FFFFFF" strokeWidth="5" />
        <circle cx="50" cy="42" r="8" fill="#FFD700" />
      </svg>
    </div>
  );
};
