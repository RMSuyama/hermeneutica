import React from 'react';
import Inicio from '../views/início';
import Nav from '../navbar/nav';
import Rodape from '../navbar/rodape';
import JoinUsView from '../views/joinus';

const Newsletter = () => {
  return (
    <div>
    <Nav/>
    <JoinUsView />
    <Rodape/>
    </div>
  );
};

export default Newsletter;
