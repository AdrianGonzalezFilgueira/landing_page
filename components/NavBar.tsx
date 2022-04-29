import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import CloseMenuIcon from "./icons/CloseMenuIcon";
import MenuIcon from "./icons/MenuIcon";
import ValtuaLogo from "./icons/ValtuaLogo";

export default function NavBar() {
  const { t } = useTranslation("common");
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isNavOpen]);

  return (
    <header id="top" className="container mx-auto">
      <nav>
        <div className="ml-2 mt-2 flex items-center md:hidden">
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
              ? "fixed inset-0 z-10 flex flex-col items-center gap-10 bg-white pt-16"
              : "hidden md:flex"
          }
        >
          <div
            className="px-8 py-8 text-[#151051]"
            onClick={() => setIsNavOpen(false)}
          >
            <CloseMenuIcon />
          </div>

          <div className="md:hidden md:w-1/5 md:text-center">
            <ValtuaLogo />
          </div>

          <div
            className="self-center text-[#151051] md:w-1/5 md:text-center md:text-white"
            onClick={() => setIsNavOpen(false)}
          >
            <a className="text-xl font-bold" href="#about">
              {t("section.about")}
            </a>
          </div>

          <div
            className="self-center text-[#151051] md:w-1/5 md:text-center md:text-white"
            onClick={() => setIsNavOpen(false)}
          >
            <a className="text-xl font-bold" href="#projects">
              {t("section.projects")}
            </a>
          </div>

          <div className="hidden w-full self-center text-left md:block md:w-1/5 md:text-center">
            <h1 className="text-4xl">VALTUA</h1>
          </div>

          <div
            className="self-center text-[#151051] md:w-1/5 md:text-center md:text-white"
            onClick={() => setIsNavOpen(false)}
          >
            <a className="text-xl font-bold" href="#team">
              {t("section.team")}
            </a>
          </div>

          <div
            className="self-center text-[#151051] md:w-1/5 md:text-center md:text-white"
            onClick={() => setIsNavOpen(false)}
          >
            <a className="text-xl font-bold" href="#contact">
              {t("section.contact")}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
