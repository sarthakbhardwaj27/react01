"use client"
import { useState } from "react";

export default function Accordion() {
  const [openSections, setOpenSections] = useState({
    html: false,
    css: false,
    js: false,
  });

  const toggleAccordion = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="bg-gray-800 h-screen w-screen text-white">
      {/* HTML Section */}
      <div>
        <div
          onClick={() => toggleAccordion("html")}
          style={{ cursor: "pointer" }}
        >
          HTML {"v"}
          <span className="accordion-icon">
            {openSections.html ? " " : " "}
          </span>
        </div>
        {openSections.html && (
          <div>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </div>
        )}
      </div>

      {/* CSS Section */}
      <div>
        <div
          onClick={() => toggleAccordion("css")}
          style={{ cursor: "pointer" }}
        >
          CSS {"v"}
          <span className="accordion-icon">{openSections.css ? " " : " "}</span>
        </div>
        {openSections.css && (
          <div>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </div>
        )}
      </div>

      {/* JavaScript Section */}
      <div>
        <div
          onClick={() => toggleAccordion("js")}
          style={{ cursor: "pointer" }}
        >
          JavaScript {"v"}
          <span className="accordion-icon">{openSections.js ? " " : " "}</span>
        </div>
        {openSections.js && (
          <div>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </div>
        )}
      </div>
    </div>
  );
}
