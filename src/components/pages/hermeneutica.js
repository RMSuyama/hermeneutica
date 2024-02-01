import React from 'react';
import Nav from '../navbar/nav';
import Rodape from '../navbar/rodape';

const Hermeneutica = () => {
  return (
    <div>
      <Nav />

      <div class="container my-5">
        <div class="row">
        <div class="col-md-8">
            <div class="card p-4">
            <h1 class="mb-4">Explorando a Hermenêutica Jurídica</h1>
            <p>
                Bem-vindo à nossa jornada fascinante pelo mundo da Hermenêutica Jurídica!
                Nesta exploração, mergulharemos nas profundezas da interpretação legal,
                desvendando os mistérios que os hermeneutas enfrentam diariamente.
            </p>

            <h2 class="mt-4">O que é Hermenêutica Jurídica?</h2>
            <p>
                A Hermenêutica Jurídica é a arte e a técnica de interpretar leis e textos
                jurídicos. É um campo essencial no direito, onde os profissionais buscam
                compreender e aplicar as normas de maneira justa e eficaz.
            </p>

            <h2 class="mt-4">Quem são os Hermeneutas?</h2>
            <p>
                Os hermeneutas são juristas especializados na arte da interpretação.
                Eles são como detetives do direito, decifrando códigos e significados para
                garantir uma compreensão precisa das leis.
            </p>

            <h2 class="mt-4">Elementos da Hermenêutica</h2>
            <p>
                Vamos explorar alguns elementos-chave:
                <ul>
                <li>Interpretação Literal</li>
                <li>Intenção do Legislador</li>
                <li>Contexto Histórico</li>
                <li>Princípios Jurídicos</li>
                </ul>
            </p>

            <h2 class="mt-4">Diversão Jurídica</h2>
            <p>
                Em nossa jornada, encontraremos enigmas jurídicos e desafios de interpretação.
                Prepare-se para uma viagem emocionante pelo universo da Hermenêutica Jurídica!
            </p>
            </div>
        </div>

        <div class="col-md-4">
            <div class="card p-4">
            <h3 class="mb-4">Recursos Adicionais</h3>
            <ul>
                <li>Artigos sobre Hermenêutica</li>
                <li>Entrevistas com Hermeneutas Famosos</li>
                <li>Workshops de Interpretação Legal</li>
            </ul>
            </div>
        </div>
        </div>
    </div>
      <Rodape />
    </div>
  );
};

export default Hermeneutica;
