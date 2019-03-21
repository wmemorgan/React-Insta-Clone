import styled, { css } from 'styled-components'

const Form = styled.form`
  width: 90%;
  margin: 20px 0;
  border: 1px solid ${props => props.theme.colorScheme.defaultBorderColor};

  input {
    width: 100%;
    padding: 5px 10px;
    border: none;
    font-size: ${props => props.theme.fontSizing.s};
  }

  ${props => 
    props.login &&
    css`
    ${props.theme.flex('column','center')};
    border: none;

    & * {
      width: 90%;
      margin: 5px 0;
      border-radius: 5px;
    }

    input {
      padding: 10px;
      border: 1px solid ${props.theme.colorScheme.defaultBorderColor};
      background: ${props.theme.color.primaryBgShading};
    }
  `
}


`

export default Form