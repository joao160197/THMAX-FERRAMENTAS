import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="w-full flex items-center px-2 py-4 bg-black h-20 shadow-lg">
        <div className="flex items-center justify-between gap-2 w-full max-w-7xl mx-auto">
          <h1 className="font-thin cursor-pointer text-2xl pl-2 hover:tracking-widest duration-300 text-white">
            <span className=" text-5xl font-bold w-128 h-44 mr-2">
              THMAX
            </span>
            <span>Ferramentas</span>
          </h1>
          <div className="flex items-center">
            <RxHamburgerMenu
              onClick={toggleMenu}
              className="text-white text-4xl md:hidden cursor-pointer"
            />
            <div className="hidden md:flex items-center gap-4">
              <button className="font-bold text-xl text-white ">
                Home
              </button>
              <button className="font-bold text-xl text-white">
                A Empresa
              </button>
              <button className="font-bold text-xl text-white">
                Contato
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-black text-white p-6 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={toggleMenu} className="text-2xl mb-4">
          <AiOutlineClose />
        </button>
        <nav className="flex flex-col gap-4">
          <button className="font-bold text-xl hover:text-blue-900 duration-300">
            Home
          </button>
          <button className="font-bold text-xl hover:text-blue-900 duration-300">
            A Empresa
          </button>
          <button className="font-bold text-xl hover:text-blue-900 duration-300">
            Contato
          </button>
        </nav>
      </div>
    </>
  );
}
