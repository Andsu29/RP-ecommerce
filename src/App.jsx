import React from "react";
import "./App.css";
import Produtos from "./components/Produtos";
import Navegacao from "./components/Navegacao";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Estatisticas from "./components/Estatisticas";
import { GlobalStorage } from "./GlobalContext";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <GlobalStorage>
          <Navegacao />
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/estatisticas" element={<Estatisticas />} />
          </Routes>
        </GlobalStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
