import Image from "next/image";
import { useState } from "react";
import { Project } from "../../interfaces/Project";

export default function ProjectImage({ project }: { project: Project }) {
  const [showInfo, setShowInfo] = useState(false);

  return showInfo ? (
    <>
      <p>{project.name}</p>
      <p>{project.description}</p>
      <div>
        {project.technologies.map((tech) => (
          <p>{tech}</p>
        ))}
      </div>
      <button onClick={() => setShowInfo(!showInfo)}></button>
    </>
  ) : (
    <Image
      className="rounded-lg"
      width={500}
      height={250}
      src={project.image || "https://via.placeholder.com/500"}
      onClick={() => setShowInfo(!showInfo)}
      alt="project"
    />
  );
}
