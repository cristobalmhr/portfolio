import React, { useState } from 'react'
import {
  Toolbar,
  IconButton,
  Drawer,
  makeStyles,
  Button,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined'
import { Link } from 'react-router-dom'
import logo from '../resources/images/logo-sm.PNG'

const useStyles = makeStyles(() => ({
  iconButton: {
    marginLeft: '15px',
  },
  headerContainer: {
    display: 'flex',
    flex: '1',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoLarge: {
    padding: '10px 0px',
  },
  menuButton: {
    color: '#707070',
    fontFamily: 'Calibri, Open Sans, sans-serif',
    fontWeight: 600,
    size: '24px',
    marginLeft: '15px',
    padding: '5px 15px',
  },
}))

const ToolbarMobile = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const { headerContainer, iconButton, logoLarge, menuButton } = useStyles()

  return (
    <Toolbar>
      <div className={headerContainer}>
        <IconButton
          edge="start"
          color="primary"
          aria-label="menu"
          aria-haspopup="true"
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <img src={logo} alt="Logo" height={30} className={logoLarge} />

        <IconButton
          edge="start"
          color="primary"
          aria-label="menu"
          aria-haspopup="true"
          className={iconButton}
          onClick={() => console.log('Change theme')}
        >
          <NightsStayOutlinedIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Button
            key="Home"
            color="inherit"
            to="/home"
            size="large"
            component={Link}
            className={menuButton}
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
            className={menuButton}
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
            className={menuButton}
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
            className={menuButton}
            onClick={() => setDrawerOpen(false)}
          >
            Contact
          </Button>
        </Drawer>
      </div>
    </Toolbar>
  )
}

export default ToolbarMobile
