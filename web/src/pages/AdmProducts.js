import React, { useState, useEffect } from "react";
import ReactDataGrid from "react-data-grid";
import { Editors } from "react-data-grid-addons";

const PageAdmProducts = () => {
  const columns = [
    { key: "name", name: "Nombre" },
    { key: "price", name: "Precio", editable: true },
    { key: "is_active", name: "Activo", editable: true },
  ];

  const [rows, setRows] = useState([]);
  const { CheckboxEditor } = Editors;
  const BooleanCheckboxEditor = (
    <CheckboxEditor
      options={[
        { id: "Y", value: "Sí" },
        { id: "N", value: "No" },
      ]}
    />
  );

  const handleGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState((rows) => {
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/products");
      const results = await response.json();
      setRows(results);
    })();
  }, []);

  return (
    <div className="container" id="CatalogPage">
      <div className="row">
        <div className="">
          <div className="section-title">
            <h4>Edición Rápida</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <ReactDataGrid
          columns={columns}
          rowGetter={(i) => rows[i]}
          rowsCount={10}
          minHeight={150}
          handleGridRowsUpdated={handleGridRowsUpdated}
          enableCellSelect={true}
        />
      </div>
    </div>
  );
};

export default PageAdmProducts;
