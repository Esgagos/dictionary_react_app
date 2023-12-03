import React from "react";
import Synonyms from "./Synonyms";
import "./meaning.css";
export default function Meaning({ meaning }) {
  console.log("meaning: ", meaning);

  return (
    <section className="meaning">
      <h4>{meaning.partOfSpeech}</h4>
      <div className="word-definition">{meaning.definition}</div>
      <div className="word-example">
        <em>{meaning.example}</em>
      </div>
      <Synonyms synonyms={meaning.synonyms} />
    </section>
  );
}
