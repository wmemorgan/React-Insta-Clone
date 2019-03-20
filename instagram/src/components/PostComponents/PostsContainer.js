import styled from 'styled-components'
import { colorScheme, fontSizing, breakpoints, flex } from '../Shared/theme'

const PostsContainer = styled.div`
.post {
  width: 90%;
  ${flex('column','center')};
  margin: 50px 0;
  border: 1px solid ${colorScheme.defaultBorderColor};

  @media ${breakpoints[0]} {
    margin: 20px 0;
  }

  .filtered {
    display: none;
  }

  .post-header {
    width: 100%;
    ${flex(...'center')};
    padding: 10px;
    color: ${colorScheme.headerFontColor};
    background: ${colorScheme.headerBgColor};

    .avatar-wrapper {
      width: 50px;
    
      .avatar {
        border-radius: 50%;
      }
    }
    
    .username {
      margin: 0 5px;
      font-size: ${fontSizing.s};
      font-weight: bold;
    }
  }

  .post-footer {
    width: 100%;
    ${flex('column')};
    padding: 10px;
    font-size: $s;
    font-weight: bold;
    color: ${colorScheme.footerFontColor};
    background: ${colorScheme.footerBgColor};

    .post-footer-icons {
      font-size: ${fontSizing.ml};

      i:last-child {
        margin: 0 10px;
      }

      .fa-heart {
        cursor: pointer;
      }
    }

    & * {
      margin: 5px 0;
    }
  }

}
`

export default PostsContainer