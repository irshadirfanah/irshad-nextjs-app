export default function WritingPage() {
  return (
    <div className="grid items-left justify-items-center min-h-[calc(100vh-theme(spacing.32))] p-8 pt-24 pb-20 gap-16 sm:p-20 sm:pt-32 text-[#D6B8A2] font-[family-name:var(--font-cormorant-garamond)]">
      <div className="flex flex-col gap-[32px] items-center sm:items-start max-w-4xl">
        <h1 className="text-7xl font-bold">Writing</h1>
        <div className="text-2xl">
          <p className="text-3xl">
            Here are some things I&apos;ve written for my degrees at UCL and
            QMUL.
          </p>
          <li>I am so cool</li>
          <li>I like cool things</li>
          <li>My website is so cool</li>
        </div>
      </div>
    </div>
  );
}
