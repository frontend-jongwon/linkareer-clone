import "../styles/globals.css";
import type { AppProps } from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      <CssBaseline />
    </ApolloProvider>
  );
}

export default MyApp;
