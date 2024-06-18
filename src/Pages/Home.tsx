import React from "react";
import Title from "./Title";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Title />
      <div className="anime-info">
        <section className="info">
          <p>
            <span>Minha jornada </span>
            <span>na programação </span>
            <span>começa em 2023 </span>
            <span>ano no qual inicio </span>
            <span>meus estudos em </span>
            <span>Análise e </span>
            <span>Desenvolvimento </span>
            <span>de Sistemas. </span>
            <span>Atualmente </span>
            <span>meu foco é o </span>
            <span>desenvolvimento </span>
            <span>Front-End </span>
            <span>e busco desenvolver </span>
            <span>sistemas com as </span>
            <span>tecnologias </span>
            <span>React JS, </span>
            <span>JavaScript, </span>
            <span>React Native, </span>
            <span>TypeScript, </span>
            <span>HTML e CSS </span>
          </p>
        </section>
      </div>
    </>
  );
};

export default Home;
