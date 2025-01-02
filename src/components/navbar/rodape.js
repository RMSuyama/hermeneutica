import React from "react";
import Gmail from '../../statics/img/gmail.png'
import Github from '../../statics/img/github.png'
import Whatsapp from '../../statics/img/whatsapp.png'
import LinkedIn from '../../statics/img/linkedin.png'
import Instagram from '../../statics/img/insta.png'
import Logo from '../../statics/img/logo.png';
import { Link } from "react-router-dom";


function Rodape() {
  return (
    <div class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">

      <div class="container-fluid" style={{display:'flex', flexDirection:'row'}}>
      <div className="navbar-brand" style={{ textAlign: "left", marginLeft: '1vw' }}>
          <div className='d-flex'>
            <img src={Logo} alt="Logo" style={{ width: '120px', marginRight: '10px', backgroundColor: 'white', borderRadius: '30vw', padding: '0.5vw' }} />
            <h2 id="nomeLogo" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '1rem', fontSize: '1.5rem' }}></h2>
          </div>
        </div>
        
        <div class="offcanvas-body" style={{ color: 'black' }}>
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" style={{ display: 'flex', flexDirection: 'row' }}>
        <li class="nav-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1rem' }}>
          <a class="nav-link" aria-current="page" href="https://www.linkedin.com/in/rafael-moreira-suyama-0043bb189/" style={{ textAlign: 'center', marginRight: '1rem' }}>
            <img src={LinkedIn} className="img-fluid" style={{ width: '2rem', marginRight: '10px' }} alt="LinkedIn Logo"></img>
            
          </a>
        </li>
        <li class="nav-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1rem' }}>
          <a class="nav-link" href="https://www.instagram.com/rafael.suyama/" style={{ textAlign: 'center', marginRight: '1rem' }}>
            <img src={Instagram} className="img-fluid" style={{ width: '2rem', marginRight: '10px' }} alt="Instagram Logo"></img>
            
          </a>
        </li>
        <li class="nav-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1rem' }}>
          <a class="nav-link" href="mailto:rafaelmoreirasuyama@gmail.com" style={{ textAlign: 'center', marginRight: '1rem' }}>
            <img src={Gmail} className="img-fluid" style={{ width: '2rem', marginRight: '10px' }} alt="Gmail Logo" />
            
          </a>
        </li>
        <li class="nav-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1rem' }}>
          <a class="nav-link" href="https://wa.me/+5513996267989" style={{ textAlign: 'center', marginRight: '1rem' }}>
            <img src={Whatsapp} className="img-fluid" style={{ width: '2rem', marginRight: '10px' }} alt="Whatsapp Logo"></img>
            
          </a>
        </li>
        <li class="nav-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1rem' }}>
          <a class="nav-link" href="https://github.com/RMSuyama" style={{ textAlign: 'center', marginRight: '1rem' }}>
            <img src={Github} className="img-fluid" style={{ width: '2rem', marginRight: '10px' }} alt="Github Logo"></img>
            
          </a>
        </li>
      </ul>
      </div>
      </div>
    </div>
  );
}

export default Rodape;