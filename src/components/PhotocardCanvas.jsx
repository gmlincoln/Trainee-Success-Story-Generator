import React, { forwardRef } from 'react';
import { 
  TouchAndSolveLogo, 
  AssetGovtLogo, 
  WorldBankLogo, 
  BcsLogo 
} from './Logos';

export const PhotocardCanvas = forwardRef(({ data, theme, customLogos = {}, onFieldClick }, ref) => {
  // Extract theme values with TNS Brand defaults
  const {
    primary = '#0E385D',
    secondary = '#4EB829',
    headerBg = '#0E385D',
    badgeBg = '#4EB829',
    badgeTextColor = '#FFFFFF',
    topBarBg = '#071F38',
    boxBg = '#F0FDF4',
    fontFamily = "'Hind Siliguri', sans-serif"
  } = theme || {};

  // 1. Primary Header Logo (Top Right)
  const renderPrimaryLogo = () => {
    if (customLogos.primaryLogoUrl) {
      return <img src={customLogos.primaryLogoUrl} alt="Primary Logo" className="h-11 max-w-[200px] w-auto object-contain bg-white/90 p-1.5 rounded" />;
    }
    return <TouchAndSolveLogo className="h-11" variant="default" />;
  };

  // 2. Header Left Emblem/Logo (Top Left: Industry Partner Logo - Customizable)
  const renderPartnerLeft = () => {
    if (customLogos.partnerLeftUrl) {
      return <img src={customLogos.partnerLeftUrl} alt="Industry Partner Logo" className="h-10 max-w-[220px] w-auto object-contain" />;
    }
    return <BcsLogo className="h-10" />;
  };

  // 3. Sponsor Logo 1 (Center Left Logo - Customizable)
  const renderPartnerCenter = () => {
    if (customLogos.partnerCenterUrl) {
      return <img src={customLogos.partnerCenterUrl} alt="Center Left Logo" className="h-8 max-w-[160px] w-auto object-contain" />;
    }
    return <AssetGovtLogo className="h-8" />;
  };

  // 4. Sponsor Logo 2 (Center Right Logo - Customizable)
  const renderPartnerRight = () => {
    if (customLogos.partnerRightUrl) {
      return <img src={customLogos.partnerRightUrl} alt="Center Right Logo" className="h-8 max-w-[160px] w-auto object-contain" />;
    }
    return <WorldBankLogo className="h-8" />;
  };

  return (
    <div 
      ref={ref} 
      id="photocard-export-node"
      className="w-[1080px] bg-white text-slate-900 overflow-hidden shadow-2xl relative select-none font-sans border border-slate-300 rounded-lg"
      style={{ fontFamily }}
    >
      {/* 1. TOP NEWS TICKER BAR */}
      <div 
        className="w-full py-2 px-6 flex items-center justify-between text-xs tracking-wide text-white transition-colors"
        style={{ backgroundColor: topBarBg }}
      >
        <div 
          className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer hover:opacity-90"
          onClick={() => onFieldClick && onFieldClick('topTickerText')}
          title="Click to edit top ticker"
        >
          <span style={{ color: secondary }} className="font-extrabold uppercase tracking-wider">
            {data.topTickerPrefix || data.trainingInstitute}:
          </span>
          <span className="text-slate-100 font-medium">
            {data.topTickerText}
          </span>
        </div>

        <div 
          className="flex items-center gap-1 shrink-0 text-[11px] font-bold uppercase bg-white/10 px-2.5 py-0.5 rounded font-mono cursor-pointer hover:bg-white/20"
          onClick={() => onFieldClick && onFieldClick('batchNo')}
          title="Click to edit batch number"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{data.batchPrefix || 'ব্যাচ #'} {data.batchNo || '২০২৪'}</span>
        </div>
      </div>

      {/* 2. MAIN NEWS HEADER BANNER */}
      <div 
        className="w-full px-6 py-4 flex items-center justify-between relative border-b-4"
        style={{ 
          backgroundColor: headerBg,
          borderColor: secondary,
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 60%), radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)'
        }}
      >
        {/* Left: Industry Partner emblem (Customizable - Default BCS) */}
        <div 
          className="flex items-center gap-3 bg-white px-3.5 py-1.5 rounded-lg shadow-md cursor-pointer hover:opacity-95 border border-slate-100"
          onClick={() => onFieldClick && onFieldClick('logoPartnerLeft')}
          title="Click to edit or upload Industry Partner Logo"
        >
          {renderPartnerLeft()}
        </div>

        {/* Center: Main News Banner Title */}
        <div 
          className="text-center flex flex-col items-center cursor-pointer hover:opacity-90 px-4"
          onClick={() => onFieldClick && onFieldClick('headerNewsTitle')}
          title="Click to edit header title"
        >
          <div className="text-amber-300 text-sm font-semibold tracking-widest uppercase mb-0.5">
            {data.headerSubTitle || 'দৈনিক'}
          </div>
          <h1 
            className="text-4xl font-extrabold text-white tracking-tight drop-shadow-md leading-none"
            style={{ 
              fontFamily: "'Noto Serif Bengali', serif",
              textShadow: '2px 2px 4px rgba(0,0,0,0.4)' 
            }}
          >
            {data.headerNewsTitle || 'সাফল্যের গল্প'}
          </h1>
        </div>

        {/* Right: Primary Company Logo (Touch & Solve - Pure White Background) */}
        <div 
          className="bg-white px-3.5 py-1.5 rounded-lg shadow-md flex items-center justify-center cursor-pointer hover:opacity-95 border border-slate-100"
          onClick={() => onFieldClick && onFieldClick('logoPrimary')}
          title="Click to edit or upload Primary Header Logo (TNS)"
        >
          {renderPrimaryLogo()}
        </div>
      </div>

      {/* 3. MAIN CONTENT GRID (3 COLUMNS: 4 + 5 + 3 = 12) */}
      <div className="grid grid-cols-12 gap-5 p-6 bg-slate-50/70">
        
        {/* === COLUMN 1: LEFT PHOTO & NAME BADGE (4 COLS) === */}
        <div className="col-span-4 flex flex-col items-center justify-between bg-white rounded-xl p-4 shadow-sm border border-slate-200/80">
          
          {/* Candidate Photo Frame */}
          <div className="w-full flex flex-col items-center">
            <div 
              className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 border-2 border-slate-300/80 relative shadow-inner group cursor-pointer"
              onClick={() => onFieldClick && onFieldClick('photoUrl')}
              title="Click to change candidate photo"
            >
              {data.photoUrl ? (
                <img 
                  src={data.photoUrl} 
                  alt={data.name}
                  className="w-full h-full object-cover transition-transform duration-300"
                  style={{
                    objectPosition: `${data.photoOffsetX ?? 50}% ${data.photoOffsetY ?? 50}%`,
                    transform: `scale(${data.photoZoom || 1})`
                  }}
                  crossOrigin="anonymous"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-4 text-center">
                  <svg className="w-16 h-16 mb-2 stroke-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-xs font-medium">[প্রশিক্ষণার্থীর ছবি আপলোড করুন]</span>
                </div>
              )}
            </div>

            {/* Tagline quotes below photo */}
            <div className="mt-3 text-center px-1">
              <p 
                className="text-[11px] font-bold text-red-700 leading-tight cursor-pointer hover:underline"
                onClick={() => onFieldClick && onFieldClick('quote')}
                title="Click to edit quote"
              >
                {data.quote}
              </p>
              <p 
                className="text-[11px] font-extrabold uppercase text-slate-700 tracking-wider mt-1 cursor-pointer hover:underline"
                onClick={() => onFieldClick && onFieldClick('designation')}
                title="Click to edit designation"
              >
                {data.designation}
              </p>
            </div>
          </div>

          {/* Name & Designation TNS Badge Card */}
          <div 
            className="w-full mt-4 py-3 px-3 rounded-lg text-center shadow-md border flex flex-col items-center justify-center transition-all cursor-pointer hover:opacity-95"
            style={{ 
              backgroundColor: badgeBg,
              color: badgeTextColor || '#FFFFFF',
              borderColor: secondary
            }}
            onClick={() => onFieldClick && onFieldClick('name')}
            title="Click to edit name"
          >
            <h3 className="text-xl font-extrabold leading-tight" style={{ fontFamily: "'Anek Bangla', 'Hind Siliguri', sans-serif" }}>
              {data.name || 'প্রশিক্ষণার্থীর নাম'}
            </h3>
            <span className="text-xs font-extrabold tracking-wider uppercase mt-0.5 opacity-90">
              {data.designation || 'DESIGNATION'}
            </span>
          </div>
        </div>


        {/* === COLUMN 2: CENTER NEWS STORY & CALLOUT (5 COLS) === */}
        <div className="col-span-5 flex flex-col justify-between bg-white rounded-xl p-5 shadow-sm border border-slate-200/80">
          <div>
            {/* Tagline & Subheading */}
            <div className="mb-2">
              <span 
                className="text-[12px] font-bold text-slate-800 tracking-wide block cursor-pointer hover:text-blue-600"
                onClick={() => onFieldClick && onFieldClick('quote')}
                title="Click to edit quote"
              >
                {data.quote ? data.quote.replace(/"/g, '') : 'দক্ষতা উন্নয়নের মাধ্যমে কর্মসংস্থানের সুযোগ'}
              </span>
              <span 
                className="text-sm font-extrabold uppercase tracking-wider block mt-0.5 cursor-pointer hover:opacity-80" 
                style={{ color: primary }}
                onClick={() => onFieldClick && onFieldClick('designation')}
                title="Click to edit designation"
              >
                {data.designation}
              </span>
            </div>

            {/* Large Bengali Name Headline */}
            <h2 
              className="text-3xl font-extrabold mb-3 leading-snug tracking-tight cursor-pointer hover:opacity-80"
              style={{ 
                fontFamily: "'Noto Serif Bengali', serif",
                color: primary 
              }}
              onClick={() => onFieldClick && onFieldClick('name')}
              title="Click to edit name"
            >
              {data.name}
            </h2>

            {/* Bio Story Body Paragraph */}
            <p 
              className="text-slate-700 text-[13.5px] leading-relaxed font-normal text-justify mb-5 cursor-pointer hover:bg-slate-50 p-1 rounded"
              onClick={() => onFieldClick && onFieldClick('story')}
              title="Click to edit story paragraph"
            >
              {data.story}
            </p>
          </div>

          <div>
            {/* Sponsor & Partner Logos Row */}
            <div className="py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200/90 flex items-center justify-around gap-2 mb-4">
              <div 
                className="h-8 flex items-center justify-center cursor-pointer hover:opacity-90"
                onClick={() => onFieldClick && onFieldClick('logoPartnerCenter')}
                title="Click to upload Sponsor Logo 1"
              >
                {renderPartnerCenter()}
              </div>
              
              <div className="w-[1px] h-6 bg-slate-300"></div>

              <div 
                className="h-8 flex items-center justify-center cursor-pointer hover:opacity-90"
                onClick={() => onFieldClick && onFieldClick('logoPartnerRight')}
                title="Click to upload Sponsor Logo 2"
              >
                {renderPartnerRight()}
              </div>
            </div>

            {/* Callout Box + Classroom Photo */}
            <div 
              className="rounded-xl p-3.5 border-l-4 shadow-sm flex items-center gap-3 transition-all"
              style={{ backgroundColor: boxBg, borderColor: primary }}
            >
              {/* Highlight Left Text */}
              <div className="flex-1">
                <h4 
                  className="text-[12px] font-bold text-slate-900 leading-tight mb-1 cursor-pointer hover:underline" 
                  style={{ color: primary }}
                  onClick={() => onFieldClick && onFieldClick('highlightsText')}
                  title="Click to edit highlight title"
                >
                  {data.highlightsText || `দক্ষ জনশক্তি ও সফল ক্যারিয়ার গঠনে ${data.trainingInstitute}`}
                </h4>
                <p 
                  className="text-[11px] text-slate-600 leading-tight cursor-pointer hover:underline"
                  onClick={() => onFieldClick && onFieldClick('highlightsDesc')}
                  title="Click to edit highlight description"
                >
                  {data.highlightsDesc || 'কোর্স শেষে শিক্ষার্থীদের সফল ক্যারিয়ার গড়তে প্রতিষ্ঠানটি সরাসরি ইন্টার্নশিপ এবং জব প্লেসমেন্ট সহায়তা প্রদান করে থাকে।'}
                </p>
              </div>

              {/* Classroom / Training Photo Thumbnail */}
              {data.showClassroomPhoto && (
                <div 
                  className="w-28 h-20 rounded-lg overflow-hidden bg-slate-200 border border-slate-300 shrink-0 relative flex flex-col items-center justify-center cursor-pointer hover:opacity-90"
                  onClick={() => onFieldClick && onFieldClick('classroomPhotoUrl')}
                  title="Click to edit classroom photo"
                >
                  {data.classroomPhotoUrl ? (
                    <img 
                      src={data.classroomPhotoUrl} 
                      alt="Training Classroom" 
                      className="w-full h-full object-cover"
                      crossOrigin="anonymous"
                    />
                  ) : (
                    <div className="p-1 text-center text-[9px] text-slate-500 font-medium">
                      {data.classroomLabel || '[ক্লাশ রুম বা ল্যাব ছবি]'}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>


        {/* === COLUMN 3: RIGHT SUMMARY DATA CARDS (3 COLS) === */}
        <div className="col-span-3 flex flex-col justify-between bg-white rounded-xl p-4 shadow-sm border border-slate-200/80">
          <div className="space-y-3">
            {/* Field 1: Program */}
            <div className="border-b border-slate-100 pb-2 cursor-pointer hover:bg-slate-50 px-1 rounded" onClick={() => onFieldClick && onFieldClick('field1Value')}>
              <span className="text-[11px] font-bold text-red-800 uppercase block tracking-wider" style={{ color: primary }}>
                {data.field1Label || 'প্রোগ্রাম:'}
              </span>
              <span className="text-[12px] font-extrabold text-slate-900 block mt-0.5 leading-tight">
                {data.field1Value || data.program}
              </span>
            </div>

            {/* Field 2: Training Institute */}
            <div className="border-b border-slate-100 pb-2 cursor-pointer hover:bg-slate-50 px-1 rounded" onClick={() => onFieldClick && onFieldClick('field2Value')}>
              <span className="text-[11px] font-bold text-red-800 uppercase block tracking-wider" style={{ color: primary }}>
                {data.field2Label || 'প্রশিক্ষণ প্রতিষ্ঠান:'}
              </span>
              <span className="text-[12px] font-extrabold text-slate-900 block mt-0.5 leading-tight">
                {data.field2Value || data.trainingInstitute}
              </span>
            </div>

            {/* Field 3: Profession */}
            <div className="border-b border-slate-100 pb-2 cursor-pointer hover:bg-slate-50 px-1 rounded" onClick={() => onFieldClick && onFieldClick('field3Value')}>
              <span className="text-[11px] font-bold text-red-800 uppercase block tracking-wider" style={{ color: primary }}>
                {data.field3Label || 'পেশা:'}
              </span>
              <span className="text-[12px] font-extrabold text-slate-900 block mt-0.5 leading-tight">
                {data.field3Value || data.profession || data.designation}
              </span>
            </div>

            {/* Field 4: Result */}
            <div className="border-b border-slate-100 pb-2 cursor-pointer hover:bg-slate-50 px-1 rounded" onClick={() => onFieldClick && onFieldClick('field4Value')}>
              <span className="text-[11px] font-bold text-red-800 uppercase block tracking-wider" style={{ color: primary }}>
                {data.field4Label || 'ফলাফল:'}
              </span>
              <span className="inline-block mt-1 px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[12px] font-extrabold rounded-md uppercase tracking-wider">
                {data.field4Value || data.result || 'COMPETENT'}
              </span>
            </div>

            {/* Field 5: Present Employer */}
            <div className="border-b border-slate-100 pb-2 cursor-pointer hover:bg-slate-50 px-1 rounded" onClick={() => onFieldClick && onFieldClick('field5Value')}>
              <span className="text-[11px] font-bold text-red-800 uppercase block tracking-wider" style={{ color: primary }}>
                {data.field5Label || 'বর্তমান কর্মস্থান:'}
              </span>
              <span className="text-[12px] font-extrabold text-slate-900 block mt-0.5 leading-tight">
                {data.field5Value || data.presentEmployer}
              </span>
            </div>

            {/* Field 6: Salary */}
            <div className="cursor-pointer hover:bg-slate-50 px-1 rounded" onClick={() => onFieldClick && onFieldClick('field6Value')}>
              <span className="text-[11px] font-bold text-red-800 uppercase block tracking-wider" style={{ color: primary }}>
                {data.field6Label || 'মাসিক বেতন:'}
              </span>
              <span className="text-base font-extrabold text-rose-700 block mt-0.5">
                {data.field6Value || data.salary}
              </span>
            </div>
          </div>

          {/* Details Action Banner Button */}
          <div 
            className="w-full py-2.5 rounded-lg text-center font-extrabold text-white text-sm tracking-wide shadow mt-3 transition-colors cursor-pointer hover:opacity-95"
            style={{ backgroundColor: primary }}
            onClick={() => onFieldClick && onFieldClick('detailsBtnText')}
            title="Click to edit button text"
          >
            {data.detailsBtnText || 'বিস্তারিত'}
          </div>
        </div>

      </div>

      {/* 4. BOTTOM FOOTER BAR */}
      <div 
        className="w-full py-2 px-6 bg-slate-900 text-slate-300 text-[11px] font-semibold flex items-center justify-between border-t border-slate-800 cursor-pointer"
        onClick={() => onFieldClick && onFieldClick('footerLeftText')}
      >
        <span>{data.footerLeftText || 'ক্যারিয়ার'}</span>
        <span>{data.footerRightText || 'সাফল্যের গল্প'}</span>
      </div>

    </div>
  );
});

PhotocardCanvas.displayName = 'PhotocardCanvas';
