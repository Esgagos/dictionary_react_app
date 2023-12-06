import React, { useState, useRef, useEffect, useCallback } from "react";
import "./dictionary.css";
import Results from "./Results";
import axios from "axios";
export default function Dictionary() {
  const [wordValues, setWordValues] = useState(undefined);
  const searchValueInputRef = useRef("");
  const apiKey = "6e77343taf210f7060a5ae1ab4ao9183";
  const deployedPexelsApiKey =
    "cBIsCSFVQR4c1k64d9PtVZSOIDhgzwX7ASOLJYSofPRdzYWKZgtglsxs";
  // const localHostPexelsApiKey =
  //   "9d2niTzSUDC4sp1KuXrp4Q9W1UrKIfcigaRGeg8s4JGUP3TLIVuxQnFz";

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
  const handlePexelsResponse = (response) => {
    console.log("pexels:", response);
    response.add("Access_Control_Allow_origin");
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
      const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=1`;

      const headers = {
        Authorization: `Bearer ${deployedPexelsApiKey}`,
        "Referer-Policy": "origin",
      };
      // const myHeaders = headers.set(
      //   "Access_Control_Allow_Origin",
      //   "http//http://localhost:3000/"
      // );

      axios
        .get(pexelsApiUrl, { method: "GET" }, { headers: headers })
        .then(handlePexelsResponse)

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
