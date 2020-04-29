import React from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { useHistory } from "react-router-dom";

const StockChart = (props) => {
  const getInfo = () => {
    return props.data === undefined ? <></> : props.data;
  };

  let history = useHistory();

  const cellClickHandler = (e) => {
    history.push("/stockdetail", { data: e.data.symbol });
  };

  const column = [
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
      onCellClicked: cellClickHandler,
    },
    {
      headerName: "Stock Industry",
      field: "industry",
      sortable: true,
      filter: true,
      onCellClicked: cellClickHandler,
    },
  ];

  return (
    <div className="row justify-content-center mt-4">
      <div
        className="ag-theme-balham "
        style={{ height: "700px", width: "600px" }}
      >
        <AgGridReact
          rowSelection="single"
          pagination={true}
          columnDefs={column}
          rowData={getInfo()}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default StockChart;
