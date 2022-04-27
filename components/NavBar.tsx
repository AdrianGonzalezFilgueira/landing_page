import { useTranslation } from "next-i18next";
import { useState } from "react";
import MenuIcon from "./icons/MenuIcon";

export default function NavBar() {
  const { t } = useTranslation("common");
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header id="top" className="container mx-auto">
      <nav className="">
        <div className="ml-2 mt-2 flex flex-wrap items-center justify-center md:hidden">
          <div className="mr-auto">
            <button
              className="bg-glass rounded-none p-1"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <MenuIcon />
            </button>
          </div>

          <div className="mr-auto -ml-8">
            <h1 className="text-4xl">VALTUA</h1>
          </div>
        </div>

        <div
          className={
            isNavOpen
              ? "ml-2 mt-2 flex flex-col space-y-2 md:flex-row md:space-y-0"
              : "hidden md:flex"
          }
        >
          <div className="block w-full self-center text-left md:w-1/5 md:text-center">
            <a className="text-xl font-bold" href="#about">
              {t("section.about")}
            </a>
          </div>

          <div className="block w-full self-center text-left md:w-1/5 md:text-center">
            <a className="text-xl font-bold" href="#projects">
              {t("section.projects")}
            </a>
          </div>

          <div className="hidden w-full self-center text-left md:block md:w-1/5 md:text-center">
            <h1 className="text-4xl">VALTUA</h1>
          </div>

          <div className="block w-full self-center text-left md:w-1/5 md:text-center">
            <a className="text-xl font-bold" href="#team">
              {t("section.team")}
            </a>
          </div>

          <div className="block w-full self-center text-left md:w-1/5 md:text-center">
            <a className="text-xl font-bold" href="#contact">
              {t("section.contact")}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
