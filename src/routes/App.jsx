import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function App() {
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

function Home() {
  return <h2>Home</h2>
}

function Portfolio() {
  return <h2>Portfolio</h2>
}

function Project() {
  return <h2>Project</h2>
}

function Resume() {
  return <h2>Resume</h2>
}

function Contact() {
  return <h2>Contact</h2>
}
