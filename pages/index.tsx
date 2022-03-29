import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { profilesData } from "../data/profile";
import NavBar from "../components/NavBar";

export default function Home() {
  const { t } = useTranslation("common");

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
        <section id="team" className="flex flex-wrap">
          {profilesData.map((profile) => (
            <Card key={profile.id} profile={profile} />
          ))}
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
