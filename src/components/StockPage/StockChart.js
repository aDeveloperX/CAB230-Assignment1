import React from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const StockChart = (props) => {
  const getInfo = () => {
    return props.data === undefined ? <></> : props.data;
  };

  const cellClickHandler = (e) => {
    console.log(e);
  };

  const coloumn = [
    {
      headerName: "Stock Name",
      field: "name",
      sortable: true,
      filter: true,
      onCellClicked: cellClickHandler,
    },
    {
      headerName: "Stock Symbol",
      field: "symbol",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Stock Industry",
      field: "industry",
      sortable: true,
      filter: true,
    },
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
