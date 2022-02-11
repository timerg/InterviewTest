import React, { useState } from "react";
import AsyncUpdator from "./AsyncUpdator";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";

export default function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <AppBar position="fixed">
        <Tabs value={value} onChange={(e, v) => setValue(v)}>
          <Tab label={"AsyncUpdate"} />
          <Tab label={"Context"} />
        </Tabs>
      </AppBar>
      <div className="content">
        {value === 0 ? <AsyncUpdator /> : undefined}
      </div>
    </div>
  );
}
