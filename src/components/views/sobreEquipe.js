import React from 'react';

const SobreEquipe = () => {
  return (
    <section id="sobre-equipe" className="py-3">
      <div className="bg-white text-dark">
        <div className="row d-flex justify-content-center align-items-center" style={{ paddingLeft: '3rem' }}>
          <div className="col-lg-6 text-center" style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', padding: '3rem', paddingLeft: '3rem' }}>
            <h2 className="display-4 fw-bold" style={{ textAlign: 'left' }}>Nossa Equipe</h2>

            <p style={{ fontSize: '1rem', textAlign: 'justify' }}>
            Aqui na Paralello Caiçara, temos uma equipe talentosa, apaixonada e dedicada a compartilhar nossa música e nossa história com você. Contamos com músicos experientes, como Rafael Suyama, Enzo Bolfarini, Naldo Lima e Júlio César, que são a alma da banda, além de uma rede de colaboradores e amigos que contribuem para fazer deste projeto uma experiência única e envolvente.<br/><br/>

            Além dos membros principais, também contamos com colaboradores que ajudam a expandir nosso som, seja através de parcerias criativas ou insights que enriquecem nossa jornada musical. A troca de ideias e a diversidade de influências são o que tornam nosso trabalho ainda mais especial e autêntico.<br/><br/>

            Para fortalecer nossa missão, temos a energia e o entusiasmo de novos talentos, sempre prontos para aprender, contribuir e dar vida a novos projetos junto com a banda.<br/><br/>

            Paralello Caiçara não seria possível sem o apoio de todos que fazem parte dessa caminhada. Agradecemos a cada um que tem nos ajudado a levar nossa música para mais pessoas, tornando a experiência musical mais rica, autêntica e acessível para todos. Junte-se a nós e venha explorar nossa música, nossa energia e nossa cultura!
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
