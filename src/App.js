import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import TipCalculator from "./components/TipCalculator";
import Header from "./components/Header";

const theme = {
  colors: {
    primaryCyan: "hsl(172, 67%, 45%)",
    secondaryCyan: "hsl(183, 100%, 15%)",
    secondaryDarkGrayishCyan: "hsl(186, 14%, 43%)",
    secondaryLightGrayishCyan: "hsl(185, 41%, 84%)",
    tertiaryDarkGrayishCyan: "hsl(184, 14%, 56%)",
    tertiaryLightGrayishCyan: "hsl(189, 41%, 97%)",
    white: "hsl(0, 0%, 100%)",
  },
};

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  font-family: inherit;
  box-sizing: border-box;
}
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <TipCalculator />
    </ThemeProvider>
  );
};

export default App;
