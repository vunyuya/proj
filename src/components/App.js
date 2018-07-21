import React, { Component } from 'react';
import logo from './../logo.svg';
import './../css/App.css';
import Article from './Article';
import AddArticle from './AddArticle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
        </header>
        <p className="App-intro">
         <Article name="bycicle" text="5000" date="20/10/1993"  ></Article>
         <Article name="eliphant" text="5000000" date="20/10/2015"  />
         <Article name="british house" text="10000000" date="20/10/2008"  />
        </p>
        <p>
          <AddArticle/>
        </p>
      </div>
    );
  }
}

export default App;
