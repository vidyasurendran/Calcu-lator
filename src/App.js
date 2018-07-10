import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import CalcContainer from './Containers/CalcContainer'

import './App.css';

const store = createStore(()=>null)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CalcContainer/>
      </Provider>
    );
  }
}

export default App;
