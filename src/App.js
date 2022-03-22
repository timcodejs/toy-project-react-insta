import './App.css';
import Main from './pages/main';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
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

  ::-webkit-scrollbar { display: none; }
  
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
`