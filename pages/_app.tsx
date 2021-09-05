import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "@fontsource/eb-garamond";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <title>Adventurer's Log</title>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
