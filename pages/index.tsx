import { profilesData } from "../data/profile";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import Avatar from "../components/Avatar";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Card from "../components/Card";

export default function Home() {
  const { t } = useTranslation("common");
  const [activeProfile, setActiveProfile]: any = useState({});

  return (
    <>
      <Head>
        <title>Valtua</title>
        <meta name="description" content="Valtua" />
      </Head>
      <NavBar />
      <main className="p-4">
        <section id="about">
          <h2 className="font-bold text-cyan-400 text-xl text-center">
            {t("section.about")}
          </h2>
        </section>

        <section id="projects" className="">
          <div className="flex items-center -skew-x-12">
            <div className="-ml-6 h-10 w-1/3 bg-white"></div>
            <h2 className="ml-2 text-4xl font-extrabold uppercase">
              {t("section.projects")}
            </h2>
          </div>
        </section>

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

        <section id="contact">
          <h2 className="font-bold text-cyan-400 text-xl text-center">
            {t("section.contact")}
          </h2>
        </section>
      </main>
    </>
  );
}

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
