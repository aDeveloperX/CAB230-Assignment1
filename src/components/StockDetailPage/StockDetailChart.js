import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const StockDetailChart = (props) => {
  const column = [
    {
      headerName: "Date",
      field: "timestamp",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Open",
      field: "open",
      sortable: true,
      filter: true,
    },
    {
      headerName: "High",
      field: "high",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Low",
      field: "low",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Close",
      field: "close",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Volumes",
      field: "volumes",
      sortable: true,
      filter: true,
    },
  ];
  return (
    <div className="row justify-content-center mt-4">
      <div
        className="ag-theme-balham "
        style={{ height: "300px", width: "1000px" }}
      >
        <AgGridReact
          rowSelection="single"
          pagination={true}
          columnDefs={column}
          rowData={props.data}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default StockDetailChart;
