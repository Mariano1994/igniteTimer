import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styles/themes/default";

import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { CycleContexProvider } from "./context/CyclesContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CycleContexProvider>
          <Router />
        </CycleContexProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
