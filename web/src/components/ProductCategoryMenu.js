import React, { useEffect, useState } from "react";

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
      <li data-filter=".historicos">Todos</li>
      {results.length > 0 ? (
        results.map((category) => (
          <li data-filter=".historicos">{category.name}</li>
        ))
      ) : (
        <span>No hay resultados.</span>
      )}
    </ul>
  );
};
export default ProductCategoryMenu;
