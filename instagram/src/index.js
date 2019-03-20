import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './components/Shared/GlobalStyle'
import theme from './components/Shared/theme'
import './index.scss';
import App from './components/App/App';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <App />
      </>
    </ThemeProvider>

  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
