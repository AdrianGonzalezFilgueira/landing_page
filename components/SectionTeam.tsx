import { useTranslation } from "next-i18next";
import { useState } from "react";
import { profilesData } from "../data/profile";
import Avatar from "./Avatar";
import Card from "./Card";

export default function SectionTeam() {
  const { t } = useTranslation("common");
  const [activeProfile, setActiveProfile]: any = useState({});
  return (
    <>
      <h2 className="font-bold text-cyan-400 text-xl text-center">
        {t("section.team")}
      </h2>
      <section
        id="team"
        className="bg-glass flex flex-wrap items-center justify-center p-8 gap-20"
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
                  profilesData[Math.floor(Math.random() * profilesData.length)]
                )
              }
            />
          ))}
        </article>

        <Card profile={activeProfile} />
      </section>
    </>
  );
}
