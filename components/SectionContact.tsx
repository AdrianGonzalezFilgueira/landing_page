import { useTranslation } from "next-i18next";

export default function SectionContact() {
  const { t } = useTranslation("common");
  return (
    <section id="contact">
      <h2 className="font-bold text-cyan-400 text-xl text-center">
        {t("section.contact")}
      </h2>
    </section>
  );
}
