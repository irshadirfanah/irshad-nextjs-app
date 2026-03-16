import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full p-4 flex justify-between items-center backdrop-blur-sm z-10 font-light text-[#F4B400] font-[family-name:var(--font-reem-kufi)]">
      <Link
        href="/"
        className="text-5xl transition-colors duration-200 hover:text-[#F9D5D3]"
      >
        <span dir="rtl" lang="ar">
          إرشاد
        </span>
      </Link>
      <nav className="flex gap-6">
        <Link href="/about" className="text-3xl hover:text-[#F9D5D3]">
          About
        </Link>
        <Link
          href="/writing"
          className="text-3xl transition-colors duration-200 hover:text-[#F9D5D3]"
        >
          Writing
        </Link>
        <Link
          href="/projects"
          className="text-3xl transition-colors duration-200 hover:text-[#F9D5D3]"
        >
          Projects
        </Link>
        <Link
          href="/resources"
          className="text-3xl transition-colors duration-200 hover:text-[#F9D5D3]"
        >
          Resources
        </Link>
        <Link
          href="/cv"
          className="text-3xl transition-colors duration-200 hover:text-[#F9D5D3]"
        >
          CV
        </Link>
      </nav>
    </header>
  );
}
