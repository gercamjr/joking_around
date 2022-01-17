import React from "react";
import "../styles/styles.css";

export default function Joke(props) {
  return (
    <div className="joke">
      <h2 className="setup">{props.setup}</h2>
      <h3 className="punchline">{props.punchline}</h3>
    </div>
  );
}
