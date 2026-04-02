import Image from "next/image";

interface WritingPiece {
  title: string;
  description: string;
  institution: string;
  year: number;
  tag: string;
  url: string;
  logo?: string;
}

const writingPieces: WritingPiece[] = [
  // {
  //   title:
  //     "Evaluating the Efficacy of mRNA Vaccine Platforms in Pandemic Response",
  //   description:
  //     "A review of mRNA vaccine development timelines during COVID-19, comparing platform adaptability and immunogenicity outcomes across clinical trials.",
  //   institution: "University College London",
  //   year: 2025,
  //   tag: "Public Policy",
  //   url: "#",
  //   logo: "/logos/ucl.jpeg",
  // },
  {
    title:
      "Differential Techniques for Age Estimation of Human Skeletal Remains",
    description:
      "An analysis of essential biomedical and forensic anthropology techniques for human skeletalage estimation.",
    institution: "Queen Mary University of London",
    year: 2021,
    tag: "Biomedical Research",
    url: "https://drive.google.com/file/d/10YtbdW2ba2pWyJR3lqvtvA-yUEUuB4Pi/view",
    logo: "/logos/qmul.jpeg",
  },
  {
    title: "Relationship Between Gene Expression Levels in Breast Cancer",
    description:
      "Investigating the relationship between expression levels of Ect2 with HAS2, ETS1 and EGR1 in breast cancer metastasis.",
    institution: "Ngee Ann Polytechnic, Singapore",
    year: 2015,
    tag: "Biomedical Research",
    url: "https://drive.google.com/file/d/1SqfrQcZB3IA5KgZ0TEhqE0eqD1c94pEJ/view",
    logo: "/logos/np.jpeg",
  },
];

export default function WritingPage() {
  return (
    <div className="grid items-left justify-items-center min-h-[calc(100vh-theme(spacing.32))] p-8 pt-24 pb-20 gap-16 sm:p-20 sm:pt-32 text-[#E0C4B0] font-[family-name:var(--font-cormorant-garamond)]">
      <div className="flex flex-col gap-[32px] items-center sm:items-start max-w-4xl w-full">
        <h1 className="text-7xl font-bold text-[#F4B400]">Writing</h1>
        <p className="text-3xl">
          Here are some things I&apos;ve written for academic and non-academic
          purposes.
        </p>

        <section className="flex flex-col gap-6 w-full">
          <h2 className="text-3xl font-semibold text-[#E6C564]">
            Academic Writing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {writingPieces.map((piece) => (
              <a
                key={piece.title}
                href={piece.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-4 p-6 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4A017]/40 transition-colors duration-200"
              >
                <div className="flex items-center justify-between text-sm">
                  <span>{piece.tag}</span>
                  <span>{piece.year}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#F4B400]">
                  {piece.title}
                </h3>
                <div className="flex items-center gap-2">
                  {piece.logo && (
                    <Image
                      src={piece.logo}
                      alt={`${piece.institution} logo`}
                      width={24}
                      height={24}
                      className="rounded-sm object-contain"
                    />
                  )}
                  <p className="text-base text-[#F5E9DA]">
                    {piece.institution}
                  </p>
                </div>
                <p className="text-base leading-relaxed">{piece.description}</p>
                <span className="text-[#F5E9DA] hover:text-[#D4A017] text-sm mt-auto pt-2 transition-colors duration-200">
                  Read &rarr;
                </span>
              </a>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-6 w-full">
          <h2 className="text-3xl font-semibold text-[#E6C564]">
            Non-Academic Writing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <a
              href="#"
              className="flex flex-col gap-4 p-6 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4A017]/40 transition-colors duration-200"
            >
              <div className="flex items-center justify-between text-sm">
                <span>Essay</span>
                <span>2026</span>
              </div>
              <h3 className="text-xl font-semibold text-[#F4B400]">
                Placeholder Title
              </h3>
              <p className="text-base leading-relaxed">Coming soon.</p>
              <span className="text-[#F5E9DA] hover:text-[#D4A017] text-sm mt-auto pt-2 transition-colors duration-200">
                Read &rarr;
              </span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
