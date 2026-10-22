
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="app">
      <div className="counter-card">
        <div className="icon">🔢</div>

        <h1>Counter App</h1>
        <p className="subtitle">
          Simple React Hooks Application
        </p>

        <div className="counter-display">
          {count}
        </div>

        <p className="status">
          {count > 0
            ? "You're counting up! 🚀"
            : count < 0
            ? "You're counting down! 📉"
            : "Ready to start? ✨"}
        </p>

        <div className="button-group">
          <button className="decrement" onClick={decrement}>
            − Decrease
          </button>

          <button className="increment" onClick={increment}>
            + Increase
          </button>
        </div>

        <button className="reset" onClick={reset}>
          ↻ Reset Counter
        </button>

        <p className="footer">
          Built with React useState Hook ❤️
        </p>
      </div>
    </div>
  );
}

export default App;
