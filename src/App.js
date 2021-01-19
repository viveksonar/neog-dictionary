import React, { useState } from "react";
import "./styles.css";

const techDB = {
  HTML: [
    {
      name: "HTML Comments",
      difination:
        "The comment tag is used to insert comments in the source code.",
      link: "https://www.w3schools.com/tags/tag_comment.asp"
    },
    {
      name: "HTML DIV Tag",
      difination:
        "The <div> tag defines a division or a section in an HTML document.",
      link: "https://www.w3schools.com/tags/tag_div.asp"
    },
    {
      name: "HTML Form Tag",
      difination:
        "The <form> tag is used to create an HTML form for user input.",
      link: "https://www.w3schools.com/tags/tag_form.asp"
    },
    {
      name: "HTML Header Tag",
      difination:
        "The <header> element represents a container for introductory content or a set of navigational links",
      link: "https://www.w3schools.com/tags/tag_header.asp"
    }
  ],
  CSS: [
    {
      name: "CSS Selectors",
      difination:
        "CSS selectors are used to find (or select) the HTML elements you want to style",
      link: "https://www.w3schools.com/css/css_selectors.asp"
    },
    {
      name: "CSS Colors",
      difination: "CSS Colors set the color for HTML elements",
      link: "https://www.w3schools.com/css/css_colors.asp"
    },
    {
      name: "CSS Lists",
      difination: "CSS List is use to create unordered and ordered list",
      link: "https://www.w3schools.com/css/css_list.asp"
    },
    {
      name: "CSS Layout",
      difination: "Align items using CSS Layout",
      link: "https://www.w3schools.com/css/css_align.asp"
    }
  ],
  JavaScript: [
    {
      name: "JavaScript Comments",
      difination: "JavaScript comments make code more readable",
      link: "https://www.w3schools.com/js/js_comments.asp"
    },
    {
      name: "JavaScript Functions",
      difination:
        "Function is a block of code designed to perform a particular task",
      link: "https://www.w3schools.com/js/js_functions.asp"
    },
    {
      name: "JavaScript Events",
      difination: "Events are things that happen to HTML elements",
      link: "https://www.w3schools.com/js/js_events.asp"
    },
    {
      name: "JavaScript Arrays",
      difination:
        "JavaScript arrays are used to store multiple values in a single variable",
      link: "https://www.w3schools.com/js/js_arrays.asp"
    }
  ]
};
export default function App() {
  const [selectedGenere, setGenere] = useState("JavaScript");
  const genreClickHandler = (genere) => {
    setGenere(genere);
  };
  return (
    <div className="App">
      <h1> 💻 Neog Dictionary </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout things you should know after levelZero of NEOG Camp books.{" "}
      </p>
      <div>
        {Object.keys(techDB).map((genere) => (
          <button
            onClick={() => genreClickHandler(genere)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genere}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {techDB[selectedGenere].map((tech) => (
            <li
              key={tech.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "80%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <a href={tech.link}>
                <button
                  style={{
                    float: "right",
                    border: "2px solid #4CAF50",
                    backgroundColor: "#efefef"
                  }}
                >
                  Read more
                </button>
              </a>
              <div style={{ fontSize: "larger", padding: "0.5rem" }}>
                {" "}
                {tech.name}{" "}
              </div>
              <div style={{ fontSize: "smaller", padding: "0.5rem" }}>
                {" "}
                {tech.difination}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
