import React from "react";
export default function Meaning(props) {
  console.log("first meaning", props.meaning);

  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>{props.meaning.definition}</div>
      <div>
        <em>{props.meaning.example}</em>
      </div>
    </div>
  );
}
