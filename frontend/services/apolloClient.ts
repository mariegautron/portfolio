import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { getStrapiURL } from "../utils/getStrapiUrl"

export const client = new ApolloClient({
  uri: getStrapiURL("/graphql"),
  cache: new InMemoryCache(),
})

export default client
