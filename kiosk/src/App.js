import React from 'react';
import MainHeader from './components/MainPage/MainHeader'
import MainContent from './components/MainPage/content'
import MainFooter from './components/MainPage/MainFooter'
// import logo from './logo.svg';
import './App.css';

function App() {
  return(
      <div>
        <MainHeader/>
        <MainContent/>
        <MainFooter/>
      </div>

  )










  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
