export default function Home() {
  return (
    <div>
      {/* Centered intro section */}
      <section className="flex flex-col items-center justify-center min-h-screen gap-4 text-[#F4B400] font-[family-name:var(--font-amiri)]">
        <h1 className="text-7xl font-bold">Hello! I&apos;m Irshad.</h1>
        <h2 className="text-3xl font-medium">
          Biochemist by training, Software Engineer by accident.
        </h2>
      </section>

      {/* Scroll-down content */}
      <section className="pt-24 pb-20 px-8 sm:px-20 flex flex-col gap-16 text-[#D6B8A2] font-[family-name:var(--font-cormorant-garamond)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start justify-items-center gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col gap-[32px] items-start max-w-4xl">
            <h2 className="text-3xl font-semibold">Experience</h2>
            <ul className="list-disc list-inside space-y-2 text-left">
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
          <div className="flex items-start justify-center w-full">
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/7EHoNqwZCQPQmQOg8a3oOV?utm_source=generator&theme=0"
              width="70%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
