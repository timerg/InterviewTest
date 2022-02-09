import { useState } from "react";

function random() {
  return new Promise((resolve) => {
    let interval = Math.random() * 3000;
    setTimeout(() => {
      resolve();
    }, interval);
  });
}

function Box({ value }) {
  return (
    <div className="box">
      <div> {value} </div>
    </div>
  );
}

export default function () {
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
        <Box value={count} />
        <Box value="* 2" />
        <Box value="=" />
        <Box value={loading ? "..." : value} />
      </div>
      <button onClick={handleClick}>click</button>
    </>
  );
}
