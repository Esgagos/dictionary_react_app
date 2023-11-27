import React from "react";

export default function Synonyms({ synonyms }) {
  if (synonyms) {
    return (
      <ul className="synonyms">
        <strong>Synonyms:</strong>
        {synonyms.map((synonym, index) => (
          <li key={index}>{synonym}</li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
}
