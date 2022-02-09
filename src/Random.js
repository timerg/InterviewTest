import { useEffect, useState, useRef } from "react";

let interval = () => Math.random() * 5000;

export default function (incrementor) {
  const [count, setCount] = useState(() => 0);
  let iRef = useRef(null);
  iRef.current = incrementor;

  useEffect(() => {
    let handler = () => {
      let f = iRef.current;
      if (f) {
        iRef.current((v) => v + 1);
        setCount((c) => c + 1);
      }
    };
    let i = setInterval(handler, interval());
    return () => clearInterval(i);
  }, []);

  return count;
}
