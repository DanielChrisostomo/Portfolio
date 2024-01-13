import React from "react";
import Title from "./Title";
import LoginPage from "../assets/loginpage.png";
import Hubusca from "../assets/hubusca.png";
import RickMorty from "../assets/rickmorty.png";
import "./Projeto.css";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

const Projetos = () => {
  return (
    <>
      <Title />
      <div className="slide anime-projeto">
        <h2 style={{ margin: "1rem", fontSize: "1.5rem", textAlign: "center" }}>
          Projetos
        </h2>
        <Swiper
          modules={[EffectCards]}
          effect="cards"
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="slide-card">
              <a href="">Rick and Morty Characters</a>
              <img className="slide-item" src={RickMorty} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-card">
              <a href="">GitHub Busca</a>
              <img className="slide-item" src={Hubusca} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-card">
              <a href="">Login Page</a>
              <img className="slide-item" src={LoginPage} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Projetos;
