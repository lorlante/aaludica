import React from "react";
import { Link } from "react-router-dom";

const ProductBox = (props) => {
  const backgroundImageStyle = {
    backgroundImage: `url(images/products/${props.product.main_photo})`,
  };
  return (
    <div className="product_item">
      {props.product.is_new === "Y" && <div className="label new">Nuevo</div>}
      {props.product.is_last_units === "Y" && (
        <div className="label stockout">Últimos</div>
      )}
      {props.product.is_combo === "Y" && (
        <div className="label combo">Combo</div>
      )}

      <div className="product_item_pic set-bg" style={backgroundImageStyle}>
        <div class="overlay">
          <div>
            <span>{props.product.short_description}</span>
            <br />
            <br />
            <span class="stats">
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
        <button className="btn btn-danger">Comprar</button>
      </div>
    </div>
  );
};

export default ProductBox;
