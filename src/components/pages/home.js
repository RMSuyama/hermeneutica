import React from 'react';
import Inicio from '../views/início';
import Nav from '../navbar/nav';
import Rodape from '../navbar/rodape';

const Home = () => {
  return (
    <div>
    <Nav/>
    <Inicio />
    <Rodape/>
    </div>
  );
};

export default Home;
