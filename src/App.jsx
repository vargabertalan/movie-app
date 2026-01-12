import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [counter, setCounter] = useState(0);

  function handleDecrease() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  function handleIncrease() {
    setCounter(counter + 1);
  }
  function handleReset() {
    setCounter(0);
  }

  return (
    <div className="min-h-screen min-w-screen h-full w-full flex items-center justify-center bg-gray-700">
      <h1 className="text-3xl font-bold underline text-white">
        {/* Hello world! */}
        {counter}
      </h1>
      <Button
        text={"Decrease"}
        onClick={handleDecrease}
        disabled={counter < 1}
      />
      <Button text={"Increase"} onClick={handleIncrease} />
      <Button text={"Reset"} onClick={handleReset} />
    </div>
  );
}

export default App;
