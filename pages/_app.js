import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globals";
import { theme } from "../styles/theme";

import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
