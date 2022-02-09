import { useEffect, useState } from "react";
import "./styles.css";
import Random from "./Random.js";

export default function App() {
  const [value, setValue] = useState(0);
  let count = Random(setValue);

  return (
    <div className="App">
      <ul>
        <li>
          <span>value: {value}</span>
        </li>
        <li>
          <span>count: {count}</span>
        </li>
      </ul>
    </div>
  );
}
