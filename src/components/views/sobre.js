import React from 'react';
import ProfileImage from '../../statics/img/Foto 2.jpeg';

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
                style={{ width: '25rem', height: '25rem', objectFit: 'cover', borderRadius: '50%' }}
            />
            </div>

          <div className="col-lg-6 text-center" style={{ display:'flex', flexDirection:'column', textAlign:'justify', padding:'3rem' }}>
            <h2 className="display-4 fw-bold" style={{textAlign:'left'}}>Rafael Suyama</h2>

            <p style={{ textAlign: 'justify' }}>
              
              Advogado OAB 484.261 | Controladoria | Compliance | Contratualista | Due Dilligence | Automação de Processos Jurídicos | Office | VBA | SQL | React.js</p>


              <p style={{ textAlign: 'justify' }}>
                Como um dos sócios fundadores, estou aqui para trazer não apenas conhecimento jurídico, mas também a vontade de compartilhar e explorar novos horizontes. Minha atuação vai além do convencional, unindo habilidades em direito, programação e análise de dados.<br/><br/>

                Minha formação jurídica se completa com uma sólida experiência na área de privacidade, legal ops e controladoria jurídica, utilizando diversas tecnologias, como: Python, JavaScript, Excel, VBA e SQL. Busco constantemente aprendizado e crescimento profissional, buscando sempre estar antenado para oferecer soluções diferentes para os desafios diários que a advocacia nos põe a prova.<br/><br/>


                Explore nosso blog, mergulhe nos artigos, participe das discussões e faça parte desta comunidade dedicada à disseminação do conhecimento jurídico. Estamos aqui para tornar a jornada jurídica mais acessível, interessante e enriquecedora para todos. Seja bem-vindo à Hermenêutica Jurídica.

                </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMim;
