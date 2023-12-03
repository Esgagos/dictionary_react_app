import React, { useState, useRef, useEffect, useCallback } from "react";
import "./dictionary.css";
import Results from "./Results";
import axios from "axios";
export default function Dictionary() {
  const [wordValues, setWordValues] = useState(undefined);
  const searchValueInputRef = useRef("");
  const apiKey = "6e77343taf210f7060a5ae1ab4ao9183";

  const handleResponse = useCallback((response) => {
    const responses = response.data;
    console.log("responses:", response);
    setWordValues(responses);
  }, []);

  const handleLookup = useCallback(
    (word) => {
      const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
      axios
        .get(apiUrl)
        .then(handleResponse)
        .catch((e) => {
          console.log(e);
        });
    },
    [handleResponse]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    let word;
    word = searchValueInputRef.current.value;
    handleLookup(word);
  };

  useEffect(() => {
    handleLookup("sunrise");
  }, [handleLookup]);

  return (
    <div className="dictionary">
      <div className="container">
        <p className="title-name">Dictionary</p>
        <p className="question-search">Which word would you like to look up?</p>
        <div className="header-container">
          <form on onSubmit={handleSubmit}>
            <input
              type="search"
              ref={searchValueInputRef}
              placeholder="Search for a word..."
              className="search-input"
              id="search-input"
            ></input>
          </form>
        </div>
        <div className="body-container">
          <Results results={wordValues} />
        </div>
      </div>
    </div>
  );
}
