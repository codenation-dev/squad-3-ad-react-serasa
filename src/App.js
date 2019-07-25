import React from 'react';
import GlobalStyle from './styles/global';
import styled from 'styled-components'

//styled component
const Container = styled.div`
  color: blue;
`;

function App() {
  return (
    <div>
      <GlobalStyle />  
      <Container>Squad 3</Container> 
    </div>
  );
}

export default App;