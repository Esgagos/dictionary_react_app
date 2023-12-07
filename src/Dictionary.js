import React, { useState, useRef, useEffect, useCallback } from "react";
import "./dictionary.css";
import Results from "./Results";
import axios from "axios";
export default function Dictionary() {
  const [wordValues, setWordValues] = useState(undefined);
  const [resultThumbnails, setResultThumbnails] = useState([]);
  const searchValueInputRef = useRef("");
  const apiKey = "6e77343taf210f7060a5ae1ab4ao9183";
  const unSplashAccessKey = "lLT0Mb5eM03B-8a50Pm4IPtYtwPRHTs1r0dJ7f4-uZ8";

  const handleResponse = useCallback((response) => {
    const responses = response.data;
    console.log("responses:", response);
    if (response.data.message === "Word not found") {
      console.log("word not found");
      alert("word not found");
    } else {
      setWordValues(responses);
    }
  }, []);
  const handleImageSearchResponse = (response) => {
    console.log("images:", response);
    let results = response.data?.results;
    results = results.slice(0, 4);
    const thumbs = results.map((x) => ({
      url: x.urls?.thumb,
      desc: x.alt_description,
    }));
    setResultThumbnails(thumbs);
  };

  const handleLookup = useCallback(
    (word) => {
      console.log("hello");
      const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
      axios
        .get(apiUrl)
        .then(handleResponse)
        .catch((e) => {
          console.log(e);
        });
      const unSplashUrl = `https://api.unsplash.com/search/photos?query=${word}&orientation=squarish`;
      const headers = {
        Authorization: `Client-ID ${unSplashAccessKey}`,
      };
      axios
        .get(unSplashUrl, { method: "GET", headers: headers })
        .then(handleImageSearchResponse)
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
          <Results results={wordValues} thumbs={resultThumbnails} />
        </div>
        <footer>
          <a
            href="https://github.com/Esgagos/dictionary_react_app"
            target="blank"
          >
            Open-source code{" "}
          </a>
          <span className="footer-signature">by Esperanza Tyldesley 🤩</span>
        </footer>
      </div>
    </div>
  );
}
