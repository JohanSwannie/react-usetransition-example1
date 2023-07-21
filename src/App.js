import { useState, useTransition } from "react";

export default function App() {
  const [isPending, startTransition] = useTransition();
  const [myInput, setMyInput] = useState("");
  const [array, setArray] = useState([]);

  const ARRAY_LENGTH = 12000;

  function resetInput() {
    setMyInput("");
    setArray([]);
    document.getElementById("inputter").focus();
  }

  function handleChange(event) {
    event.preventDefault();
    setMyInput(event.target.value);
    startTransition(() => {
      const list = [];
      for (var i = 0; i < ARRAY_LENGTH; i++) {
        list.push(event.target.value);
      }
      setArray(list);
    });
  }
  return (
    <div className="App">
      <button onClick={resetInput}>Reset</button>
      <input
        id="inputter"
        type="text"
        value={myInput}
        placeholder="Enter Text"
        autoFocus
        onChange={handleChange}
      />
      {isPending
        ? " Input Loading now, please be patient..."
        : array.map((element, index) => {
            return (
              <div
                key={index}
                style={{
                  fontSize: "60px",
                  color: "red",
                  fontFamily: "Tangerine",
                }}
              >
                {element}
              </div>
            );
          })}
    </div>
  );
}
