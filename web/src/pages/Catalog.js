import React, { useEffect, useState } from "react";
import ProductBox from "../components/ProductBox";
import ProductCategoryMenu from "../components/ProductCategoryMenu";

const PageCatalog = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/products");
      const results = await response.json();
      setResults(results);
    })();
  }, []);

  return (
    <div className="container" id="CatalogPage">
      <div className="row">
        <div className="col-lg-3 col-md-3">
          <div className="section-title">
            <h4>Catálogo de Juegos</h4>
          </div>
        </div>
        <div className="col-lg-9 col-md-9">
          <ProductCategoryMenu />
        </div>
      </div>
      <div className="row">
        {results.length > 0 ? (
          results.map((product) => <ProductBox product={product} />)
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};

export default PageCatalog;
