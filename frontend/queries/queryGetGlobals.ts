import { gql } from "@apollo/client"

export const GET_GLOBALS = gql`
  query {
    global {
      data {
        attributes {
          siteName
          defaultSeo {
            metaTitle
            metaDescription
            shareImage {
              data {
                attributes {
                  alternativeText
                  name
                  url
                  width
                  height
                }
              }
            }
          }
          favicon {
            data {
              attributes {
                alternativeText
                name
                url
                width
                height
              }
            }
          }
          layout {
            navItems {
              label
              sublabel
              href
              children {
                label
                sublabel
                href
              }
            }
            twitterLink
            linkedinLink
            rights
            logo {
              data {
                attributes {
                  alternativeText
                  name
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`
