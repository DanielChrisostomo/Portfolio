import React from "react";
import Title from "./Title";
import GitImg from "../assets/git.png";
import "./Contato.css";
import LinkedIN from "../assets/linkedin.svg?react";
import Email from "../assets/email.svg?react";

const Contato = () => {
  return (
    <>
      <Title />
      <section className="anime-contato contato">
        <div>
          <div className="flex" style={{ marginBottom: "1rem" }}>
            <LinkedIN className="svg-icon" />
            <a href="https://www.linkedin.com/in/daniel-luz-976673211/">
              LinkedIn
            </a>
          </div>
          <div className="flex">
            <Email className="svg-icon" />
            <p>email: daniluz1515@gmail.com</p>
          </div>
        </div>

        <div>
          <div className="contato-git">
            <a href="https://github.com/DanielChrisostomo/">GitHub</a>
            <img className="gitImg" src={GitImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
