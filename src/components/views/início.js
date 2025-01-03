import React from "react";
import ProfileImage from '../../statics/img/logo.png';

function Inicio() {
  return (
    <div className="container mt-1'">
      <div className="text-center align-items-center justify-content-center">
            <img
                src={ProfileImage}
                alt="Minha Foto"
                className="img-fluid"
                style={{ width: '30rem', height: '35rem', objectFit: 'cover' }}
            />
            </div>       <br/><br/>
      <br/><br/>
    </div>
  );
}

export default Inicio;
