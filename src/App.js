import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from "./components/Header";
import { Slyder } from "./components/Slyder";
import { Body } from "./components/Body";
import ContactPage from "./pages/ContactPage/ContactPage"; // Certifique-se de que o caminho está correto
import { Footer } from "./components/Footer";

import './App.css';

// Componente Wrapper para condicionar a renderização de Slyder e Body
const Wrapper = () => {
  const location = useLocation();
  const showSlyderAndBody = location.pathname === '/'; // Exibe Slyder e Body apenas na rota Home

  return (
    <>
      {showSlyderAndBody && (
        <>
          <Slyder />
          <Body />
        </>
      )}
      {/* Renderize a rota ContactPage ou outras rotas aqui */}
      <Routes>
        <Route path="/contato" element={<ContactPage />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Wrapper />
      <Footer />
    </Router>
  );
}

export default App;