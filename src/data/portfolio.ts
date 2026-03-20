export interface AppItem {
  name: string;
  category: string;
  playStoreId: string;
  tech?: string;
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
      { name: "Unicorns Match", category: "Dating", playStoreId: "com.dating.unicornsmatch", tech: "Android · Java", screenshots: ["unicornsmatch-1", "unicornsmatch-2", "unicornsmatch-3"] },
      { name: "Unicorn Treats", category: "Lifestyle", playStoreId: "com.eltonkola.unicorntreats", tech: "Android · Java", screenshots: ["unicorntreats-1", "unicorntreats-2", "unicorntreats-3"] },
      { name: "Zombie War Idle Defense", category: "Gaming", playStoreId: "com.zombie.war.idle.defense", tech: "Android · Java", screenshots: ["zombiewar-1", "zombiewar-2", "zombiewar-3"] },
      { name: "FNF Studio", category: "Gaming", playStoreId: "com.fnfstudio.ff", tech: "Android · Java", screenshots: ["fnfstudio-1", "fnfstudio-2", "fnfstudio-3"] },
      { name: "Wood Bolts Puzzle", category: "Puzzle", playStoreId: "com.uc.wood.bolts.puzzle", tech: "Android · Java", screenshots: ["woodbolts-1"] },
    ],
  },
  {
    id: "theme-design",
    name: "Theme Design Apps",
    years: "2014–2016",
    duration: "2 years",
    description: "Android customization and utility tools. QR solutions, interview prep, and fintech applications.",
    apps: [
      { name: "QR Code Creator", category: "Utility", playStoreId: "cn.appfly.qrcode.qrcreater", tech: "Android · Java" },
      { name: "Yumshu Interview", category: "Education", playStoreId: "com.interview.yumshu", tech: "Android · Kotlin" },
      { name: "Bank of Comm. HK", category: "Finance", playStoreId: "com.bankcomm.hkentp.f", tech: "Android · Kotlin" },
    ],
  },
  {
    id: "joynow",
    name: "Joynow Studio",
    years: "2016–2018",
    duration: "1.5 years",
    description: "Educational and lifestyle applications. Language learning, auction platforms, and streaming.",
    apps: [
      { name: "FlowChinese", category: "Education", playStoreId: "com.ycjia.flowchinese", tech: "Android · Kotlin" },
      { name: "Poly Auction HK", category: "Auction", playStoreId: "com.polyauctionhk.app", tech: "Android · Kotlin" },
      { name: "BoomShort Drama", category: "Entertainment", playStoreId: "com.boomshort.drama", tech: "Android · Kotlin" },
    ],
  },
  {
    id: "putaleng",
    name: "Putaleng",
    years: "2018–2021",
    duration: "3 years",
    description: "Enterprise-scale apps for education, hospitality, media, and the cultural sector in Hong Kong.",
    apps: [
      { name: "HKT Education Parent", category: "Education", playStoreId: "com.pccw.hktedu.parentapp", tech: "Android · Kotlin" },
      { name: "Murray Hong Kong", category: "Hospitality", playStoreId: "com.hkt.o2o.murray", tech: "Android · Kotlin" },
      { name: "Chartwells HK", category: "Food Service", playStoreId: "com.hkt.o2o.chartwells", tech: "Android · Kotlin" },
      { name: "SOS App", category: "Emergency", playStoreId: "com.sosapp.user", tech: "Android · Kotlin" },
      { name: "West Kowloon", category: "Culture", playStoreId: "hk.westkowloon.app", tech: "Android · Kotlin" },
    ],
  },
  {
    id: "tthmobi",
    name: "TTHmobi",
    years: "2021–2022",
    duration: "1.5 years",
    description: "Financial and media platforms. HKFP news, HKEJ media ecosystem, and private banking tools.",
    apps: [
      { name: "HKFP News", category: "News", playStoreId: "com.hongkongfreepress.app", tech: "Android · Kotlin" },
      { name: "HKEJ Education", category: "Education", playStoreId: "com.hkej.edu", tech: "Android · Kotlin" },
      { name: "HKEJ eReader", category: "News", playStoreId: "com.hkej.ereader", tech: "Android · Kotlin" },
      { name: "EJ Insight", category: "News", playStoreId: "com.hkej.ejinsight", tech: "Android · Kotlin" },
    ],
  },
  {
    id: "octopusx",
    name: "OctopusX",
    years: "2022–2024",
    duration: "2 years",
    description: "Current era. HSBC Private Banking, inventory management, and enterprise finance applications.",
    apps: [
      { name: "HSBC Private Banking HK", category: "Finance", playStoreId: "com.hsbcprivatebank.hsbcprivatebankinghk", tech: "Android · Kotlin · Compose" },
      { name: "Staff HK", category: "Enterprise", playStoreId: "com.none.staff.hk.production", tech: "Android · Kotlin" },
      { name: "HSBC Bangladesh Calendar", category: "Utility", playStoreId: "bd.com.hsbc.hsbcbangladeshcalendar", tech: "Android · Kotlin" },
      { name: "Inventory App", category: "Business", playStoreId: "com.numob.inventoryapp", tech: "Android · Kotlin · Compose" },
    ],
  },
];

export const profile = {
  name: "Chak Hin Yau",
  title: "Senior Mobile Developer",
  location: "Hong Kong",
  university: "The Chinese University of Hong Kong (CUHK)",
  languages: ["English", "中文", "日本語"],
  headline: "12 Years. 6 Studios. 20+ Global Products.",
  subheadline: "Senior Mobile Developer based in Hong Kong. CUHK Alumnus. Expert in the full mobile lifecycle from Unicorn Studio to OctopusX.",
  bio: "Trilingual engineer (English, Chinese, Japanese) specializing in high-scale Android and Cross-platform architectures. 12 years of delivering robust codebases for finance, media, and gaming.",
  certifications: ["Google Associate Android Developer", "Google Certified App Developer"],
  totalYears: 12,
  totalApps: 24,
};
