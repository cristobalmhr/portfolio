import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Toolbar,
  IconButton,
  Drawer,
  makeStyles,
  Button,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import ThemeButton from './ThemeButton'
import logoLight from '../resources/images/logo-sm.PNG'
import logoDark from '../resources/images/logo-sm-d.png'

import '../styles/components/ToolbarMobile.css'
import '../styles/GlobalStyles.css'
import { connect } from 'react-redux'

const ToolbarMobile = ({ isDarkTheme }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const useStyles = makeStyles({
    paper: {
      background: isDarkTheme ? '#535353' : 'white',
      color: isDarkTheme ? '#white' : '#5e7c51',
    },
  })

  const { paper } = useStyles()

  return (
    <Toolbar className="toolbar">
      <div className="header-container">
        <IconButton
          edge="start"
          aria-label="menu"
          aria-haspopup="true"
          className="icon-button-menu"
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <img
          src={isDarkTheme ? logoDark : logoLight}
          alt="Logo"
          height={30}
          className="logo-small"
        />

        <ThemeButton />

        <Drawer
          classes={{ paper: paper }}
          anchor="bottom"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Button
            key="Home"
            color="inherit"
            to="/home"
            size="large"
            component={Link}
            className="menu-button-mobile"
            onClick={() => setDrawerOpen(false)}
          >
            Home
          </Button>

          <Button
            key="Portfolio"
            color="inherit"
            to="/portfolio"
            size="large"
            component={Link}
            className="menu-button-mobile"
            onClick={() => setDrawerOpen(false)}
          >
            Portfolio
          </Button>

          <Button
            key="Resume"
            color="inherit"
            to="/resume"
            size="large"
            component={Link}
            className="menu-button-mobile"
            onClick={() => setDrawerOpen(false)}
          >
            Resume
          </Button>

          <Button
            key="Contact"
            color="inherit"
            to="/contact"
            size="large"
            component={Link}
            className="menu-button-mobile"
            onClick={() => setDrawerOpen(false)}
          >
            Contact
          </Button>
        </Drawer>
      </div>
    </Toolbar>
  )
}

const mapStateToProps = (state) => {
  return {
    isDarkTheme: state.isDarkTheme,
  }
}

export default connect(mapStateToProps)(ToolbarMobile)
