import styled, { css } from 'styled-components'

const Username = styled.div`
    margin: 0 5px;
  
    ${props => props.theme.fontSizing.s};
    font-weight: bold;

    ${props => 
      props.primary &&
      css`
        font-size: ${props => props.theme.fontSizing.sm};
    `} 
`

export default Username