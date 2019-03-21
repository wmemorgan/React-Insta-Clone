import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './components/StyleComponents/GlobalStyle'
import theme from './components/StyleComponents/theme'
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
