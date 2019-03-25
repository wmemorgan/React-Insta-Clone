import styled, { css } from 'styled-components'

const Logo = styled.div`
    font-family: ${props => props.theme.fontStyles.logoFont};
    font-size: ${props => props.theme.fontSizing.l};
    font-weight: bold;

    ${props => 
      props.main &&
      css`
        text-align: center;
    `}
`

export default Logo