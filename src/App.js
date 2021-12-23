import React from "react";
import "./styles.css";
import Button from "./Component/Button";
import CustomHooks from "./Component/Hooks";
import GithubSearchHooks from "./Component/GithubSearchHooks";

export default function App() {
  return (
    <div className="App">
      <h1>useContext Hooks</h1>
      <br />

      <Button label="button" />
      <CustomHooks />
      <GithubSearchHooks />
    </div>
  );
}
