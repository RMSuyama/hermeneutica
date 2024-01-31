import React from "react";

function Inicio() {
  return (
    <div className="container mt-5">
      <div className="bg-dark text-white text-center p-4" style={{borderRadius:'0.5vw'}}>
        <h1 className="display-4">Bem-vindo ao Blog Hermenêutica Jurídica!</h1><br/>
        <p className="lead">
          Somos apaixonados por desvendar os intricados caminhos da hermenêutica jurídica.
          Nosso blog é o espaço onde exploramos e compartilhamos insights sobre interpretação
          e aplicação do direito.
        </p>
      </div>

      <div className="row mt-4">
        <div className="col-md-8">
          <h2>Artigos Recentes</h2>
          <div id="carouselRecentArticles" className="carousel slide mb-4" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Artigo 1" />
              </div>
              <div className="carousel-item">
                <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Artigo 1" />
              </div>
              <div className="carousel-item">
                <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Artigo 1" />
              </div>
              {/* Adicione mais itens ao carrossel conforme necessário */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselRecentArticles" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselRecentArticles" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Próximo</span>
            </button>
          </div>
        </div>
        <div className="col-md-4">
          <h2>Categorias em Destaque</h2>
          <ul className="list-group">
            <li className="list-group-item bg-dark text-white">Interpretação Constitucional</li>
            <li className="list-group-item bg-dark text-white">Hermenêutica Legal</li>
            <li className="list-group-item bg-dark text-white">Casos Jurídicos Analisados</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Inicio;
