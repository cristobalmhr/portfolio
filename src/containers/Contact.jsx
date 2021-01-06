import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../utils/redux/routes/dispatchs'

const Contact = ({ changePage }) => {
  useEffect(() => {
    changePage('Contact')
  }, [])

  return <h1 style={{ marginTop: 80 }}>Contact</h1>
}

export default connect(null, mapDispatchToProps)(Contact)
