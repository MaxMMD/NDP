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
      "Friends of Notre-Dame de Paris is the official charity leading the international fundraising efforts to rebuild and restore Notre-Dame Cathedral.",
    donationLink:
      "https://secure.givelively.org/donate/friends-of-notre-dame-de-paris-inc/notre-dame-de-paris-the-pieces-of-a-puzzle",
    socialMedia: {
      twitter: "https://twitter.com/_NotreDameParis",
      facebook: "https://www.facebook.com/FriendsofNotreDamedeParis",
      instagram: "https://www.instagram.com/friendsofnotredamedeparis/",
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-166985560-1", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
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
