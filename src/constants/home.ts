import type { I18nDict } from "@/lib/i18n";

export const LINKS = {
  github: "https://github.com/lbj23han",
  projects: "/projects",
  youtube: "https://youtu.be/338z1IbviAc",
  email: "ljhan0215@gmail.com",
  linkedin: "https://www.linkedin.com/in/lbj23han/",
} as const;

export const HOME_TEXT: I18nDict<{
  eyebrow: string;
  title: string;
  meta: string;
  projectsCta: string;
  contactCta: string;
  metricsTitle: string;
  videoTitle: string;
  videoDesc: string;
  videoCta: string;
  selectedTitle: string;
  selectedDesc: string;
  needLabel: string;
  executionLabel: string;
  resultLabel: string;
  aboutTitle: string;
  aboutDesc: string;
  stackTitle: string;
  archiveTitle: string;
  archiveDesc: string;
}> = {
  ko: {
    eyebrow: "MARKET SENSE × EXECUTION × GROWTH",
    title: "무엇이 필요하고 무엇이 팔리는지 찾아, 콘텐츠와 서비스로 만듭니다",
    meta: "유튜브 채널 90일 조회수 150만+ · 구독자 6,000명+ · 첫 달 수익 $3,500+ 달성. 여러 웹·앱 서비스를 기획·출시하고 유료 전환까지 직접 설계했습니다.",
    projectsCta: "프로젝트 보기",
    contactCta: "연락하기",
    metricsTitle: "숫자로 확인한 시장 반응",
    videoTitle: "일본 시니어 타깃 채널 대표 콘텐츠",
    videoDesc: "시장과 경쟁 콘텐츠를 조사하고 주제, 제목, 썸네일, 콜드 오픈을 반복 실험했습니다. 아래 성과는 이 채널을 운영하며 얻은 결과입니다.",
    videoCta: "YouTube에서 보기",
    selectedTitle: "수요를 발견하고 결과까지 만든 프로젝트",
    selectedDesc: "무엇을 만들었는지가 아니라, 어떤 수요를 발견했고 어떻게 실행해 무엇을 검증했는지로 정리했습니다.",
    needLabel: "발견한 니즈 / 시장",
    executionLabel: "실행",
    resultLabel: "성과 / 검증",
    aboutTitle: "아이디어를 시장 반응까지 연결하는 세 가지 힘",
    aboutDesc: "생성형 AI를 리서치, 콘텐츠 제작, 데이터 구조화, 반복 업무 자동화에 적극 활용해 실행 속도를 높입니다.",
    stackTitle: "직접 실행하는 도구",
    archiveTitle: "그 밖의 실험과 프로젝트",
    archiveDesc: "AI Nutrition Coach, FcSquadMeter 등 작은 도구와 이전 작업도 꾸준히 만들고 검증했습니다.",
  },
  en: {
    eyebrow: "MARKET SENSE × EXECUTION × GROWTH",
    title: "I find what people need and will pay for, then turn it into content and products.",
    meta: "Achieved 1.5M+ YouTube views and 6,000+ subscribers in 90 days, with $3,500+ in first-month revenue. Planned and launched multiple web and app products, including real paid conversion.",
    projectsCta: "View projects",
    contactCta: "Contact me",
    metricsTitle: "Market response, in numbers",
    videoTitle: "Featured content for a Japanese senior audience",
    videoDesc: "Researched the market and competitors, then iterated on topics, titles, thumbnails, and cold opens. The metrics below came from operating this channel.",
    videoCta: "Watch on YouTube",
    selectedTitle: "Projects that connect demand to results",
    selectedDesc: "Organized by the need I found, how I executed, and what the market ultimately validated.",
    needLabel: "Need / Market",
    executionLabel: "Execution",
    resultLabel: "Result / Validation",
    aboutTitle: "Three strengths that connect ideas to market response",
    aboutDesc: "I actively use generative AI for research, content production, data structuring, and workflow automation to move faster.",
    stackTitle: "Tools I execute with",
    archiveTitle: "More experiments and projects",
    archiveDesc: "I also continue to build and validate smaller tools such as AI Nutrition Coach and FcSquadMeter.",
  },
} as const;
