export default function ContactPage() {
  return (
    <div className="grid items-left justify-items-center min-h-[calc(100vh-theme(spacing.32))] p-8 pt-24 pb-20 gap-16 sm:p-20 sm:pt-32 text-[#F5E9DA] font-[family-name:var(--font-cormorant-garamond)]">
      <div className="flex flex-col gap-[32px] items-center sm:items-start w-full">
        <h1 className="text-7xl font-bold">Contact</h1>
        <p>Get in touch with me:</p>
        <ul className="flex flex-col gap-4">
          <li>
            <a
              href="mailto:iishaikf@gmail.com"
              className="hover:underline hover:underline-offset-4"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
