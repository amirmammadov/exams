import "../sass/components/_examCard.scss";

import Image from "next/image";
import Link from "next/link";

const ExamCard = () => {
  return (
    <div className="card">
      <div className="card__title">3-cü sinif imtahanı</div>
      <div className="card__stats">
        <div className="card__stats__duration">
          <Image
            src="/icons/duration.png"
            alt="duration"
            width={16}
            height={16}
            className="card__stats__duration__img"
          />
          <div className="card__stats__duration__amount">45 dəqiqə</div>
        </div>
        <div className="card__stats__stars">
          <div className="card__stats__stars__all">
            <Image
              src="/icons/star-full.png"
              alt="star"
              width={15}
              height={15}
            />
            <Image
              src="/icons/star-full.png"
              alt="star"
              width={15}
              height={15}
            />
            <Image
              src="/icons/star-full.png"
              alt="star"
              width={15}
              height={15}
            />
            <Image
              src="/icons/star-full.png"
              alt="star"
              width={15}
              height={15}
            />
            <Image
              src="/icons/star-empty.png"
              alt="star"
              width={15}
              height={15}
            />
          </div>
          <Image src="/icons/dot.png" alt="star" width={6} height={6} />
          <div className="card__stats__stars__text">2 rəy</div>
        </div>
      </div>
      <div className="card__questions">
        <div className="card__questions__title">Suallar</div>
        <ul className="card__questions__list">
          <li className="card__questions__list__item">10 sual-Riyaziyyat</li>
          <li className="card__questions__list__item">10 sual-Riyaziyyat</li>
        </ul>
      </div>
      <div className="card__divider" />
      <div className="card__keys">
        <div className="card__keys__item">İbtidai sinif</div>
        <div className="card__keys__item">3-cü sinif</div>
      </div>
      <Link href="/exam/1" className="card__btn">
        1 AZN- indi al
      </Link>
    </div>
  );
};

export default ExamCard;
