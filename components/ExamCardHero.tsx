import "../sass/components/_examCardHero.scss";

import Image from "next/image";

const ExamCardHero = () => {
  return (
    <section className="exam__hero">
      <div className="exam__hero__content">
        <div className="exam__hero__content__title">3-cü sinif imtahanı</div>
        <ul className="exam__hero__content__list">
          <li className="exam__hero__content__list__item">
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </li>
          <li className="exam__hero__content__list__item">
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </li>
          <li className="exam__hero__content__list__item">
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </li>
        </ul>
        <button className="exam__hero__content__btn">1 Azn-imtahanı al</button>
      </div>
      <Image
        src="/exam/saly.png"
        alt="saly"
        width={500}
        height={500}
        className="exam__hero__img"
      />
    </section>
  );
};

export default ExamCardHero;
