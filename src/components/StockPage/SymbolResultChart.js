import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { useHistory } from "react-router-dom";

const StockSymbolResultChart = (props) => {
  let history = useHistory();

  const cellClickHandler = (e) => {
    history.push("/stockdetail", { data: e.data.symbol });
  };
  const column = [
    { headerName: "Symbol", field: "symbol", onCellClicked: cellClickHandler },
    { headerName: "Name", field: "name", onCellClicked: cellClickHandler },
    {
      headerName: "Industry",
      field: "industry",
      onCellClicked: cellClickHandler,
    },
    {
      headerName: "TimeStamp",
      field: "timestamp",
      onCellClicked: cellClickHandler,
    },
    {
      headerName: "Volumes",
      field: "volumes",
      onCellClicked: cellClickHandler,
    },
    { headerName: "High", field: "high", onCellClicked: cellClickHandler },
    { headerName: "Low", field: "low", onCellClicked: cellClickHandler },
    { headerName: "Open", field: "open", onCellClicked: cellClickHandler },
    { headerName: "Close", field: "close", onCellClicked: cellClickHandler },
  ];

  return (
    <div className="row justify-content-center mt-4">
      <div
        className="ag-theme-balham "
        style={{ height: "700px", width: "80%" }}
      >
        <AgGridReact
          rowSelection="single"
          pagination={true}
          columnDefs={column}
          rowData={[props.stockdetail]}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default StockSymbolResultChart;
