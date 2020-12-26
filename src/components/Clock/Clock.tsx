import React, { useEffect } from "react";
import ClockStyles from "./Clock.styles";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationStore } from "../../store";
import { setTime } from "../../store/ducks/time/actions";

interface ClockProps {
  onTimeLimit?: () => void;
  timeLimit?: number;
}

const Clock: React.FC<ClockProps> = ({
  onTimeLimit = () => "ok",
  timeLimit = 10,
}: ClockProps) => {
  const CSS = ClockStyles.factory();
  const dispatch = useDispatch();
  const { seconds } = useSelector(
    (reduxStore: ApplicationStore) => reduxStore.time
  );

  //chronometer
  useEffect(() => {
    if (seconds >= timeLimit) onTimeLimit();

    let interval: any = null;
    interval = setInterval(() => {
      dispatch(setTime(seconds + 1));
    }, 1000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  return (
    <div style={CSS.clockContainer()}>
      {(seconds < 10 ? "0" + seconds : seconds + "").replace(/\./g, ":")}
    </div>
  );
};

export default Clock;
