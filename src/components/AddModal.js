import React, { useState } from "react";
import { ReactDOM } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
//import cors from 'cors';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#2d4250",
    border: "1px solid #000",
    borderRadius: "15px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
export default function AddModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [bus_code, setbus_code] = useState("");
  const [cust_num, setcust_num] = useState("");
  const [bus_year, setbus_year] = useState("");
  const [docID, setdocID] = useState("");
  const [invcur, setinvcur] = useState("");
  const [docty, setdocty] = useState("");
  const [postID, setpostID] = useState("");
  const [totalamount, settotalamount] = useState("");
  const [cust_terms, setcust_terms] = useState("");
  const [invID, setinvID] = useState("");
  const [cleardate, setcleardate] = useState();
  const [postDate, setpostDate] = useState();
  const [docCreDate, setdoccreDate] = useState();
  const [docDueDate, setdueDate] = useState();
  const [basecreDate, setbaseCreDate] = useState();

  const handleChange3 = (event) => {
    setbus_year(event.target.value);
  };
  const handleChange4 = (event) => {
    setdocID(event.target.value);
  };
  const handleChange5 = (event) => {
    setinvcur(event.target.value);
  };
  const handleChange6 = (event) => {
    setdocty(event.target.value);
  };
  const handleChange7 = (event) => {
    setpostID(event.target.value);
  };
  const handleChange8 = (event) => {
    settotalamount(event.target.value);
  };
  const handleChange9 = (event) => {
    setcust_terms(event.target.value);
  };
  const handleChange10 = (event) => {
    setinvID(event.target.value);
  };
  const onSubmit = async () => {
    
    try {
      //  let datab = `business_code= ${bus_code} & cust_number= ${cust_num}
      //  & buisness_year= ${bus_year} & doc_id = ${docID} & invoice_currency= ${invcur}
      //  & document_type=${docty} & posting_id=${postID} & total_open_amount=${totalamount}
      // & cust_payment_terms=${cust_terms} & invoice_id=${invID} & clear_date=${cleardate}
      // & document_create_date=${docCreDate} & baseline_create_date=${basecreDate}& due_in_date=${docDueDate}
      // & posting_date=${postDate}`
     
      const res = await axios.post("http://localhost:8080/B2B_fintech/AddInvoice", {
        business_code: bus_code,
        cust_number: cust_num,
        clear_date: cleardate,
        buisness_year: bus_year,
        doc_id: docID,
        posting_date: postDate,
        document_create_date: docCreDate,
        due_in_date: docDueDate,
        invoice_currency: invcur,
        document_type: docty,
        posting_id: postID,
        total_open_amount: totalamount,
        baseline_create_date: basecreDate,
        cust_payment_terms: cust_terms,
        invoice_id: invID,
        
       
      }).then((res) => {
        console.log(res)
        window.alert("Data Inserted Successfully");
      })
      setOpen(false)

     // console.log(res);
     
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleOpen}
        style={{
          borderRadius: 6,
          padding: "5px",
          border: "1px solid skyblue",
        }}
      >
        Add
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 style={{ color: "white" }}>Add</h2>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                p: 1,
                m: 1,
                bgcolor: "background.paper",
                maxWidth: 870,
                borderRadius: 3,
                alignContent: "flex-start",
              }}
            >
              <TextField
                id="filled-multiline-flexible"
                label="Business Code"
                multiline
                maxRows={4}
                value={bus_code}
                onChange={(e) => setbus_code(e.target.value)}
                margin="normal"
                //variant="filled"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <TextField
                id="filled-multiline-flexible"
                label="Customer Number"
                multiline
                maxRows={4}
                value={cust_num}
                onChange={(e) => setcust_num(e.target.value)}
                // variant="filled"
                margin="normal"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <TextField
                id="date"
                label="Clear Date"
                type="date"
                margin="normal"
                value={cleardate}
                onChange={(e) => setcleardate(e.target.value)}
                style={{ width: "23%" }}
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <TextField
                id="filled-multiline-flexible"
                label="Business Year"
                multiline
                maxRows={4}
                value={bus_year}
                onChange={handleChange3}
                //  variant="filled"
                margin="normal"
              />
              <TextField
                id="filled-multiline-flexible"
                label="Document ID"
                multiline
                maxRows={4}
                value={docID}
                onChange={handleChange4}
                // variant="filled"
                margin="normal"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <TextField
                id="date"
                label="Posting Date"
                type="date"
                margin="normal"
                value={postDate}
                onChange={(e) => setpostDate(e.target.value)}
                style={{ width: "23%" }}
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <TextField
                id="date"
                label="Document Create Date"
                type="date"
                margin="normal"
                style={{ width: "23%" }}
                value={docCreDate}
                onChange={(e) => setdoccreDate(e.target.value)}
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <TextField
                id="date"
                label="Due Date"
                type="date"
                margin="normal"
                style={{ width: "23%" }}
                sx={{ width: 220 }}
                value={docDueDate}
                onChange={(e) => setdueDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="filled-multiline-flexible"
                label="Invoice Currency"
                multiline
                maxRows={4}
                value={invcur}
                onChange={handleChange5}
                //  variant="filled"
                margin="normal"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <TextField
                id="filled-multiline-flexible"
                label="Document Type"
                multiline
                maxRows={4}
                value={docty}
                onChange={handleChange6}
                //  variant="filled"
                margin="normal"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <TextField
                id="filled-multiline-flexible"
                label="Posting ID"
                multiline
                maxRows={4}
                value={postID}
                onChange={handleChange7}
                //  variant="filled"
                margin="normal"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <TextField
                id="filled-multiline-flexible"
                label="Total Open Amount"
                multiline
                maxRows={4}
                value={totalamount}
                onChange={handleChange8}
                //  variant="filled"
                margin="normal"
              />
              <TextField
                id="date"
                label="Baseline Create Date"
                type="date"
                margin="normal"
                style={{ width: "23%" }}
                value={basecreDate}
                onChange={(e) => setbaseCreDate(e.target.value)}
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <TextField
                id="filled-multiline-flexible"
                label="Customer Payment Terms"
                multiline
                maxRows={4}
                value={cust_terms}
                onChange={handleChange9}
                //  variant="filled"
                margin="normal"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <TextField
                id="filled-multiline-flexible"
                label="Invoice ID"
                multiline
                maxRows={4}
                value={invID}
                onChange={handleChange10}
                //  variant="filled"
                margin="normal"
              />
              <Button
                onClick={(e) => onSubmit(e)}
                style={{
                  width: "49%",
                  border: "1px solid #2d4250",
                  backgroundColor: "#2d4250",
                  color: "white",
                }}
              >
                Add
              </Button>
              &nbsp;&nbsp;
              <Button
                onClick={handleClose}
                style={{
                  width: "49%",
                  border: "1px solid #2d4250",
                  backgroundColor: "#2d4250",
                  color: "white",
                }}
              >
                Cancel
              </Button>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
