import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { getStrapiURL } from "../utils/getStrapiUrl"

const WithGraphQL = ({ children }) => {
  const client = new ApolloClient({
    uri: getStrapiURL("/graphql"),
    cache: new InMemoryCache(),
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default WithGraphQL
