/* Header and search bar component */
import React from 'react';

// Styled components
import { SearchBarContainer, LogoHeader, SearchFieldContainer, Profile } from './SearchBarStyle'

const SearchBar = (props) => {
  const { searchTask, search } = props

  return (
    <SearchBarContainer>
      <LogoHeader>
        <i className="logo-image fab fa-instagram"></i>
        <div className="logo-text">Instaclone</div>
      </LogoHeader>
      
      <SearchFieldContainer>
        <i className="fas fa-search"></i>
        <input 
          onChange={searchTask} 
          value={search} 
          type="search" 
          className="search fas" 
          placeholder="Search" 
        />
      </SearchFieldContainer>
      
      <Profile>
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </Profile>
  </SearchBarContainer>
  )
}

export default SearchBar;