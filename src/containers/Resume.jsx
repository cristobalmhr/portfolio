import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../utils/redux/routes/dispatchs'

const Resume = ({ changePage }) => {
  useEffect(() => {
    changePage('Resume')
  }, [])

  return <h1 style={{ marginTop: 80 }}>Resume</h1>
}

export default connect(null, mapDispatchToProps)(Resume)
