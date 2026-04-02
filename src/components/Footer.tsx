import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 flex gap-[24px] flex-wrap items-center justify-center relative">
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/contact"
      >
        <Image
          aria-hidden
          src="/typewriter.svg"
          alt="Contact"
          width={30}
          height={30}
        />
      </Link>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/irshadirfanah"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/github.svg"
          alt="Github"
          width={30}
          height={30}
        />
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/in/irshad-shaik/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/linkedin.svg"
          alt="LinkedIn"
          width={30}
          height={30}
        />
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://x.com/irshadirfanah"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/twitter.svg"
          alt="Twitter"
          width={30}
          height={30}
        />
      </a>
      <div className="absolute right-4 text-sm font-light text-[#D4A017] font-[family-name:var(--font-reem-kufi)] text-right">
        <div>© 2026 Irshad Irfanah</div>
        <div>
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F5E9DA] hover:text-[#D4A017] transition-colors"
          >
            Next.js
          </a>
        </div>
      </div>
    </footer>
  );
}
