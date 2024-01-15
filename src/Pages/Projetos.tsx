import React from "react";
import Title from "./Title";
import LoginPage from "../assets/loginpage.png";
import Hubusca from "../assets/hubusca.png";
import RickMorty from "../assets/rickmorty.png";
import "./Projetos.css";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

const Projetos = () => {
  return (
    <>
      <Title />
      <section className="projeto-container">
        <div className="slide anime-projeto">
          <h2>Projetos</h2>
          <div className="slide-container">
            <Swiper
              modules={[EffectCards]}
              effect="cards"
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div className="slide-card">
                  <a href="https://danielchrisostomo.github.io/GitHub-Busca-ReactJS/">
                    GitHub Busca
                  </a>
                  <img
                    className="slide-item"
                    src={Hubusca}
                    alt="Projeto GitHub Busca"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-card">
                  <a href="https://danielchrisostomo.github.io/Rick-and-Morty-API/">
                    Rick and Morty Characters
                  </a>
                  <img
                    className="slide-item"
                    src={RickMorty}
                    alt="Projeto Rick and Morty"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slide-card">
                  <a href="https://danielchrisostomo.github.io/Login-Page-Engenharia/">
                    Login Page
                  </a>
                  <img
                    className="slide-item"
                    src={LoginPage}
                    alt="Projeto Login Page"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projetos;
