import React, { useState, useEffect, useContext, useMemo } from "react";
import { CartContext } from "../contexts/CartContext";
import {
  BsFillTrashFill,
  BsFillPlusCircleFill,
  BsFillDashCircleFill,
} from "react-icons/bs";

const PageCart = () => {
  let cart = useContext(CartContext);
  const [provinces, setProvinces] = useState([]);
  const [selectedProvinceID, setSelectedProvinceID] = useState();

  const checkoutInfo = useMemo(() => {
    const currencyFormat = (num) => {
      return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    };

    const getShippingCost = (zone, weight) => {};

    let subtotal = 0;
    let weight = 0;

    if (cart.items) {
      cart.items.forEach((item) => {
        subtotal += item.price * item.quantity;
        weight += item.weight;
      });
    }

    let shippingCost = () ? getShippingCost(zone, weight) : 0;

    let total = subtotal + shippingCost;
    return {
      subtotal: currencyFormat(subtotal),
      shippingCost: currencyFormat(shippingCost),
      total: currencyFormat(total),
    };
  }, [cart.items, selectedProvinceID]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/provinces");
      const results = await response.json();
      setProvinces(results);
    })();
  }, []);

  const handleProvinceChange = (e) => {
    setSelectedProvinceID(e.target.value);
  };

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
                    <tr className="cartRows" key={item.id}>
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
                        {item.quantity}
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
                <div className="row">
                  <div className="col-sm-6">
                    <h5>Teléfono (opcional)</h5>
                    <input type="text" className="form-control" name="" />
                  </div>
                  <div className="col-sm-6">
                    <h5>Provincia</h5>
                    <select
                      className="form-select"
                      onChange={handleProvinceChange}
                    >
                      {provinces.length > 0
                        ? provinces.map((province) => (
                            <option value={province.zone} key={province.id}>
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
                <div className="clearfix">
                  <div className="float-start">Subtotal</div>
                  <div className="float-end">$ {checkoutInfo.subtotal}</div>
                </div>
                <div className="clearfix">
                  <div className="float-start">Envío</div>
                  <div className="float-end">$ {checkoutInfo.shippingCost}</div>
                </div>
                <hr />
                <div className="clearfix">
                  <div className="float-start">Total</div>
                  <div className="float-end">$ {checkoutInfo.total}</div>
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
