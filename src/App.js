import React from 'react';
import Nav from './components/navbar/nav';
import Home from './components/views/início';
import Rodape from './components/navbar/rodape';
import SobreMim from './components/views/sobre';

import JoinUsView from './components/views/joinus';
import SobreAndre from './components/views/sobreAndre';




function App() {
  return (
    <div className='app'>

    <Nav></Nav>

    <Home></Home>
    <SobreMim></SobreMim>
    <SobreAndre></SobreAndre>
    <JoinUsView></JoinUsView>
    <Rodape></Rodape>
    </div>

  )
}

export default App;
