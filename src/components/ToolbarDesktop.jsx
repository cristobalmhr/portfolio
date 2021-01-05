import React from 'react'
import { Toolbar, IconButton, Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined'

import logo from '../resources/images/logo-lg.PNG'
import MenuButton from './MenuButton'

const useStyles = makeStyles(() => ({
  menuButton: {
    color: '#707070',
    fontFamily: 'Calibri',
    fontWeight: 500,
    fontSize: '18px',
    marginLeft: '15px',
    padding: '5px 15px',
  },
  menuButtonSelected: {
    color: '#5E7C51',
    fontWeight: 700,
    paddingBottom: '10px',
    borderBottom: '2px solid red',
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

const menuPages = [
  {
    name: 'Home',
    path: '/home',
    active: true,
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
]

const ToolbarDesktop = () => {
  const { headerContainer, iconButton, logoLarge } = useStyles()

  return (
    <Toolbar>
      <div className={headerContainer}>
        <img src={logo} alt="Logo" width={270} className={logoLarge} />

        <div>
          {menuPages.map((item) => (
            <MenuButton
              name={item.name}
              path={item.path}
              active={item.active}
            />
          ))}

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
