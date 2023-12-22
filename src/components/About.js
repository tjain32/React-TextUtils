import { useState } from "react";
import React from "react";

export default function About(props) {

  let myStyle = {
    color: props.mode === 'dark'? 'white':'black',
    backgroundColor: props.mode === 'dark'? '#34495E':'white',
  }
  return (
    <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
            <strong>  Analyze your text </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Textutils can be used to manipulate your text for important tasks in day to day life</strong> It is
              easy to use and provides useful methods, be it word count, character count etc.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
            <strong>  Free to Use </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>It is free of cost!! Yayy.</strong> It is suitable to use when you need to write your reports,
                 essays in linmited number of words.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            <strong>  Browser compatible </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>It can be used in any browser be it Safari, Mozilla Firefox or Google Chrome.</strong>
              You can try using it in your mobile and iPad as well. :) 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
