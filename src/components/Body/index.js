import React, { useState } from 'react';

import backgroundImg from '../../img/Background.jpg';
import serrasImg from '../../img/Serras.jpg';
import gramposImg from '../../img/Grampos de fixacao.jpg';
import osgImg from '../../img/OSG.jpg';
import brocasImg from '../../img/Brocas.jpg';
import brocasEspeciaisImg from '../../img/Brocas Especiais.jpg';
import variadasImg from '../../img/Variadas.jpg';
import marcasImg from '../../img/Marcas.jpg';

import deWaltLogo from '../../img/DeWalt-Logo.jpg';
import rhomLogo from '../../img/Rohm-logo.jpg';
import osgLogo from '../../img/OSG-logo.png';
import gedoreLogo from '../../img/Gedore-logo.png';
import starretLogo from '../../img/Starrett-logo.jpg';
import indacoLogo from '../../img/Indaco-logo.png';

export function Body() {
  const [showImage, setShowImage] = useState(false);

  return (
    <main className="bg-gray-950">
      <div className="relative mb-6">
        <img src={backgroundImg} alt="Imagem de fundo" className="w-full h-128 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-5xl font-bold animate__animated animate__fadeInLeft text-center">
            FERRAMENTAS ESPECIAIS
            <hr />
            Para Todos os Profissionais
          </h2>
          <hr />
          <h3 className="text-white text-base font-bold animate__animated animate__fadeInLeft text-center">THMAX Ferramentas</h3>
        </div>
      </div>
      <div className="relative my-6 mx-8">
        <hr className="border-t-2 border-gray-300" />
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 px-4">
          <span className="p-2 bg-gray-950 text-white text-sm font-medium">MAIS OFERTAS</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {renderImageSection("Serras", serrasImg)}
        {renderImageSection("Grampos de Fixação", gramposImg)}
        {renderImageSection("Ferramentas OSG", osgImg)}
        {renderImageSection("Brocas", brocasImg)}
        {renderImageSection("Brocas Especiais", brocasEspeciaisImg)}
        {renderImageSection("Ferramentas Variadas", variadasImg)}
        {renderImageSection("Diversas Marcas", marcasImg)}
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <div
          onMouseEnter={() => setShowImage(true)}
          onMouseLeave={() => setShowImage(false)}
          className="text-white text-2xl cursor-pointer p-4"
        >
          <p className='bg-gray-800 rounded-lg p-1 text-center'>Marcas Parceiras</p>
        </div>

        <div
          className={`flex flex-wrap justify-center mb-6 gap-6 transition-opacity duration-500 ${
            showImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={deWaltLogo} alt="Logo DeWalt" className="w-32 h-24 object-cover rounded-lg" />
          <img src={rhomLogo} alt="Logo Rhom" className="w-32 h-24 object-cover rounded-lg" />
          <img src={osgLogo} alt="Logo OSG" className="w-32 h-24 object-cover rounded-lg" />
          <img src={gedoreLogo} alt="Logo Gedore" className="w-32 h-24 object-cover rounded-lg" />
          <img src={starretLogo} alt="Logo Starrett" className="w-32 h-24 object-cover rounded-lg" />
          <img src={indacoLogo} alt="Logo Indaco" className="w-32 h-24 object-cover rounded-lg" />
        </div>
      </div>
    </main>
  );
}

function renderImageSection(title, imgSrc) {
    return (
      <div className="text-center">
        <img
          src={imgSrc}
          alt={title}
          className="w-32 h-44 mt-8 object-cover transition-all duration-300 hover:scale-110"
        />
        <span
          className="mb-8 block w-32 h-12 text-white text-center flex items-center justify-center"
          style={{
            background: 'repeating-linear-gradient(45deg, #172441, #172441 2px, #252a3c 2px, #252a3c 8px)',
            fontSize: '0.875rem',
          }}
        >
          {title}
        </span>
      </div>
    );
}