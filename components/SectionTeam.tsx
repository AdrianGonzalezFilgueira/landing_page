import { useTranslation } from "next-i18next";
import { useState } from "react";
import { profilesData } from "../data/profile";
import Avatar from "./Avatar";
import Card from "./Card";

export default function SectionTeam() {
  const { t } = useTranslation("common");
  const [activeProfile, setActiveProfile]: any = useState({});
  return (
    <div className="my-8">
      <div className="flex items-center -skew-x-12">
        <div className="-ml-6 h-10 w-1/3 bg-slate-200"></div>
        <h2 className="ml-2 text-4xl font-extrabold uppercase">
          {t("section.team")}
        </h2>
      </div>

      <div className="bg-glass max-w-6xl mx-auto p-3 my-4">
        <section
          id="team"
          className="flex flex-wrap items-center justify-around p-8 gap-6 lg:gap-0"
        >
          <article className="flex flex-wrap justify-center max-w-md gap-3">
            {profilesData.map((profile) => (
              <Avatar
                key={profile.id}
                isActive={profile.id !== activeProfile.id}
                profile={profile}
                onClick={() => setActiveProfile(profile)}
                onLoad={() =>
                  setActiveProfile(
                    profilesData[
                      Math.floor(Math.random() * profilesData.length)
                    ]
                  )
                }
              />
            ))}
          </article>

          <Card profile={activeProfile} />
        </section>
      </div>
    </div>
  );
}
