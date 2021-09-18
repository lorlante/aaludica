import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCategoryMenu = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/categories");
      const results = await response.json();
      setResults(results);
    })();
  }, []);

  return (
    <ul className="catalogo_categorias">
      <li data-filter=".todos">
        <Link to="" className="category_link">
          Todos
        </Link>
      </li>
      {results.length > 0 ? (
        results.map((category) => (
          <li data-filter=".{category.name}" key="{category.id}">
            <Link to="/catalog" className="category_link">
              {category.name}
            </Link>
          </li>
        ))
      ) : (
        <span>No hay resultados.</span>
      )}
    </ul>
  );
};
export default ProductCategoryMenu;
