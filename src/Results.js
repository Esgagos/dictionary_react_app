import React from "react";
import Meaning from "./Meaning";
import "./results.css";
export default function Results({ results }) {
  console.log("results: ", results);
  if (results) {
    return (
      <div className="results">
        <section>
          <h3>{results.word}</h3>
          <div>
            <em className="word-phonetic">/{results.phonetic}/</em>
          </div>
        </section>

        <div>
          {results.meanings.map((meaning, index) => {
            return <Meaning key={index} meaning={meaning} />;
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
