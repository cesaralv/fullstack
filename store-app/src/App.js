import React, { Component } from 'react';
import './App.css';

// COMPONENTS 
import Header from './components/Header/Header';
import Home from './components/Home/Home';
// 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Home />
        </main>
      </div>
    );
  }
}

export default App;
