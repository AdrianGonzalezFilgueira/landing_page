import { useTranslation } from "next-i18next";
import { useState } from "react";
import { profilesData } from "../data/profile";
import Avatar from "./Avatar";
import Card from "./Card";
import ChevronLeft from "./icons/ChevronLeft";
import ChevronRight from "./icons/ChevronRight";

export default function SectionTeam() {
  const { t } = useTranslation("common");
  const [activeProfile, setActiveProfile]: any = useState({});

  return (
    <div className="my-8 px-3">
      <div className="flex">
        <div className="-ml-6 h-10 w-1/3 -skew-x-12 bg-white"></div>

        <h2 className="ml-2 text-3xl font-extrabold uppercase">
          {t("section.team")}
        </h2>
      </div>

      <div className="bg-glass mx-auto my-4 max-w-6xl p-3">
        <section
          id="team"
          className="flex flex-wrap items-center justify-around gap-6 p-4 md:p-8 lg:gap-0"
        >
          <article className="hidden max-w-md flex-wrap justify-center gap-3 md:flex">
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

          <div className="flex w-full items-center justify-between md:hidden">
            <ChevronLeft />
            {profilesData
              .map((profile) => (
                <Avatar
                  key={profile.id}
                  isActive={profile.id !== activeProfile.id}
                  profile={profile}
                  onClick={() => setActiveProfile(profile)}
                />
              ))
              .splice(0, 3)}
            <ChevronRight />
          </div>
        </section>
      </div>
    </div>
  );
}
