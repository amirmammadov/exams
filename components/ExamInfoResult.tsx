import "../sass/components/_examInfoResult.scss";

import Image from "next/image";

import { results } from "@/data/examResult";
import Link from "next/link";

const ExamInfoResult = () => {
  return (
    <div className="exam__info__result">
      <div className="exam__info__result__title">İmtahan üzrə nəticələr</div>
      <div className="exam__info__result__students">
        {results.map((result, index) => (
          <div key={result.id} className="exam__info__result__students__item">
            <div className="exam__info__result__students__item__left">
              {result.medalType !== "other" ? (
                <Image
                  src={`/icons/${result.medalType}.png`}
                  alt="gold"
                  width={30}
                  height={30}
                />
              ) : (
                <div className="exam__info__result__students__item__left__position">
                  {index}
                </div>
              )}
              <div className="exam__info__result__students__item__left__name">
                {result.person}
              </div>
            </div>
            <div className="exam__info__result__students__item__right">
              <div className="exam__info__result__students__item__right__mark">
                {result.mark} bal
              </div>
              <Image src="/icons/dot.png" alt="dot" width={6} height={6} />
              <div className="exam__info__result__students__item__right__duration">
                {result.duration} dəq
              </div>
              <Link
                href="#"
                className="exam__info__result__students__item__right__link"
              >
                <Image
                  src="/icons/right.png"
                  alt="right"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamInfoResult;
