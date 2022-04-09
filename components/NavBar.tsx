import { useTranslation } from "next-i18next";

export default function NavBar() {
  const { t } = useTranslation("common");

  return (
    <header id="top" className="container mx-auto">
      <nav className="flex flex-wrap items-center text-center">
        <div className="w-1/5">
          <a href="#about">{t("section.about")}</a>
        </div>
        <div className="w-1/5">
          <a href="#projects">{t("section.projects")}</a>
        </div>
        <div className="w-1/5">
          <h1 className="text-4xl">VALTUA</h1>
        </div>
        <div className="w-1/5">
          <a href="#team">{t("section.team")}</a>
        </div>
        <div className="w-1/5">
          <a href="#contact">{t("section.contact")}</a>
        </div>
      </nav>
    </header>
  );
}
