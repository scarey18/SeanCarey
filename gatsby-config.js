module.exports = {
  siteMetadata: {
    title: `Sean Carey | Web Developer`,
    description: `This is the official website for Sean Carey, full stack web developer.`,
    author: `Sean Carey`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sean Carey`,
        short_name: `seancarey`,
        start_url: `/`,
        background_color: `#014d18`,
        theme_color: `#fdf5e6`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-polished`,
    `gatsby-plugin-smoothscroll`,
  ],
}
