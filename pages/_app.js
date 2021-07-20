import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globals";
import { theme } from "../styles/theme";

import Hero from "../components/Hero";

import Navbar01 from "../components/Navbar01";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar01 />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
