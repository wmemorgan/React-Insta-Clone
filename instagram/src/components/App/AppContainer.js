import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 1000px;
  ${props => props.theme.flex('column', 'center')};
  margin: 0 auto;
`

export default AppContainer