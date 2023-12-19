import React from "react";

function Quate({ quate, person, handleClick }) {
  return (
    <div className="quate-container">
      <legend className="text-container">
        <h2>"{quate}"</h2>
        <p>-{person}</p>
      </legend>
    </div>
  );
}

export default Quate;
