# Han Portfolio

프론트엔드 개발자 Han의 포트폴리오 사이트입니다.  
Next.js 기반으로 개인 프로젝트, 실사용 목적 사이드 프로젝트, 기술 스택과 경험을 정리하고 있습니다.

> 현재는 포트폴리오 사이트 UI 및 구조를 정리하는 단계이며,  
> 메인 프로젝트인 **Cafe Ledger (카페 내부 예치금/미수금 관리 웹앱)** 을 함께 개발할 예정입니다.

---

## 🔧 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **UI**: React 19, Tailwind CSS 4
- **Build & Tooling**
  - ESLint (Next.js 기본 설정 기반)
  - React Compiler (Performance & DX)
- **구조적 특징**
  - `constants/` 에서 텍스트/레이아웃/스타일 상수 분리
  - `components/` 에서 페이지 레이아웃, 섹션, UI 컴포넌트 모듈화
  - `design/` (예정) – Design Token & Typography, Button 등 UI 시스템 정리

---

## 🗂 주요 화면

### 1. Home (`/`)

- 간단한 자기소개 및 현재 작업 중인 프로젝트 안내
- GitHub 프로필 링크
- Projects 페이지로 이동 버튼
- Tailwind 유틸리티를 그대로 쓰는 대신,
  - `constants/home.ts` 에 텍스트/클래스 분리
  - `HomePage`, `HeroSection`, `CTASection` 등으로 컴포넌트 쪼개어 재사용성과 가독성 향상

### 2. Projects (`/projects`)

- 진행 중/완료/과거 프로젝트를 한 페이지에서 확인 가능
- 현재 포함된 항목:
  - **Cafe Ledger** – 카페 내부 예치금/미수금 관리용 웹앱 (진행 중)
  - **Holidays** – 2023년 진행한 라이프스타일/커머스 PWA 메인 프로젝트
  - **Toy Projects x4** – 메뉴 계산/예약/툴 형태의 토이 4개, 모듈화 경험 포함
- `constants/projects.ts` 에서:
  - `Project` 타입 정의
  - 프로젝트 리스트/상태/라벨 관리
  - 페이지 타이틀/설명/레이아웃 상수 관리
- `ProjectCard` 컴포넌트로 카드 UI 분리

---

## 📁 프로젝트 구조 (요약)

```txt
src/
  app/
    page.tsx              # Home → <HomePage />만 렌더
    projects/
      page.tsx            # Projects → <ProjectsPage />만 렌더
  components/
    HomePage.tsx
    layout/
      PageLayout.tsx      # 공통 레이아웃 (패딩/폭/배경 등)
    sections/
      HeroSection.tsx     # Home 상단 소개 섹션
      CTASection.tsx      # Home CTA 영역 (GitHub / View Projects 버튼)
    projects/
      ProjectsPage.tsx    # Projects 페이지 컨테이너
      ProjectCard.tsx     # 프로젝트 카드 UI
  constants/
    home.ts               # Home 관련 텍스트/클래스/링크 상수
    projects.ts           # Project 타입, 리스트, 레이아웃/카피 상수
  types/
    jsx.d.ts              # JSX.IntrinsicElements 타입 보정 (React 19 + TS5)
```
