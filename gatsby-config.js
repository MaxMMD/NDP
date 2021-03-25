/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-transition-link",
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
