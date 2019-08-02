import React from 'react';
import GlobalStyle from './styles/global';
import Header               from './components/Header'
import Contents             from './components/Contents'
import Footer               from './components/Footer'

//styled component
/* const Container = styled.div`
  color: blue;
`; */

function App() {
  return (
    <div className="app">

        <GlobalStyle />  
        <Header title="" />
        <Contents />
        <Footer />

    </div>
  );
}

export default App;