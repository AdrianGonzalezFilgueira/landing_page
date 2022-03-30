import { profilesData } from "../data/profile";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import Avatar from "../components/Avatar";
import Head from "next/head";
import NavBar from "../components/NavBar";
import SectionTitle from "../components/SectionTitle";
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
      <main className="container mx-auto p-4">
        <SectionTitle>{t("section.about")}</SectionTitle>
        <section id="about"></section>

        <SectionTitle>{t("section.projects")}</SectionTitle>
        <section id="projects"></section>

        <SectionTitle>{t("section.team")}</SectionTitle>
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

        <SectionTitle>{t("section.contact")}</SectionTitle>
        <section id="contact"></section>
      </main>
    </>
  );
}

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
