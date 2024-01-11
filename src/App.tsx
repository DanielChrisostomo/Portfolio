import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import Projetos from "./Pages/Projetos";

const App = () => {
  return (
    <>
      <HashRouter>
        <main className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/projetos" element={<Projetos />} />
          </Routes>
        </main>
      </HashRouter>
    </>
  );
};

export default App;
