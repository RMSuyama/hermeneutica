import React from 'react';

const JoinUsView = () => {
  return (
    <section id="join-us" className="py-5">
      <div className="card row mt-4 p-4 m-4">
        <div className="col">
          <h2>Assine Nosso Blog</h2>
          <p>
            Não perca nenhuma atualização! Assine nosso boletim informativo para receber
            as últimas análises diretamente em sua caixa de entrada.
          </p>
          <form className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Seu e-mail" aria-label="Seu e-mail" aria-describedby="button-addon2" />
            <button className="btn btn-dark" type="button" id="button-addon2">Assinar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinUsView;
