import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import Logo from "../../img/logo.png";

export function Footer() {
  return (
    <footer className="bg-black w-full">
      <div className="max-w-[1250px] mx-auto py-8 px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
          <div className="flex flex-col items-start text-white text-lg">
            <img
              className="w-full h-20 object-contain hover:opacity-80 transition-opacity duration-300"
              src={Logo}
              alt="Logo"
            />
          </div>
          <div className="flex flex-col items-center mt-6 sm:mt-0">
            <h1 className="text-xl text-white font-normal">NOS SIGA NAS REDES</h1>
            <div className="flex space-x-6 mt-3">
              <a href="https://www.whatsapp.com/" className="text-3xl hover:text-[#25D366] transition-colors duration-300">
                <AiOutlineWhatsApp />
              </a>
              <a href="https://www.instagram.com/" className="text-3xl hover:text-[#E1306C] transition-colors duration-300">
                <AiOutlineInstagram />
              </a>
              <a href="https://pt-br.facebook.com/" className="text-3xl hover:text-[#4267B2] transition-colors duration-300">
                <BsFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black border-t border-gray-300">
        <div className="max-w-[1250px] mx-auto py-5 px-10 flex justify-center">
          <span className="text-sm text-white opacity-80">
            Copyright © 2024 THMAX Ferramentas - Todos os direitos reservados
          </span>
        </div>
      </div>
    </footer>
  );
}
