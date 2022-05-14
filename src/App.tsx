import React from "react";
import "./App.css";
import ConvertFile from "./ConvertFile";

interface OwnProps {
  children: any;
}

const App: React.FC<OwnProps> = (props) => {
  return (
    <div className="App">
      <ConvertFile children={props.children} />
    </div>
  );
};

export default App;
