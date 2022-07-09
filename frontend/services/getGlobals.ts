import { gql } from "@apollo/client"
import apolloClient from "./apolloClient"
import { GET_GLOBALS } from "../queries"

export const getGlobals = async () => {
  const { data } = await apolloClient.query({
    query: GET_GLOBALS,
  })

  return data
}
