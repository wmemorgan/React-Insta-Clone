import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="logo">
        <i className="logo-image fab fa-instagram"></i>
        <div className="logo-text">Instragram</div>
      </div>
      <input type="search" className="search fas" placeholder="&#xf002; Search"/>
      <div className="profile">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </div>

    </div>
  )
}

export default SearchBar;