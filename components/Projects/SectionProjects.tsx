import { useTranslation } from "next-i18next";
import { useState } from "react";
import { projectsData } from "../../data/project";
import Avatar from "../Avatar";
import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";
import ProjectImage from "./ProjectImage";
import ProjectInfo from "./ProjectInfo";

export default function SectionProjects() {
  const { t } = useTranslation("common");
  const [activeProject, setActiveProject]: any = useState(projectsData[0]);

  const firstProject = activeProject.id - 1 === 0;
  const lastProject = activeProject.id === projectsData.length;

  const handleSwitchProject = (action: string) => {
    const index = projectsData.findIndex(
      (project) => project.id === activeProject.id
    );

    const projectIndex = action === "NEXT_PROJECT" ? index + 1 : index - 1;

    if (projectsData[projectIndex]) {
      setActiveProject(projectsData[projectIndex]);
    }
  };

  return (
    <section id="projects">
      <div className="flex -skew-x-12 items-center">
        <div className="-ml-6 h-10 w-1/3 bg-white"></div>
        <h2 className="ml-2 text-4xl font-extrabold uppercase">
          {t("section.projects")}
        </h2>
      </div>

      <div className="mt-8 flex justify-between">
        <article className="width-45 -ml-20 -skew-x-12 bg-white py-8 pl-20">
          <div className="flex skew-x-12 flex-col justify-center gap-8">
            <div className="flex justify-center">
              <ProjectImage project={activeProject} />
            </div>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => handleSwitchProject("PREV_PROJECT")}
                disabled={firstProject}
                className={`rounded-full bg-slate-200 p-2 ${
                  firstProject && "opacity-50"
                }`}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-8">
                {projectsData.map((project) => (
                  <Avatar
                    width={150}
                    height={100}
                    key={project.id}
                    isActive={project.id !== activeProject.id}
                    profile={project}
                    onClick={() => setActiveProject(project)}
                  />
                ))}
              </div>

              <button
                onClick={() => handleSwitchProject("NEXT_PROJECT")}
                disabled={lastProject}
                className={`rounded-full bg-slate-200 p-2 ${
                  lastProject && "opacity-50"
                }`}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </article>

        <article className="width-45 -mr-20 -skew-x-12 bg-white py-8 pr-20">
          <div className="flex skew-x-12 flex-wrap justify-center gap-4">
            <ProjectInfo project={activeProject} />
          </div>
        </article>
      </div>

      <div className="my-8 flex -skew-x-12 justify-end">
        <div className="-mr-6 h-10 w-1/3 bg-white"></div>
      </div>
    </section>
  );
}
