import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Button, Message } from './App.styles'

class App extends Component {
  render() {
    const { loadMessage, initialLoad } = this.props
    return (
      <div className='App'>
        <Helmet>
          <title>Title Set By Helmet</title>
        </Helmet>
        <header className='App-header'>
          <Button onClick={initialLoad} primary>Click Me</Button>
        </header>
        <Message>{loadMessage}</Message>
      </div>
    )
  }
}

App.propTypes = {
  loadMessage: PropTypes.string,
  initialLoad: PropTypes.func,
}

export default App
