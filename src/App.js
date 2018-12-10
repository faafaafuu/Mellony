import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/Menu'
import Header from './components/header/Header'
import HeaderInfo from './components/header_info/header_info'
import Footer from './components/footer/Footer'


class App extends Component {
  render() {
    
    return (
      <div>
      <div className="App">
        <HeaderInfo/>
        <Header/>
        <Menu/>
        
      </div>

        <div> <Footer/></div>

      </div>
     
    );
  }
}

export default App;
