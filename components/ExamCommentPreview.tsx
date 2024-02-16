import "../sass/components/_examCommentPreview.scss";

import Image from "next/image";

import { comments } from "@/data/comments";

const ExamCommentPreview = () => {
  const totalComments = comments.reduce(
    (total, comment) => (total += comment.participants),
    0
  );

  const average = comments.reduce(
    (total, comment) => (total += comment.fiveStar),
    0
  );

  const averageRating = average / comments.length;

  return (
    <div className="preview">
      <div className="preview__total">
        <div className="preview__total__amount">{averageRating}</div>
        <div className="preview__total__stat">
          <Image
            src="/icons/comment.png"
            alt="comment"
            width={20}
            height={20}
          />
          <div className="preview__total__stat__text">{totalComments} rəy</div>
        </div>
      </div>
      <div className="preview__all">
        {comments.map((comment) => {
          const emptyStars = 5 - comment.fiveStar;
          const progress = (comment.participants / totalComments) * 100 * 6;

          return (
            <div key={comment.id} className="preview__all__item">
              <div className="preview__all__item__all">
                {comment.participants}
              </div>
              {Array.from({ length: comment.fiveStar }).map((star, index) => (
                <Image
                  key={index}
                  src="/icons/star-full.png"
                  alt="full"
                  width={14}
                  height={14}
                />
              ))}
              {Array.from({ length: emptyStars }).map((star, index) => (
                <Image
                  key={index}
                  src="/icons/star-empty.png"
                  alt="empty"
                  width={14}
                  height={14}
                />
              ))}
              <div
                className={`preview__all__item__progress`}
                style={{ width: `${progress}px` }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExamCommentPreview;
