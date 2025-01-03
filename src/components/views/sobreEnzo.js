import React from 'react';
import ProfileImage from '../../statics/img/Enzo.png';

function SobreMim() {
  return (
    <section id="sobre-mim" className="py-3">
      <div className="bg-dark text-white">
        <div className="row d-flex justify-content-center align-items-center">


          <div className="col-lg-6 text-center" style={{ display:'flex', flexDirection:'column', textAlign:'justify', padding:'3rem' }}>
            <h2 className="display-4 fw-bold" style={{textAlign:'left'}}>Enzo Bolfarini</h2>

            <p style={{ textAlign: 'justify' }}>
              
             </p>


              <p style={{ textAlign: 'justify' }}>
              Enzo Bolfarini é baixista, cantor e músico autodidata. No Paralello Caiçara, ele é responsável por comandar as linhas de baixo, criando grooves marcantes e bases envolventes que dão sustentação ao som da banda.<br/><br/>

              Com um estilo versátil e influências que passam por reggae, MPB, jazz, soul e forró, Enzo combina técnica e sensibilidade para criar ritmos autênticos e cheios de personalidade.<br/><br/>

              Sua experiência em outros projetos musicais agrega maturidade e criatividade ao grupo, tornando-o uma peça essencial na construção do som vibrante e contagiante do Paralello Caiçara.
                </p>
          </div>


        <div className="col-lg-6 text-center d-flex flex-column align-items-center justify-content-center">
            <img
                src={ProfileImage}
                alt="Minha Foto"
                className="img-fluid mb-4 mt-4"
                style={{ width: '65rem', height: '35rem', objectFit: 'cover', borderRadius: '2%' }}
            />
            </div>
          
        </div>
      </div>
    </section>
  );
}

export default SobreMim;
