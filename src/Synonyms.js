import React from "react";
import "./synonyms.css";

export default function Synonyms({ synonyms }) {
  if (synonyms) {
    return (
      <ul className="synonyms">
        {synonyms.map((synonym, index) => (
          <li key={index}>{synonym}</li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
}
