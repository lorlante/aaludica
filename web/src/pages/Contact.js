import React from "react";

const ContactPage = () => {
  return (
    <div className="container" data-original-title="">
      <div className="row footer" data-original-title="">
        <div className="col-md-4" align="center" data-original-title="">
          <img
            src="images/logonavbar.png"
            className="img-responsive"
            data-original-title=""
            alt=""
          />
          <p className="" data-original-title="">
            {" "}
          </p>
          <h4 className="" data-original-title="">
            <a href="mailto:info@aaludica.com.ar" data-original-title="">
              info@aaludica.com.ar
            </a>
          </h4>
          <h4 className="" data-original-title="">
            <a
              href="http://www.aaludica.com.ar"
              target="_blank"
              data-original-title=""
              alt=""
            >
              www.aaludica.com.ar
            </a>
          </h4>
          <i
            className="fa fa-instagram fa-3x txt-blanco box cursor ico-social"
            onclick="window.open('https://www.instagram.com/aa.ludica/','_blank')"
            data-original-title=""
          >
            {" "}
          </i>
          <i
            className="fa fa-facebook-square fa-3x txt-blanco box cursor ico-social"
            onclick="window.open('https://www.facebook.com/AALudica/','_blank')"
            data-original-title=""
          >
            {" "}
          </i>
          <h4
            className="cursor"
            onclick="window.open('https://api.whatsapp.com/send?phone=541158418487','_blank')"
            data-original-title=""
          >
            <img
              src="images/whastapp.png"
              className="wpftr"
              data-original-title=""
            />
            (11) 5841-8487{" "}
          </h4>
          <h4 className="" data-original-title="">
            Buenos Aires, Argentina{" "}
          </h4>
          <br data-original-title="" />
        </div>
        <form
          action="https://aaludica.com.ar/new/enviar-consulta"
          id="contacto"
          method="POST"
          className="form-horizontal"
          onsubmit="MM_validateForm('nombre','','R','email','','RisEmail','consulta','','R');return document.MM_returnValue"
          role="form"
          data-original-title=""
        >
          <input
            type="hidden"
            name="_token"
            value="JQrYKcnq48pNOeX6FjHadlaWwlX3t6nGqTDFHa4u"
            data-original-title=""
          />
          <div
            className="col-md-4 columna1"
            align="center"
            data-original-title=""
          >
            <div className="form-group" data-original-title="">
              <label className="sr-only" for="nombre" data-original-title="">
                nombre
              </label>
              <input
                name="nombre"
                type="text"
                className="form-control"
                id="nombre"
                placeholder="ingrese su nombre"
                data-original-title=""
              />
            </div>
            <div className="form-group" data-original-title="">
              <label className="sr-only" for="email" data-original-title="">
                email
              </label>
              <input
                name="email"
                type="text"
                className="form-control"
                id="email"
                placeholder="ingrese su e-mail"
                data-original-title=""
              />
            </div>
            <div className="form-group" data-original-title="">
              <label className="sr-only" for="telefono" data-original-title="">
                telefono
              </label>
              <input
                name="telefono"
                type="text"
                className="form-control"
                id="telefono"
                placeholder="ingrese su telefono"
                data-original-title=""
              />
            </div>
          </div>
          <div
            className="col-md-4 columna2"
            align="center"
            data-original-title=""
          >
            <div className="form-group" data-original-title="">
              <label className="sr-only" for="consulta" data-original-title="">
                consulta
              </label>
              <textarea
                name="consulta"
                cols="45"
                rows="7"
                wrap="virtual"
                className="form-control"
                id="consulta"
                placeholder="ingrese su consulta"
                data-original-title=""
              ></textarea>
            </div>
            <div className="" align="center" data-original-title="">
              {" "}
              <button
                type="submit"
                className="btn btn-default  bkg-negro txt-blanco"
                id="enviar"
                data-original-title=""
              >
                enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
