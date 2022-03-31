import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import NavBar from "../components/NavBar";
import SectionAbout from "../components/SectionAbout";
import SectionProjects from "../components/SectionProjects";
import SectionTeam from "../components/SectionTeam";
import SectionContact from "../components/SectionContact";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Valtua</title>
        <meta name="description" content="Valtua" />
      </Head>
      <NavBar />
      {/*TODO: eliminar flecha cuando ya estemos arriba en el menú 
      <ArrowUp />*/}
      <main className="p-4">
        <SectionAbout />
        <SectionProjects />
        <SectionTeam />
        <SectionContact />
      </main>
    </>
  );
}

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
