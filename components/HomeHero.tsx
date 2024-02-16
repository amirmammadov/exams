import "../sass/components/_homeHero.scss";

const HomeHero = () => {
  return (
    <div className="home__hero">
      <div className="home__hero__overlay">
        <div className="home__hero__overlay__content">
          <h2 className="home__hero__overlay__content__title">İmtahanlar</h2>
          <div className="home__hero__overlay__content__desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the {"industry's"} standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
