import React, { useEffect, useState } from 'react'
import { Toolbar, IconButton } from '@material-ui/core'
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined'
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined'

import logoLight from '../resources/images/logo-lg-t.png'
import logoDark from '../resources/images/logo-lg-t-d.png'

import MenuButton from './MenuButton'
import '../styles/components/ToolbarDesktop.css'
import { connect } from 'react-redux'
import { useMediaQuery } from 'react-responsive'

const ToolbarDesktop = ({ menuPages }) => {
  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
    (prefersDark) => {
      setIsDark(prefersDark)
    }
  )

  const [isDark, setIsDark] = useState(systemPrefersDark)
  const DARK_CLASS = 'dark'

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(DARK_CLASS)
    } else {
      document.documentElement.classList.remove(DARK_CLASS)
    }
  }, [isDark])

  return (
    <Toolbar className="toolbar">
      <div className="header-container">
        <img
          src={isDark ? logoDark : logoLight}
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

          {isDark ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-haspopup="true"
              className="icon-button"
              onClick={() => setIsDark(false)}
            >
              <Brightness5OutlinedIcon />
            </IconButton>
          ) : (
            <IconButton
              edge="start"
              color="primary"
              aria-label="menu"
              aria-haspopup="true"
              className="icon-button"
              onClick={() => setIsDark(true)}
            >
              <NightsStayOutlinedIcon />
            </IconButton>
          )}
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
