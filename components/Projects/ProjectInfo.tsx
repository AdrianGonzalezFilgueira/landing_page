import { Project } from "../../interfaces/Project";

export default function ProjectInfo({ project }: { project: Project }) {
  return (
    <article className="max-w-xl">
      <header className="flex justify-center">
        <h3 className="font-bold text-cyan-400 text-5xl text-center">
          {project.name}
        </h3>
      </header>
      <p className="font-bold text-gray-700 text-lg text-justify break-all">
        {project.description}
      </p>
    </article>
  );
}
