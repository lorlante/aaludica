import React, { useState, useEffect, useContext, useMemo } from "react";
import { CartContext } from "../contexts/CartContext";
import {
  BsFillTrashFill,
  BsFillPlusCircleFill,
  BsFillDashCircleFill,
} from "react-icons/bs";
import Swal from "sweetalert2";

const SHIPPING_METHOD_CORREO_ARGENTINO = 2;

const PageCart = () => {
  let cart = useContext(CartContext);
  const [name, setName] = useState([]);
  const [address, setAddress] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [selectedZone, setSelectedZone] = useState("2");
  const [selectedShippingMethod, setSelectedShippingMethod] = useState(1);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(1);
  const [shippingCosts, setShippingCosts] = useState([]);

  const checkoutInfo = useMemo(() => {
    const currencyFormat = (num) => {
      return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    };

    /* Calculate cart subtotal and items weight */
    let subtotal = 0;
    let cartWeight = 0;
    if (cart.items) {
      cart.items.forEach((item) => {
        subtotal += item.price * item.quantity;
        cartWeight += item.weight * item.quantity;
      });
    }

    let cartShippingCost = 0;
    // eslint-disable-next-line eqeqeq
    if (selectedShippingMethod == SHIPPING_METHOD_CORREO_ARGENTINO) {
      shippingCosts.forEach((s) => {
        if (s.from < cartWeight && s.to >= cartWeight) {
          switch (selectedZone) {
            case "1":
              cartShippingCost = s.cost_zone_1;
              break;
            case "2":
              cartShippingCost = s.cost_zone_2;
              break;
            case "3":
              cartShippingCost = s.cost_zone_3;
              break;
            case "4":
              cartShippingCost = s.cost_zone_4;
              break;
            default:
              cartShippingCost = -1;
              break;
          }
        }
      });
    }

    /* Calculate Total */
    let total = subtotal + cartShippingCost;

    return {
      cartWeight: cartWeight.toFixed(2),
      subtotal: currencyFormat(subtotal),
      shippingCost: currencyFormat(cartShippingCost),
      total: currencyFormat(total),
    };
  }, [cart.items, shippingCosts, selectedShippingMethod, selectedZone]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/provinces");
      const results = await response.json();
      setProvinces(results);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/shipping_costs");
      const result = await response.json();
      setShippingCosts(result);
    })();
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleProvinceChange = (e) => {
    setSelectedZone(e.target.value);
  };

  const handleShippingMethodChange = (e) => {
    setSelectedShippingMethod(e.target.value);
  };

  const handleFormSubmit = (e) => {
    // eslint-disable-next-line eqeqeq
    if (name == "" || address == "" || email == "") {
      Swal.fire({
        title: "Error",
        text: "Por favor, complete los datos faltantes",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      Swal.fire({
        title: "Confirmación",
        text: "¿Enviar el pedido?",
        icon: "info",
        confirmButtonText: "Enviar",
      });
    }
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
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <div>
                  <h5>Dirección</h5>
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    value={address}
                    onChange={handleAddressChange}
                  />
                </div>
                <div>
                  <h5>E-Mail</h5>
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <h5>Teléfono (opcional)</h5>
                    <input
                      type="text"
                      className="form-control"
                      name=""
                      value={phone}
                      onChange={handlePhoneChange}
                    />
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
                    <select
                      className="form-select"
                      value={selectedShippingMethod}
                      onChange={handleShippingMethodChange}
                    >
                      <option value="1">Retiro en el local</option>
                      <option value="2">Correo Argentino</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 backgroundResumenPedido">
                <h4>RESUMEN</h4>
                <div className="clearfix">
                  <div className="float-start">Subtotal</div>
                  <div className="float-end">$ {checkoutInfo.subtotal}</div>
                </div>
                <hr />
                <div className="clearfix">
                  <div className="float-start">Peso Total</div>
                  <div className="float-end">
                    {" "}
                    {checkoutInfo.cartWeight} kgs
                  </div>
                </div>
                <div className="clearfix">
                  <div className="float-start">Costo de Envío</div>
                  <div className="float-end">$ {checkoutInfo.shippingCost}</div>
                </div>
                <hr />
                <div className="clearfix">
                  <div className="float-start">Total</div>
                  <div className="float-end">$ {checkoutInfo.total}</div>
                </div>
                <hr />
                <button
                  className="btn btn-dark btn-lg w-100"
                  onClick={handleFormSubmit}
                >
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
