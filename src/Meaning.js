import React from "react";
import Synonyms from "./Synonyms";
export default function Meaning({ meaning }) {
  console.log("meaning: ", meaning);

  return (
    <div>
      <h3>{meaning.partOfSpeech}</h3>
      <div>{meaning.definition}</div>
      <Synonyms synonyms={meaning.synonyms} />
      <div>
        <em>{meaning.example}</em>
      </div>
    </div>
  );
}
