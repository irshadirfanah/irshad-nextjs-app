import { FC } from "react";

const AboutPage: FC = () => {
  return (
    <div className="grid items-left justify-items-center min-h-[calc(100vh-theme(spacing.32))] p-8 pt-24 pb-20 gap-16 sm:p-20 sm:pt-32 text-[#D6B8A2] font-[family-name:var(--font-cormorant-garamond)]">
      <div className="flex flex-col gap-[32px] items-center sm:items-start max-w-4xl">
        <h1 className="text-7xl font-bold">Resources</h1>
        <div className="text-2xl">
          <p className="text-3xl">
            Here are some resources I found useful when starting out in software
            engineering. I hope you find them useful too!
          </p>
          <li>Harvard CS50x</li>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
