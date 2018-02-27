module.exports = {
  siteMetadata: {
    title: 'Sam Wemyss',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blogs`,
        name: "markdown-pages",
      },
    },
    'gatsby-transformer-remark',
  ],
};
