import React from 'react';
import Img1 from '../../img/Ferramentas.jpg';
import Img2 from '../../img/Ferramentas2.jpg';
import Img3 from '../../img/Ferramentas3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export function Slyder() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div id="carouselExampleIndicators" className="carousel slide relative w-full h-full" data-bs-ride="carousel">
        <ol className="carousel-indicators absolute bottom-0 left-0 right-0 flex justify-center p-0 mb-4">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="w-3 h-3 bg-white rounded-full mx-1 cursor-pointer active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="w-3 h-3 bg-white rounded-full mx-1 cursor-pointer"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="w-3 h-3 bg-white rounded-full mx-1 cursor-pointer"></li>
        </ol>
        <div className="carousel-inner relative w-full h-full">
          <div className="carousel-item active relative float-left w-full h-full">
            <img className="block w-full h-full object-cover" src={Img1} alt="First slide" />
          </div>
          <div className="carousel-item relative float-left w-full h-full">
            <img className="block w-full h-full object-cover" src={Img2} alt="Second slide" />
          </div>
          <div className="carousel-item relative float-left w-full h-full">
            <img className="block w-full h-full object-cover" src={Img3} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center cursor-pointer" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <FaArrowAltCircleLeft size={40} />
        </a>
        <a className="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center cursor-pointer" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <FaArrowAltCircleRight size={40} />
        </a>
      </div>
    </div>
  );
}
