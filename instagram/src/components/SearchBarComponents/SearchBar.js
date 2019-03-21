/* Header and search bar component */
import React from 'react';

// Styled components
import { SearchBarContainer } from './SearchBarStyle'

const SearchBar = (props) => {
  const { searchTask, search } = props

  return (
    <SearchBarContainer>
      <div className="logo">
        <i className="logo-image fab fa-instagram"></i>
        <div className="logo-text">Instaclone</div>
      </div>
      <div className="search-wrapper">
        <i className="fas fa-search"></i>
        <input 
          onChange={searchTask} 
          value={search} 
          type="search" 
          className="search fas" 
          placeholder="Search" 
        />
      </div>
      
      <div className="profile">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </div>
  </SearchBarContainer>
  )
}

export default SearchBar;