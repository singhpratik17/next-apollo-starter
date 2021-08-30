import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import client from "../apolloClient";

function MyApp({ Component, pageProps }) {
  return (
      // For client-side rendering
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
  )
}

export default MyApp
