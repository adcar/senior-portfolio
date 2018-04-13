import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CssBaseline from 'material-ui/CssBaseline'
import './roboto-font.css'

import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles'
import teal from 'material-ui/colors/teal'

const theme = createMuiTheme({
  palette: {
    primary: teal
  }
})

const TemplateWrapper = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <div>
      <CssBaseline />
      <Helmet
        title="Senior Portfolio"
        meta={[
          { name: 'description', content: 'Senior Portfolio' },
          { name: 'keywords', content: 'school, portfolio' }
        ]}
      />
      <Header />
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            paddingTop: 0,
            flex: '1'
          }}
        >
          {children()}
        </div>
        <Footer />
      </div>
    </div>
  </MuiThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
