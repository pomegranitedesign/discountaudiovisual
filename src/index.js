import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
import Routes from './Routes'
import Layout from './Components/Layout'
import rootReducer from './Redux'
import 'antd/dist/antd.min.css'
import './index.css'
import { saveState, loadState } from './misc'

const persistedState = loadState()
const store = createStore(rootReducer, persistedState, composeWithDevTools())
store.subscribe(() => saveState(store.getState()))

render(
  <Router>
    <Provider store={store}>
      <Layout>
        <Routes />
      </Layout>
    </Provider>
  </Router>,
  document.getElementById('root')
)
