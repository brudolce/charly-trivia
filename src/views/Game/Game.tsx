import React, { useEffect } from "react";
import GameStyles from "./Game.style";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationStore } from "../../store";
import {
  resetHistory,
  setAnswer,
  setQuestion,
  setWin,
} from "../../store/ducks/question/actions";
import { setTime } from "../../store/ducks/time/actions";
import { QuestionObject } from "../../store/ducks/question/types";
import Clock from "../../components/Clock/Clock";
import Form from "../../components/Form/Form";
import Score from "../../components/Score/Score";

const Game: React.FC = () => {
  //style
  const CSS = GameStyles.factory();
  //router
  const history = useHistory();
  const changePage = (): void => history.push("/gameover");
  //store
  const dispatch = useDispatch();
  const store = useSelector((reduxStore: ApplicationStore) => reduxStore);

  //methods - fetching data
  const fetchQuestion = async (): Promise<QuestionObject> => {
    const res = await fetch("http://jservice.io/api/random");
    const data = await res.json();
    return data[0];
  };
  const getQuestion = async () => {
    let data = await fetchQuestion();
    while (store.question.history[data.id]) {
      data = await fetchQuestion();
    }
    console.log("answer:", data.answer);
    dispatch(setQuestion(data));
  };

  //methods - game engine
  const nextRound = (): void => {
    dispatch(setTime(0));
    getQuestion();
  };
  const gameOver = (): void => {
    dispatch(resetHistory());
    changePage();
    dispatch(setTime(0));
  };
  const win = (): void => {
    dispatch(setWin(true))
    gameOver()
  };
  const check = (data: { answer: string }) => {
    const formAnswer = data.answer.toLowerCase();
    const correctAnswer = store.question.current.answer.toLowerCase().replace(/<\/?[^>]+(>|$)/g, "")
    if (formAnswer === correctAnswer) {
      if (Object.keys(store.question.history).length >= 30) win();
      else nextRound();
    } else {
      dispatch(setAnswer(formAnswer));
      gameOver();
    }
  };

  //lifecycle
  useEffect(() => {
    getQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={CSS.page()}>
      <div style={CSS.container("column")}>
        <Score />
        <Clock
          timeLimit={30}
          onTimeLimit={() => {
            check({ answer: "" });
          }}
        />
        <Form
          category={store.question.current.category.title}
          question={store.question.current.question}
          action={(data: { answer: string }) => {
            check(data);
          }}
        ></Form>
      </div>
    </div>
  );
};

export default Game;
