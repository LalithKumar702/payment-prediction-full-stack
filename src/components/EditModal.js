import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: "#2d4250",
        border: '1px solid #000',
        borderRadius: '15px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const EditModel=({selectedRow})=>{
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const [invcur, setinvcur] = useState("");
  const [cust_terms, setcust_terms] = useState("");




  const onSubmit = async () => {
    try {
      setOpen(false)
      const res = await axios.post("http://localhost:8080/B2B_fintech/EditInvoice", {
        invoice_currency: invcur,
        cust_payment_terms: cust_terms,
        sl_no:selectedRow[0]
      },{
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"

          }
      });
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };


    return  <div>
         <Button
         className="edit-button"
        variant="contained"
        color="secondary"
        onClick={handleOpen}
        disabled={selectedRow.length===1?false:true}
        
        style={{
          borderRadius: 6,
          padding: "5px",
          border: "1px solid skyblue",
        }}
      >
        Edit
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
        <h2 style={{ color: "white" }}>Edit</h2>
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
            label="Invoice Currency"
            multiline
            maxRows={4}
            value={invcur}
            onChange={(e)=>setinvcur(e.target.value)}     
            //  variant="filled"
            margin="normal"
          />
         
          
          &nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            id="filled-multiline-flexible"
            label="Customer Payment Terms"
            multiline
            maxRows={4}
            value={cust_terms}
            onChange={(e)=>setcust_terms(e.target.value)}
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
            Edit
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
    
}

export default EditModel;