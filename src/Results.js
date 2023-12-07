import React from "react";
import Meaning from "./Meaning";
import "./results.css";
export default function Results({ results, thumbs }) {
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

        <div className="thumbs-container">
          {thumbs.map((x, index) => (
            <span key={index}>
              <img className="result-thumb" src={x} />
            </span>
          ))}
        </div>

        <div>
          {results?.meanings?.map((meaning, index) => {
            return <Meaning key={index} meaning={meaning} />;
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
