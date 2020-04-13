// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">

      <div className="image-wrapper">
        <i className="fab fa-instagram iconMain" />
        <p className="logoText">Instagram</p>
      </div>

      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
        />
      </form>

      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass customIcons" />
        </div>
        <div className="social">
          <i className="far fa-heart customIcons" />
        </div>
        <div className="social">
          <i className="far fa-user-circle customIcons" />
        </div>
      </div>

    </div>
  );
};

export default SearchBar;