import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header'
import Overview from './components/Overview/Overview';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
