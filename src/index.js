import { render } from "react-dom";
import App from "./App";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://graphql.anilist.co",
    cache: new InMemoryCache(),
})

render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, 
    document.getElementById("root")
);