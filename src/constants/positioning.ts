import type { Locale } from "@/lib/i18n";

type Localized = Record<Locale, string>;

export type CaseStudy = {
  slug: string;
  name: Localized;
  category: Localized;
  need: Localized;
  execution: Localized;
  result: Localized;
  resultValue?: string;
  links: Array<{ label: Localized; href: string }>;
};

export const YOUTUBE_VIDEO = "https://youtu.be/338z1IbviAc";

export const metrics = [
  { value: "150만+", enValue: "1.5M+", label: { ko: "유튜브 90일 누적 조회수", en: "YouTube views in 90 days" } },
  { value: "6,000+", enValue: "6,000+", label: { ko: "90일 구독자 증가", en: "Subscribers gained in 90 days" } },
  { value: "$3,500+", enValue: "$3,500+", label: { ko: "첫 달 채널 수익", en: "First-month channel revenue" }, note: { ko: "첫 수익 정산 기준", en: "Based on the first revenue settlement" } },
  { value: "15분 32초", enValue: "15m 32s", label: { ko: "평균 시청 시간", en: "Average watch time" } },
] as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "youtube-senior-jp",
    name: { ko: "일본 시니어 유튜브 채널", en: "Japanese Senior YouTube Channel" },
    category: { ko: "콘텐츠 비즈니스 · 시장 검증", en: "Content business · Market validation" },
    need: { ko: "해외 시니어 시장에서 수익화 가능한 장편 스토리 콘텐츠 수요를 포착했습니다.", en: "Identified demand for monetizable long-form story content in the overseas senior market." },
    execution: { ko: "배경지식 없이 시장과 경쟁 콘텐츠를 조사하고, 주제·제목·썸네일·서사 구조를 데이터로 반복 실험했습니다. 초반 이탈을 줄이기 위해 콜드 오픈을 도입했습니다.", en: "Researched the market and competitors from scratch, then iterated on topics, titles, thumbnails, and story structure using performance data. Introduced cold opens to reduce early drop-off." },
    result: { ko: "90일 조회수 150만+, 구독자 6,000+, 첫 달 수익 $3,500+, 평균 시청 시간 15분 32초를 달성했습니다.", en: "Reached 1.5M+ views and 6,000+ new subscribers in 90 days, $3,500+ in first-month revenue, and a 15m 32s average watch time." },
    resultValue: "1.5M+ / 6K+ / $3.5K+",
    links: [{ label: { ko: "대표 영상", en: "Featured video" }, href: YOUTUBE_VIDEO }],
  },
  {
    slug: "updown-brief",
    name: { ko: "그래서 오르냐 내리냐", en: "UpDown Brief" },
    category: { ko: "앱인토스 · 경제뉴스 분석", en: "Apps in Toss · Economic news analysis" },
    need: { ko: "어려운 경제 정보가 내 투자와 생활에 어떤 영향을 주는지 쉽게 알고 싶은 수요를 발견했습니다.", en: "Saw demand for an easier way to understand how economic news affects investments and daily life." },
    execution: { ko: "경제뉴스를 시장·환율·금리·생활 영향으로 재구성하고, 무료·단건·구독 기능 차등화와 출석 포인트 기반 재방문 구조를 설계했습니다.", en: "Reframed news around markets, FX, rates, and daily-life impact, with free, one-off, and subscription tiers plus attendance points for retention." },
    result: { ko: "누적 사용자 2,000명+를 확보했고 실제 단건 결제와 구독 결제가 발생했습니다. 현재 운영 중입니다.", en: "Reached 2,000+ cumulative users and generated real one-off and subscription purchases. Currently in operation." },
    resultValue: "2,000+ USERS",
    links: [{ label: { ko: "서비스 보기", en: "Open service" }, href: "https://updown-brief.vercel.app" }],
  },
  {
    slug: "cafe-ledger",
    name: { ko: "Cafe Ledger", en: "Cafe Ledger" },
    category: { ko: "매장 운영 · 업무 시스템", en: "Store operations · Workflow system" },
    need: { ko: "실제 매장에서 예약, 매출, 정산이 따로 관리되어 누락과 중복이 발생하는 문제를 확인했습니다.", en: "Found that fragmented reservation, sales, and settlement workflows caused omissions and duplicate entries in a real store." },
    execution: { ko: "예약·매출·정산을 하나의 흐름으로 통합하고, 자연어로 내용을 입력하면 구조화된 데이터로 바꾸는 AI 입력 보조 기능을 만들었습니다.", en: "Unified reservations, sales, and settlement, and added AI-assisted natural-language input that converts entries into structured data." },
    result: { ko: "입력 오류를 약 30% 줄였으며 현재 실제 매장에서 사용 중입니다.", en: "Reduced input errors by approximately 30% and is currently used in a real store." },
    resultValue: "-30% ERRORS",
    links: [{ label: { ko: "서비스 보기", en: "Open service" }, href: "https://nescafe-admin-pwa.vercel.app" }],
  },
  {
    slug: "growth-experiments",
    name: { ko: "유입·수익화 실험", en: "Acquisition & Monetization Experiments" },
    category: { ko: "몸매체크 · 헬린이맵 · 꽃놀이맵", en: "MomeCheck · Hellinimap · Kkot Map" },
    need: { ko: "가벼운 도구로 사용자를 모으고 더 큰 서비스로 연결하는 퍼널의 가능성을 실험했습니다.", en: "Explored how lightweight tools could attract users and funnel them into larger services." },
    execution: { ko: "바이럴 결과 화면과 지도형 탐색 서비스를 만들고, 광고 배치와 포인트 보상을 핵심 흐름 이후에 연결했습니다.", en: "Built viral result screens and map-based discovery products, placing ads and point rewards after the core user flow." },
    result: { ko: "무엇이 유입과 전환을 만드는지 여러 서비스에 걸쳐 반복 검증하며 수익화 설계 경험을 쌓았습니다.", en: "Repeatedly tested what drives acquisition and conversion across multiple services while building monetization experience." },
    links: [
      { label: { ko: "헬린이맵", en: "Hellinimap" }, href: "https://헬린이맵.com" },
      { label: { ko: "몸매체크", en: "MomeCheck" }, href: "https://momecheck.vercel.app/" },
    ],
  },
  {
    slug: "public-policy-finder",
    name: { ko: "혜택줍줍", en: "Public Policy Finder" },
    category: { ko: "앱인토스 · 개인화 추천", en: "Apps in Toss · Personalization" },
    need: { ko: "지원 정책은 많지만 흩어진 조건 때문에 정작 내게 맞는 혜택을 찾기 어렵다는 문제를 봤습니다.", en: "Saw that users struggled to find relevant public benefits because eligibility data was fragmented and complex." },
    execution: { ko: "나이·소득·가구·지역 조건을 바탕으로 정책을 필터링하고 신청 가능성과 혜택 크기로 우선순위를 정했습니다.", en: "Filtered policies by age, income, household, and location, then ranked them by eligibility likelihood and benefit value." },
    result: { ko: "앱인토스 미니앱으로 출시해 운영 중이며 정책 수집과 추천 순위 갱신을 자동화했습니다.", en: "Launched and operating as an Apps in Toss mini app with automated policy collection and recommendation updates." },
    links: [
      { label: { ko: "서비스 보기", en: "Open service" }, href: "https://findmymoney.vercel.app" },
      { label: { ko: "GitHub", en: "GitHub" }, href: "https://github.com/lbj23han/benefit-finder" },
    ],
  },
];

export const strengths = [
  { title: { ko: "될 시장을 읽는 감각", en: "Read viable markets" }, desc: { ko: "검색량, 경쟁 콘텐츠, 사용자 반응에서 아직 충족되지 않은 수요를 찾습니다.", en: "Find unmet demand in search behavior, competition, and user response." } },
  { title: { ko: "직접 만드는 실행력", en: "Build directly" }, desc: { ko: "콘텐츠 기획부터 서비스 UI, 데이터 구조, 배포까지 아이디어를 직접 작동시킵니다.", en: "Turn ideas into working content and products, from UI and data to deployment." } },
  { title: { ko: "데이터 기반 검증·수익화", en: "Validate and monetize" }, desc: { ko: "조회, 이탈, 재방문, 결제 데이터를 보고 가설을 고치며 실제 전환으로 연결합니다.", en: "Use views, drop-off, retention, and payment data to improve hypotheses and drive conversion." } },
] as const;

export const stack = ["Next.js", "React", "TypeScript", "Supabase", "OpenAI API", "Apps in Toss", "Python", "FFmpeg"];
