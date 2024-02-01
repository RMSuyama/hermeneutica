import React, { useState } from 'react';
import Nav from '../navbar/nav';
import Rodape from '../navbar/rodape';

const Parcerias = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envio do formulário aqui
    handleCloseModal();
  };

  return (
    <div >
      <Nav/>
      <div className='container card p-4 d-flex align-items-center justify-content-center'>

        <div id="carouselExampleAutoplaying" className="carousel slide w-80" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://via.placeholder.com/1200x400"
                className="d-block w-100"
                alt="Imagem de exemplo 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://via.placeholder.com/1200x400"
                className="d-block w-100"
                alt="Imagem de exemplo 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://via.placeholder.com/1200x400"
                className="d-block w-100"
                alt="Imagem de exemplo 3"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>

      <div className="container card p-4 conteudo-parcerias">
        <h1>Seja Nosso Parceiro</h1><br/>
        <p>
          A sua empresa pode fazer parte dessa iniciativa incrível e contribuir
          para o crescimento da região. Ao se tornar parceira, você não apenas
          aumenta a visibilidade da sua marca, mas também fortalece a comunidade
          local. Junte-se a nós e faça a diferença!
        </p>
        <br/>
        {/* Botão para abrir o modal */}
        <button type="button" className="btn btn-dark" onClick={handleShowModal}>
          Tornar-se Parceiro
        </button>

        {/* Modal de formulário */}
        <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Interessado em ser parceiro?</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="formNome" className="form-label">Nome da Empresa</label>
                    <input type="text" className="form-control" id="formNome" placeholder="Digite o nome da empresa" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formTelefone" className="form-label">Telefone</label>
                    <input type="tel" className="form-control" id="formTelefone" placeholder="Digite o telefone" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="formEmail" placeholder="Digite o email da empresa" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formMensagem" className="form-label">Mensagem</label>
                    <textarea className="form-control" id="formMensagem" rows="3" placeholder="Digite uma mensagem"></textarea>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Fechar</button>
                    <button type="submit" className="btn btn-dark">Enviar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Rodape />
    </div>
  );
};

export default Parcerias;
