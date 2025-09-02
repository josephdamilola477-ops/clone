import Image from 'next/image';

const projects = [
  { id: 1, title: "Digital Canvas", year: "2024", image: "https://picsum.photos/seed/p1/800/1000", width: 800, height: 1000, dataAiHint: "abstract art" },
  { id: 2, title: "Brand Identity", year: "2024", image: "https://picsum.photos/seed/p2/800/600", width: 800, height: 600, dataAiHint: "logo design" },
  { id: 3, title: "E-commerce Platform", year: "2023", image: "https://picsum.photos/seed/p3/800/600", width: 800, height: 600, dataAiHint: "website mockup" },
  { id: 4, title: "Mobile App UI", year: "2023", image: "https://picsum.photos/seed/p4/800/1000", width: 800, height: 1000, dataAiHint: "app interface" },
  { id: 5, title: "Editorial Design", year: "2022", image: "https://picsum.photos/seed/p5/800/600", width: 800, height: 600, dataAiHint: "magazine layout" },
  { id: 6, title: "Interactive Installation", year: "2022", image: "https://picsum.photos/seed/p6/800/1000", width: 800, height: 1000, dataAiHint: "light installation" },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
        <Image
          src={project.image}
          alt={project.title}
          width={project.width}
          height={project.height}
          className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          data-ai-hint={project.dataAiHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-white/80">{project.year}</p>
        </div>
    </div>
);

export function Projects() {
  const half = Math.ceil(projects.length / 2);
  const firstColumnProjects = projects.slice(0, half);
  const secondColumnProjects = projects.slice(half);

  return (
    <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-primary mb-8">Selected Projects</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-8 md:w-1/2">
            {firstColumnProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
        <div className="flex flex-col gap-8 md:w-1/2">
            {secondColumnProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  );
}
