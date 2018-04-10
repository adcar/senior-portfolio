module.exports = {
  siteMetadata: {
    title: 'Senior Portfolio'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Senior Portfolio - Alexander Cardosi',
        short_name: 'Senior Portfolio',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#009688',
        display: 'minimal-ui',
        icon: './src/img/senior-portfolio-logo.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline'
  ]
}
