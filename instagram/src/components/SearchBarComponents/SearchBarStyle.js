import styled from 'styled-components'
import { color, colorScheme, fontStyles, fontSizing, breakpoints, flex } from '../StyleComponents/theme'

export const SearchBarContainer = styled.header`
  width: 100%;
  ${flex('row','space-between','center')};
  padding: 20px;
  color: ${colorScheme.headerFontColor};
  background: ${colorScheme.headerBgColor};
  font-size: ${fontSizing.m};

   @media ${breakpoints[0]}  {
    ${flex('column','center')};
    padding: 10px 0;
    & * {
      margin: 5px 0;
    }

  } 
`

export const LogoHeader = styled.div`
  ${flex('row','space-evenly','bottom')};
  font-size: ${fontSizing.ml};

  .logo-image {
    padding: 0 20px;
  }

  .logo-text {
    font-family: ${fontStyles.logoFont};
    border-left: 1px solid ${colorScheme.headerFontColor};
    padding: 0 20px;
  }
`

export const SearchFieldContainer = styled.div`
  ${flex('row', 'center', 'center')};
  padding: 5px 10px;
  border: 0.5px solid ${colorScheme.defaultBorderColor};
  color: ${colorScheme.defaultFontColor};
  background: ${color.primaryBgShading};
  font-size: ${fontSizing.xs};

  @media ${breakpoints[0]} {
    order: 1;
  }  

  .search {
    margin-left: 1rem;
    border: none;
    font-family: ${fontStyles.defaultFont};
    font-size: ${fontSizing.s};
    background: ${color.primaryBgShading};
  }
`

export const Profile = styled.div`
  ${flex()};
  flex-wrap: nowrap;

  i {
    margin: 0 20px;
    font-size: ${fontSizing.ml};
  }
`
