import React, { useState } from "react";
import "./dictionary.css";

export default function Dictionary() {
  const [wordValue, setWordValue] = useState(undefined);
  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Searching for ${wordValue}`);
  };
  const updateWord = (event) => {
    setWordValue(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="dictionary">
      <div className="container">
        <p className="title-name">Dictionary</p>
        <p className="question-search">Which word would you like to look up?</p>
        <form on onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={updateWord}
            placeholder="Search for a word..."
            className="search-input"
            id="search-input"
          ></input>
        </form>
      </div>
    </div>
  );
}
