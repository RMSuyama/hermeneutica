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
       
        <div class="offcanvas-body" style={{ color: 'black' }}>
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" style={{ display: 'flex', flexDirection: 'row' }}>
        <li class="nav-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1rem' }}>
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