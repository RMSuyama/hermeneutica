import React from "react";

function JoinUsView() {
  return (
    <div className="container mt-5">
      {/* Seção de Próximos Shows */}
      <h2 className="text-center mb-4">Próximos Shows</h2>

      <div className="list-group">
        {/* Show 1 */}<br/><br/>
        <div className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">10 de Janeiro de 2025 - Bar do Zé, Registro-SP</h5><br/><br/>
            <small className="text-muted">20:00</small>
          </div>
          <p className="mb-1">
            Show de lançamento do novo EP, com um mix de reggae, MPB e forró! Venha conferir as novas músicas e curtir uma noite de muita música boa.
          </p>
          <small>Descrição do evento: Uma mistura vibrante de ritmos, com destaque para o reggae e MPB.</small>
        </div>

        {/* Show 2 */}<br/><br/>
        <div className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">15 de Janeiro de 2025 - Praça Central, São Paulo-SP</h5><br/><br/>
            <small className="text-muted">18:00</small>
          </div>
          <p className="mb-1">
            Apresentação especial de samba rock e rap, com participação de artistas locais. Uma noite para dançar e curtir a cultura musical da cidade!
          </p>
          <small>Descrição do evento: Samba rock e rap, com muita energia e groove.</small>
        </div>

        {/* Show 3 */}<br/><br/>
        <div className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">20 de Janeiro de 2025 - Festival Cultural Vale do Ribeira, Registro-SP</h5><br/><br/>
            <small className="text-muted">14:00</small>
          </div>
          <p className="mb-1">
            Show ao vivo celebrando a diversidade musical, com influências do forró, reggae e jazz. Um evento para todas as idades e gostos!
          </p>
          <small>Descrição do evento: Música ao vivo e cultura local com as influências do Vale do Ribeira.</small><br/><br/><br/><br/><br/><br/>
        </div>
      </div>
    </div>
  );
}

export default JoinUsView;
