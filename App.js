import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="left">
          <img src="" alt="Logo" />
        </div>
        <div className="center">
          <input
            className="input"
            type="text"
            placeholder="Search anything you want..."
          />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
        <div className="right">
          <img src="" alt="User Icon" />
        </div>
      </header>
    </>
  );
};


