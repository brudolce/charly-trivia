/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { action } from "typesafe-actions";
import { QuestionTypes } from "./types";

export const setQuestion = (payload: Object) =>
  action(QuestionTypes.setQuestion, payload);

export const resetHistory = () => action(QuestionTypes.resetHistory);

export const setAnswer = (payload:string) => action(QuestionTypes.setAnswer,payload)

export const setWin = (payload:boolean) => action(QuestionTypes.setWin,payload)
