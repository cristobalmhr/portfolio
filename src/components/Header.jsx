import React, { useState, useEffect } from 'react'
import { AppBar, makeStyles } from '@material-ui/core'

import ToolbarDesktop from './ToolbarDesktop'
import ToolbarMobile from './ToolbarMobile'

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#FFF',
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
}))

const Header = () => {
  const [mobileView, setMobileView] = useState(false)

  const { header } = useStyles()

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setMobileView(true)
        : setMobileView(false)
    }

    setResponsiveness()

    window.addEventListener('resize', () => setResponsiveness())
  }, [])

  return (
    <AppBar className={header} elevation={2}>
      {mobileView ? <ToolbarMobile /> : <ToolbarDesktop />}
    </AppBar>
  )
}

export default Header
