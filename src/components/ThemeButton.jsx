import React, { useEffect, useState } from 'react'

import { IconButton } from '@material-ui/core'
import { useMediaQuery } from 'react-responsive'
import { connect } from 'react-redux'

import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined'
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined'

const ThemeButton = ({ isDarkTheme }) => {
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
      isDarkTheme(true)
    } else {
      document.documentElement.classList.remove(DARK_CLASS)
      isDarkTheme(false)
    }
  }, [isDark])

  return (
    <>
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
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    isDarkTheme: (value) => dispatch({ type: 'IS_DARK_THEME', payload: value }),
  }
}
export default connect(null, mapDispatchToProps)(ThemeButton)
