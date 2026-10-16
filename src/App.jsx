import "./App.css";

import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<h1>Hola</h1>} />
          <Route path="/cart" element={<h1>Carrito</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
