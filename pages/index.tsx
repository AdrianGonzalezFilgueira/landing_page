import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import NavBar from "../components/NavBar";
import SectionAbout from "../components/SectionAbout";
import SectionProjects from "../components/Projects/SectionProjects";
import SectionTeam from "../components/SectionTeam";
import SectionContact from "../components/SectionContact";
import Lava from "../components/Lava";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Valtua</title>
        <meta name="description" content="Valtua" />
      </Head>

      <Canvas>
        <Lava colors={["#c900fc", "#fcb01c"]} />
      </Canvas>

      <Canvas>
        <Lava colors={["#0037fc", "#f71cfc"]} />
      </Canvas>

      <div className="absolute h-full w-full">
        <NavBar />
        {/*TODO: eliminar flecha cuando ya estemos arriba en el menú
        <ArrowUp />*/}
        <main>
          <SectionAbout />
          <SectionProjects />
          <SectionTeam />
          <SectionContact />
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
