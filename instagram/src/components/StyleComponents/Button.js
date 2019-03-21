import styled, { css } from 'styled-components'
import { color, fontSizing } from './theme'

const Button = styled.button`
    border: none;
    border-radius: 5px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    color: ${color.lightText};

    /* Primary settings */
    ${props =>
    props.primary &&
    css`
        padding: 5px;
        font-size: ${fontSizing.s};
        background: ${color.primaryColor};
    `}

    /* Alert settings */
    ${props => 
      props.alert &&
      css`
        padding: 5px;
        font-size: ${fontSizing.xxs};
        background: ${color.danger};
    `}


`

export default Button