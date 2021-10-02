import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const ProductBox = (props) => {
  let cart = useContext(CartContext);

  const backgroundImageStyle = {
    backgroundImage: `url(images/products/${props.product.main_photo})`,
  };

  const handleAddItem = () => {
    cart.add(
      props.product.id,
      1,
      props.product.name,
      props.product.main_photo,
      props.product.price,
      props.product.weight
    );
  };

  return (
    <div className="product_item">
      {props.product.is_new === "Y" && (
        <div className="label new">¡Recién llegado!</div>
      )}
      {props.product.is_last_units === "Y" && (
        <div className="label stockout">Quedan poquitos...</div>
      )}
      {props.product.is_combo === "Y" && (
        <div className="label combo">** Promoción **</div>
      )}

      <div className="product_item_pic set-bg" style={backgroundImageStyle}>
        <div className="overlay">
          <div>
            <span>{props.product.short_description}</span>
            <br />
            <br />
            <span className="stats">
              {props.product.stat_players} | {props.product.stat_age} |{" "}
              {props.product.stat_time}
            </span>
          </div>
        </div>
      </div>

      <div className="product_item_text">
        <h6>
          <Link to="/detail">{props.product.name}</Link>
        </h6>
        <div className="product_price">$ {props.product.price.toFixed(2)}</div>
        <button className="btn btn-danger" onClick={handleAddItem}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductBox;
