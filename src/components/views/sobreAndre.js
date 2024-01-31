import React from 'react';
import ProfileImage from '../../statics/img/fotoAndre.jpg';

function SobreAndre() {
  return (
    <section id="sobre-mim" className="py-3">
      <div className="bg-white text-dark">
        <div className="row d-flex justify-content-center align-items-center" style={{ paddingLeft:'3rem'}}>
          <div className="col-lg-6 text-center" style={{ display:'flex', flexDirection:'column', textAlign:'center', padding:'3rem', paddingLeft:'3rem'}}>
            <h2 className="display-4 fw-bold" style={{textAlign:'left'}}>André Manzo</h2>

            <p style={{fontSize:'1rem', textAlign:'justify'}}>Advogado OAB/SP nº 441.474 | Direito Imobiliário | Direito Contratual | Ética | Compliance| Contratualista | Due Dilligence</p>

            <p style={{ textAlign: 'justify' }}>



            Mestrando em Direito pela FADISP e Bacharel pelo Centro Universitário do Vale do Ribeira-UNIVR/SP, além de Especialista em Advocacia Corporativa pela FMP, sou um dos Sócios Fundadores da Hermenêutica Jurídica. Este blog é a realização de um sonho compartilhado, nascido da paixão por desvendar os intricados caminhos do direito e compartilhar esse conhecimento.<br/><br/>

            Nosso objetivo vai além de expor ideias; queremos criar um espaço inspirador, informativo e propício a discussões enriquecedoras sobre áreas como Direito Imobiliário, Direito Contratual, Ética, Compliance e Due Diligence. Acreditamos que o conhecimento jurídico é uma ferramenta poderosa, capaz de empoderar indivíduos e empresas, e buscamos ser uma fonte confiável, oferecendo conteúdo de qualidade fundamentado em princípios éticos e conhecimento aprofundado.<br/><br/>

            Explore nosso blog, participe das discussões e faça parte desta comunidade dedicada à disseminação do conhecimento jurídico. Estamos aqui para tornar a jornada jurídica mais acessível, interessante e enriquecedora para todos. Seja bem-vindo à Hermenêutica Jurídica.
            </p>
          </div>
          <div className="col-lg-6 text-center d-flex flex-column align-items-center justify-content-center">
            <img
                src={ProfileImage}
                alt="Minha Foto"
                className="img-fluid rounded-circle mb-4 mt-4"
                style={{ width: '25rem', height: '25rem', objectFit: 'cover', borderRadius: '50%' }}
            />
            </div>
        </div>
      </div>
    </section>
  );
}

export default SobreAndre;
