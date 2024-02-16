import "../sass/components/_examInfoGeneral.scss";

import Image from "next/image";

const ExamInfoGeneral = () => {
  return (
    <div className="exam__info__general">
      <div className="exam__info__general__title">Məlumat</div>
      <div className="exam__info__general__detail">
        <div className="exam__info__general__detail__item">
          <Image
            src="/icons/duration.png"
            alt="duration"
            width={20}
            height={20}
          />
          <div className="exam__info__general__detail__item__text">
            45 dəqiqə
          </div>
        </div>
        <div className="exam__info__general__detail__item">
          <Image src="/icons/list.png" alt="list" width={20} height={20} />
          <div className="exam__info__general__detail__item__text">20 sual</div>
        </div>
        <div className="exam__info__general__detail__item">
          <Image
            src="/icons/calendar.png"
            alt="calendar"
            width={20}
            height={20}
          />
          <div className="exam__info__general__detail__item__text">
            22.05.2023
          </div>
        </div>
      </div>
      <div className="exam__info__general__questions">
        <div className="exam__info__general__questions__title">Suallar</div>
        <ul>
          <li>Azərbaycan dili-10 sual</li>
          <li>Rizyyaziyyat-10 sual</li>
        </ul>
      </div>
    </div>
  );
};

export default ExamInfoGeneral;
