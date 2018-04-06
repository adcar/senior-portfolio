import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
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
          margin: '0 auto',
          paddingTop: 0
        }}
      >
        {children()}
      </div>
    </div>
  </MuiThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper