import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { increment, incrementByAmount } from "./features/counter/counter-slice";
import { useFetchBreedsQuery } from "./features/dogs/dogs-api-slice";
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

  const [numDogs, setNumDogs] = useState(5);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

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

        <div>
          <p>Number of dogs to fetch:</p>
          <select
            value={numDogs}
            onChange={(e) => setNumDogs(Number(e.target.value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div>
          <p> number of dogs fetched: {data.length} </p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} height="250" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
