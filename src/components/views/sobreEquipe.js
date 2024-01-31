import React from 'react';
import ProfileImage from '../../statics/img/fotoAndre.jpg';

const SobreEquipe = () => {
  return (
    <section id="sobre-equipe" className="py-3">
      <div className="bg-white text-dark">
        <div className="row d-flex justify-content-center align-items-center" style={{ paddingLeft: '3rem' }}>
          <div className="col-lg-6 text-center" style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', padding: '3rem', paddingLeft: '3rem' }}>
            <h2 className="display-4 fw-bold" style={{ textAlign: 'left' }}>Nossa Equipe</h2>

            <p style={{ fontSize: '1rem', textAlign: 'justify' }}>
              Aqui na Hermenêutica Jurídica, temos uma equipe diversificada, comprometida e apaixonada por compartilhar conhecimento. Contamos com advogados especializados, programadores talentosos e uma rede de colaboradores dedicados a fazer deste blog uma fonte confiável de informações jurídicas.<br/><br/>

              Além dos sócios fundadores, como André Manzo, temos colaboradores que contribuem com análises, artigos e insights valiosos. Valorizamos a troca de ideias e a pluralidade de perspectivas, o que enriquece o conteúdo que oferecemos a você, nosso leitor.<br/><br/>

              Para impulsionar ainda mais nossa missão, contamos com a energia e o entusiasmo de estagiários dedicados, sempre prontos para aprender e contribuir para o sucesso do blog.<br/><br/>

              A Hermenêutica Jurídica não seria possível sem a colaboração de nossa incrível rede de apoio. Agradecemos a todos os envolvidos, pois juntos tornamos a jornada jurídica mais acessível, interessante e enriquecedora para todos. Seja parte dessa comunidade e explore o conhecimento jurídico conosco!
            </p>
          </div>
          <div className="col-lg-6 text-center d-flex flex-column align-items-center justify-content-center">
            {/* Adicione aqui uma imagem representativa da equipe, se desejar */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreEquipe;
