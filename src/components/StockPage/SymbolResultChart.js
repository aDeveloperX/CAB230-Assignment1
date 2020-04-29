import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const StockSymbolResultChart = (props) => {
  const column = [
    { headerName: "Symbol", field: "symbol" },
    { headerName: "Name", field: "name" },
    { headerName: "Industry", field: "industry" },
    { headerName: "TimeStamp", field: "timestamp" },
    { headerName: "Volumes", field: "volumes" },
    { headerName: "High", field: "high" },
    { headerName: "Low", field: "low" },
    { headerName: "Open", field: "open" },
    { headerName: "Close", field: "close" },
  ];

  return (
    <div className="row justify-content-center mt-4">
      <div
        className="ag-theme-balham "
        style={{ height: "700px", width: "80%" }}
      >
        <AgGridReact
          pagination={true}
          columnDefs={column}
          rowData={[props.stockdetail]}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default StockSymbolResultChart;
