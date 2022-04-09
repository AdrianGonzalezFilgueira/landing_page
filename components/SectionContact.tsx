import { useTranslation } from "next-i18next";

export default function SectionContact() {
  const { t } = useTranslation("common");
  return (
    <section id="contact">
      <h2 className="text-center text-xl font-bold text-cyan-400">
        {t("section.contact")}
      </h2>
    </section>
  );
}
