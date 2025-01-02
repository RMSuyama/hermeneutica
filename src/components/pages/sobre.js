import React from 'react';
import SobreMim from '../views/sobre';
import SobreEnzo from '../views/sobreEnzo';
import SobreNaldo from '../views/sobreNaldo';
import SobreJulio from '../views/sobreJulio';
import SobreEquipe from '../views/sobreEquipe';
import Nav from '../navbar/nav';
import Rodape from '../navbar/rodape';

const SobreUs = () => {
  return (
    <div>
    <Nav/>
    <SobreMim/>
    <SobreEnzo/>
    <SobreNaldo/>
    <SobreJulio/>
    <SobreEquipe/>
    <Rodape/>
    </div>
  );
};

export default SobreUs;
