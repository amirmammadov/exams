import "../sass/components/_sectionTitle.scss";

interface Props {
  title1: string;
  title2: string;
}

const SectionTitle = ({ title1, title2 }: Props) => {
  return (
    <div className="section__title">
      <div className="section__title__one">{title1}</div>
      <div className="section__title__two">{title2}</div>
    </div>
  );
};

export default SectionTitle;
