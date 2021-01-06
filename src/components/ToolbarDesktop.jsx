import React from 'react'
import { Toolbar, IconButton } from '@material-ui/core'
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined'

import logo from '../resources/images/logo-lg.PNG'
import MenuButton from './MenuButton'
import '../styles/components/ToolbarDesktop.css'
import { connect } from 'react-redux'

// const menuPages = [
//   {
//     name: 'Home',
//     path: '/home',
//     active: true,
//   },
//   {
//     name: 'Portfolio',
//     path: '/portfolio',
//     active: false,
//   },
//   {
//     name: 'Resume',
//     path: '/resume',
//     active: false,
//   },
//   {
//     name: 'Contact',
//     path: '/contact',
//     active: false,
//   },
// ]

const ToolbarDesktop = ({ menuPages }) => {
  return (
    <Toolbar>
      <div className="header-container">
        <img src={logo} alt="Logo" width={270} className="logo-large" />

        <div className="menu-container">
          {menuPages.map((item) => (
            <div className="item-container" key={item.name}>
              <MenuButton
                name={item.name}
                path={item.path}
                active={item.active}
              />
              {item.active && <div className="selected-mark"></div>}
            </div>
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
            className="icon-button"
            onClick={() => console.log('Change theme')}
          >
            <NightsStayOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </Toolbar>
  )
}

const mapStateToProps = (state) => {
  return {
    menuPages: state.menuPages,
  }
}

export default connect(mapStateToProps)(ToolbarDesktop)
