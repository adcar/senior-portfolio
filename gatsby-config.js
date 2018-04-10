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
        icon: './src/img/senior-portfolio-logo.png', // This path is relative to the root of the site.
        icons: [
          {
            src: `/favicons/android-chrome-48x48.png`,
            sizes: `48x48`,
            type: `image/png`
          },
          {
            src: `/favicons/android-chrome-72x72.png`,
            sizes: `72x72`,
            type: `image/png`
          },
          {
            src: `/favicons/android-chrome-96x96.png`,
            sizes: `96x96`,
            type: `image/png`
          },
          {
            src: `/favicons/android-chrome-144x144.png`,
            sizes: `144x144`,
            type: `image/png`
          },
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/favicons/android-chrome-256x256.png`,
            sizes: `256x256`,
            type: `image/png`
          },
          {
            src: `/favicons/android-chrome-384x384.png`,
            sizes: `384x384`,
            type: `image/png`
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline'
  ]
}
