import { GetStaticProps } from "next"
import React, { FC } from "react"
import Layout from "../components/Layout/Layout"
import { fetchAPI } from "../lib/api"
import { getGlobals } from "../services/getGlobals"

const Home: FC<any> = ({ homepage }) => {
  return (
    <Layout seo={homepage.attributes.seo}>
      {/* <h1>{homepage.attributes.hero.title}</h1> */}
      {/* <CallToActionWithVideo />
      <SplitWithImage /> */}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Run API calls in parallel

  const [homepageRes] = await Promise.all([
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
