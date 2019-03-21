import styled from 'styled-components'
import { color, colorScheme, flex } from '../StyleComponents/theme'

const LoginContainer = styled.div`
  width: 90%;
  max-width: 600px;
  ${flex('column','center','center')};
  margin: 50px auto;
  padding: 50px 0;
  border: 1px solid ${colorScheme.defaultBorderColor};
  background: ${color.lightText};
`

export default LoginContainer