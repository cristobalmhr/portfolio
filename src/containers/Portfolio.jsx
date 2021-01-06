import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../utils/redux/routes/dispatchs'

const Portfolio = ({ changePage }) => {
  useEffect(() => {
    changePage('Portfolio')
  }, [])

  return <h1 style={{ marginTop: 80 }}>Portfolio</h1>
}

export default connect(null, mapDispatchToProps)(Portfolio)
