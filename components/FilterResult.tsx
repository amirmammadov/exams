import "../sass/components/_filterResult.scss";

import ExamCard from "./ExamCard";

const FilterResult = () => {
  return (
    <div className="filter__result">
      <ExamCard />
      <ExamCard />
      <ExamCard />
      <ExamCard />
      <ExamCard />
      <ExamCard />
      <button className="filter__result__more">Daha çox</button>
    </div>
  );
};

export default FilterResult;
