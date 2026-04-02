import Image from "next/image";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  year: number;
  tag: string;
  url: string;
  urlLabel: string;
  logo?: string;
}

const personalProjects: Project[] = [
  {
    title: "Personal Portfolio Website",
    description:
      "A personal portfolio site built with Next.js 15 and Tailwind CSS, featuring a custom colour system, content cards, and Google Analytics integration.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: 2025,
    tag: "Web App",
    url: "https://github.com/irshadirfanah",
    urlLabel: "GitHub",
  },
];

const workProjects: Project[] = [
  {
    title: "Project Title",
    description:
      "A brief description of the project and its impact.",
    techStack: ["Technology 1", "Technology 2"],
    year: 2024,
    tag: "Web App",
    url: "#",
    urlLabel: "View Live",
    logo: "/logos/economist.jpeg",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-4 p-6 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4A017]/40 transition-colors duration-200"
    >
      <div className="flex items-center justify-between text-sm">
        <span>{project.tag}</span>
        <span>{project.year}</span>
      </div>
      <h3 className="text-xl font-semibold text-[#F4B400]">
        {project.title}
      </h3>
      {project.logo && (
        <div className="flex items-center gap-2">
          <Image
            src={project.logo}
            alt=""
            width={24}
            height={24}
            className="rounded-sm object-contain"
          />
        </div>
      )}
      <p className="text-sm text-[#F5E9DA]">
        {project.techStack.join(" · ")}
      </p>
      <p className="text-base leading-relaxed">{project.description}</p>
      <span className="text-[#F5E9DA] hover:text-[#D4A017] text-sm mt-auto pt-2 transition-colors duration-200">
        {project.urlLabel} &rarr;
      </span>
    </a>
  );
}

export default function ProjectsPage() {
  return (
    <div className="grid items-left justify-items-center min-h-[calc(100vh-theme(spacing.32))] p-8 pt-24 pb-20 gap-16 sm:p-20 sm:pt-32 text-[#E0C4B0] font-[family-name:var(--font-cormorant-garamond)]">
      <div className="flex flex-col gap-[32px] items-center sm:items-start max-w-4xl w-full">
        <h1 className="text-7xl font-bold text-[#F4B400]">Projects</h1>
        <p className="text-3xl">Cool things I have built.</p>

        <section className="flex flex-col gap-6 w-full">
          <h2 className="text-3xl font-semibold text-[#E6C564]">
            Personal Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {personalProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6 w-full mt-8">
          <h2 className="text-3xl font-semibold text-[#E6C564]">
            Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {workProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
