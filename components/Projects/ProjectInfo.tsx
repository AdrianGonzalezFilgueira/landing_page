import { Project } from "../../interfaces/Project";

export default function ProjectInfo({ project }: { project: Project }) {
  return (
    <article className="md:max-w-xl">
      <header className="flex justify-center">
        <h3 className="text-center text-5xl font-bold text-cyan-400">
          {project.name}
        </h3>
      </header>
      <div>
        <p className="break-all text-justify text-lg font-bold text-gray-700">
          {project.description}
        </p>
      </div>

      <div className="flex justify-around py-10 xl:flex-row">
        <a
          href={project.website}
          className="flex items-center rounded-3xl bg-gradient-to-r from-[#B845FF] to-[#0029FF] px-12 py-3 text-center text-xl font-extrabold uppercase"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
        
        <a
          href={project.github}
          className="flex items-center rounded-3xl bg-gradient-to-r from-[#FFBC57] to-[#A532FF] px-12 py-3 text-center text-xl font-extrabold uppercase"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>

      <div className="flex flex-wrap justify-evenly">
        {project.technologies.map((technology, i) => (
          <div
            key={i}
            className="bg-gradient-to-r from-[#FFBC57] to-[#A532FF] p-1"
          >
            <div className="bg-white">
              <span className="bg-gradient-to-r from-[#FFBC57] to-[#A532FF] bg-clip-text p-1 text-center text-lg uppercase text-transparent">
                {technology}
              </span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
