import React from "react";
import "./synonyms.css";

export default function Synonyms({ synonyms }) {
  if (synonyms) {
    return (
      <ul className="synonyms">
        <div className="similar">Similar :</div>
        {synonyms.map((synonym, index) => (
          <li key={index}>{synonym}</li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
}
