import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Info from '@material-ui/icons/Info';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import FeedbackIcon from '@material-ui/icons/Feedback';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/*
      <Button color="secondary" variant="contained" onClick={handleClickOpen} startIcon={<Info />}>
        How to use
      </Button>
      */}
      <Button style={{marginLeft: "10px"}} color="primary" variant="contained" href="https://forms.gle/1X7wRHQ1dFsANeMX6" target="_blank" startIcon={<FeedbackIcon />}>
        Feedback
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"How to use this tool?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            With regards to the events caused by COVID-19, we share this tool to create simulations of different lockdown exit strategies.<br /><br />
            <ul>
                <li>Each row in the table below represents a potential measure taken by a government.</li>
                <li>Rows can be added and removed using <AddCircleRoundedIcon fontSize="small"/> and <RemoveCircleIcon fontSize="small"/>.</li>
                <li>To change the value of a cell, <b>double-click</b> on it.</li>
                <li>The <b>value</b> column is a percentage representing the part of the selected sector that will reopen at the given date.</li>
                <li>Don't forget to select the country for which you want to run the simulation in.</li>
                <li>Once a scenario is ready, run the simulation by clicking <PlayCircleFilledWhiteIcon fontSize="small"/></li>
            </ul>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
