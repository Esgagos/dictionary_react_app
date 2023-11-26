import React from "react";
import Meaning from "./Meaning";
export default function Results({ results }) {
  if (results) {
    return (
      <div className="results">
        <h3>{results.word}</h3>
        <div>
          <em>{results.phonetic}</em>
        </div>
        {results.meanings.map((meaning, index) => {
          return (
            <div key={index}>{meaning && <Meaning meaning={meaning} />}</div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
