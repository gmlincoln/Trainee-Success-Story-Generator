import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ExportToolbar } from './components/ExportToolbar';
import { PhotocardCanvas } from './components/PhotocardCanvas';
import { PhotocardControls } from './components/PhotocardControls';
import { PRESET_CANDIDATES, COLOR_THEMES } from './data/presets';
import { ShieldCheck, Maximize2, Sparkles, GripVertical } from 'lucide-react';

export default function App() {
  // Candidate form data state (defaults to TNS Mahbuba preset)
  const [candidateData, setCandidateData] = useState(PRESET_CANDIDATES[0]);
  
  // Theme state (defaults to Touch & Solve TNS Brand theme)
  const [activeTheme, setActiveTheme] = useState(COLOR_THEMES[0]);
  
  // Custom theme colors state
  const [customThemeColors, setCustomThemeColors] = useState({
    primary: COLOR_THEMES[0].primary,
    secondary: COLOR_THEMES[0].secondary,
    badgeBg: COLOR_THEMES[0].badgeBg,
    topBarBg: COLOR_THEMES[0].topBarBg
  });

  // Custom uploaded logos state
  const [customLogos, setCustomLogos] = useState({
    primaryLogoUrl: null,
    partnerLeftUrl: null,
    partnerCenterUrl: null,
    partnerRightUrl: null
  });

  // Active tab state for editor controls
  const [activeTab, setActiveTab] = useState('personal');

  // Flexible Split Percent state (default 45% Studio / 55% Editor)
  const [splitPercent, setSplitPercent] = useState(45);
  const [isDragging, setIsDragging] = useState(false);

  // Zoom scaling state & Auto-fit toggle
  const [zoomLevel, setZoomLevel] = useState(0.65);
  const [autoFit, setAutoFit] = useState(true);

  // Refs for measuring and dragging
  const containerRef = useRef(null);
  const studioContainerRef = useRef(null);
  const canvasRef = useRef(null);

  // Calculate Auto-Fit Scale based on available studio width
  const calculateScale = useCallback(() => {
    if (studioContainerRef.current && autoFit) {
      const containerWidth = studioContainerRef.current.clientWidth - 32; // padding offset
      if (containerWidth > 0) {
        const calculatedScale = Math.min(1.0, Math.max(0.35, containerWidth / 1080));
        setZoomLevel(Number(calculatedScale.toFixed(2)));
      }
    }
  }, [autoFit]);

  useEffect(() => {
    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, [calculateScale, splitPercent]);

  // Mouse Drag Resizing Logic
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newPercent = (offsetX / rect.width) * 100;
    if (newPercent >= 25 && newPercent <= 75) {
      setSplitPercent(Number(newPercent.toFixed(1)));
    }
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
    }
  }, [isDragging]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // Handle Preset Load
  const handleLoadPreset = (preset) => {
    setCandidateData(preset);
    if (preset.themeId) {
      const match = COLOR_THEMES.find(t => t.id === preset.themeId);
      if (match) {
        setActiveTheme(match);
        setCustomThemeColors({
          primary: match.primary,
          secondary: match.secondary,
          badgeBg: match.badgeBg,
          topBarBg: match.topBarBg
        });
      }
    }
  };

  // Handle Theme Selection
  const handleThemeSelect = (theme) => {
    setActiveTheme(theme);
    setCustomThemeColors({
      primary: theme.primary,
      secondary: theme.secondary,
      badgeBg: theme.badgeBg,
      topBarBg: theme.topBarBg
    });
  };

  // Handle Custom Theme Pickers
  const handleCustomThemeChange = (key, value) => {
    const updated = { ...customThemeColors, [key]: value };
    setCustomThemeColors(updated);
    setActiveTheme(prev => ({
      ...prev,
      [key]: value,
      headerBg: key === 'primary' ? value : prev.headerBg
    }));
  };

  // Handle Custom Logo Upload
  const handleLogoUpload = (key, dataUrl) => {
    setCustomLogos(prev => ({ ...prev, [key]: dataUrl }));
  };

  // Click-to-Edit field trigger on canvas
  const handleFieldClick = (fieldName) => {
    if (['name', 'designation', 'quote', 'salary', 'result', 'presentEmployer', 'program', 'trainingInstitute'].includes(fieldName)) {
      setActiveTab('personal');
    } else if (['headerNewsTitle', 'headerSubTitle', 'story', 'highlightsText', 'highlightsDesc', 'footerLeftText', 'footerRightText'].includes(fieldName)) {
      setActiveTab('story');
    } else if (['field1Value', 'field2Value', 'field3Value', 'field4Value', 'field5Value', 'field6Value', 'detailsBtnText'].includes(fieldName)) {
      setActiveTab('labels');
    } else if (['photoUrl', 'classroomPhotoUrl'].includes(fieldName)) {
      setActiveTab('media');
    } else if (['topTickerText', 'batchNo', 'logoPrimary', 'logoPartnerLeft', 'logoPartnerCenter', 'logoPartnerRight'].includes(fieldName)) {
      setActiveTab('branding');
    }
  };

  // Reset all settings
  const handleReset = () => {
    setCandidateData(PRESET_CANDIDATES[0]);
    setActiveTheme(COLOR_THEMES[0]);
    setCustomThemeColors({
      primary: COLOR_THEMES[0].primary,
      secondary: COLOR_THEMES[0].secondary,
      badgeBg: COLOR_THEMES[0].badgeBg,
      topBarBg: COLOR_THEMES[0].topBarBg
    });
    setCustomLogos({
      primaryLogoUrl: null,
      partnerLeftUrl: null,
      partnerCenterUrl: null,
      partnerRightUrl: null
    });
    setSplitPercent(45);
    setAutoFit(true);
  };

  // Active theme combined with custom pickers
  const currentEffectiveTheme = {
    ...activeTheme,
    primary: customThemeColors.primary,
    secondary: customThemeColors.secondary,
    badgeBg: customThemeColors.badgeBg,
    topBarBg: customThemeColors.topBarBg,
    headerBg: customThemeColors.primary
  };

  const canvasOriginalWidth = 1080;
  const canvasOriginalHeight = 740;

  return (
    <div className="min-h-screen bg-[#061727] text-slate-100 flex flex-col font-sans selection:bg-[#4EB829] selection:text-white">
      
      {/* Top Navigation & Export Bar */}
      <ExportToolbar
        canvasRef={canvasRef}
        onLoadPreset={handleLoadPreset}
        data={candidateData}
        zoomLevel={zoomLevel}
        setZoomLevel={(val) => {
          setAutoFit(false);
          setZoomLevel(val);
        }}
        onReset={handleReset}
      />

      {/* Main Responsive Flexible Split Layout Container */}
      <main 
        ref={containerRef}
        className="flex-1 max-w-[1800px] w-full mx-auto p-3 sm:p-4 lg:p-6 flex flex-col lg:flex-row items-stretch relative"
      >
        
        {/* === LEFT COLUMN: PHOTO CARD STUDIO (FLEXIBLE WIDTH) === */}
        <div 
          style={{ width: window.innerWidth >= 1024 ? `${splitPercent}%` : '100%' }}
          className="flex flex-col items-center justify-start space-y-4 w-full pr-0 lg:pr-3 transition-all duration-75"
        >
          {/* Studio Header Bar */}
          <div className="w-full bg-[#081E31] border border-[#0E385D] rounded-2xl p-3 px-4 sm:px-5 flex flex-wrap items-center justify-between gap-2 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#4EB829] animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-100 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#4EB829]" />
                প্রশিক্ষণার্থী সাফল্যের গল্প ফটোকার্ড স্টুডিও
              </span>
            </div>

            {/* Layout Quick Split Preset Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-[#04101B] p-1 rounded-lg border border-[#0E385D]">
              <button
                onClick={() => setSplitPercent(45)}
                className={`text-[11px] font-bold px-2 py-0.5 rounded transition-all ${
                  splitPercent === 45 ? 'bg-[#4EB829] text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Default Split: Photocard Studio 45% / Editor 55%"
              >
                ৪৫/৫৫ (ডিফল্ট)
              </button>
              <button
                onClick={() => setSplitPercent(50)}
                className={`text-[11px] font-bold px-2 py-0.5 rounded transition-all ${
                  splitPercent === 50 ? 'bg-[#4EB829] text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Balanced 50/50 Split"
              >
                ৫০/৫০
              </button>
              <button
                onClick={() => setSplitPercent(60)}
                className={`text-[11px] font-bold px-2 py-0.5 rounded transition-all ${
                  splitPercent === 60 ? 'bg-[#4EB829] text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Photocard Studio 60% / Editor 40%"
              >
                ৬০/৪০
              </button>
            </div>

            {/* Auto-Fit Toggle & Scale Display */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setAutoFit(!autoFit)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                  autoFit 
                    ? 'bg-[#4EB829] text-white border-[#5cd130] shadow'
                    : 'bg-[#0E385D] text-slate-200 border-[#1b4b7a] hover:bg-[#164b7c]'
                }`}
                title="Toggle responsive auto-fit scaling"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{autoFit ? 'Auto-Fit (অন)' : 'Manual Scale'}</span>
              </button>

              <span className="text-xs font-mono font-bold text-[#4EB829] bg-[#04101B] px-2 py-1 rounded border border-[#0E385D]">
                {Math.round(zoomLevel * 100)}%
              </span>
            </div>
          </div>

          {/* Scalable Studio Preview Box */}
          <div 
            ref={studioContainerRef}
            className="w-full bg-[#081E31]/60 border border-[#0E385D] rounded-2xl p-3 sm:p-5 flex flex-col items-center justify-start overflow-auto shadow-2xl relative min-h-[460px] sm:min-h-[580px]"
          >
            {/* Dark TNS Pattern Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#0E385D_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none"></div>

            {/* Hint Notice */}
            <div className="mb-4 text-[11px] text-slate-300 font-medium flex items-center gap-1.5 bg-[#04101B]/90 px-3.5 py-1 rounded-full border border-[#0E385D] z-10 shadow-sm">
              <span className="text-[#4EB829] font-bold">💡 টিপস:</span> 
              কার্ডের যে কোনো লেখায় বা লোগোতে ক্লিক করে সরাসরি এডিট করতে পারবেন
            </div>

            {/* Responsive Scaled Wrapper Box */}
            <div 
              style={{ 
                width: `${canvasOriginalWidth * zoomLevel}px`,
                height: `${canvasOriginalHeight * zoomLevel}px`,
                position: 'relative'
              }}
              className="shadow-2xl rounded-xl overflow-hidden z-10 transition-all duration-75"
            >
              <div 
                style={{ 
                  width: `${canvasOriginalWidth}px`,
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: 'top left',
                  transition: 'transform 0.05s ease-out'
                }}
              >
                <PhotocardCanvas
                  ref={canvasRef}
                  data={candidateData}
                  theme={currentEffectiveTheme}
                  customLogos={customLogos}
                  onFieldClick={handleFieldClick}
                />
              </div>
            </div>
          </div>

          {/* Footer Info Badge */}
          <div className="w-full text-center text-xs text-slate-400 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#4EB829]" />
            <span>
              অফিশিয়াল ব্র্যান্ড কালার থিম ও লোগো সম্বলিত কাস্টমাইজেবল ফটোকার্ড
            </span>
          </div>
        </div>

        {/* === VERTICAL DRAGGABLE DIVIDER LINE BETWEEN STUDIO AND EDITOR === */}
        <div 
          onMouseDown={handleMouseDown}
          className={`hidden lg:flex items-center justify-center w-4 relative cursor-col-resize select-none group my-2 transition-colors ${
            isDragging ? 'bg-[#4EB829]/20' : 'hover:bg-[#081E31]'
          }`}
          title="মাউস দিয়ে টেনে ফটোকার্ড ও এডিটরের স্প্লিট সাইজ ছোট-বড় করুন (Drag to resize layout)"
        >
          {/* Vertical Separator Line */}
          <div className={`w-[2px] h-full transition-colors ${
            isDragging ? 'bg-[#4EB829]' : 'bg-[#0E385D] group-hover:bg-[#4EB829]'
          }`} />

          {/* Drag Handle Grip Pill Button */}
          <div className={`absolute top-1/2 -translate-y-1/2 w-6 h-10 rounded-full flex items-center justify-center shadow-lg border transition-all ${
            isDragging 
              ? 'bg-[#4EB829] text-white border-[#5cd130] scale-110' 
              : 'bg-[#081E31] text-slate-300 border-[#0E385D] group-hover:bg-[#4EB829] group-hover:text-white group-hover:border-[#4EB829]'
          }`}>
            <GripVertical className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* === RIGHT COLUMN: EDITING OPTIONS FORM (FLEXIBLE WIDTH) === */}
        <div 
          style={{ width: window.innerWidth >= 1024 ? `${100 - splitPercent}%` : '100%' }}
          className="w-full pl-0 lg:pl-3 sticky top-20 lg:h-[calc(100vh-6rem)] transition-all duration-75"
        >
          <PhotocardControls
            data={candidateData}
            onChange={setCandidateData}
            customLogos={customLogos}
            onLogoUpload={handleLogoUpload}
            onThemeSelect={handleThemeSelect}
            activeThemeId={activeTheme.id}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            customThemeColors={customThemeColors}
            onCustomThemeChange={handleCustomThemeChange}
          />
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#0E385D] bg-[#04101B] py-4 text-center text-xs text-slate-400 mt-6 space-y-1">
        <p className="flex items-center justify-center gap-1 font-bold text-slate-300">
          Trainee Success Story Generator
        </p>
        <p className="text-[11px] text-slate-400">
          Developed by{' '}
          <a 
            href="https://imlincoln.me" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold text-[#4EB829] hover:underline hover:text-[#60db34] transition-colors"
          >
            Golam Maula Lincoln
          </a>
        </p>
      </footer>
    </div>
  );
}
