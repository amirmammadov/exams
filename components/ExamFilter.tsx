"use client";

import { useState, useEffect, useRef } from "react";

import "../sass/components/_examFilter.scss";

import { examCategories } from "@/data/examCategories";

import { useStore } from "../state/index";

interface Exam {
  id: number;
  title: string;
  classes?: string[];
}

const ExamFilter = () => {
  const [activeExam, setActiveExam] = useState(examCategories[0]);
  const [activeClass, setActiveClass] = useState("");

  const setClassType = useStore((state) => state.setClassType);
  const setExamType = useStore((state) => state.setExamType);

  const ref = useRef(false);

  useEffect(() => {
    if (ref.current === false) {
      if (activeExam.classes !== undefined) {
        setActiveClass(() => activeExam.classes[0]);
      }
    }

    if (activeExam.title === "İbtidai sinif") {
      setExamType("foundation");
      setClassType("two");
    } else {
      setExamType(activeExam.title);
      setClassType("");
    }

    return () => {
      ref.current = true;
    };
  }, [activeExam, setClassType, setExamType]);

  const handleSwitch = (exam: Exam) => {
    if (activeExam.classes !== undefined) {
      setActiveClass(() => activeExam.classes[0]);
    }

    setActiveExam(() => exam);
  };

  const hanldeClassType = (classValue: string) => {
    setActiveClass(() => classValue);
    let type = "";

    if (classValue.includes("2")) {
      type = "two";
    } else if (classValue.includes("3")) {
      type = "three";
    } else {
      type = "four";
    }

    setClassType(type);
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
                onClick={() => hanldeClassType(classValue)}
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
