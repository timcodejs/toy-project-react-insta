import './App.css';
import Main from './pages/main';
import ZindexerProvider from './components/reducer/zindexercontext';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <ZindexerProvider>
      <GlobalStyle />
      <Main />
    </ZindexerProvider>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      -ms-overflow-style: none;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  button {
    border: 0;
    background: none;
    cursor: pointer;
  }
  p {
    font-size: 14px;
  }
`;