import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { increment, incrementByAmount } from "./features/counter/counter-slice";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import { useSelector } from "react-redux";

function App() {
  // const [count, setCount] = useState(0);
  const [incrementAmount, setIncrementAmount] = useState("2");
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(increment());
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button onClick={onClick}>count is {count}</button>
        {/* <button onClick={() => setCount((count) => count + 1)}> */}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
