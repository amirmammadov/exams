import { create } from "zustand";

type State = {
  examType: string;
  classType: string;
};

type Action = {
  setClassType: (type: string) => void;
  setExamType: (type: string) => void;
};

export const useStore = create<State & Action>((set) => ({
  examType: "foundation",
  classType: "two",
  setClassType: (type: string) => set(() => ({ classType: type })),
  setExamType: (type: string) => set(() => ({ examType: type })),
}));
