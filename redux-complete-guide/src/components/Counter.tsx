import { counterActions } from "../store/counter";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    return state.counter.counter;
  });
  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    // dispatch({ type: "increase", payload: 5 });
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button className={classes.button} onClick={incrementHandler}>
          Increment
        </button>
        <button className={classes.button} onClick={incrementHandler}>
          Increase by 5
        </button>
        <button className={classes.button} onClick={decrementHandler}>
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
