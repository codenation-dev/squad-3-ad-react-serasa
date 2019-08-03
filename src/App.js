import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Contents from './components/Contents';
import Footer from './components/Footer';

function Home() {
  return (
    <div className="app">
      <GlobalStyle />  
      <Header title="" />
      {/* <BaseRedux /> */}
      <Contents />
      <Footer />
    </div>
  );
}

export default Home;