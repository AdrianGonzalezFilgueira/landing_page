import Image from "next/image";
import { Project } from "../../interfaces/Project";

export default function ProjectImage({ project }: { project: Project }) {
  return (
    <Image
      className="rounded-lg"
      width={500}
      height={250}
      src={project.image || "https://via.placeholder.com/500"}
      alt="project"
    />
  );
}
