import "../../../sass/pages/_examItem.scss";

import ExamCardHero from "@/components/ExamCardHero";
import ExamInfoGeneral from "@/components/ExamInfoGeneral";
import ExamInfoResult from "@/components/ExamInfoResult";
import ExamCommentPreview from "@/components/ExamCommentPreview";
import CommentCard from "@/components/CommentCard";

import { opinions } from "@/data/comments";

const ExamItem = () => {
  return (
    <main className="exam">
      <ExamCardHero />
      <section className="exam__info">
        <ExamInfoGeneral />
        <ExamInfoResult />
      </section>
      <section className="exam__comment">
        <div className="exam__comment__title">Rəylər</div>
        <ExamCommentPreview />
        <div className="exam__comment__total">
          {opinions.map((opinion) => (
            <CommentCard key={opinion.id} {...opinion} />
          ))}
        </div>
        <button className="exam__comment__btn">Daha çox</button>
      </section>
    </main>
  );
};

export default ExamItem;
