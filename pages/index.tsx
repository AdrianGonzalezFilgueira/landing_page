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
        <section>
          <h1 className="font-bold text-cyan-400 text-xl text-center">
            {t("index.title")}
          </h1>
        </section>
        <section id="info">
          <SectionTitle>Sobre Valtua</SectionTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            alias quas perferendis. Nisi quo veniam quaerat. Blanditiis a nemo
            fugit ea saepe earum deleniti ratione esse sapiente iusto, facilis
            laboriosam.
          </p>
        </section>
        <section id="projects">
          <SectionTitle>Proyectos</SectionTitle>
        </section>
        <section>
          <SectionTitle>Tecnologías</SectionTitle>
        </section>
        <SectionTitle>Quiénes Somos</SectionTitle>
        <section id="team" className="flex flex-wrap">
          {profilesData.map((profile) => (
            <Card key={profile.id} profile={profile} />
          ))}
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
