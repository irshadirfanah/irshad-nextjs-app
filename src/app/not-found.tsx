import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid items-left justify-items-center min-h-[calc(100vh-theme(spacing.32))] p-8 pt-24 pb-20 gap-16 sm:p-20 sm:pt-32 text-[#D6B8A2] font-[family-name:var(--font-cormorant-garamond)]">
      <div className="flex flex-col gap-[32px] items-center sm:items-start max-w-4xl">
        <h1 className="text-9xl font-bold text-[#F4B400]">Oops...</h1>
        <p className="text-3xl">
          Looks like the page you&apos;re looking for doesn&apos;t exist or has
          been moved.
        </p>
        <Link
          href="/"
          className="text-2xl text-[#D4A017] hover:text-[#F5E9DA] transition-colors"
        >
          Why not go back to homepage?
        </Link>
      </div>
    </div>
  );
}
