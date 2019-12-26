import React from "react";
import ReactDOM from "react-dom";
import meta from "./content/meta.json";

const App = () => {
  return <div>This is "{meta.title}"</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
