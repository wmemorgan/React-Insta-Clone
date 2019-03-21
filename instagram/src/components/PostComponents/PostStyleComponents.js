import styled from 'styled-components'
import { colorScheme, breakpoints, flex } from '../StyleComponents/theme'

export const PostContainer = styled.div`
  width: 90%;
  margin: 50px 0;
  border: 1px solid ${colorScheme.defaultBorderColor};

  @media ${breakpoints[0]} {
    margin: 20px 0;
  }

  .filtered {
    display: none;
  }
`

export const PostHeader = styled.header`
  width: 100%;
  ${flex('row','center')};
  padding: 10px;
  color: ${colorScheme.headerFontColor};
  background: ${colorScheme.headerBgColor};
`

export const UserThumbnail = styled.div`
`

// See shared component for Username

export const PostPictureContainer = styled.div`
`

export const PostPicture = styled.img`
`

export const PostFooter = styled.footer`
`