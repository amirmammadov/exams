import "../sass/components/_commentCard.scss";

import Image from "next/image";

interface Props {
  person: string;
  date: string;
  desc: string;
}

const CommentCard = ({ person, date, desc }: Props) => {
  return (
    <div className="comment__card">
      <div className="comment__card__person">{person}</div>
      <div className="comment__card__stars">
        <Image src="/icons/star-full.png" alt="star" width={14} height={14} />
        <Image src="/icons/star-full.png" alt="star" width={14} height={14} />
        <Image src="/icons/star-full.png" alt="star" width={14} height={14} />
        <Image src="/icons/star-full.png" alt="star" width={14} height={14} />
        <Image src="/icons/star-empty.png" alt="star" width={14} height={14} />
        <div className="comment__card__stars__date">{date}</div>
      </div>
      <div className="comment__card__desc">{desc}</div>
    </div>
  );
};

export default CommentCard;
