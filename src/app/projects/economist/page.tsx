import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

const features: Feature[] = [
  {
    title: "Homepage",
    description:
      "Homepage layout for web and mobile, including hero carousel and featured articles.",
    url: "https://www.economist.com/",
    image: "/images/homepage.png",
  },
  {
    title: "The World in Brief",
    description: "A concise summary of global news and events.",
    url: "https://www.economist.com/the-world-in-brief",
    image: "/images/twib.png",
  },
  {
    title: "Rich Topic Pages",
    description: "Detailed pages covering various topics in depth.",
    url: "https://www.economist.com/topics/britain",
    image: "/images/rich-topic-page.png",
  },
  {
    title: "For You",
    description:
      "Personalized content recommendations based on your interests.",
    url: "https://www.economist.com/for-you",
    image: "/images/for-you.png",
  },
  {
    title: "Podcasts",
    description:
      "A variety of podcasts covering global news, culture, and more.",
    url: "https://www.economist.com/audio/podcasts",
    image: "/images/podcast.png",
  },
  {
    title: "Videos",
    description: "A variety of videos covering global news, culture, and more.",
    url: "https://www.economist.com/video",
    image: "/images/video.png",
  },
];

export default function EconomistPage() {
  return (
    <div className="grid items-left justify-items-center min-h-[calc(100vh-theme(spacing.32))] p-8 pt-24 pb-20 gap-16 sm:p-20 sm:pt-32 text-[#E0C4B0] font-[family-name:var(--font-cormorant-garamond)]">
      <div className="flex flex-col gap-[32px] items-center sm:items-start max-w-4xl w-full">
        <div className="flex items-center gap-4">
          <Image
            src="/logos/economist.jpeg"
            alt="The Economist logo"
            width={48}
            height={48}
            className="rounded-sm object-contain"
          />
          <h1 className="text-7xl font-bold text-[#F4B400]">The Economist</h1>
        </div>
        <p className="text-3xl">
          Here are some core features I have worked on.
        </p>

        <section className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-4 p-6 rounded-lg bg-white/5 border border-white/10"
              >
                {feature.image && (
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={300}
                    className="rounded-md object-cover w-full"
                  />
                )}
                <h3 className="text-xl font-semibold text-[#F4B400]">
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed">
                  {feature.description}
                </p>
                {feature.url && (
                  <a
                    href={feature.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5E9DA] hover:text-[#D4A017] text-sm mt-auto pt-2 transition-colors duration-200"
                  >
                    View &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
