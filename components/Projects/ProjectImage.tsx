import Image from "next/image";
import { Project } from "../../interfaces/Project";

export default function ProjectImage({ project }: { project: Project }) {
  return (
    <article>
      <Image
        className="rounded-lg"
        width={250}
        height={250}
        src={project.image || "https://via.placeholder.com/100"}
        alt="project"
      />
    </article>
  );
}
