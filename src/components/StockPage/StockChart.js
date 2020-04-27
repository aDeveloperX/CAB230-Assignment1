import React from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const StockChart = (props) => {
  const getInfo = () => {
    return props.data === undefined ? (
      <></>
    ) : (
      props.data.map((stock) => {
        return {
          name: stock.name,
          symbol: stock.symbol,
          industry: stock.industry,
        };
      })
    );
  };

  const coloumn = [
    { headerName: "Stock Name", field: "name" },
    { headerName: "Stock Symbol", field: "symbol" },
    { headerName: "Stock Industry", field: "industry" },
  ];

  return (
    <div className="row justify-content-center mt-4">
      <div
        className="ag-theme-balham "
        style={{ height: "700px", width: "600px" }}
      >
        <AgGridReact columnDefs={coloumn} rowData={getInfo()}></AgGridReact>
      </div>
    </div>
  );
};

export default StockChart;
