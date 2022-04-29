import { useTranslation } from "next-i18next";

export default function SectionAbout() {
  const { t } = useTranslation("common");

  return (
    <div className="my-8 p-3">
      <div className="flex">
        <div className="-ml-6 h-10 w-1/3 -skew-x-12 bg-white"></div>

        <h2 className="ml-2 text-3xl font-extrabold uppercase">
          {t("section.about")}
        </h2>
      </div>

      <section id="about" className="bg-glass mx-auto my-4 max-w-6xl p-3">
        <p className="break-all italic">
          Valtua está formado por un grupo de desarrolladores, cuyo objetivo es
          aportar soluciones tecnológicas que permitan mejorar la calidad de
          vida de nuestros usuarios.
        </p>
        <br />
        <p className="break-all italic">
          Desde hace muchos años, las aplicaciones informáticas se han
          convertido en un elemento clave para mejorar la productividad y
          eficiencia en las empresas. La capacidad de automatizar tareas
          repetitivas junto con el tratamiento y análisis de datos que ofrecen
          algunas aplicaciones, han permitido a algunas empresas convertirse en
          compañías líderes de su sector.
        </p>
        <br />
        <p className="break-all italic">
          Sin embargo, en Valtua pensamos que esos beneficios también pueden ser
          trasladados a cualquier otro ámbito social o personal. Conscientes de
          esas necesidades, y apasionados con las posibilidades que la
          programación puede ofrecer a un grupo de desarrolladores
          comprometidos, nace Valtua.
        </p>
        <br />
        <p className="break-all italic">
          Nuestras aplicaciones se han convertido en eficientes instrumentos
          tecnológicos al servicio de las necesidades de nuestros usuarios.
        </p>
      </section>
    </div>
  );
}
