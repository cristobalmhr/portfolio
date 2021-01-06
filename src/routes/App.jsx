import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createStore } from 'redux'

import Home from '../containers/Home'
import Portfolio from '../containers/Portfolio'
import Resume from '../containers/Resume'
import Contact from '../containers/Contact'
import Project from '../containers/Project'
import Layout from '../components/Layout'

import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { Provider } from 'react-redux'

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

const initialValue = {
  menuPages: [
    {
      name: 'Home',
      path: '/home',
      active: false,
    },
    {
      name: 'Portfolio',
      path: '/portfolio',
      active: false,
    },
    {
      name: 'Resume',
      path: '/resume',
      active: false,
    },
    {
      name: 'Contact',
      path: '/contact',
      active: false,
    },
  ],
}

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return {
        ...state,
        menuPages: state.menuPages.map((menu) => {
          return {
            ...menu,
            active: action.payload === menu.name ? true : false,
          }
        }),
      }
    default:
      return state
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
