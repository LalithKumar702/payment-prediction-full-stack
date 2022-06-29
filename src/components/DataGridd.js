import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const columns = [
  { field: "sl_no", headerName: "sl_no", width: 200 },
  { field: "cust_number", headerName: "customer number", width: 200 },
  { field: "invoice_id", headerName: "invoice_id", width: 200 },
  { field: "doc_id", headerName: "doc_id", width: 200 },
  { field: "invoice_currency", headerName: "invoice_currency", width: 200 },
  { field: "document_type", headerName: " document_type", width: 200 },
  { field: "business_code", headerName: "buisness_code", width: 200 },
  { field: "clear_date", headerName: "clear_date", width: 200 },
  { field: "buisness_year", headerName: "buisness year", width: 200 },
  { field: "posting_date", headerName: "posting_date", width: 200 },
  {
    field: "document_create_date",
    headerName: "document_create_date",
    width: 200,
  },
  {
    field: "document_create_date1",
    headerName: "document_create_date1",
    width: 200,
  },
  { field: "due_in_date", headerName: "due_in_date", width: 200 },
  { field: "posting_id", headerName: "posting_id", width: 200 },
  { field: "total_open_amount", headerName: "total_open_amount", width: 200 },
  {
    field: "baseline_create_date",
    headerName: "baseline_create_date",
    width: 200,
  },
  { field: "cust_payment_terms", headerName: "cust_payment_terms", width: 200 },
  { field: "aging_bucket", headerName: "Aging Bucket", width: 200 },
  { field: "isOpen", headerName: "is open", width: 200 },
  //{ field: "isDeleted", headerName: "is deleted", width: 200 },
];

const DataGridd = ({ setSelectedRow, reload }) => {
  const [display, setDisplay] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(reload)

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      await axios
        .get("/B2B_fintech/RecieveData")
        .then((res) => {
          console.log(res.data)
          setDisplay(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    };
    fetchData();
  }, [reload]);

  return loading ? (
    <Box sx={{ display: "flex"  }}>
      <CircularProgress />
    </Box>
  ) : (
    <div style={{ height: 600, width: "100%", backgroundColor: "#2d4250" }}>
      <DataGrid
        {...display}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: "white",
          color: "white",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
        getRowId={(row) => row.sl_no}
        rows={display}
        columns={columns}
        pageSize={25}
        checkboxSelection
        onSelectionChange={(newSelection) => {
          console.log(newSelection);
        }}
        onSelectionModelChange={(row) => setSelectedRow(row)}
      />
    </div>
  );
};

export default DataGridd;
