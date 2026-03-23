export interface AppItem {
  name: string;
  category: string;
  playStoreId: string;
  tech?: string;
  /** Short technical summary for work history cards */
  technicalNote?: string;
  skills: string[];
  screenshots?: string[];
}

export interface Studio {
  id: string;
  name: string;
  years: string;
  duration: string;
  description: string;
  apps: AppItem[];
}

export const studios: Studio[] = [
  {
    id: "unicorn",
    name: "Unicorn Studio Official",
    years: "2024–2025",
    duration: "1 year",
    description: "The foundation. Dating, gaming, and utility apps that launched a 12-year mobile engineering career.",
    apps: [
      { name: "Unicorns Match", category: "Dating", playStoreId: "com.dating.unicornsmatch", tech: "Android · Java", technicalNote: "Java client with chat/match flows, push (FCM), and in-app billing on the Play stack.", skills: ["Real-time Chat", "Match Algorithm", "Profile Verification", "Push Notifications", "In-app Purchases"], screenshots: ["unicornsmatch-1", "unicornsmatch-2", "unicornsmatch-3"] },
      { name: "Unicorn Treats", category: "Lifestyle", playStoreId: "com.eltonkola.unicorntreats", tech: "Android · Java", technicalNote: "RecyclerView-based feeds, local persistence for bookmarks, and tuned image loading/caching.", skills: ["Recipe Feed", "Bookmark Sync", "Offline Mode", "Image Caching", "User Reviews"], screenshots: ["unicorntreats-1", "unicorntreats-2", "unicorntreats-3"] },
      { name: "Zombie War Idle Defense", category: "Gaming", playStoreId: "com.zombie.war.idle.defense", tech: "Android · Java", technicalNote: "Idle game loop, ad mediation (e.g. AdMob), optional cloud save and economy balancing.", skills: ["Idle Rewards", "Enemy Wave Logic", "Ad Mediation", "Cloud Save", "Performance Tuning"], screenshots: ["zombiewar-1", "zombiewar-2", "zombiewar-3"] },
      { name: "FNF Studio", category: "Gaming", playStoreId: "com.fnfstudio.ff", tech: "Android · Java", technicalNote: "Rhythm gameplay with tight audio–input sync, level data, and lightweight graphics pipeline.", skills: ["Rhythm Input", "Audio Sync", "Level Progression", "Skin System", "Leaderboard Integration"], screenshots: ["fnfstudio-1", "fnfstudio-2", "fnfstudio-3"] },
    ],
  },
  {
    id: "hktdc-council",
    name: "Hong Kong Trade Development Council",
    years: "2022–2024",
    duration: "2 years",
    description:
      "QR and branding tools, social chat & party games, plus the trade exhibition marketplace—digital e-Badge check-in and e-Coupons for Hong Kong and global sourcing events.",
    apps: [
      { name: "QR Code Generator Pro", category: "Utility", playStoreId: "cn.appfly.qrcode.qrcreater", tech: "Android · Java", technicalNote: "QR matrix generation, bitmap styling (colors/gradients/logos), export and Android share intents.", skills: ["Gradient & Color Themes", "Logo & Portrait Center", "Poster & Social Posts", "Foreground / Background", "Brand Icon Presets"], screenshots: ["qrgenpro-1", "qrgenpro-2", "qrgenpro-3"] },
      { name: "Heyo Chat:Party games&Chat", category: "Social", playStoreId: "com.interview.yumshu", tech: "Android · Kotlin", technicalNote: "Kotlin UI for rooms and discovery; real-time or polling backends; lightweight game modules.", skills: ["Live Party Rooms", "Regional & Hot Discovery", "PK & Ranking Events", "Mini Games & Carrom", "Invitation Rewards"], screenshots: ["heyo-1", "heyo-2", "heyo-3"] },
      { name: "HKTDC Marketplace", category: "Business", playStoreId: "com.bankcomm.hkentp.f", tech: "Android · Kotlin", technicalNote: "REST-driven exhibition data, digital e-Badge/NFC flows, coupons and in-app messaging patterns.", skills: ["Exhibition Discovery", "Seamless e-Badge Check-in", "NFC & Contactless Entry", "e-Coupon Collection", "Buyer & Messaging Hub"], screenshots: ["hktdc-1", "hktdc-2", "hktdc-3"] },
    ],
  },
  {
    id: "joynow",
    name: "Joynow Studio",
    years: "2021–2022",
    duration: "1 year",
    description: "Educational and lifestyle applications. Language learning, auction platforms, and streaming.",
    apps: [
      { name: "BoomShort", category: "Entertainment", playStoreId: "com.ycjia.flowchinese", tech: "Android · Kotlin", technicalNote: "Video streaming (e.g. ExoPlayer), catalog APIs, recommendations and watchlist state.", skills: ["HD Streaming", "Short Drama Catalog", "For You & Rankings", "My List & Binge Watch", "Search & Profiles"], screenshots: ["boomshort-1", "boomshort-2", "boomshort-3"] },
      { name: "Poly Auction HK", category: "Auction", playStoreId: "com.polyauctionhk.app", tech: "Android · Kotlin", technicalNote: "Live auction UX with real-time price updates, wallet flows, and push for bid events.", skills: ["Live Bidding", "Lot Detail Views", "Bid Notifications", "User Wallet", "Auction Scheduling"], screenshots: ["polyauction-1", "polyauction-2", "polyauction-3"] },
      { name: "AI Detector: Text Image Video", category: "Utility", playStoreId: "com.boomshort.drama", tech: "Android · Kotlin", technicalNote: "Media pickers, inference pipelines for text/image/video, and confidence UI with tabbed navigation.", skills: ["Text Origin Analysis", "Image Artifact Scan", "Video Frame Consistency", "Confidence & Summary Reports", "Multi-tab Navigation"], screenshots: ["aidetector-1", "aidetector-2", "aidetector-3"] },
    ],
  },
  {
    id: "hkej-company",
    name: "Hong Kong Economic Journal Company Limited",
    years: "2018–2021",
    duration: "3 years",
    description: "Enterprise-scale apps for education, hospitality, media, and the cultural sector in Hong Kong.",
    apps: [
      { name: "信報教育", category: "Education", playStoreId: "com.pccw.hktedu.parentapp", tech: "Android · Kotlin", technicalNote: "Structured education content, magazine-style layouts, and bilingual article delivery.", skills: ["DSE & Exam Content", "Quest & iNKY Titles", "Chinese & English Tracks", "Digital Magazine Layout", "School & Elite Positioning"], screenshots: ["hkej-edu-1", "hkej-edu-2", "hkej-edu-3"] },
      { name: "EJ Insight", category: "News", playStoreId: "com.hkej.ejinsight", tech: "Android · Kotlin", technicalNote: "Editorial feeds from CMS APIs, article reader (WebView/native hybrid), sharing and navigation.", skills: ["Editorial Feed", "Hong Kong Coverage", "Article Reader", "Menu & Navigation", "Social Sharing"], screenshots: ["ejinsight-hkej-1", "ejinsight-hkej-2", "ejinsight-hkej-3"] },
      { name: "My Wayfoong", category: "Enterprise", playStoreId: "com.hkt.o2o.chartwells", tech: "Android · Kotlin", technicalNote: "Internal staff app: authenticated feeds, HR-style modules, and profile-centric navigation.", skills: ["Newsroom Feed", "Staff Activities", "Offers & Benefits", "Wellness Programs", "Profile & Me Tab"], screenshots: ["wayfoong-1", "wayfoong-2", "wayfoong-3"] },
      { name: "SOS App", category: "Emergency", playStoreId: "com.sosapp.user", tech: "Android · Kotlin", technicalNote: "Location services, maps integration, background updates, and FCM for emergency/team flows.", skills: ["HKSOS Emergency", "Team & QR Join", "Real-time Location Share", "Outdoor Routes & Weather", "Activity Tracking"], screenshots: ["hksos-1", "hksos-2", "hksos-3"] },
      { name: "West Kowloon", category: "Culture", playStoreId: "hk.westkowloon.app", tech: "Android · Kotlin", technicalNote: "Ticketing APIs, venue/event content, parking data, and multi-locale resource handling.", skills: ["Digital Tickets", "Venues & WestK", "Art Park & Events", "Parking Availability", "Multilingual Content"], screenshots: ["westkowloon-1", "westkowloon-2", "westkowloon-3"] },
    ],
  },
  {
    id: "hkt",
    name: "Hong Kong Telecommunications (HKT) Ltd",
    years: "2016–2018",
    duration: "2 years",
    description: "School catering, merchant services apps, and HKFP news delivery for Hong Kong users.",
    apps: [
      { name: "GourMax Catering by HKT", category: "Catering", playStoreId: "com.hkej.edu", tech: "Android · Kotlin", technicalNote: "School meal ordering, notices, and payment hooks integrated with HKT merchant services.", skills: ["School Meal Ordering", "Onboarding & Branding", "Notice Board & Promos", "Messages & Payments", "HKT Merchant Integration"], screenshots: ["gourmax-1", "gourmax-2", "gourmax-3"] },
      { name: "Seamart Catering by HKT", category: "Catering", playStoreId: "com.hkej.ereader", tech: "Android · Kotlin", technicalNote: "Parent/student profiles, multi-month ordering windows, promos, and secure session handling.", skills: ["Flexible Scheduling", "Secure Login", "Parent & Student Profiles", "Tap & Go Promotions", "Multi-month Ordering"], screenshots: ["seamart-1", "seamart-2", "seamart-3"] },
      { name: "Hong Kong Free Press HKFP by HKT", category: "News", playStoreId: "com.hongkongfreepress.app", tech: "Android · Kotlin", technicalNote: "News API–driven feeds, article reader, membership/support flows, and offline article cache.", skills: ["Breaking News Feed", "Article Reader", "Topics & Search", "Support & Membership", "Offline Reading"], screenshots: ["hkfpbyhkt-1", "hkfpbyhkt-2", "hkfpbyhkt-3"] },
      { name: "Murray by HKT", category: "Catering", playStoreId: "com.hkt.o2o.murray", tech: "Android · Kotlin", technicalNote: "Catering ordering aligned with HKT O2O patterns: schedules, profiles, and merchant-backed payments.", skills: ["School Meal Ordering", "Flexible Scheduling", "HKT Merchant Services", "Login & Profiles", "Tap & Go Promotions"], screenshots: ["murrayhkt-1", "murrayhkt-2", "murrayhkt-3"] },
    ],
  },
  {
    id: "octopusx",
    name: "OctopusX",
    years: "2014–2016",
    duration: "2 years",
    description: "Current era. HSBC Private Banking, healthcare apps, automotive platforms, and enterprise products.",
    apps: [
      { name: "HSBC Private Banking HK", category: "Finance", playStoreId: "com.hsbcprivatebank.hsbcprivatebankinghk", tech: "Android · Kotlin · Compose", technicalNote: "Jetpack Compose UI, hardened networking, biometric login, and compliance-aware messaging.", skills: ["Portfolio Overview", "Secure Messaging", "Investment Insights", "Biometric Security", "Regulatory Compliance"], screenshots: ["hsbcprivatebankinghk-1", "hsbcprivatebankinghk-2", "hsbcprivatebankinghk-3"] },
      { name: "Staff HK", category: "Enterprise", playStoreId: "com.none.staff.hk.production", tech: "Android · Kotlin", technicalNote: "Shift and task models, attendance sync, in-app chat, and manager reporting endpoints.", skills: ["Shift Planning", "Task Assignment", "Attendance Sync", "Internal Chat", "Manager Reports"], screenshots: ["staffhk-1", "staffhk-2", "staffhk-3"] },
      { name: "BuyCar.hk-香港新車二手車買賣平台", category: "Automotive", playStoreId: "com.lemongene.buycarapp", tech: "Android · Kotlin", technicalNote: "Search/filter pipelines, listing detail, analytics views, and multi-step sell/quote flows.", skills: ["Search & Filters", "Listing Compare", "Price Trends & Analytics", "Multi-dealer Quotes", "Sell & Valuation Flow"], screenshots: ["buycarhk-1", "buycarhk-2", "buycarhk-3"] },
      { name: "Hong Kong Adventist Hospital", category: "Healthcare", playStoreId: "hk.org.hkah.hkah", tech: "Android · Kotlin · Compose", technicalNote: "Compose screens for booking and queues, hospital APIs, billing summaries, and PHI-safe patterns.", skills: ["Outpatient Booking", "e-Queue & Check-in", "Clinic Schedules", "Billing & Records", "Health Information"], screenshots: ["hkadventist-1", "hkadventist-2", "hkadventist-3"] },
    ],
  },
];

export const profile = {
  name: "Chak Hin Yau",
  title: "Senior Mobile Developer",
  location: "Hong Kong",
  university: "The Chinese University of Hong Kong (CUHK)",
  languages: ["English", "中文", "日本語"],
  headline: "12 Years. 6 Studios. 50+ Mobile Products.",
  subheadline: "Senior Mobile Developer based in Hong Kong. CUHK Alumnus. Expert in the full mobile lifecycle from Unicorn Studio to OctopusX.",
  bio: "Trilingual engineer (English, Chinese, Japanese) specializing in high-scale Android and Cross-platform architectures. 12 years of delivering robust codebases for finance, media, and gaming.",
  certifications: ["Google Associate Android Developer", "Google Certified App Developer"],
  totalYears: 12,
  /** Total mobile apps / products shipped over career (portfolio marketing figure) */
  totalApps: 50,
  /** Apps with full cards & screenshots in Work History */
  workHistoryAppsCount: 23,
  /** Figma design portfolio (UI/UX work) */
  figmaPortfolioUrl:
    "https://www.figma.com/design/9bKBKiSGkSPFXqP5p3xN0f/Chak-Hin-Yau--s-Portfolio?node-id=0-1&t=HHcUwSjkOxIxTJ75-1",
};
