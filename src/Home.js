import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div>Jumbo App!!! by Dipesh Sharma</div>
      <div className="icon-container">
        <Link to="/todoslist" style={{ textDecoration: "none" }}>
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/839/839860.png"
              alt="tdl"
            />
            <p>Todos-List</p>
          </span>
        </Link>
        <Link to="/ebook" style={{ textDecoration: "none" }}>
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3218/3218394.png"
              alt="e-book"
            />
            <p>Books-List</p>
          </span>
        </Link>
        <span>
          <img
            src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80"
            alt="car"
          />
        </span>
      </div>
    </div>
  );
};
export default Home;
