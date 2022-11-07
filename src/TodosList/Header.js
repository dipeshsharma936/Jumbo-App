import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h2>Todos List </h2>
      <Link to="/">
        <span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/738/738822.png"
            alt="home"
          />
          {/* <p>Home</p> */}
        </span>
      </Link>
    </div>
  );
};
export default Header;
