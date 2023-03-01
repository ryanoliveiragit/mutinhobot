import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './pages/App'
import { GlobalStyle } from "./styles/globals";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaultTheme";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
        <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
