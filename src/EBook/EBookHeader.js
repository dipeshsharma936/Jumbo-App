import React from "react";
import { Link } from "react-router-dom";

const EBookHeader = () => {
  return (
    <div className="ebook-header">
      <Link to="/">
        <span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/738/738822.png"
            alt="home"
          />
        </span>
      </Link>
      <h2>E-Book</h2>
    </div>
  );
};

export default EBookHeader;
