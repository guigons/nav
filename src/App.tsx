import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: nav</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <Header />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
