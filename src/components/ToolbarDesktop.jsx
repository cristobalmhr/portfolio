import React from 'react'
import { Toolbar } from '@material-ui/core'

import { connect } from 'react-redux'

import logoLight from '../resources/images/logo-lg-t.png'
import logoDark from '../resources/images/logo-lg-t-d.png'
import ThemeButton from './ThemeButton'
import MenuButton from './MenuButton'

import '../styles/components/ToolbarDesktop.css'
import '../styles/GlobalStyles.css'

const ToolbarDesktop = ({ menuPages, isDarkTheme }) => {
  return (
    <Toolbar className="toolbar">
      <div className="header-container">
        <img
          src={isDarkTheme ? logoDark : logoLight}
          alt="Logo"
          width={270}
          className="logo-large"
        />

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

          <ThemeButton />
        </div>
      </div>
    </Toolbar>
  )
}

const mapStateToProps = (state) => {
  return {
    menuPages: state.menuPages,
    isDarkTheme: state.isDarkTheme,
  }
}

export default connect(mapStateToProps)(ToolbarDesktop)
