import styled, { css } from 'styled-components'
import { color, fontSizing } from './theme'

const Button = styled.button`
    border: none;
    border-radius: 5px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    color: ${color.lightText};
    ${props => 
      props.alert &&
      css`
        font-size: ${fontSizing.xxs};
        background: ${color.danger};
    `}
`

export default Button