import React from 'react'

import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

import '../styles/components/MenuButton.css'

const MenuButton = ({ name, path, active }) => {
  console.log(active)
  console.log(name)
  console.log(path)

  let className = 'menu-button'

  if (active) {
    className += 'menu-button-active'
  }

  return (
    <Button
      key={name}
      color="secondary"
      to={path}
      size="large"
      component={Link}
      className={className}
    >
      {name}
    </Button>
  )
}

export default MenuButton
