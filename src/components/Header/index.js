export function Header() {

return (
  <header className="w-full flex items-center px-2 py-4 bg-black h-20 shadow-lg">
  <div className="flex items-center justify-between gap-2 w-full max-w-7xl mx-auto">
   
      <h1 className="font-thin cursor-pointer text-2xl pl-2 hover:tracking-widest duration-300 text-white">
        <span className="text-white text-5xl font-bold w-128 h-44 mr-2">
          THMAX
        </span>
        Ferramentas 
      </h1>
    <div className="flex items-center flex-wrap gap-4">
     <div className="text-white flex items-center flex-wrap gap-4">
        <button className="font-bold text-xl hover:text-blue-900 duration-300">Home</button>
        <button className="font-bold text-xl hover:text-blue-900 duration-300">A Empresa</button>
        <button className="font-bold text-xl hover:text-blue-900 duration-300">Contato</button>
     </div>
    </div>
  </div>
</header>
);
}