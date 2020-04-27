import React from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const StockChart = (props) => {
  const getInfo = () => {
    return props.data === undefined ? <></> : props.data;
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
        <AgGridReact
          pagination={true}
          columnDefs={coloumn}
          rowData={getInfo()}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default StockChart;
