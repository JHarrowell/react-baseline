import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { initialLoad } from '../actions/app'
import App from '../components/App/App'

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    initialLoad
  }, dispatch)
}

function mapStateToProps ({ app }) {
  return {
    loadMessage: app.msg,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)