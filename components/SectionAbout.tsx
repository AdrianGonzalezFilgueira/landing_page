import { useTranslation } from "next-i18next";

export default function SectionAbout() {
  const { t } = useTranslation("common");
  return (
    <div className="my-8">
      <div className="flex -skew-x-12 items-center">
        <div className="-ml-6 h-10 w-1/3 bg-white"></div>
        <h2 className="ml-2 text-4xl font-extrabold uppercase">
          {t("section.about")}
        </h2>
      </div>
      <section id="about" className="bg-glass mx-auto my-4 max-w-6xl p-3">
        <p className="italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          reiciendis nostrum modi repellendus totam inventore incidunt eveniet
          veritatis dignissimos magni. Iusto labore dolor rerum omnis incidunt
          aliquam similique eum beatae! Itaque accusantium magnam harum vitae
          veritatis ad nam dignissimos odio quaerat, totam quis ipsam at illum
          impedit quam nemo, in eaque magni voluptas voluptatum rerum amet
          consequuntur! Alias, quod delectus. Consequuntur, quae repellat
          accusantium harum animi quibusdam! Eos alias delectus aperiam aliquid
          commodi, sunt eligendi itaque obcaecati dolorum consequatur inventore
          eius ex quas, suscipit excepturi ipsam quis! Quidem, modi optio.
        </p>
      </section>
    </div>
  );
}
