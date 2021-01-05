import React from 'react'
import { Toolbar, IconButton, Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined'

import logo from '../resources/images/logo-lg.PNG'

const useStyles = makeStyles(() => ({
  menuButton: {
    color: '#707070',
    fontFamily: 'Calibri, Open Sans, sans-serif',
    fontWeight: 500,
    fontSize: '18px',
    marginLeft: '15px',
    padding: '5px 15px',
  },
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
}))

const ToolbarDesktop = () => {
  const { menuButton, headerContainer, iconButton, logoLarge } = useStyles()

  return (
    <Toolbar>
      <div className={headerContainer}>
        <img src={logo} alt="Logo" width={270} className={logoLarge} />

        <div>
          <Button
            key="Home"
            color="inherit"
            to="/home"
            size="large"
            component={Link}
            className={menuButton}
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
          >
            Contact
          </Button>

          {/* <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-haspopup="true"
              className={iconButton}
              onClick={() => setDrawerOpen(true)}
            >
              <Brightness5OutlinedIcon />
            </IconButton> */}

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
        </div>
      </div>
    </Toolbar>
  )
}

export default ToolbarDesktop
