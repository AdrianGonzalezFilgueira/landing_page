import { Project } from "../interfaces/Project";

export default function ProjectInfo({ project }: { project: Project }) {
  return (
    <article>
      <header className="flex justify-center">
        <h3 className="font-bold text-cyan-400 text-xl text-center">
          {project.name}
        </h3>
      </header>
      <h3 className="font-bold text-cyan-400 text-xl text-center">
        {project.description}
      </h3>
    </article>
  );
}
