import "../../sass/pages/_home.scss";

import HomeHero from "@/components/HomeHero";
import HomeCategories from "@/components/HomeCategories";

import SectionTitle from "@/components/SectionTitle";
import ExamFilter from "@/components/ExamFilter";
import FilterResult from "@/components/FilterResult";

const Home = () => {
  return (
    <main className="home">
      <HomeHero />
      <HomeCategories />
      <section className="filterExams">
        <SectionTitle title1="Ən çox işlənənlər" title2="İmtahanlar" />
        <div className="filterExams__content">
          <ExamFilter />
          <FilterResult />
        </div>
      </section>
    </main>
  );
};

export default Home;
