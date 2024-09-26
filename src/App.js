import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from "./components/Header";
import { Slyder } from "./components/Slyder";
import { Body } from "./components/Body";
import  ContactPage  from "./pages/ContactPage/ContactPage";
import  AboutPage  from "./pages/AboutPage/AboutPage";
import { Footer } from "./components/Footer";

import './App.css';

const Wrapper = () => {
  const location = useLocation();
  const showSlyderAndBody = location.pathname === '/';

  return (
    <>
      {showSlyderAndBody && (
        <>
          <Slyder />
          <Body />
        </>
      )}
      <Routes>
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/empresa" element={<AboutPage />} />
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
