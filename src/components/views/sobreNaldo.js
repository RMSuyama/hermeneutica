import React from 'react';
import ProfileImage from '../../statics/img/Naldo.png';

function SobreMim() {
  return (
    <section id="sobre-mim" className="py-3">
      <div className="bg-dark text-white">
        <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-6 text-center d-flex flex-column align-items-center justify-content-center">
            <img
                src={ProfileImage}
                alt="Minha Foto"
                className="img-fluid rounded-circle mb-4 mt-4"
                style={{ width: '65rem', height: '35rem', objectFit: 'cover', borderRadius: '50%' }}
            />
            </div>

          <div className="col-lg-6 text-center" style={{ display:'flex', flexDirection:'column', textAlign:'justify', padding:'3rem' }}>
            <h2 className="display-4 fw-bold" style={{textAlign:'left'}}>Naldo Lima</h2>

            <p style={{ textAlign: 'justify' }}>
              
              Percussão</p>


              <p style={{ textAlign: 'justify' }}>
              Naldo Lima é percussionista experiente, com anos de atuação na noite do Vale do Ribeira. Conhecido por sua habilidade impressionante de tocar diversos instrumentos de percussão simultaneamente, ele dá vida e energia ao som do Paralello Caiçara.<br/><br/>

Seja com apitos, chocalhos, pandeiros, congas, triângulos ou qualquer outro instrumento de percussão, Naldo é quem comanda a "cozinha" do grupo, garantindo um ritmo envolvente e cheio de personalidade.<br/><br/>

Com sua pegada marcante e versatilidade, ele é o coração pulsante das apresentações, trazendo autenticidade e muito groove para o nosso rolê.
                </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMim;
