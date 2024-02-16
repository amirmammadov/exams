"use client";

import { useState } from "react";

import "../sass/components/_examFilter.scss";

import { examCategories } from "@/data/examCategories";

interface Exam {
  id: number;
  title: string;
  classes?: string[];
}

const ExamFilter = () => {
  const [activeExam, setSctiveExam] = useState(examCategories[0]);
  const [activeClass, setActiveClass] = useState("");

  const handleSwitch = (exam: Exam) => {
    if (activeExam.classes !== undefined) {
      setActiveClass(activeExam.classes[0]);
    }

    setSctiveExam(exam);
  };

  return (
    <div className="filter">
      <div className="filter__title">Filter</div>
      <div className="filter__subtitle">Kategoriyalar</div>
      <div className="filter__exams">
        {examCategories.map((exam) => (
          <button
            key={exam.id}
            className={`filter__exams__item ${
              activeExam.id === exam.id && "active"
            }`}
            onClick={() => handleSwitch(exam)}
          >
            {exam.title}
          </button>
        ))}
      </div>
      {activeExam.title === "İbtidai sinif" && (
        <div className="filter__extra">
          <div className="filter__extra__title">Etiketlər</div>
          <div className="filter__extra__classes">
            {activeExam.classes?.map((classValue, index) => (
              <button
                key={index}
                className={`filter__extra__classes__item ${
                  activeClass === classValue && "active"
                }`}
                onClick={() => setActiveClass(classValue)}
              >
                {classValue}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamFilter;
