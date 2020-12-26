import { Reducer } from "redux";
import { TimeState, TimeTypes } from "./types";

const INITIAL_STATE: TimeState = { seconds: 0 };
const reducer: Reducer<TimeState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case TimeTypes.setTime:
      return { ...state, seconds: payload };
    default:
      return state;
  }
};

export default reducer;
