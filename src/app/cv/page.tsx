import { FC } from "react";

const CVPage: FC = () => {
  return (
    <div className="grid items-left justify-items-center min-h-[calc(100vh-theme(spacing.32))] p-8 pt-24 pb-20 gap-16 sm:p-20 sm:pt-32 text-[#E0C4B0] font-[family-name:var(--font-cormorant-garamond)]">
      <div className="flex flex-col gap-[32px] items-center sm:items-start max-w-4xl">
        <h1 className="text-7xl font-bold text-[#F4B400]">CV</h1>
        <div className="text-2xl">
          <p className="text-3xl">Here&apos;s my CV. It is so cool.</p>
        </div>
      </div>
    </div>
  );
};

export default CVPage;
