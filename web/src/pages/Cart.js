import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import {
  BsFillTrashFill,
  BsFillPlusCircleFill,
  BsFillDashCircleFill,
} from "react-icons/bs";

const PageCart = () => {
  let cart = useContext(CartContext);

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
            <div class="row">
              <div class="col-sm-4">
                <h5>Forma de pago</h5>
                <select className="form-select">
                  <option value="">Efectivo</option>
                  <option value="">Transferencia bancaria</option>
                  <option value="">Mercado Pago</option>
                </select>
              </div>
              <div class="col-sm-4">
                <h5>Forma de envío</h5>
                <select className="form-select">
                  <option value="">Retiro en el local</option>
                  <option value="">Correo Argentino</option>
                </select>
              </div>
              <div class="col-sm-4">
                <h5 className="text-center">Resumen</h5>
                <div class="row">
                  <div class="col-sm-4">Subtotal</div>
                  <div class="col-sm-4">$ 100.00</div>
                </div>
                <div class="row">
                  <div class="col-sm-4">Envío</div>
                  <div class="col-sm-4">$ 10.00</div>
                </div>
                <div class="row">
                  <div class="col-sm-4">Total</div>
                  <div class="col-sm-4">$ 110.00</div>
                </div>
              </div>
            </div>
            {/* 
            <div>
              <button className="btn btn-dark ">ENVIAR</button>
            </div>
            */}
          </>
        ) : (
          <div>Tu carrito está vacío.</div>
        )}
      </div>
    </div>
  );
};

export default PageCart;
