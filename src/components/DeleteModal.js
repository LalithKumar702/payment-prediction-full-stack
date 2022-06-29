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

const DeleteModal = ({selectedRow}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const onSubmit= async ()=>{
      
      setOpen(false)
    await  axios.post("http://localhost:8080/B2B_fintech/DeleteInvoice")
    }
  return (
    <div>
      <Button
        className="delete-button"
        variant="contained"
        color="secondary"
        onClick={handleOpen}
        disabled={selectedRow?.length>0?false:true}
        style={{
          borderRadius: 6,
          padding: "5px",
          border: "1px solid skyblue",
        }}
      >
        Delete
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
              <h4 style={{color:"#fff" ,fontWeight:"400"}}>Delete Records ?</h4>
              <h4 style={{color:"#fff" ,fontWeight:"400"}}>Are you sure want to delete these records ?</h4>
          
            
              <Button
                onClick={(e) => onSubmit(e)}
                style={{
                  width: "45%",
                  border: "1px solid #fff",
                  backgroundColor: "#2d4250",
                  color: "white",
                  marginRight:"1rem"
                 
                }}
              >
            Delete
              </Button>
             
              <Button
                onClick={handleClose}
                style={{
                  width: "45%",
                  border: "1px solid #fff",
                  backgroundColor: "#2d4250",
                  color: "white",
                }}
              >
                Cancel
              </Button>
           
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default DeleteModal;
