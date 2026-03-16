export default function ProjectsPage() {
  return (
    <div className="grid items-left justify-items-center min-h-[calc(100vh-theme(spacing.32))] p-8 pt-24 pb-20 gap-16 sm:p-20 sm:pt-32 text-[#D6B8A2] font-[family-name:var(--font-cormorant-garamond)]">
      <div className="flex flex-col gap-[32px] items-center sm:items-start max-w-4xl">
        <h1 className="text-7xl font-bold">Projects</h1>
        <div className="text-2xl">
          <p className="text-3xl">Cool things I have built.</p>
        </div>
      </div>
    </div>
  );
}
