import { useTranslation } from "next-i18next";
import { useState } from "react";
import { projectsData } from "../../data/project";
import Avatar from "../Avatar";
import ProjectImage from "./ProjectImage";
import ProjectInfo from "./ProjectInfo";

export default function SectionProjects() {
  const { t } = useTranslation("common");
  const [activeProject, setActiveProject]: any = useState(projectsData[0]);

  return (
    <section id="projects">
      <div className="flex items-center -skew-x-12">
        <div className="-ml-6 h-10 w-1/3 bg-white"></div>
        <h2 className="ml-2 text-4xl font-extrabold uppercase">
          {t("section.projects")}
        </h2>
      </div>

      <div className="flex justify-between mt-8">
        <article className="w-1/3 bg-white py-3 px-8 -skew-x-12 -ml-20">
          <div className="skew-x-12 flex flex-wrap justify-center gap-3">
            <ProjectImage project={activeProject} />
            <div className="flex justify-center gap-3">
              {projectsData.map((project) => (
                <Avatar
                  key={project.id}
                  isActive={project.id !== activeProject.id}
                  profile={project}
                  onClick={() => setActiveProject(project)}
                />
              ))}
            </div>
          </div>
        </article>

        <article className="w-1/3 bg-white py-3 px-8 -skew-x-12 -mr-20">
          <div className="skew-x-12 flex flex-wrap justify-center gap-3">
            <ProjectInfo project={activeProject} />
          </div>
        </article>
      </div>

      <div className="flex justify-end -skew-x-12 my-8">
        <div className="-mr-6 h-10 w-1/3 bg-white"></div>
      </div>
    </section>
  );
}
