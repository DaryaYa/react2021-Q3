import React from "react";
import './searchBar.less';
import glass from "../img/glass.png";

export const SearchBar = () => (
    <form action="/" method="get">
      <label htmlFor="header-search">
        {/* <span className="visually-hidden">Search the cards</span> */}
      </label>
      <div className="wrapper">
         <input className="input"
        type="text"
        id="header-search"
        placeholder="Search the cards"
        name="s"     
      />
      <button className="search-button" type="submit"><img src={glass} className="glass" /> </button>
      </div>
        
    </form>
);