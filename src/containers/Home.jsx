import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../utils/redux/routes/dispatchs'

const Home = ({ changePage }) => {
  useEffect(() => {
    changePage('Home')
  }, [])

  return <h1 style={{ marginTop: 80 }}>Home</h1>
}

export default connect(null, mapDispatchToProps)(Home)
