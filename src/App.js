import React, { Component } from 'react';
import './App.css';
// import {Route} from 'react-router-dom'
// import {BrowserRouter} from 'react-router-dom'
import Menu from './components/menu/Menu'
import Header from './components/header/Header'
import HeaderInfo from './components/header_info/header_info'


class App extends Component {
  render() {
    
    return (
      <div className="App">
        <HeaderInfo/>
        <Header/>
        <Menu/>
        
      </div>
    );
  }
}

export default App;
