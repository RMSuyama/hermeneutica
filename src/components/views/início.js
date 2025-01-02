import React from "react";
import ProfileImage from '../../statics/img/logo.png';

function Inicio() {
  return (
    <div className="container mt-1'">
      <div className="text-center align-items-center justify-content-center">
            <img
                src={ProfileImage}
                alt="Minha Foto"
                className="img-fluid rounded-circle mb-4 mt-4"
                style={{ width: '65rem', height: '35rem', objectFit: 'cover', borderRadius: '50%' }}
            />
            </div>       <br/><br/>
      <div className="bg-dark text-white text-center p-4" style={{ borderRadius: '0.5vw' }}>

            
                  <p className="lead">
          "Paralello" representa conexões, caminhos que se cruzam e coexistem, sugerindo a ideia de união entre diferentes influências musicais e culturais. Já "Caiçara" faz referência direta às raízes litorâneas, à cultura tradicional das comunidades costeiras e ao estilo de vida simples e autêntico dessas regiões.
        </p>
      </div>

    </div>
  );
}

export default Inicio;
