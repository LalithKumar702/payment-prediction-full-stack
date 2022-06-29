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
  const [cust_num, setcust_num] = useState("");
  const [bus_year, setbus_year] = useState("");
  const [docID, setdocID] = useState("");
  const [invID, setinvID] = useState("");
  const handleChange3 = (event) => {
    setbus_year(event.target.value);
  };
  const handleChange4 = (event) => {
    setdocID(event.target.value);
  };
  const handleChange10 = (event) => {
    setinvID(event.target.value);
  };
  const onSubmit = async () => {
    
    try {
      setOpen(false)
      const res = await axios.post("/B2B_fintech/SearchInvoice", {
        cust_number: cust_num,
        buisness_year: bus_year,
        doc_id: docID,
        invoice_id: invID,
        
       
      });

      console.log(res);
     
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <Button
         className="search-button"
        variant="contained"
        color="secondary"
        onClick={handleOpen}
        style={{
        //   borderRadius: 6,
          padding: "5px",
          fontWeight:"400",
          fontSize:"14px",
          border: "0.5px solid skyblue",
        }}
      >
        Advance Search
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
            <h2 style={{ color: "white" }}>Advance Search</h2>
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
                id="filled-multiline-flexible"
                label="Business Year"
                multiline
                maxRows={4}
                value={bus_year}
                onChange={handleChange3}
                //  variant="filled"
                margin="normal"
              /> &nbsp;&nbsp;&nbsp;&nbsp;
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
                Search
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
