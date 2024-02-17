"use client";

import "../sass/components/_filterResult.scss";

import ExamCard from "./ExamCard";

import axios from "axios";

import useSWR from "swr";

import { useStore } from "@/state";

interface IResult {
  id: number;
  title: string;
  duration: number;
  commentCount: number;
  commentStar: number;
  questions: Object;
  keys: string[];
  price: number;
}

const FilterResult = () => {
  const classType = useStore((state) => state.classType);
  const examType = useStore((state) => state.examType);

  console.log({ classType, examType });

  const fetcher = async (url: string) => {
    try {
      const response = await axios.get(url);
      return response;
    } catch (error: any) {
      console.log(error);
    }
  };

  const { data, mutate, isLoading } = useSWR(
    `/api/${examType}/${classType}`,
    fetcher
  );

  return (
    <div className="filter__result">
      {isLoading && <div className="filter__result__cases">Loading...</div>}

      {data?.data?.result?.map((exam: IResult) => (
        <ExamCard key={exam.id} {...exam} />
      ))}

      {data?.data.status === 400 && (
        <div className="filter__result__cases">{data?.data.message}</div>
      )}

      {!isLoading && data?.data.status !== 400 && (
        <button className="filter__result__more">Daha çox</button>
      )}
    </div>
  );
};

export default FilterResult;
