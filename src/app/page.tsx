import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            프론트엔드 개발자 Han 입니다 👋
          </h1>

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            현재 포트폴리오 웹사이트를 구축하면서, 실제 사용 목적의 프로젝트도
            함께 개발 중입니다. Next.js · React · TypeScript 기반으로 UI와
            사용자 경험에 집중하고 있습니다.
          </p>

          <p className="max-w-md text-sm leading-6 text-zinc-500 dark:text-zinc-400">
            최근 작업: <strong>Cafe Ledger</strong> (카페 내부 예치금 관리 웹앱)
          </p>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://github.com/lbj23han"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/github-mark.svg"
              alt="GitHub"
              width={16}
              height={16}
            />
            GitHub
          </a>

          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="/projects"
          >
            View Projects
          </a>
        </div>
      </main>
    </div>
  );
}
