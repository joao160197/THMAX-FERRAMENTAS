import React, { useState } from 'react';

import serrasImg from '../../img/Serras.jpg';
import gramposImg from '../../img/Grampos de fixacao.jpg';
import osgImg from '../../img/OSG.jpg';
import brocasImg from '../../img/Brocas.jpg';
import brocasEspeciaisImg from '../../img/Brocas Especiais.jpg';
import variadasImg from '../../img/Variadas.jpg';
import marcasImg from '../../img/Marcas.jpg';
import etiquetaMarcas from '../../img/etiqueta-marcas.png';

import deWaltLogo from '../../img/DeWalt-Logo.jpg';
import rhomLogo from '../../img/Rohm-logo.jpg';
import osgLogo from '../../img/OSG-logo.png';
import gedoreLogo from '../../img/Gedore-logo.png';
import starretLogo from '../../img/Starrett-logo.jpg';
import indacoLogo from '../../img/Indaco-logo.png';

export function Body() {
  const [showBrands, setShowBrands] = useState(false);

  return (
    <main className="bg-violet-950">
      <div className="relative mx-4 md:mx-8">
        <hr className="border-t-2" />
        <div className="absolute inset-0 flex mt-3 items-center justify-center px-4">
          <div className="flex-grow border-t border-white mx-2"></div>
          <span className="p-2 text-white text-xs md:text-sm font-medium z-10">
            MAIS OFERTAS
          </span>
          <div className="flex-grow border-t border-white mx-2"></div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
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
          onMouseEnter={() => setShowBrands(true)}
          onMouseLeave={() => setShowBrands(false)}
          className="text-white text-xl md:text-2xl lg:text-3xl cursor-pointer p-4 relative"
        >
          {showBrands ? (
            <div
              className="flex flex-col items-center justify-center"
              style={{ transition: 'opacity 0.5s' }}
            >
              <button
                className="absolute top-4 right-4 text-white text-xl md:hidden"
                onClick={() => setShowBrands(false)}
              >
                &times;
              </button>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <img src={deWaltLogo} alt="Logo DeWalt" className="w-24 h-16 md:w-32 md:h-24 object-cover rounded-lg" />
                <img src={rhomLogo} alt="Logo Rhom" className="w-24 h-16 md:w-32 md:h-24 object-cover rounded-lg" />
                <img src={osgLogo} alt="Logo OSG" className="w-24 h-16 md:w-32 md:h-24 object-cover rounded-lg" />
                <img src={gedoreLogo} alt="Logo Gedore" className="w-24 h-16 md:w-32 md:h-24 object-cover rounded-lg" />
                <img src={starretLogo} alt="Logo Starrett" className="w-24 h-16 md:w-32 md:h-24 object-cover rounded-lg" />
                <img src={indacoLogo} alt="Logo Indaco" className="w-24 h-16 md:w-32 md:h-24 object-cover rounded-lg" />
              </div>
            </div>
          ) : (
            <p className="mb-6 text-center flex items-center justify-center gap-2">
              <img src={etiquetaMarcas} alt="Logo de etiqueta" className="w-7 h-7 md:w-9 md:h-9" />
              Marcas Parceiras
            </p>
          )}
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
        className="w-24 h-32 md:w-32 md:h-44 mt-8 object-cover transition-all duration-300 hover:scale-105"
      />
      <span
        className="mb-4 w-24 h-10 md:w-32 md:h-12 text-white text-center flex items-center justify-center text-xs md:text-sm lg:text-base"
        style={{
          background: 'repeating-linear-gradient(45deg, #172441, #172441 2px, #252a3c 2px, #252a3c 8px)',
          fontSize: '0.75rem',
        }}
      >
        {title}
      </span>
    </div>
  );
}
