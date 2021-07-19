import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globals";
import { theme } from "../styles/theme";
import Hero from "../components/Hero";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Hero />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
