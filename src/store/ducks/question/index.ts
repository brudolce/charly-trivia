import { Reducer } from "redux";
import { QuestionState, QuestionTypes } from "./types";

const INITIAL_STATE: QuestionState = {
  current: {
    id: 0,
    answer: "",
    question: "",
    category: {
      id: 0,
      title: "",
    },
  },
  history: {},
  answer: "",
  win: false,
};
const reducer: Reducer<QuestionState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case QuestionTypes.setQuestion:
      return {
        ...state,
        current: payload,
        history: { ...state.history, [payload.category.id]: true },
      };
    case QuestionTypes.resetHistory:
      return {
        ...state,
        history: {},
      };
    case QuestionTypes.setAnswer:
      return {
        ...state,
        answer: payload,
      };
    case QuestionTypes.setWin:
      return {
        ...state,
        win: payload,
      };
    default:
      return state;
  }
};

export default reducer;
