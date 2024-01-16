import React from "react";
import "./Title.css";
import { NavLink, useLocation } from "react-router-dom";

const Title = () => {
  return (
    <>
      <section>
        <header className="nome">
          <h1>Daniel Chrisostomo</h1>
          <p>
            Desenvolvedor <span>Front-End</span>
          </p>
        </header>
        <nav className="links-container">
          <NavLink to="/" end>
            Sobre
          </NavLink>
          <NavLink to="/contato">Contato</NavLink>
          <NavLink to="/projetos">Projetos</NavLink>
        </nav>

        <span className="ano-span">Desde 1994</span>
      </section>
    </>
  );
};

export default Title;
