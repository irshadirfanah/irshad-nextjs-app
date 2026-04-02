import { FC } from "react";

const AboutPage: FC = () => {
  return (
    <div className="grid items-left justify-items-center min-h-[calc(100vh-theme(spacing.32))] p-8 pt-24 pb-20 gap-16 sm:p-20 sm:pt-32 text-[#E0C4B0] font-[family-name:var(--font-cormorant-garamond)]">
      <div className="flex flex-col gap-[32px] items-center sm:items-start max-w-4xl">
        <h1 className="text-7xl font-bold text-[#F4B400]">Hello! I&apos;m Irshad.</h1>
        <div className="text-2xl">
          <p className="text-3xl">
            I&apos;m a London-based Software Engineer at The Economist, with
            roots in the biochemical sciences and healthcare. I enjoy building
            impactful things, and seek to widen access to healthcare through
            technology. Off-screen, I am an avid hobbyist, and a fan of film
            photography.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
