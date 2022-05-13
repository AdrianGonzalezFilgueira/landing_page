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
      <div className="m-auto flex w-3/4 flex-col gap-5 py-5">
        <div className="flex gap-5 ">
          <input className="w-full" type="text" placeholder="Nombre" />
          <input className="w-full" type="email" placeholder="email" />
        </div>
        <textarea className="flex" placeholder="Escriba su comentario...." />
        <a
          href="#"
          className="text-l w-1/3 rounded-3xl bg-white py-1 text-center font-extrabold uppercase text-[#151051]"
          target="_blank"
          rel="noreferrer"
        >
          Enviar
        </a>
      </div>
    </div>
  );
}
