import styled, { css } from 'styled-components'

const Username = styled.div`
    margin: 0 5px;
    font-size: ${props => props.theme.fontSizing.s};
    font-weight: bold;

    ${props => 
      props.primary &&
      css`
        font-size: ${props => props.theme.fontSizing.m};
    `} 
`

export default Username