interface Resource {
  name: string;
  description: string;
  url: string;
}

interface ResourceSection {
  title: string;
  resources: Resource[];
}

const resourceSections: ResourceSection[] = [
  {
    title: "Computer Science Fundamentals",
    resources: [
      {
        name: "Harvard CS50x",
        description:
          "Harvard's introduction to computer science and the art of programming.",
        url: "https://cs50.harvard.edu/x/",
      },
      {
        name: "Placeholder Resource",
        description: "A short description of this resource.",
        url: "#",
      },
    ],
  },
  {
    title: "Web Development",
    resources: [
      {
        name: "freeCodeCamp JavaScript Course",
        description:
          "A comprehensive JavaScript course for beginners from freeCodeCamp.",
        url: "https://www.freecodecamp.org/news/full-javascript-course-for-beginners/",
      },
      {
        name: "Placeholder Resource",
        description: "A short description of this resource.",
        url: "#",
      },
    ],
  },
  {
    title: "Practice & Exercises",
    resources: [
      {
        name: "Exercism",
        description:
          "Free coding exercises and mentorship across 70+ programming languages.",
        url: "https://exercism.org",
      },
      {
        name: "Placeholder Resource",
        description: "A short description of this resource.",
        url: "#",
      },
    ],
  },
  {
    title: "Books",
    resources: [
      {
        name: "Placeholder Book",
        description: "A short description of this book.",
        url: "#",
      },
      {
        name: "Placeholder Book",
        description: "A short description of this book.",
        url: "#",
      },
    ],
  },
  {
    title: "Tools & Utilities",
    resources: [
      {
        name: "Placeholder Tool",
        description: "A short description of this tool.",
        url: "#",
      },
      {
        name: "Placeholder Tool",
        description: "A short description of this tool.",
        url: "#",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="grid items-left justify-items-center min-h-[calc(100vh-theme(spacing.32))] p-8 pt-24 pb-20 gap-16 sm:p-20 sm:pt-32 text-[#E0C4B0] font-[family-name:var(--font-cormorant-garamond)]">
      <div className="flex flex-col gap-[32px] items-center sm:items-start max-w-4xl w-full">
        <h1 className="text-7xl font-bold text-[#F4B400]">Resources</h1>
        <p className="text-3xl">
          Here are some resources I found useful when starting out in software
          engineering. I hope you find them useful too!
        </p>

        {resourceSections.map((section, index) => (
          <section
            key={section.title}
            className={`flex flex-col gap-4 w-full${index > 0 ? " mt-8" : ""}`}
          >
            <h2 className="text-3xl font-semibold text-[#E6C564]">
              {section.title}
            </h2>
            <div className="flex flex-col gap-4">
              {section.resources.map((resource, i) => (
                <div key={`${resource.name}-${i}`} className="flex flex-col gap-1">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-[#F5E9DA] hover:text-[#D4A017] transition-colors duration-200 w-fit"
                  >
                    {resource.name}
                  </a>
                  <p className="text-lg">{resource.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
