import Title from "./Title";
import LoginPage from "../assets/loginpage.png";
import Hubusca from "../assets/hubusca.png";
import RickMorty from "../assets/rickmorty.png";
import StarWars from "../assets/starwars-slide.png";
import FastDash from "../assets/fastdash.png";
import DailyDiet from "../assets/dailydiet.png";
import Eye from "../assets/eye.svg?react";
import Clickable from "../assets/clickable.svg?react";
import "./Projetos.css";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const Projetos = () => {
  return (
    <>
      <Title />
      <section className="projeto-container">
        <div className="slide anime-projeto">
          <h2>Projetos</h2>
          <div className="slide-container">
            <Swiper
              modules={[EffectCube, Pagination]}
              effect="cube"
              slidesPerView={1}
              pagination={{ enabled: true, clickable: true }}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 0.5,
                shadowScale: 1,
              }}
            >
              <SwiperSlide>
                <div className="slide-card">
                  <p className="slide-link">
                    Mobile APP Desenvolvido para empresa MPM Software.
                  </p>
                  <img
                    className="slide-item"
                    src={FastDash}
                    alt="Projeto Login FastDash"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-card">
                  <p className="slide-link">
                    Desafio do curso React Native Rocketseat DailyDiet APP.
                  </p>
                  <img
                    className="slide-item"
                    src={DailyDiet}
                    alt="Projeto Login FastDash"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-card">
                  <Link className="slide-link-container" to="https://danielchrisostomo.github.io/GitHub-Busca-ReactJS/">
                    <div>
                      <p
                        className="slide-link"
                      >
                        Busca por usuários do Github
                      </p>
                    </div>
                    <div className="slide-icons">
                      <Clickable width={20} height={20} />
                      <Eye width={20} height={20} />
                    </div>
                  </Link>
                  <img
                    className="slide-item"
                    src={Hubusca}
                    alt="Projeto GitHub Busca"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-card">
                <Link className="slide-link-container" to="https://danielchrisostomo.github.io/Slide-JS-Star-Wars/">
                    <div>
                      <p
                        className="slide-link"
                      >
                        Star Wars Slide JS Vanilla
                      </p>
                    </div>
                    <div className="slide-icons">
                      <Clickable width={20} height={20} />
                      <Eye width={20} height={20} />
                    </div>
                  </Link>
                  <img
                    className="slide-item"
                    src={StarWars}
                    alt="Star Wars Slide JS"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-card">
                <Link className="slide-link-container" to="https://danielchrisostomo.github.io/Rick-and-Morty-API/">
                    <div>
                      <p
                        className="slide-link"
                      >
                        Personagens Rick and Morty
                      </p>
                    </div>
                    <div className="slide-icons">
                      <Clickable width={20} height={20} />
                      <Eye width={20} height={20} />
                    </div>
                  </Link>
                  <img
                    className="slide-item"
                    src={RickMorty}
                    alt="Projeto Rick and Morty"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slide-card">
                <Link className="slide-link-container" to="https://danielchrisostomo.github.io/Login-Page-Engenharia/">
                    <div>
                      <p
                        className="slide-link"
                      >
                        Login Page com autenticacão
                      </p>
                    </div>
                    <div className="slide-icons">
                      <Clickable width={20} height={20} />
                      <Eye width={20} height={20} />
                    </div>
                  </Link>
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
