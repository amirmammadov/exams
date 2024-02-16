import "../sass/components/_homeCategories.scss";

import SectionTitle from "./SectionTitle";

import { examCategories } from "@/data/examCategories";

const HomeCategories = () => {
  return (
    <section className="home__categories">
      <SectionTitle title1="Imtahan" title2="Kateqoriya seç" />
      <div className="home__categories__exams">
        {examCategories.map((exam) => (
          <div key={exam.id} className="home__categories__exams__item">
            {exam.title}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCategories;
