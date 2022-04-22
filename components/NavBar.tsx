import { useTranslation } from "next-i18next";
import { useState } from "react";
import MenuIcon from "./icons/MenuIcon";

export default function NavBar() {
  const { t } = useTranslation("common");
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header id="top" className="container mx-auto">
      <nav className="items-center text-center">
        <div className="ml-2 mt-2 flex flex-wrap items-center md:hidden">
          <button
            className="bg-glass flex justify-center rounded-none p-1"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <MenuIcon />
          </button>

          <h1 className="ml-2 text-4xl">VALTUA</h1>
        </div>

        <div
          className={
            isNavOpen ? "ml-2 flex flex-col md:flex-row" : "hidden md:flex"
          }
        >
          <div className="w-full self-center text-left md:w-1/5 md:text-center">
            <a href="#about">{t("section.about")}</a>
          </div>

          <div className="w-full self-center text-left md:w-1/5 md:text-center">
            <a href="#projects">{t("section.projects")}</a>
          </div>

          <div className="hidden w-full self-center text-left md:block md:w-1/5 md:text-center">
            <h1 className="text-4xl">VALTUA</h1>
          </div>

          <div className="w-full self-center text-left md:w-1/5 md:text-center">
            <a href="#team">{t("section.team")}</a>
          </div>

          <div className="w-full self-center text-left md:w-1/5 md:text-center">
            <a href="#contact">{t("section.contact")}</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
