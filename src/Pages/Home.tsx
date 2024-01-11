import React from "react";
import Title from "./Title";
import "./Home.css";
import Carps from "../assets/carps.svg?react";

const Home = () => {
  return (
    <>
      <Title />
      <Carps className="carps" />
      <div className="anime-info">
        <section className="info">
          <span>Nascido em </span>
          <br />
          <span>Ribeirão Preto</span>
          <br />
          <span>Tenho o interesse em</span>
          <br />
          <span>me tornar especialista</span>
          <br />
          <span>em desenvolvimento</span>
          <br />
          <span>Front-End</span>
          <br />
          <span>Atualmente estudo</span>
          <br />
          <span>Análise e Desenvolvimento</span>
          <br />
          <span>de Sistemas</span>
          <br />
          <span>Programo em React JS</span>
          <br />
          <span>JavaScript, TypeScript</span>
          <br />
          <span>HTML e CSS</span>
        </section>
      </div>
    </>
  );
};

export default Home;
