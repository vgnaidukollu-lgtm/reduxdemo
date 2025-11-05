import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./CounterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value); // read state
  const dispatch = useDispatch(); // send actions
  const [amount, setAmount] = useState(1);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Redux Counter Example</h2>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>−</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Add {amount}
        </button>
      </div>
    </div>
  );
}
