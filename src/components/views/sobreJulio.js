import React from 'react';
import ProfileImage from '../../statics/img/Julio.png';

function SobreMim() {
  return (
    <section id="sobre-mim" className="py-3">
      <div className="bg-dark text-white">
        <div className="row d-flex justify-content-center align-items-center">


          <div className="col-lg-6 text-center" style={{ display:'flex', flexDirection:'column', textAlign:'justify', padding:'3rem' }}>
            <h2 className="display-4 fw-bold" style={{textAlign:'left'}}>Julio César</h2>

            <p style={{ textAlign: 'justify' }}>
              
              </p>


              <p style={{ textAlign: 'justify' }}>
              Júlio César é trompetista, violoncelista e músico versátil. No Paralello Caiçara, ele acrescenta profundidade e emoção ao som da banda, alternando entre os tons vibrantes do trompete e a riqueza melódica do violoncelo.<br/><br/>

              Com um estilo sofisticado e sensível, Júlio traz influências do jazz, MPB, soul e outros ritmos, equilibrando técnica e sentimento em cada nota. Sua habilidade em transitar entre os instrumentos proporciona um som único e marcante, adicionando camadas e texturas às músicas do grupo.<br/><br/>

              Mais do que um instrumentista, Júlio César é parte essencial da identidade sonora do Paralello Caiçara, criando atmosferas envolventes e contribuindo para a riqueza musical da banda.
                </p>
          </div> 
          
                 <div className="col-lg-6 text-center d-flex flex-column align-items-center justify-content-center">
            <img
                src={ProfileImage}
                alt="Minha Foto"
                className="img-fluid rounded-circle mb-4 mt-4"
                style={{ width: '65rem', height: '35rem', objectFit: 'cover', borderRadius: '50%' }}
            />
            </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMim;
