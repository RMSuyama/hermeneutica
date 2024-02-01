import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const JoinUsView = () => {
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');
  const [countryCode, setCountryCode] = useState(''); // Adicione esta linha
  const [areaCode, setAreaCode] = useState(''); // Adicione esta linha
  const [phoneNumber, setPhoneNumber] = useState(''); // Adicione esta linha
  const [phone, setPhone] = useState(''); // Adicione esta linha
  const handleSubscribe = () => {
    // Lógica para lidar com a assinatura aqui
    console.log('Assinatura realizada:', { email, profession, phone: `+${countryCode} (${areaCode}) ${phoneNumber}`
  });
  };

  return (
    <section id="join-us" className="py-5">
      <div className="container" style={{marginTop:'-2vw'}}>
        <div className="card p-5 shadow-lg">
          <div className="row">
            <div className="col-md-6 text-center mb-4">
              <img
                src="https://via.placeholder.com/300"
                className="img-fluid rounded-circle"
                alt="Imagem de Assinatura"
              />
            </div>
            <div className="col-md-6">
              <h2 className="mb-4">Assine Nosso Blog</h2>
              <p className="lead">
                Não perca nenhuma atualização! Assine nosso boletim informativo para receber
                as últimas análises diretamente em sua caixa de entrada.
              </p>
              <form onSubmit={handleSubscribe}>
              <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">Nome</label>
                  <input
                    type="name"
                    className="form-control"
                    id="nameInput"
                    placeholder="Seu nome"
                    aria-describedby="button-addon2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="Seu e-mail"
                    aria-describedby="button-addon2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="professionSelect" className="form-label">Profissão</label>
                  <select
                    className="form-select"
                    id="professionSelect"
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    required
                  >
                    <option value="">Escolha sua profissão</option>
                    <option value="advogado(a)">Advogado(a)</option>
                    <option value="estudante_direito">Estudante de Direito</option>
                    <option value="contador(a)">Contador(a)</option>
                    <option value="estudante_contabilidade">Estudante de Contabilidade</option>
                    <option value="trabalha_direito">Trabalha com Direito</option>
                    <option value="trabalha_contabilidade">Trabalha com Contabilidade</option>
                    <option value="empresario">Empresário(a)</option>
                    <option value="profissional_RH">Profissional da Área de RH</option>
                    <option value="trabalhador">Trabalhador(a) geral</option>
                    <option value="aposentado">Aposentado(a)</option>
                    <option value="aposentado">Aposentado</option>

                  </select>
                </div>

                <div className="mb-3">
              <label htmlFor="phoneInput" className="form-label">Número de Telefone</label>
              <PhoneInput
                placeholder="Informe seu número de telefone"
                value={phoneNumber}
                onChange={setPhoneNumber}
                defaultCountry="BR" // Configurando o país padrão para Brasil
                required
              /></div>


             
                <div className="mb-3">
                  <div className="g-recaptcha" data-sitekey="SUA_CHAVE_PUBLICA_RECAPTCHA"></div>
                </div>
                <button type="submit" className="btn btn-dark" id="button-addon2">
                  Assinar
                </button>
              </form>
              <p className="small text-muted mt-3">
                Ao assinar, você concorda com nossos <a href="/politica-de-privacidade">termos de serviço</a> e <a href="/politica-de-privacidade">política de privacidade</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Adicione o script do reCAPTCHA no final do seu HTML */}
      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    </section>
  );
};

export default JoinUsView;
