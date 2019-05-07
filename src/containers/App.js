import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <div id="body-wrapper">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
