import { Project } from "../../interfaces/Project";

export default function ProjectInfo({ project }: { project: Project }) {
  return (
    <article className="max-w-xl">
      <header className="flex justify-center">
        <h3 className="font-bold text-cyan-400 text-5xl text-center">
          {project.name}
        </h3>
      </header>
      <div>
        <p className="font-bold text-gray-700 text-lg text-justify break-all">
          {project.description}
        </p>
      </div>

      <div className="flex flex-col justify-around xl:flex-row py-10">
        <a
          href={project.website}
          className="bg-gradient-to-r from-[#B845FF] to-[#0029FF] rounded-3xl font-extrabold px-12 py-3 text-center text-xl uppercase w-1/3"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
        <a
          href={project.github}
          className="bg-gradient-to-r from-[#FFBC57] to-[#A532FF] rounded-3xl font-extrabold px-12 py-3 text-center text-xl uppercase w-1/3"
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
              <span className="bg-gradient-to-r from-[#FFBC57] to-[#A532FF] bg-clip-text p-1 text-transparent text-center text-lg uppercase">
                {technology}
              </span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
