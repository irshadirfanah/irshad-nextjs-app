import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <div>
      {/* Centered intro section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen gap-4 text-[#F4B400] font-[family-name:var(--font-amiri)]">
        <h1 className="text-7xl font-bold">Hello! I&apos;m Irshad.</h1>
        <h2 className="text-3xl font-medium">
          Biochemist by training, Software Engineer by accident.
        </h2>
        <ScrollIndicator />
      </section>

      {/* Scroll-down content */}
      <div className="text-[#E0C4B0] font-[family-name:var(--font-cormorant-garamond)]">
        {/* Bio / Mission Statement */}
        <section className="pt-24 pb-16 px-8 sm:px-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-3xl">
              I&apos;m a London-based Software Engineer at The Economist, with
              roots in the biochemical sciences and healthcare, and now public
              policy. I enjoy building impactful things, and seek to shape
              technology policy.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="py-16 px-8 sm:px-20">
          <div className="flex flex-col gap-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-[#E6C564]">
              Experience
            </h2>
            <ul className="list-disc list-inside space-y-2 text-left text-xl">
              <li>
                2025 to Present - Started MSc in Science, Engineering,
                Technology, and Public Policy at University College London
              </li>
              <li>2023 to Present - Software Engineer at The Economist</li>
              <li>2022 - IT Operations Analyst at The Economist</li>
              <li>2021 - Junior Paramedic & NHS 111 Health Advisor</li>
              <li>2021 - Graduated from Queen Mary University of London</li>
              <li>2020 - COVID-19 Frontline Worker, Singapore</li>
              <li>
                2016 - Started BSc Biochemistry at Queen Mary University of
                London
              </li>
            </ul>
          </div>
        </section>

        {/* What I'm listening to */}
        <section className="py-16 pb-20 px-8 sm:px-20">
          <div className="flex flex-col gap-8 items-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold self-start text-[#E6C564]">
              What I&apos;m listening to
            </h2>
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/7EHoNqwZCQPQmQOg8a3oOV?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}
