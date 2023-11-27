import React from "react";
import Meaning from "./Meaning";
export default function Results({ results }) {
  console.log("results: ", results);
  if (results) {
    return (
      <div className="results">
        <h3>{results.word}</h3>
        <div>
          <em>{results.phonetic}</em>
        </div>
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
