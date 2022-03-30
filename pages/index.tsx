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
      <main className="container mx-auto py-20">
        <SectionTitle>{t("section.about")}</SectionTitle>
        <section id="about"></section>

        <SectionTitle>{t("section.projects")}</SectionTitle>
        <section id="projects"></section>

        <SectionTitle>{t("section.team")}</SectionTitle>
        <section
          id="team"
          className="bg-glass flex flex-wrap items-center justify-around p-10"
        >
          <article className="flex flex-wrap justify-center max-w-md space-x-3 ">
            {profilesData.map((profile) => (
              <div
                className={`border-2 ${
                  profile.id === activeProfile.id
                    ? "border-green-600"
                    : "border-transparent"
                } rounded-lg`}
                key={profile.id}
              >
                <Avatar
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
              </div>
            ))}
          </article>
          <article>
            <Card profile={activeProfile} />
          </article>
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
