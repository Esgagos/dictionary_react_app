import React, { useState, useRef } from "react";
import "./dictionary.css";
import axios from "axios";
export default function Dictionary() {
  const [wordValue, setWordValue] = useState(undefined);
  const searchValueInputRef = useRef("");
  const apiKey = "6e77343taf210f7060a5ae1ab4ao9183";
  const processResponse = (response) => {
    const r = response.data;
    return console.log("hello");
  };
  const handleResponse = (response) => {
    console.log("responses:", response.data);
    if (response.data) {
      const processedResponse = processResponse(response);
      setWordValue(processedResponse);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const word = searchValueInputRef.current.value;
    console.log(word);

    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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
      </div>
    </div>
  );
}
