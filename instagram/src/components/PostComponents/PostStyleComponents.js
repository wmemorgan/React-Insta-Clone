import styled, { css } from 'styled-components'
import { colorScheme, fontSizing, breakpoints, flex } from '../StyleComponents/theme'

export const PostContainer = styled.div`
  width: 90%;
  margin: 50px 0;
  border: 1px solid ${colorScheme.defaultBorderColor};

  @media ${breakpoints[0]} {
    margin: 20px 0;
  }

  ${props =>
    props.className === 'filtered' &&
    css`
      display: none;
  `}
`

export const PostHeader = styled.header`
  width: 100%;
  ${flex('row','center')};
  padding: 10px;
  color: ${colorScheme.headerFontColor};
  background: ${colorScheme.headerBgColor};
`

export const UserThumbnail = styled.div`
    width: 50px;

    img {
      border-radius: 50%;
    }
`


// See shared component for Username

export const PostPictureContainer = styled.div`
`

export const PostPicture = styled.img`
`

export const PostFooter = styled.footer`
    width: 100%;
    ${flex('column')};
    padding: 10px;
    font-size: ${fontSizing.s};
    font-weight: bold;
    color: ${colorScheme.footerFontColor};
    background: ${colorScheme.footerBgColor};

    & * {
      margin: 5px 0;
    }
`

export const FooterIcons = styled.div`
      font-size: $ml;

      i:last-child {
        margin: 0 10px;
      }

      .fa-heart {
        cursor: pointer;
      }
`