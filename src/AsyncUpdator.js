import { useState } from "react";

function random() {
  return new Promise((resolve) => {
    let interval = Math.random() * 3000;
    setTimeout(() => {
      resolve();
    }, interval);
  });
}

function Box({ value, label }) {
  return (
    <div className="box">
      <div> {value} </div>
      {label ? <span>{label}</span> : undefined}
    </div>
  );
}

function Content() {
  const [value, setValue] = useState(0);

  let [loading, setLoading] = useState(false);
  let [count, setCount] = useState(0);
  let handleClick = () => {
    setCount(count + 1);
    setLoading(true);
    random()
      .then(() => {
        setValue(value + 2);
        setLoading(false);
      })
      .catch(console.error);
  };

  return (
    <>
      <div className="expression">
        <Box value={count} label="輸入" />
        <Box value="* 2" />
        <Box value="=" />
        <Box value={loading ? "..." : value} label="輸出" />
      </div>
      <button onClick={handleClick}>+ 1</button>
    </>
  );
}

export default function () {
  return (
    <>
      <h5>請讓讓等式在所有狀況下保持正確</h5>
      <Content />
    </>
  );
}
