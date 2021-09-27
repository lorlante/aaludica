import React, { useState, useEffect, useContext, useMemo } from "react";
import { CartContext } from "../contexts/CartContext";
import {
  BsFillTrashFill,
  BsFillPlusCircleFill,
  BsFillDashCircleFill,
} from "react-icons/bs";

const PageCart = () => {
  let cart = useContext(CartContext);
  let provinces = [];

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/provinces");
      provinces = await response.json();
    })();
  }, []);

  const checkoutInfo = useMemo(
    (cart) => {
      let subtotal = 0;

      // cart.items.forEach((item) => subtotal + item.price * item.quantity);

      return { subtotal };
    },
    [cart.items]
  );

  return (
    <div className="container" id="CartPage">
      <div className="row">
        <div className="section-title">
          <h4>Tu carrito de compras</h4>
        </div>
      </div>
      <div className="row">
        {cart.items.length > 0 ? (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th></th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.items.map((item) => {
                  const handleRemoveItem = () => {
                    cart.remove(item.id, item.quantity);
                  };
                  const handleReduceItem = () => {
                    cart.remove(item.id, 1);
                  };
                  const handleAddItem = () => {
                    cart.add(item.id, 1);
                  };

                  return (
                    <tr className="cartRows">
                      <td>
                        <img
                          src={"images/products/" + item.main_photo + ""}
                          alt=""
                          className="cartThumbnail"
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>
                        <button
                          className="btn btn-default"
                          onClick={handleReduceItem}
                        >
                          <BsFillDashCircleFill />
                        </button>
                        <input
                          type="text"
                          name=""
                          value={item.quantity}
                          className="cartInput"
                        />

                        <button
                          className="btn btn-default"
                          onClick={handleAddItem}
                        >
                          <BsFillPlusCircleFill />
                        </button>
                      </td>
                      <td>$ {(item.price * item.quantity).toFixed(2)}</td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-danger"
                          onClick={handleRemoveItem}
                        >
                          <BsFillTrashFill />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="row" id="formDatosEnvio">
              <div className="col-sm-8">
                <div>
                  <h5>Nombre y apellido</h5>
                  <input type="text" className="form-control" name="" />
                </div>
                <div>
                  <h5>Dirección</h5>
                  <input type="text" className="form-control" name="" />
                </div>
                <div>
                  <h5>E-Mail</h5>
                  <input type="text" className="form-control" name="" />
                </div>
                <div class="row">
                  <div className="col-sm-6">
                    <h5>Teléfono (opcional)</h5>
                    <input type="text" className="form-control" name="" />
                  </div>
                  <div className="col-sm-6">
                    <h5>Provincia</h5>
                    <select className="form-select">
                      {provinces.length > 0
                        ? provinces.map((province) => (
                            <option value="{province.zone}">
                              {province.name}
                            </option>
                          ))
                        : ""}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <h5>Forma de pago</h5>
                    <select className="form-select">
                      <option value="">Efectivo</option>
                      <option value="">Transferencia bancaria</option>
                      <option value="">Mercado Pago</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <h5>Forma de envío</h5>
                    <select className="form-select">
                      <option value="">Retiro en el local</option>
                      <option value="">Correo Argentino</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 backgroundResumenPedido">
                <h4>RESUMEN</h4>
                <hr />
                <div class="clearfix">
                  <div className="float-start">Subtotal</div>
                  <div className="float-end">$ 600.00</div>
                </div>
                <div class="clearfix">
                  <div className="float-start">Envío</div>
                  <div className="float-end">$ 100.00</div>
                </div>
                <hr />
                <div class="clearfix">
                  <div className="float-start">Total</div>
                  <div className="float-end">$ 700.00</div>
                </div>
                <hr />
                <button className="btn btn-dark btn-lg w-100">
                  ENVIAR PEDIDO
                </button>
              </div>
            </div>
          </>
        ) : (
          <div>Tu carrito está vacío.</div>
        )}
      </div>
    </div>
  );
};

export default PageCart;
