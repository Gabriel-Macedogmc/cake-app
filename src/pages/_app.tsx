import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

import { ChakraProvider } from "@chakra-ui/react";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
