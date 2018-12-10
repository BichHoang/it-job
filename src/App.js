import React, { Component } from 'react';
import './App.css';
import  Header from './components/Header';
import TopEmployers from "./components/TopEmployers";
import NewJobs from "./components/NewJobs";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header></Header>
          <TopEmployers/>
          <NewJobs/>
          <Footer/>
      </div>
    );
  }
}

export default App;
