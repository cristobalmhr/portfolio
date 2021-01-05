import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from '../containers/Home'
import Portfolio from '../containers/Portfolio'
import Resume from '../containers/Resume'
import Contact from '../containers/Contact'
import Project from '../containers/Project'
import Layout from '../components/Layout'

import { createMuiTheme, ThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5E7C51',
    },
    secondary: {
      main: '#707070',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.
            So, the path '/' must go to the end of the switch */}
        <Layout>
          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
