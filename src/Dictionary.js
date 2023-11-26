import React, { useState, useRef } from "react";
import "./dictionary.css";
import Results from "./Results";
import axios from "axios";
export default function Dictionary() {
  const [wordValues, setWordValues] = useState(undefined);
  const searchValueInputRef = useRef("");
  const apiKey = "6e77343taf210f7060a5ae1ab4ao9183";

  // const processResponse = (response) => {};

  const handleResponse = (response) => {
    const responses = response.data;
    console.log("responses:", response);
    // if (response.data) {
    //   const processedResponse = processResponse(response);
    setWordValues(responses);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const word = searchValueInputRef.current.value;
    console.log(word);

    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="dictionary">
      <div className="container">
        <p className="title-name">Dictionary</p>
        <p className="question-search">Which word would you like to look up?</p>
        <form on onSubmit={handleSubmit}>
          <input
            type="search"
            ref={searchValueInputRef}
            placeholder="Search for a word..."
            className="search-input"
            id="search-input"
          ></input>
        </form>
        <Results results={wordValues} />
      </div>
    </div>
  );
}
