import React from "react";
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";

import Routes from "./routes";
import theme from "./styles/theme";

import "./styles/index.css";

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
