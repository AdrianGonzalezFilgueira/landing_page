import Image from "next/image";
import { useState } from "react";
import { Project } from "../../interfaces/Project";

export default function ProjectImage({
  project,
  showInfo,
  onClick,
}: {
  project: Project;
  showInfo: any;
  onClick: any;
}) {
  return showInfo ? (
    <div className="px-3 text-black ">
      <h2 className="text-xl font-bold">{project.name}</h2>
      <p>{project.description}</p>
      <div className="flex justify-evenly">
        {project.technologies.map((tech, i) => (
          <div
            key={i}
            className="bg-gradient-to-r from-[#FFBC57] to-[#A532FF] p-1"
          >
            <div className="bg-white">
              <span className="bg-gradient-to-r from-[#FFBC57] to-[#A532FF] bg-clip-text p-1 text-center text-lg uppercase text-transparent">
                {tech}
              </span>
            </div>
          </div>
        ))}
      </div>
      <button onClick={onClick}>Volver atrás</button>
    </div>
  ) : (
    <Image
      className="rounded-lg"
      width={500}
      height={250}
      src={project.image || "https://via.placeholder.com/500"}
      onClick={onClick}
      alt="project"
    />
  );
}
