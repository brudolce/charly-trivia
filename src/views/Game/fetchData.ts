import { QuestionObject } from "../../store/ducks/question/types";

export const fetchQuestion = async (): Promise<QuestionObject|any> => {
  try {
    const res = await fetch("https://jservice.io/api/random");
    const data = await res.json();
    return data[0];
  } catch (e) {
    return { message: e };
  }
};
