import React from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const client = new ApolloClient({
  uri: "https://sclbe.herokuapp.com/graphql",
  cache: new InMemoryCache()
});

root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
