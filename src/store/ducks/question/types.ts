import { setAnswer } from "./actions";

export enum QuestionTypes {
  setQuestion = "@setQuestion",
  resetHistory = "@resetHistory",
  setAnswer = "@setAnswer",
  setWin = "@setWin"
}

export interface QuestionObject {
  id: number;
  answer: string;
  question: string;
  category: {
    id: number;
    title: string;
  };
}
export interface QuestionState {
  current: QuestionObject;
  history: any;
  answer: string;
  win: boolean;
}
