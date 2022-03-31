import { useTranslation } from "next-i18next";
import { useState } from "react";
import { projectsData } from "../data/project";
import Avatar from "./Avatar";

export default function SectionProjects() {
  const { t } = useTranslation("common");
  const [activeProject, setActiveProject]: any = useState({});
  return (
    <section id="projects" className="">
      <div className="flex items-center -skew-x-12">
        <div className="-ml-6 h-10 w-1/3 bg-white"></div>
        <h2 className="ml-2 text-4xl font-extrabold uppercase">
          {t("section.projects")}
        </h2>
      </div>

      <div className="flex justify-between mt-8">
        <article className="flex flex-wrap justify-center max-w-md gap-3 bg-white py-3 px-8 -skew-x-12 -ml-8">
          {projectsData.map((project) => (
            <Avatar
              key={project.id}
              isActive={project.id !== activeProject.id}
              profile={project}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </article>
        <article className="flex flex-wrap justify-center max-w-md gap-3 bg-white py-3 px-8 -skew-x-12 -mr-8">
          {projectsData.map((project) => (
            <Avatar
              key={project.id}
              isActive={project.id !== activeProject.id}
              profile={project}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </article>
      </div>
    </section>
  );
}
