import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { profilesData } from "../data/data";

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>Valtua</title>
        <meta name="description" content="Valtua" />
      </Head>
      <main className="bg-slate-300 container mx-auto py-20">
        <section>
          <h1 className="font-bold text-cyan-400 text-xl text-center">
            {t("index.title")}
          </h1>
        </section>
        <section>
          <SectionTitle>Sobre Valtua</SectionTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            alias quas perferendis. Nisi quo veniam quaerat. Blanditiis a nemo
            fugit ea saepe earum deleniti ratione esse sapiente iusto, facilis
            laboriosam.
          </p>
        </section>
        <section>
          <SectionTitle>Proyectos</SectionTitle>
        </section>
        <section>
          <SectionTitle>Tecnologías</SectionTitle>
        </section>
        <SectionTitle>Quiénes Somos</SectionTitle>
        <section className="flex flex-wrap">
          {profilesData.map((profile, i) => (
            <Card key={i} profile={profile} />
          ))}
        </section>
      </main>
    </>
  );
}

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
