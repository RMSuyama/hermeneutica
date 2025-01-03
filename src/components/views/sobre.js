import React from 'react';
import ProfileImage from '../../statics/img/Rafa.png';

function SobreMim() {
  return (
    <section id="sobre-mim" className="py-3">
      <div className="bg-dark text-white">
        <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-6 text-center d-flex flex-column align-items-center justify-content-center">
            <img
                src={ProfileImage}
                alt="Minha Foto"
                className="img-fluid  mb-4 mt-4"
                style={{ width: '65rem', height: '35rem', objectFit: 'cover', borderRadius: '2%' }}
            />
            </div>

          <div className="col-lg-6 text-center" style={{ display:'flex', flexDirection:'column', textAlign:'justify', padding:'3rem' }}>
            <h2 className="display-4 fw-bold" style={{textAlign:'left'}}>Rafael Suyama</h2>

            <p style={{ textAlign: 'justify' }}>
              
              Vocalista e Violonista</p>


              <p style={{ textAlign: 'justify' }}>
              Nascido no Vale do Ribeira, Rafarel Suyama é cantor, violonista e compositor autodidata.
              <br/><br/>
              Rafael Suyama é cantor, violonista e compositor autodidata, com uma sonoridade que mistura a leveza e a energia de diferentes estilos. Natural do Vale do Ribeira e descendente de japoneses, nordestinos e capixabas, ele traz para sua música uma fusão única dessas culturas e influências.<br/><br/>

              Seu repertório transita entre reggae, MPB, sambarock, rap e forró, criando uma música autêntica e versátil que conecta tradição e modernidade. Com uma abordagem simples e cheia de alma, suas letras falam de sentimentos profundos e experiências de vida, sempre com uma pegada envolvente e cativante.<br/><br/>

              Ex-integrante da banda Mangata, Rafael está de volta ao cenário musical com o projeto Paralello Caiçara, resgatando suas raízes e explorando novos horizontes musicais com sua voz e violão, sempre guiado pela paixão pela música e pela autenticidade de sua trajetória.
                </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMim;
