import styled from 'styled-components'
import { breakpoints, flex } from '../StyleComponents/theme'

export const CommentCard = styled.div`
  width: 90%;
  ${flex('row','normal','space-between')};

  @media ${breakpoints[0]} {
    width: 100%;
  }
`

export const CommentContent = styled.div`
  ${flex('row','baseline')};
`

//Username component

export const CommentText = styled.div`
    margin: 5px;
    font-weight: normal;
`

export const CommentDeleteContainer = styled.div`
  ${flex('column','flex-end')};
  .fa-ellipsis-v {
    margin: 5px;
  }
`