import { useTranslation } from "next-i18next";

export default function SectionContact() {
  const { t } = useTranslation("common");
  return (
    <div>
      <div id="contact" className="flex">
        <div className="-ml-6 h-10 w-1/3 -skew-x-12 bg-white"></div>

        <h2 className="ml-2 text-3xl font-extrabold uppercase">
          {t("section.contact")}
        </h2>
      </div>
      <div className="m-auto flex w-3/4 flex-col items-center gap-5 py-10">
        <div className="flex w-full lg:w-3/4 flex-col gap-5 md:flex-row">
          <input
            className="w-full font-bold text-[#151051]"
            type="text"
            placeholder="Nombre"
          />
          <input
            className="w-full font-bold text-[#151051]"
            type="email"
            placeholder="Email"
          />
        </div>
        <textarea
          className="w-full font-bold lg:w-3/4 text-[#151051]"
          placeholder="Escriba su comentario..."
        />
        <a
          href="#"
          className="text-l w-32 rounded-3xl bg-white py-1 text-center font-extrabold uppercase text-[#151051]"
        >
          Enviar
        </a>
      </div>
    </div>
  );
}
