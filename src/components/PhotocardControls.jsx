import React from 'react';
import { 
  User, 
  FileText, 
  Image as ImageIcon, 
  Building, 
  Palette, 
  Sparkles, 
  Upload, 
  ZoomIn, 
  RefreshCw,
  Sliders,
  Trash2,
  RotateCcw
} from 'lucide-react';
import { COLOR_THEMES } from '../data/presets';

export const PhotocardControls = ({ 
  data, 
  onChange, 
  customLogos, 
  onLogoUpload, 
  onThemeSelect, 
  activeThemeId,
  activeTab,
  setActiveTab,
  customThemeColors,
  onCustomThemeChange
}) => {

  // Helper for text inputs
  const handleInputChange = (field, value) => {
    const updates = { [field]: value };
    if (field === 'field1Value') updates.program = value;
    if (field === 'field2Value') {
      updates.trainingInstitute = value;
      updates.highlightsText = `দক্ষ জনশক্তি ও সফল ক্যারিয়ার গঠনে ${value}`;
      updates.topTickerPrefix = value;
    }
    if (field === 'field3Value') updates.profession = value;
    if (field === 'field4Value') updates.result = value;
    if (field === 'field5Value') updates.presentEmployer = value;
    if (field === 'field6Value') updates.salary = value;
    onChange({ ...data, ...updates });
  };

  // Image Upload Handler
  const handleImageUpload = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onChange({ ...data, [fieldName]: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Custom Logo Upload Handler
  const handleCustomLogoUpload = (e, logoKey) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onLogoUpload(logoKey, event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Auto Generate Story helper
  const handleGenerateStory = () => {
    const name = data.name || 'শিক্ষার্থী';
    const designation = data.designation || 'পেশাদার';
    const inst = data.field2Value || data.trainingInstitute || 'প্রশিক্ষণ প্রতিষ্ঠান';
    
    const generatedStory = `${name} ASSET Project-এর প্রশিক্ষণের মাধ্যমে ${inst}-এর অধীনে ${designation} বিষয়ে প্রয়োজনীয় পেশাগত ও কারিগরি দক্ষতা অর্জন করে নিজের ক্যারিয়ার গড়ার নতুন সুযোগ তৈরি করেছেন। বর্তমানে অর্জিত দক্ষতাকে কাজে লাগিয়ে তিনি একজন আত্মবিশ্বাসী ${designation} হিসেবে সফলতার সঙ্গে কর্মজীবনে এগিয়ে চলেছেন।`;
    
    const highlights = `দক্ষ জনশক্তি ও সফল ক্যারিয়ার গঠনে ${inst}`;

    onChange({ 
      ...data, 
      story: generatedStory,
      highlightsText: highlights,
      topTickerPrefix: inst
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden flex flex-col h-full text-slate-900">
      
      {/* Sidebar Header */}
      <div className="bg-[#081E31] text-white p-4 border-b border-[#0E385D] flex items-center justify-between">
        <div>
          <h2 className="text-base font-extrabold flex items-center gap-2 text-white">
            <Sparkles className="w-5 h-5 text-[#4EB829]" />
            ফটোকার্ড এডিটর
          </h2>
          <p className="text-xs text-slate-300 mt-0.5 font-medium">
            অফিশিয়াল ফটোকার্ড কাস্টমাইজার
          </p>
        </div>
      </div>

      {/* Tab Navigation Bar */}
      <div className="flex items-center justify-around bg-slate-100 p-1.5 border-b border-slate-200 text-xs font-semibold overflow-x-auto gap-1">
        <button
          onClick={() => setActiveTab('personal')}
          className={`flex items-center gap-1 px-2.5 py-2 rounded-lg transition-all whitespace-nowrap ${
            activeTab === 'personal'
              ? 'bg-[#0E385D] text-white shadow font-bold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
          }`}
        >
          <User className={`w-3.5 h-3.5 ${activeTab === 'personal' ? 'text-[#4EB829]' : 'text-slate-500'}`} />
          <span>প্রশিক্ষণার্থী তথ্য</span>
        </button>

        <button
          onClick={() => setActiveTab('story')}
          className={`flex items-center gap-1 px-2.5 py-2 rounded-lg transition-all whitespace-nowrap ${
            activeTab === 'story'
              ? 'bg-[#0E385D] text-white shadow font-bold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
          }`}
        >
          <FileText className={`w-3.5 h-3.5 ${activeTab === 'story' ? 'text-[#4EB829]' : 'text-slate-500'}`} />
          <span>নিউজ টেক্সট</span>
        </button>

        <button
          onClick={() => setActiveTab('labels')}
          className={`flex items-center gap-1 px-2.5 py-2 rounded-lg transition-all whitespace-nowrap ${
            activeTab === 'labels'
              ? 'bg-[#0E385D] text-white shadow font-bold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
          }`}
        >
          <Sliders className={`w-3.5 h-3.5 ${activeTab === 'labels' ? 'text-[#4EB829]' : 'text-slate-500'}`} />
          <span>কার্ড ফিল্ডস</span>
        </button>

        <button
          onClick={() => setActiveTab('media')}
          className={`flex items-center gap-1 px-2.5 py-2 rounded-lg transition-all whitespace-nowrap ${
            activeTab === 'media'
              ? 'bg-[#0E385D] text-white shadow font-bold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
          }`}
        >
          <ImageIcon className={`w-3.5 h-3.5 ${activeTab === 'media' ? 'text-[#4EB829]' : 'text-slate-500'}`} />
          <span>ছবি &amp; ফটো</span>
        </button>

        <button
          onClick={() => setActiveTab('branding')}
          className={`flex items-center gap-1 px-2.5 py-2 rounded-lg transition-all whitespace-nowrap ${
            activeTab === 'branding'
              ? 'bg-[#0E385D] text-white shadow font-bold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
          }`}
        >
          <Building className={`w-3.5 h-3.5 ${activeTab === 'branding' ? 'text-[#4EB829]' : 'text-slate-500'}`} />
          <span>লোগো &amp; ব্র্যান্ড</span>
        </button>

        <button
          onClick={() => setActiveTab('theme')}
          className={`flex items-center gap-1 px-2.5 py-2 rounded-lg transition-all whitespace-nowrap ${
            activeTab === 'theme'
              ? 'bg-[#0E385D] text-white shadow font-bold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
          }`}
        >
          <Palette className={`w-3.5 h-3.5 ${activeTab === 'theme' ? 'text-[#4EB829]' : 'text-slate-500'}`} />
          <span>থিম &amp; কালার</span>
        </button>
      </div>

      {/* Tab Body Contents */}
      <div className="p-5 flex-1 overflow-y-auto space-y-4 text-slate-800 text-xs">
        
        {/* === TAB 1: PERSONAL DETAILS === */}
        {activeTab === 'personal' && (
          <div className="space-y-4">
            <div>
              <label className="block font-bold text-slate-700 mb-1">প্রশিক্ষণার্থীর পূর্ণ নাম (Name)</label>
              <input
                type="text"
                value={data.name || ''}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#4EB829] focus:outline-none font-bold"
                placeholder="যেমন: মাহবুবা আক্তার মিতা"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">পদবি / পেশা (Designation)</label>
              <input
                type="text"
                value={data.designation || ''}
                onChange={(e) => handleInputChange('designation', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#4EB829] focus:outline-none font-bold uppercase"
                placeholder="যেমন: LOGO DESIGNER"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">ট্যাগলাইন/স্লোগান (Quote)</label>
              <input
                type="text"
                value={data.quote || ''}
                onChange={(e) => handleInputChange('quote', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#4EB829] focus:outline-none font-medium"
                placeholder='"দক্ষতা উন্নয়নের মাধ্যমে কর্মসংস্থানের সুযোগ"'
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">মাসিক বেতন (Salary)</label>
                <input
                  type="text"
                  value={data.field6Value || data.salary || ''}
                  onChange={(e) => handleInputChange('field6Value', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#4EB829] focus:outline-none font-bold"
                  placeholder="১০,০০০ টাকা"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">ফলাফল (Status)</label>
                <input
                  type="text"
                  value={data.field4Value || data.result || ''}
                  onChange={(e) => handleInputChange('field4Value', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#4EB829] focus:outline-none font-bold uppercase"
                  placeholder="COMPETENT"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">বর্তমান কর্মস্থান (Employer)</label>
                <input
                  type="text"
                  value={data.field5Value || data.presentEmployer || ''}
                  onChange={(e) => handleInputChange('field5Value', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#4EB829] focus:outline-none font-medium"
                  placeholder="TOUCH & SOLVE LTD."
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">প্রশিক্ষণ প্রতিষ্ঠান (Institute)</label>
                <input
                  type="text"
                  value={data.field2Value || data.trainingInstitute || ''}
                  onChange={(e) => handleInputChange('field2Value', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#4EB829] focus:outline-none font-medium"
                  placeholder="TOUCH & SOLVE"
                />
              </div>
            </div>
          </div>
        )}

        {/* === TAB 2: STORY & NEWS TEXT === */}
        {activeTab === 'story' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">নিউজ সাবটাইটেল (Header Prefix)</label>
                <input
                  type="text"
                  value={data.headerSubTitle || ''}
                  onChange={(e) => handleInputChange('headerSubTitle', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg font-bold"
                  placeholder="দৈনিক"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">প্রধান নিউজ টাইটেল (Main Title)</label>
                <input
                  type="text"
                  value={data.headerNewsTitle || ''}
                  onChange={(e) => handleInputChange('headerNewsTitle', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg font-bold"
                  placeholder="সাফল্যের গল্প"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="font-bold text-slate-700">সাফল্যের বিস্তারিত বিবরণী (Bio Story)</label>
                <button
                  type="button"
                  onClick={handleGenerateStory}
                  className="flex items-center gap-1 text-[11px] font-bold text-white bg-[#4EB829] hover:bg-[#419e22] px-2.5 py-1 rounded-lg shadow-sm"
                >
                  <RefreshCw className="w-3 h-3" />
                  অটো-জেনারেট বিবরণ
                </button>
              </div>
              <textarea
                rows={5}
                value={data.story || ''}
                onChange={(e) => handleInputChange('story', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#4EB829] focus:outline-none font-medium leading-relaxed text-xs"
                placeholder="প্রশিক্ষণার্থীর সাফল্যের গল্প বর্ণনা করুন..."
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">হাইলাইট বক্স শিরোনাম (Callout Title)</label>
              <input
                type="text"
                value={data.highlightsText || ''}
                onChange={(e) => handleInputChange('highlightsText', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg font-bold"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">হাইলাইট বর্ণনা (Callout Description)</label>
              <textarea
                rows={2}
                value={data.highlightsDesc || ''}
                onChange={(e) => handleInputChange('highlightsDesc', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg font-medium"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-200">
              <div>
                <label className="block font-bold text-slate-700 mb-1">ফুটার বাম টেক্সট</label>
                <input
                  type="text"
                  value={data.footerLeftText || ''}
                  onChange={(e) => handleInputChange('footerLeftText', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg font-medium"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">ফুটার ডান টেক্সট</label>
                <input
                  type="text"
                  value={data.footerRightText || ''}
                  onChange={(e) => handleInputChange('footerRightText', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg font-medium"
                />
              </div>
            </div>
          </div>
        )}

        {/* === TAB 3: RIGHT CARD LABELS & VALUES === */}
        {activeTab === 'labels' && (
          <div className="space-y-3.5">
            <p className="text-slate-600 font-medium text-[11px] bg-slate-50 p-2 rounded-lg border border-slate-200">
              ডানপাশের ৬টি কার্ডের প্রতিটি লেবেল এবং তথ্য আপনার ইচ্ছামতো পরিমার্জন করতে পারবেন:
            </p>

            {/* Field 1 */}
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <span className="font-bold text-[#0E385D]">কার্ড ১ (Program)</span>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={data.field1Label || ''}
                  onChange={(e) => handleInputChange('field1Label', e.target.value)}
                  placeholder="প্রোগ্রাম:"
                  className="px-2.5 py-1.5 border rounded font-semibold"
                />
                <input
                  type="text"
                  value={data.field1Value || ''}
                  onChange={(e) => handleInputChange('field1Value', e.target.value)}
                  placeholder="ENTERPRISE-BASED TRAINING (EBT)"
                  className="px-2.5 py-1.5 border rounded font-bold"
                />
              </div>
            </div>

            {/* Field 2 */}
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <span className="font-bold text-[#0E385D]">কার্ড ২ (Institute)</span>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={data.field2Label || ''}
                  onChange={(e) => handleInputChange('field2Label', e.target.value)}
                  placeholder="প্রশিক্ষণ প্রতিষ্ঠান:"
                  className="px-2.5 py-1.5 border rounded font-semibold"
                />
                <input
                  type="text"
                  value={data.field2Value || ''}
                  onChange={(e) => handleInputChange('field2Value', e.target.value)}
                  placeholder="TOUCH & SOLVE"
                  className="px-2.5 py-1.5 border rounded font-bold"
                />
              </div>
            </div>

            {/* Field 3 */}
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <span className="font-bold text-[#0E385D]">কার্ড ৩ (Profession)</span>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={data.field3Label || ''}
                  onChange={(e) => handleInputChange('field3Label', e.target.value)}
                  placeholder="পেশা:"
                  className="px-2.5 py-1.5 border rounded font-semibold"
                />
                <input
                  type="text"
                  value={data.field3Value || ''}
                  onChange={(e) => handleInputChange('field3Value', e.target.value)}
                  placeholder="LOGO DESIGNER"
                  className="px-2.5 py-1.5 border rounded font-bold"
                />
              </div>
            </div>

            {/* Field 4 */}
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <span className="font-bold text-[#0E385D]">কার্ড ৪ (Result)</span>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={data.field4Label || ''}
                  onChange={(e) => handleInputChange('field4Label', e.target.value)}
                  placeholder="ফলাফল:"
                  className="px-2.5 py-1.5 border rounded font-semibold"
                />
                <input
                  type="text"
                  value={data.field4Value || ''}
                  onChange={(e) => handleInputChange('field4Value', e.target.value)}
                  placeholder="COMPETENT"
                  className="px-2.5 py-1.5 border rounded font-bold uppercase"
                />
              </div>
            </div>

            {/* Field 5 */}
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <span className="font-bold text-[#0E385D]">কার্ড ৫ (Employer)</span>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={data.field5Label || ''}
                  onChange={(e) => handleInputChange('field5Label', e.target.value)}
                  placeholder="বর্তমান কর্মস্থান:"
                  className="px-2.5 py-1.5 border rounded font-semibold"
                />
                <input
                  type="text"
                  value={data.field5Value || ''}
                  onChange={(e) => handleInputChange('field5Value', e.target.value)}
                  placeholder="TOUCH & SOLVE LTD."
                  className="px-2.5 py-1.5 border rounded font-bold"
                />
              </div>
            </div>

            {/* Field 6 */}
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <span className="font-bold text-[#0E385D]">কার্ড ৬ (Salary)</span>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={data.field6Label || ''}
                  onChange={(e) => handleInputChange('field6Label', e.target.value)}
                  placeholder="মাসিক বেতন:"
                  className="px-2.5 py-1.5 border rounded font-semibold"
                />
                <input
                  type="text"
                  value={data.field6Value || ''}
                  onChange={(e) => handleInputChange('field6Value', e.target.value)}
                  placeholder="১০,০০০ টাকা"
                  className="px-2.5 py-1.5 border rounded font-bold text-rose-700"
                />
              </div>
            </div>

            {/* Button label */}
            <div>
              <label className="block font-bold text-slate-700 mb-1">ডানপাশের বাটন টেক্সট</label>
              <input
                type="text"
                value={data.detailsBtnText || ''}
                onChange={(e) => handleInputChange('detailsBtnText', e.target.value)}
                placeholder="বিস্তারিত"
                className="w-full px-3 py-2 border rounded font-bold"
              />
            </div>
          </div>
        )}

        {/* === TAB 4: MEDIA & PHOTOS === */}
        {activeTab === 'media' && (
          <div className="space-y-4">
            {/* Candidate Photo Uploader */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <label className="block font-bold text-slate-800">প্রশিক্ষণার্থীর মূল ছবি (Photo)</label>
              <div className="flex items-center gap-3">
                {data.photoUrl ? (
                  <img src={data.photoUrl} alt="Thumb" className="w-14 h-16 object-cover rounded-lg border border-slate-300" />
                ) : (
                  <div className="w-14 h-16 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400">
                    <User className="w-6 h-6" />
                  </div>
                )}
                <label className="flex-1 cursor-pointer flex items-center justify-center gap-2 px-3 py-2 bg-[#0E385D] border border-[#163B66] rounded-lg text-white font-bold hover:bg-[#163B66] shadow-sm">
                  <Upload className="w-4 h-4 text-[#4EB829]" />
                  <span>ছবি আপলোড করুন</span>
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 'photoUrl')} />
                </label>
              </div>

              {/* Zoom & Position Controls */}
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-600 flex items-center gap-1">
                    <ZoomIn className="w-3.5 h-3.5" /> জুম লেভেল:
                  </span>
                  <span className="font-bold text-slate-800">{Math.round((data.photoZoom || 1) * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.8"
                  max="2.5"
                  step="0.05"
                  value={data.photoZoom || 1}
                  onChange={(e) => handleInputChange('photoZoom', parseFloat(e.target.value))}
                  className="w-full accent-[#4EB829]"
                />

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <span className="font-semibold text-slate-600 block mb-1">ভার্টিকাল Y-পজিশন:</span>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={data.photoOffsetY ?? 50}
                      onChange={(e) => handleInputChange('photoOffsetY', parseInt(e.target.value))}
                      className="w-full accent-[#4EB829]"
                    />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-600 block mb-1">হরাইজন্টাল X-পজিশন:</span>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={data.photoOffsetX ?? 50}
                      onChange={(e) => handleInputChange('photoOffsetX', parseInt(e.target.value))}
                      className="w-full accent-[#4EB829]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Classroom / Training Photo Uploader */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <label className="font-bold text-slate-800">ট্রেনিং/ক্লাসরুম ফটো (Classroom Image)</label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={data.showClassroomPhoto}
                    onChange={(e) => handleInputChange('showClassroomPhoto', e.target.checked)}
                    className="rounded accent-[#4EB829] w-4 h-4"
                  />
                  <span className="font-medium text-slate-700">প্রদর্শন করুন</span>
                </label>
              </div>

              {data.showClassroomPhoto && (
                <div className="flex items-center gap-3 pt-1">
                  {data.classroomPhotoUrl ? (
                    <img src={data.classroomPhotoUrl} alt="Classroom" className="w-16 h-12 object-cover rounded border border-slate-300" />
                  ) : (
                    <div className="w-16 h-12 bg-slate-200 rounded flex items-center justify-center text-slate-400">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                  )}
                  <label className="flex-1 cursor-pointer flex items-center justify-center gap-2 px-3 py-2 bg-[#0E385D] border border-[#163B66] rounded-lg text-white font-bold hover:bg-[#163B66] shadow-sm">
                    <Upload className="w-4 h-4 text-[#4EB829]" />
                    <span>ল্যাব ফটো আপলোড</span>
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 'classroomPhotoUrl')} />
                  </label>
                </div>
              )}
            </div>
          </div>
        )}

        {/* === TAB 5: LOGOS & BRANDING === */}
        {activeTab === 'branding' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
              <p className="text-slate-700 font-medium text-[11px] text-emerald-950">
                ⚡ পাবলিক ফোল্ডারের অফিসিয়াল লোগোগুলো ডিফল্ট ইমেজ হিসেবে সেট করা আছে। প্রয়োজনে নিজস্ব কাস্টম লোগো আপলোড করতে পারেন:
              </p>
              {(customLogos.primaryLogoUrl || customLogos.partnerLeftUrl || customLogos.partnerCenterUrl || customLogos.partnerRightUrl) && (
                <button
                  type="button"
                  onClick={() => onLogoUpload('resetAll', null)}
                  className="shrink-0 ml-2 px-2.5 py-1 text-[11px] font-bold text-rose-700 bg-rose-50 border border-rose-200 rounded-lg hover:bg-rose-100 flex items-center gap-1 shadow-sm"
                >
                  <RotateCcw className="w-3 h-3" /> সব ডিফল্টে রিসেট
                </button>
              )}
            </div>

            {/* 1. Primary Header Logo (Top Right) */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#0E385D]">১. মেইন হেডার লোগো (Top Right Logo)</span>
                {customLogos.primaryLogoUrl && (
                  <button 
                    onClick={() => onLogoUpload('primaryLogoUrl', null)}
                    className="text-[11px] font-bold text-rose-600 hover:text-rose-800 flex items-center gap-0.5"
                  >
                    <Trash2 className="w-3 h-3" /> ডিফল্টে ফিরুন
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <div className="w-20 h-10 bg-white rounded border border-slate-300 p-1 flex items-center justify-center shrink-0 shadow-sm">
                  <img 
                    src={customLogos.primaryLogoUrl || '/tns_logo.png'} 
                    alt="Touch & Solve Logo" 
                    className="h-full w-auto object-contain" 
                  />
                </div>
                <div className="text-[11px] text-slate-600 bg-white px-2.5 py-1.5 rounded border border-slate-200 font-medium flex-1 truncate">
                  {customLogos.primaryLogoUrl ? 'কাস্টম লোগো সক্রিয়' : 'ডিফল্ট: Touch & Solve (/tns_logo.png)'}
                </div>
                <label className="cursor-pointer flex items-center justify-center gap-1.5 px-3 py-2 bg-[#0E385D] border border-[#163B66] rounded-lg text-white font-bold hover:bg-[#163B66] shadow-sm shrink-0">
                  <Upload className="w-3.5 h-3.5 text-[#4EB829]" />
                  <span>{customLogos.primaryLogoUrl ? 'পরিবর্তন' : 'আপলোড'}</span>
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleCustomLogoUpload(e, 'primaryLogoUrl')} />
                </label>
              </div>
            </div>


            {/* 2. Industry Partner Logo (Top Left - Customizable) */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#0E385D]">২. ইন্ডাস্ট্রি পার্টনার লোগো (Industry Partner Logo)</span>
                {customLogos.partnerLeftUrl && (
                  <button 
                    onClick={() => onLogoUpload('partnerLeftUrl', null)}
                    className="text-[11px] font-bold text-rose-600 hover:text-rose-800 flex items-center gap-0.5"
                  >
                    <Trash2 className="w-3 h-3" /> ডিফল্টে ফিরুন
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <div className="w-20 h-10 bg-white rounded border border-slate-300 p-1 flex items-center justify-center shrink-0 shadow-sm">
                  <img 
                    src={customLogos.partnerLeftUrl || '/bcs_logo.png'} 
                    alt="Industry Partner Logo" 
                    className="h-full w-auto object-contain" 
                  />
                </div>
                <div className="text-[11px] text-slate-600 bg-white px-2.5 py-1.5 rounded border border-slate-200 font-medium flex-1 truncate">
                  {customLogos.partnerLeftUrl ? 'কাস্টম লোগো সক্রিয়' : 'ডিফল্ট: বাংলাদেশ কম্পিউটার সমিতি (/bcs_logo.png)'}
                </div>
                <label className="cursor-pointer flex items-center justify-center gap-1.5 px-3 py-2 bg-[#0E385D] border border-[#163B66] rounded-lg text-white font-bold hover:bg-[#163B66] shadow-sm shrink-0">
                  <Upload className="w-3.5 h-3.5 text-[#4EB829]" />
                  <span>{customLogos.partnerLeftUrl ? 'পরিবর্তন' : 'আপলোড'}</span>
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleCustomLogoUpload(e, 'partnerLeftUrl')} />
                </label>
              </div>
            </div>


            {/* 3. Center Left Sponsor Logo */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#0E385D]">৩. সেন্টার বাম লোগো (Center Left Logo)</span>
                {customLogos.partnerCenterUrl && (
                  <button 
                    onClick={() => onLogoUpload('partnerCenterUrl', null)}
                    className="text-[11px] font-bold text-rose-600 hover:text-rose-800 flex items-center gap-0.5"
                  >
                    <Trash2 className="w-3 h-3" /> ডিফল্টে ফিরুন
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <div className="w-20 h-10 bg-white rounded border border-slate-300 p-1 flex items-center justify-center shrink-0 shadow-sm">
                  <img 
                    src={customLogos.partnerCenterUrl || '/asset_project_logo.png'} 
                    alt="Center Left Sponsor" 
                    className="h-full w-auto object-contain" 
                  />
                </div>
                <div className="text-[11px] text-slate-600 bg-white px-2.5 py-1.5 rounded border border-slate-200 font-medium flex-1 truncate">
                  {customLogos.partnerCenterUrl ? 'কাস্টম লোগো সক্রিয়' : 'ডিফল্ট: ASSET Project (/asset_project_logo.png)'}
                </div>
                <label className="cursor-pointer flex items-center justify-center gap-1.5 px-3 py-2 bg-[#0E385D] border border-[#163B66] rounded-lg text-white font-bold hover:bg-[#163B66] shadow-sm shrink-0">
                  <Upload className="w-3.5 h-3.5 text-[#4EB829]" />
                  <span>{customLogos.partnerCenterUrl ? 'পরিবর্তন' : 'আপলোড'}</span>
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleCustomLogoUpload(e, 'partnerCenterUrl')} />
                </label>
              </div>
            </div>


            {/* 4. Center Right Sponsor Logo */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#0E385D]">৪. সেন্টার ডান লোগো (Center Right Logo)</span>
                {customLogos.partnerRightUrl && (
                  <button 
                    onClick={() => onLogoUpload('partnerRightUrl', null)}
                    className="text-[11px] font-bold text-rose-600 hover:text-rose-800 flex items-center gap-0.5"
                  >
                    <Trash2 className="w-3 h-3" /> ডিফল্টে ফিরুন
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <div className="w-20 h-10 bg-white rounded border border-slate-300 p-1 flex items-center justify-center shrink-0 shadow-sm">
                  <img 
                    src={customLogos.partnerRightUrl || '/world-bank.png'} 
                    alt="Center Right Sponsor" 
                    className="h-full w-auto object-contain" 
                  />
                </div>
                <div className="text-[11px] text-slate-600 bg-white px-2.5 py-1.5 rounded border border-slate-200 font-medium flex-1 truncate">
                  {customLogos.partnerRightUrl ? 'কাস্টম লোগো সক্রিয়' : 'ডিফল্ট: THE WORLD BANK (/world-bank.png)'}
                </div>
                <label className="cursor-pointer flex items-center justify-center gap-1.5 px-3 py-2 bg-[#0E385D] border border-[#163B66] rounded-lg text-white font-bold hover:bg-[#163B66] shadow-sm shrink-0">
                  <Upload className="w-3.5 h-3.5 text-[#4EB829]" />
                  <span>{customLogos.partnerRightUrl ? 'পরিবর্তন' : 'আপলোড'}</span>
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleCustomLogoUpload(e, 'partnerRightUrl')} />
                </label>
              </div>
            </div>


            {/* Ticker & Batch */}
            <div className="border-t border-slate-200 pt-3 space-y-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">টপ নিউজ স্ক্রলার প্রিফিক্স (Company Title)</label>
                <input
                  type="text"
                  value={data.topTickerPrefix || ''}
                  onChange={(e) => handleInputChange('topTickerPrefix', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg font-bold"
                  placeholder="Touch & Solve Ltd."
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">টপ নিউজ স্ক্রলার টেক্সট (Top Ticker Text)</label>
                <input
                  type="text"
                  value={data.topTickerText || ''}
                  onChange={(e) => handleInputChange('topTickerText', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">ব্যাচ প্রিফিক্স (Prefix)</label>
                  <input
                    type="text"
                    value={data.batchPrefix || ''}
                    onChange={(e) => handleInputChange('batchPrefix', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg font-medium"
                    placeholder="ব্যাচ #"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">ব্যাচ নম্বর (Batch #)</label>
                  <input
                    type="text"
                    value={data.batchNo || ''}
                    onChange={(e) => handleInputChange('batchNo', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg font-bold"
                    placeholder="২০২৪"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* === TAB 6: THEMES & COLORS === */}
        {activeTab === 'theme' && (
          <div className="space-y-4">
            <label className="block font-bold text-slate-700 mb-1">নিউজ কালার থিম নির্বাচন করুন</label>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {COLOR_THEMES.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => onThemeSelect(theme)}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                    activeThemeId === theme.id
                      ? 'border-[#4EB829] ring-2 ring-[#4EB829]/30 bg-emerald-50/70 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span 
                      className="w-4 h-4 rounded-full border border-black/10" 
                      style={{ backgroundColor: theme.primary }} 
                    />
                    <span className="w-4 h-4 rounded-full border border-black/10" 
                      style={{ backgroundColor: theme.badgeBg }} 
                    />
                    <span className="w-4 h-4 rounded-full border border-black/10" 
                      style={{ backgroundColor: theme.secondary }} 
                    />
                  </div>
                  <span className="font-extrabold text-slate-900 text-[11px]">{theme.name}</span>
                </button>
              ))}
            </div>

            {/* Custom Palette Color Pickers */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <span className="font-bold text-slate-800 block">কাস্টম কালার প্যালেট নির্বাচন (Custom Palette):</span>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-600 mb-1">মেইন হেডার কালার</label>
                  <input
                    type="color"
                    value={customThemeColors.primary}
                    onChange={(e) => onCustomThemeChange('primary', e.target.value)}
                    className="w-full h-9 rounded cursor-pointer border border-slate-300"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-600 mb-1">ব্র্যান্ড গ্রিন/একসেন্ট</label>
                  <input
                    type="color"
                    value={customThemeColors.secondary}
                    onChange={(e) => onCustomThemeChange('secondary', e.target.value)}
                    className="w-full h-9 rounded cursor-pointer border border-slate-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-600 mb-1">নেম ব্যাজ ব্যাকগ্রাউন্ড</label>
                  <input
                    type="color"
                    value={customThemeColors.badgeBg}
                    onChange={(e) => onCustomThemeChange('badgeBg', e.target.value)}
                    className="w-full h-9 rounded cursor-pointer border border-slate-300"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-600 mb-1">টপ বার ব্যাকগ্রাউন্ড</label>
                  <input
                    type="color"
                    value={customThemeColors.topBarBg}
                    onChange={(e) => onCustomThemeChange('topBarBg', e.target.value)}
                    className="w-full h-9 rounded cursor-pointer border border-slate-300"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
