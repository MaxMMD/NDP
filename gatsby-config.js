/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Friends of Notre-Dame de Paris",
    description:
      "Eiusmod esse anim non excepteur occaecat exercitation aliqua.",
    donationLink:
      "https://secure.givelively.org/donate/friends-of-notre-dame-de-paris-inc/humanity-rising-notre-dame-reborn",
    socialMedia: {
      twitter: "https://twitter.com/friendsofnotredame",
      facebook: "https://facebook.com/friendsofnotredame",
      instagram: "https://instagram/friendsofnd",
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-transition-link",
    // Disabled because cookie confirmation not required
    // {
    //   resolve: `gatsby-plugin-gdpr-cookies`,
    //   options: {
    //     googleTagManager: {
    //       trackingId: "", // leave empty if you want to disable the tracker
    //       cookieName: "gatsby-gdpr-google-tagmanager", // default
    //       dataLayerName: "dataLayer", // default
    //     },
    //     // defines the environments where the tracking should be available  - default is ["production"]
    //     environments: ["production", "development"],
    //   },
    // },
  ],
}
