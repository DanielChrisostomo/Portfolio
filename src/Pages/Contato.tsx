import React from "react";
import "./Contato.css";
import Title from "./Title";
import LinkedIN from "../assets/linkedin.svg?react";
import Email from "../assets/email.svg?react";
import GitHub from "../assets/github.svg?react";

const Contato = () => {
  return (
    <>
      <Title />
      <section className="anime-contato contato">
        <div className="flex mb">
          <GitHub className="svg-icon" />
          <a href="https://github.com/DanielChrisostomo">GitHub</a>
        </div>

        <div className="flex mb">
          <LinkedIN className="svg-icon" />
          <a href="https://www.linkedin.com/in/daniel-luz-976673211/">
            LinkedIn
          </a>
        </div>

        <div className="flex mb">
          <Email className="svg-icon" />
          <p style={{ fontWeight: "lighter" }}>email: daniluz1515@gmail.com</p>
        </div>
      </section>
    </>
  );
};

export default Contato;
