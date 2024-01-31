import React from 'react';
import SobreMim from '../views/sobre';
import SobreAndre from '../views/sobreAndre';
import SobreEquipe from '../views/sobreEquipe';
import Nav from '../navbar/nav';

const SobreUs = () => {
  return (
    <div>
    <Nav/>
    <SobreMim/>
    <SobreAndre/>
    <SobreEquipe/>
    <Rodape/>
    </div>
  );
};

export default SobreUs;
