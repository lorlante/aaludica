import React from "react";
import { Link } from "react-router-dom";

const PageAboutUs = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(images/bkg-second.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const boxSucesosStyle = {
    backgroundImage: `url(images/bkg-sucesos.jpg)`,
    height: "130",
    marginLeft: "5px",
    marginRight: "5px",
    paddingTop: "30px",
    maxWidth: "33%",
  };
  const boxArsDominoStyle = {
    backgroundImage: `url(images/bkg-domino.jpg)`,
    height: "130",
    marginLeft: "5px",
    marginRight: "5px",
    paddingTop: "30px",
    maxWidth: "32%",
  };
  const boxNomNomsStyle = {
    backgroundImage: `url(images/bkg-noms.jpg)`,
    height: "130",
    marginLeft: "5px",
    marginRight: "5px",
    paddingTop: "30px",
    maxWidth: "33%",
  };

  return (
    <>
      <div id="AboutUsPage" class="page" style={backgroundImageStyle}>
        <div className="container-fluid second">
          <div className="row">
            <div className="col-md-6">
              <div className="main-txt">
                AA L&uacute;dica es una editorial argentina de juegos dedicada a
                crear experiencias l&uacute;dicas que generen aprendizajes
                significativos y amenos. Nacimos como el proyecto de un grupo de
                amigos que buscaba utilizar su hobbie para generar nuevas
                herramientas educativas. Nuestros juegos son diseñados y
                testeados por profesionales de la educación, integrando el
                contenido educativo con mecánicas de juegos de mesa modernos y
                clásicos.{" "}
              </div>
              <div className="row integrantes">
                <div className="col-md-4" align="center">
                  <div className="team-member">
                    <img
                      alt=""
                      className="mx-auto rounded-circle"
                      src="images/tonylima.jpg"
                      alt=""
                    />
                    <p className="text-muted">Guido D. Cegarra</p>
                  </div>
                </div>
                <div className="col-md-4" align="center">
                  <div className="team-member">
                    <img
                      alt=""
                      className="mx-auto rounded-circle"
                      src="images/tonylima.jpg"
                      alt=""
                    />
                    <p className="text-muted">Santiago Rodríguez</p>
                  </div>
                </div>
                <div className="col-md-4" align="center">
                  <div className="team-member">
                    <img
                      alt=""
                      className="mx-auto rounded-circle"
                      src="images/tonylima.jpg"
                      alt=""
                    />
                    <p className="text-muted">Juan Manuel Domínguez</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 linescontent">
              <div className="highlight">
                Creemos en el balance entre la diversión y el aprendizaje, para
                que los juegos "dejen algo", pero que además sean desafiantes y
                divertidos.{" "}
              </div>
              <div className="highlight linetwo pull-right hidden-xs">
                Buscamos que los jugadores tomen decisiones relevantes y se
                sientan involucrados durante la partida, haciendo que la
                estrategia y el conocimiento sean igual de importantes.{" "}
              </div>
              <div className="highlight linethree pull-left hidden-xs">
                Nos esforzamos para crear juegos que sean a la vez llamativos y
                ricos en contenido, para que los jugadores, además de pasarla
                bien, adquieran conocimientos, o refuercen los conocimientos
                previos.{" "}
              </div>
            </div>
          </div>
          <div className="" id="useit">
            &nbsp;{" "}
          </div>
        </div>
      </div>
      <div className="thirdsection">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12" align="center">
              <h1 className="title-txt">&#8212; Nuestros juegos &#8212;</h1>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row box-juegos">
            <div className="col-md-4" style={boxSucesosStyle}>
              <div className="logo-sucesos" align="center">
                <img
                  alt=""
                  src="images/logo-sucesos.png"
                  className="img-responsive"
                />
              </div>
              <div className="tagline-sucesos">
                <h3 className="fjalla">
                  Deslumbrá a tus amigos con tu memoria y aprendé historia
                  argentina jugando.{" "}
                </h3>
                <br />
                <h5 className="">
                  Un juego donde se pone a prueba tu conocimiento, compitiendo
                  con tus amigos por ser el primero en armar en el orden
                  correcto una cadena con cartas que describen varios de los
                  hitos de la historia de nuestro país.
                </h5>
              </div>
              <div className="packsucesos" align="center">
                <img
                  alt=""
                  src="images/pack_sucesos.png"
                  className="img-responsive logo-juego"
                />{" "}
              </div>
              <div>
                {/* 
                <Link to="/landing-sucesos" className="btn btn-primary">
                  Más Información
                </Link>
                */}
              </div>
            </div>
            <div className="col-md-4 " style={boxArsDominoStyle}>
              <div className="logo-arsdomino" align="center">
                <img
                  alt=""
                  src="images/logo-arsdomino.png"
                  className="img-responsive"
                />
              </div>
              <div className="tagline-arsdomino">
                <h3 className="fjalla txt-blanco monserrat">
                  ¡Una colección de arte que cabe en una caja!
                </h3>
                <br />
                <h5 className="txt-blanco">
                  Utilizando las reglas del dominó tradicional, Ars Domino te
                  permite conocer algunas de las obras más importantes del arte
                  universal de forma amena.
                </h5>
              </div>
              <div className="packars" align="center">
                <img
                  alt=""
                  src="images/pack_ars.png"
                  className="img-responsive logo-juego"
                />{" "}
              </div>
              <div>
                {/* 
                <Link to="/landing-arsdomino" className="btn btn-primary">
                  Más Información
                </Link>
                */}
              </div>
            </div>
            <div className="col-md-4 " style={boxNomNomsStyle}>
              <div className="logo-nomnoms" align="center">
                <img
                  alt=""
                  src="images/logo-nomnoms.png"
                  className="img-responsive"
                />
              </div>
              <div className="tagline-nomnoms">
                <h3 className="fjalla verdegorditos">
                  Jugá con los Gorditos & Bonitos!
                </h3>
                <br />
                <h5 className="verdegorditos">
                  Un juego de riesgos en el que tratás de convertirte en el
                  roedor más gordito de todos. Pero cuidado, ¡comer mucho de la
                  misma comida te puede caer mal!
                </h5>
              </div>
              <div className="packnomnoms" align="center">
                <img
                  alt=""
                  src="images/pack_nomnoms.png"
                  className="img-responsive logo-juego"
                />{" "}
              </div>
              <div>
                {/* 
                <Link to="/nomnoms" className="btn btn-primary">
                  Más Información
                </Link>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAboutUs;
