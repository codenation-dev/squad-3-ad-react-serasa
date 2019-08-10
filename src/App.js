import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Contents from './components/Contents';
import Footer from './components/Footer';

function Main() {
  return (
    <div className="app">
      <GlobalStyle />  
      <Header title="" />
      <Contents />
      <Footer />
    </div>
  );
}

export default Main;