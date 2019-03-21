import styled from 'styled-components'

const Form = styled.form`
  width: 90%;
  margin: 20px 0;
  border: 1px solid ${props => props.theme.colorScheme.defaultBorderColor};

  input {
    width: 100%;
    padding: 5px 10px;
    border: 0;
    font-size: ${props => props.theme.fontSizing.s};
  }
`

export default Form