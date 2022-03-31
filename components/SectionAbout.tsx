import { useTranslation } from "next-i18next";

export default function SectionAbout() {
  const { t } = useTranslation("common");
  return (
    <section id="about">
      <h2 className="font-bold text-cyan-400 text-xl text-center">
        {t("section.about")}
      </h2>
    </section>
  );
}
