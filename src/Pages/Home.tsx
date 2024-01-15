import React from "react";
import Title from "./Title";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Title />
      <div className="anime-info">
        <section className="info">
          <span>Minha jornada </span>
          <br />
          <span>na programação </span>
          <br />
          <span>começa em 2023 </span>
          <br />
          <span>ano no qual inicio </span>
          <br />
          <span>meus estudos em </span>
          <br />
          <span>Análise e </span>
          <br />
          <span>Desenvolvimento </span>
          <br />
          <span>de Sistemas </span>
          <br />
          <span>Atualmente </span>
          <br />
          <span>meu foco é o </span>
          <br />
          <span>desenvolvimento web </span>
          <br />
          <span>Front-End </span>
          <br />
          <span>e busco desenvolver </span>
          <br />
          <span>sistemas com as </span>
          <br />
          <span>tecnologias </span>
          <br />
          <span>React JS, JavaScript </span>
          <br />
          <span>TypeScript e CSS3 </span>
          <br />
        </section>
      </div>
    </>
  );
};

export default Home;
