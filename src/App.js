import { useState } from "react";
import AsyncUpdator from "./AsyncUpdator";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";

export default function App() {
  const [page, setPage] = useState(1);
  function handleChange(v, page) {
    setPage(page);
  }

  return (
    <div className="App">
      <AppBar position="fixed">
        <Tabs>
          <Tab label={"AsyncUpdate"} />
          <Tab label={"Context"} />
        </Tabs>
      </AppBar>
      <div className="content">{page === 1 ? <AsyncUpdator /> : undefined}</div>
    </div>
  );
}
