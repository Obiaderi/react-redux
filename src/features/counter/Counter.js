import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, incrementByAmount } from "./counterSlice";

function Counter(props) {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = React.useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    dispatch(reset());
    setIncrementAmount(0);
  };

  return (
    <section>
      <p>{count}</p>
      <div className="">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>

      <input
        type="number"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(addValue))}>
        Add Amount
      </button>
      <button onClick={resetAll}>Reset</button>
    </section>
  );
}

export default Counter;
