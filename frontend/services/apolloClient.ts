import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
})

export default client
