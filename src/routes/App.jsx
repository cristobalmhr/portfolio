import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from '../containers/Home'
import Portfolio from '../containers/Portfolio'
import Resume from '../containers/Resume'
import Contact from '../containers/Contact'
import Project from '../containers/Project'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.
            So, the path '/' must go to the end of the switch */}
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
      </div>
    </Router>
  )
}

export default App
