import React from 'react';

// Default logo paths from the public directory
export const DEFAULT_LOGOS = {
  primary: '/tns_logo.png',
  partnerLeft: '/bcs_logo.png',
  partnerCenter: '/asset_project_logo.png',
  partnerRight: '/world-bank.png'
};

// 1. Touch & Solve Official Logo Image Component (from public directory)
export const TouchAndSolveLogo = ({ className = "h-10", variant = "default" }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <img 
        src="/tns_logo.png" 
        alt="Touch & Solve" 
        className="h-full w-auto object-contain" 
        crossOrigin="anonymous"
      />
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

// 3. Bangladesh Govt + ASSET Project Combined Logo (from public directory)
export const AssetGovtLogo = ({ className = "h-8" }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <img 
        src="/asset_project_logo.png" 
        alt="ASSET Project & Bangladesh Govt" 
        className="h-full w-auto object-contain" 
        crossOrigin="anonymous"
      />
    </div>
  );
};

// 4. World Bank Logo Component (from public directory)
export const WorldBankLogo = ({ className = "h-8" }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <img 
        src="/world-bank.png" 
        alt="The World Bank" 
        className="h-full w-auto object-contain" 
        crossOrigin="anonymous"
      />
    </div>
  );
};

// 5. Bangladesh Computer Samity (BCS) Official Logo Component (from public directory)
export const BcsLogo = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <img 
        src="/bcs_logo.png" 
        alt="Bangladesh Computer Samity" 
        className="h-full w-auto object-contain" 
        crossOrigin="anonymous"
      />
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
