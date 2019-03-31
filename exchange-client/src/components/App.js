import React, { Component } from 'react';
import './App.scss';
import MainComponent from './main-component/main-component';
import { BackTop } from 'antd';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainComponent></MainComponent>
        <BackTop />
      </div>
    );
  }
}

export default App;
