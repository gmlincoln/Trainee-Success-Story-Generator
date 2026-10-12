export const COLOR_THEMES = [
  {
    id: 'touch_solve_brand',
    name: 'Corporate Deep Navy (Default)',
    primary: '#0E385D', // Corporate Navy Blue
    secondary: '#4EB829', // Corporate Brand Green
    accent: '#163B66',
    headerBg: '#0E385D',
    headerTextColor: '#FFFFFF',
    badgeBg: '#4EB829',
    badgeTextColor: '#FFFFFF',
    topBarBg: '#071F38',
    boxBg: '#F0FDF4',
    rightBarHeaderColor: '#0E385D',
    fontFamily: "'Hind Siliguri', sans-serif"
  },
  {
    id: 'crimson_news',
    name: 'দৈনিক সংবাদ Crimson',
    primary: '#800020', // News maroon/crimson
    secondary: '#D4AF37', // Gold
    accent: '#900C3F',
    headerBg: '#800020',
    headerTextColor: '#FFFFFF',
    badgeBg: '#F59E0B',
    badgeTextColor: '#000000',
    topBarBg: '#0F172A',
    boxBg: '#FFF5F5',
    rightBarHeaderColor: '#800020',
    fontFamily: "'Noto Serif Bengali', serif"
  },
  {
    id: 'royal_maroon',
    name: 'Royal Maroon & Gold',
    primary: '#6B0014',
    secondary: '#EAB308',
    accent: '#8B0000',
    headerBg: '#6B0014',
    headerTextColor: '#FFFFFF',
    badgeBg: '#EAB308',
    badgeTextColor: '#1E293B',
    topBarBg: '#18181B',
    boxBg: '#FEF2F2',
    rightBarHeaderColor: '#6B0014',
    fontFamily: "'Anek Bangla', sans-serif"
  },
  {
    id: 'emerald_news',
    name: 'Emerald Executive',
    primary: '#064E3B',
    secondary: '#10B981',
    accent: '#047857',
    headerBg: '#064E3B',
    headerTextColor: '#FFFFFF',
    badgeBg: '#10B981',
    badgeTextColor: '#FFFFFF',
    topBarBg: '#022C22',
    boxBg: '#ECFDF5',
    rightBarHeaderColor: '#064E3B',
    fontFamily: "'Hind Siliguri', sans-serif"
  }
];

export const DEFAULT_LOGOS = {
  primaryLogoUrl: '/tns_logo.png',
  partnerLeftUrl: '/bcs_logo.png',
  partnerCenterUrl: '/asset_project_logo.png',
  partnerRightUrl: '/world-bank.png'
};

export const PRESET_CANDIDATES = [
  {
    id: 'mahbuba',
    name: 'মাহবুবা আক্তার মিতা',
    designation: 'LOGO DESIGNER',
    quote: '"দক্ষতা উন্নয়নের মাধ্যমে কর্মসংস্থানের সুযোগ"',
    story: 'মাহবুবা আক্তার মিতা ASSET Project-এর Graphic Design প্রশিক্ষণের মাধ্যমে BCS Training Institute-এর অধীনে Logo Design, Adobe Photoshop, Illustrator ও Creative Design-এর মতো প্রয়োজনীয় দক্ষতা অর্জন করে নিজের ক্যারিয়ার গড়ার নতুন সুযোগ তৈরি করেছেন। বর্তমানে অর্জিত দক্ষতাকে কাজে লাগিয়ে তিনি একজন আত্মবিশ্বাসী Logo Designer হিসেবে সাফল্যের পথে এগিয়ে চলেছেন।',
    
    // Header & Ticker
    headerSubTitle: 'দৈনিক',
    headerNewsTitle: 'সাফল্যের গল্প',
    topTickerPrefix: 'BCS TRAINING INSTITUTE',
    topTickerText: 'তাদের প্রশিক্ষণার্থীদের সাফল্যের গল্পগুলো তুলে ধরছে এবং প্রতিদিন অনুপ্রেরণা জোগাচ্ছে।',
    batchPrefix: 'ব্যাচ #',
    batchNo: '২০২৪',
    
    // Summary Data Cards
    field1Label: 'প্রোগ্রাম:',
    field1Value: 'ENTERPRISE-BASED TRAINING (EBT)',
    field2Label: 'প্রশিক্ষণ প্রতিষ্ঠান:',
    field2Value: 'BCS TRAINING INSTITUTE',
    field3Label: 'পেশা:',
    field3Value: 'LOGO DESIGNER',
    field4Label: 'ফলাফল:',
    field4Value: 'COMPETENT',
    field5Label: 'বর্তমান কর্মস্থান:',
    field5Value: 'TECH SOLUTION LTD.',
    field6Label: 'মাসিক বেতন:',
    field6Value: '১০,০০০ টাকা',

    // Callout & Footer
    highlightsText: 'দক্ষ জনশক্তি ও সফল ক্যারিয়ার গঠনে BCS TRAINING INSTITUTE',
    highlightsDesc: 'কোর্স শেষে শিক্ষার্থীদের সফল ক্যারিয়ার গড়তে প্রতিষ্ঠানটি সরাসরি ইন্টার্নশিপ এবং জব প্লেসমেন্ট সহায়তা প্রদান করে থাকে।',
    classroomLabel: '[ক্লাশ রুম বা ল্যাব ছবি]',
    detailsBtnText: 'বিস্তারিত',
    footerLeftText: 'ক্যারিয়ার',
    footerRightText: 'সাফল্যের গল্প',

    // Legacy / Photos
    program: 'ENTERPRISE-BASED TRAINING (EBT)',
    trainingInstitute: 'BCS TRAINING INSTITUTE',
    profession: 'LOGO DESIGNER',
    result: 'COMPETENT',
    presentEmployer: 'TECH SOLUTION LTD.',
    salary: '১০,০০০ টাকা',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    classroomPhotoUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
    showClassroomPhoto: true,
    primaryLogo: 'bcs',
    partnerLogoRight: 'world_bank',
    partnerLogoCenter: 'asset_govt',
    partnerLogoLeft: 'bcs',
    themeId: 'touch_solve_brand'
  },
  {
    id: 'arifa',
    name: 'আরিফা সুলতানা',
    designation: 'ADMINISTRATIVE OFFICER',
    quote: '"দক্ষতা উন্নয়নের মাধ্যমে কর্মসংস্থানের সুযোগ"',
    story: 'আরিফা সুলতানা ASSET Project-এর প্রশিক্ষণের মাধ্যমে প্রয়োজনীয় পেশাগত ও প্রশাসনিক দক্ষতা অর্জন করে নিজের ক্যারিয়ার গড়ার নতুন সুযোগ তৈরি করেছেন। বর্তমানে অর্জিত দক্ষতাকে কাজে লাগিয়ে তিনি Source Learning Academy-তে Administrative Officer হিসেবে আত্মবিশ্বাসের সঙ্গে কর্মজীবনে এগিয়ে চলেছেন।',
    
    headerSubTitle: 'দৈনিক',
    headerNewsTitle: 'সাফল্যের গল্প',
    topTickerPrefix: 'BCS ACADEMY',
    topTickerText: 'তাদের প্রশিক্ষণার্থীদের সাফল্যের গল্পগুলো তুলে ধরছে এবং প্রতিদিন অনুপ্রেরণা জোগাচ্ছে।',
    batchPrefix: 'ব্যাচ #',
    batchNo: '২০২৪',
    
    field1Label: 'প্রোগ্রাম:',
    field1Value: 'ENTERPRISE-BASED TRAINING (EBT)',
    field2Label: 'প্রশিক্ষণ প্রতিষ্ঠান:',
    field2Value: 'BCS ACADEMY',
    field3Label: 'পেশা:',
    field3Value: 'ADMINISTRATIVE OFFICER',
    field4Label: 'ফলাফল:',
    field4Value: 'COMPETENT',
    field5Label: 'বর্তমান কর্মস্থান:',
    field5Value: 'SOURCE LEARNING ACADEMY',
    field6Label: 'মাসিক বেতন:',
    field6Value: '২০,০০০ টাকা',

    highlightsText: 'দক্ষ জনশক্তি ও সফল ক্যারিয়ার গঠনে BCS ACADEMY',
    highlightsDesc: 'কোর্স শেষে শিক্ষার্থীদের সফল ক্যারিয়ার গড়তে প্রতিষ্ঠানটি সরাসরি ইন্টার্নশিপ এবং জব প্লেসমেন্ট সহায়তা প্রদান করে থাকে।',
    classroomLabel: '[ক্লাশ রুম বা ল্যাব ছবি]',
    detailsBtnText: 'বিস্তারিত',
    footerLeftText: 'ক্যারিয়ার',
    footerRightText: 'সাফল্যের গল্প',

    program: 'ENTERPRISE-BASED TRAINING (EBT)',
    trainingInstitute: 'BCS ACADEMY',
    profession: 'ADMINISTRATIVE OFFICER',
    result: 'COMPETENT',
    presentEmployer: 'SOURCE LEARNING ACADEMY',
    salary: '২০,০০০ টাকা',
    photoUrl: 'https://images.unsplash.com/photo-1580894732413-a9236b907584?q=80&w=800&auto=format&fit=crop',
    classroomPhotoUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    showClassroomPhoto: true,
    primaryLogo: 'bcs',
    partnerLogoRight: 'world_bank',
    partnerLogoCenter: 'asset_govt',
    partnerLogoLeft: 'bcs',
    themeId: 'touch_solve_brand'
  },
  {
    id: 'tanvir',
    name: 'তানভীর আহমেদ',
    designation: 'FULL-STACK DEVELOPER',
    quote: '"প্রযুক্তির শক্তিতে স্বাবলম্বী ভবিষ্যৎ গঠন"',
    story: 'তানভীর আহমেদ ICT Academy-র Advanced Web Development ও React JS বুটক্যাম্প সফলভাবে সম্পন্ন করে সফটওয়্যার ইঞ্জিনিয়ারিংয়ে দক্ষতা বৃদ্ধি করেছেন। বর্তমানে তিনি Software Tech-এ Full-Stack Developer হিসেবে কর্মরত আছেন।',
    
    headerSubTitle: 'দৈনিক',
    headerNewsTitle: 'সাফল্যের গল্প',
    topTickerPrefix: 'ICT ACADEMY',
    topTickerText: 'নতুন প্রজন্মের আইটি নেতৃত্ব তৈরিতে নিরলস কাজ করে যাচ্ছে।',
    batchPrefix: 'ব্যাচ #',
    batchNo: '২০২৫',
    
    field1Label: 'প্রোগ্রাম:',
    field1Value: 'ADVANCED SOFTWARE BOOTCAMP',
    field2Label: 'প্রশিক্ষণ প্রতিষ্ঠান:',
    field2Value: 'ICT ACADEMY',
    field3Label: 'পেশা:',
    field3Value: 'SOFTWARE ENGINEER',
    field4Label: 'ফলাফল:',
    field4Value: 'HIGHLY COMPETENT',
    field5Label: 'বর্তমান কর্মস্থান:',
    field5Value: 'SOFTWARE TECH LTD.',
    field6Label: 'মাসিক বেতন:',
    field6Value: '৩৫,০০০ টাকা',

    highlightsText: 'ইনোভেশন ও টেকসই ক্যারিয়ার গঠনে ICT ACADEMY',
    highlightsDesc: 'বাস্তবধর্মী প্রজেক্ট ও রিয়েল-টাইম লাইভ মেন্টরশিপের মাধ্যমে আইটি পেশাদার তৈরির বিশ্বস্ত প্রতিষ্ঠান।',
    classroomLabel: '[ক্লাশ রুম বা ল্যাব ছবি]',
    detailsBtnText: 'বিস্তারিত',
    footerLeftText: 'ক্যারিয়ার',
    footerRightText: 'সাফল্যের গল্প',

    program: 'ADVANCED SOFTWARE BOOTCAMP',
    trainingInstitute: 'ICT ACADEMY',
    profession: 'SOFTWARE ENGINEER',
    result: 'HIGHLY COMPETENT',
    presentEmployer: 'SOFTWARE TECH LTD.',
    salary: '৩৫,০০০ টাকা',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    classroomPhotoUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    showClassroomPhoto: true,
    primaryLogo: 'bcs',
    partnerLogoRight: 'world_bank',
    partnerLogoCenter: 'asset_govt',
    partnerLogoLeft: 'bcs',
    themeId: 'touch_solve_brand'
  }
];
