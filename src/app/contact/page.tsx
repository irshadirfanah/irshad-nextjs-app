export default function ContactPage() {
  return (
    <div className="grid items-left justify-items-center min-h-[calc(100vh-theme(spacing.32))] p-8 pt-24 pb-20 gap-16 sm:p-20 sm:pt-32 text-[#E0C4B0] font-[family-name:var(--font-cormorant-garamond)]">
      <div className="flex flex-col gap-[32px] items-center sm:items-start max-w-4xl">
        <h1 className="text-7xl font-bold text-[#F4B400]">Contact</h1>
        <p className="text-3xl">
          You can get in touch with me via{" "}
          <a
            href="mailto:iishaikf@gmail.com"
            className="text-[#F4B400] hover:underline"
          >
            email
          </a>
          .
        </p>
      </div>
    </div>
  );
}
