import React from "react";
import Gmail from '../../statics/img/gmail.png';
import Github from '../../statics/img/github.png';
import Whatsapp from '../../statics/img/whatsapp.png';
import LinkedIn from '../../statics/img/linkedin.png';
import Instagram from '../../statics/img/insta.png';
import Logo from '../../statics/img/logo.png';
import '../navbar/nav.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark border-bottom border-body navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <div className="navbar-brand" style={{ textAlign: "left", marginLeft: '1vw' }}>
          <div className='d-flex'>
            <img src={Logo} alt="Logo" style={{ width: '120px', marginRight: '10px', backgroundColor: 'white', borderRadius: '30vw', padding: '0.5vw' }} />
            <h2 id="nomeLogo" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '1rem', fontSize: '1.5rem' }}>Os Hermenêutas</h2>
          </div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Nos siga nas redes sociais!
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body" style={{ color: 'black' }}>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/artigos">
                  Artigos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sobre">
                  Sobre nós
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/hermeneutica">
                  Hermenêutica Jurídica
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/parceria">
                  Parcerias
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/newsletter">
                  Newsletter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/bibliografia">
                  Bibliografia Recomendada
                </a>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Contato
                </button>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">Nos siga nas Redes Sociais!</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <ul class="navbar-nav flex-grow-1 pe-3" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                          <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="https://www.linkedin.com/in/rafael-moreira-suyama-0043bb189/">
                              <img className="img-fluid" src={LinkedIn} style={{ width: '3rem' }} alt="LinkedIn Logo"></img>
                            </a>
                          </li>
                          <li class="nav-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <a class="nav-link" href="https://www.instagram.com/rafael.suyama/">
                              <img className="img-fluid" src={Instagram} style={{ width: '3rem' }} alt="Instagram Logo"></img>
                            </a>
                          </li>
                          <li class="nav-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <a class="nav-link" href="mailto:rafaelmoreirasuyama@gmail.com">
                              <img className="img-fluid" src={Gmail} style={{ width: '3rem' }} alt="Gmail Logo"></img>
                            </a>
                          </li>
                          <li class="nav-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <a class="nav-link" href="https://wa.me/+5513996267989">
                              <img className="img-fluid" src={Whatsapp} style={{ width: '3rem' }} alt="Whatsapp Logo"></img>
                            </a>
                          </li>
                          <li class="nav-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <a class="nav-link" href="https://github.com/RMSuyama">
                              <img className="img-fluid" src={Github} style={{ width: '3rem' }} alt="Github Logo"></img>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-dark" data-bs-dismiss="modal" aria-label="Close">Fechar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
