import { QuestionObject } from "../../store/ducks/question/types";
import { fetchQuestion } from "./fetchData";

describe("fetch data", () => {

  it("fetch somethingr", () => {
    const data: QuestionObject = fetchQuestion()
    expect(data).not.toBe(null)
  })
});
