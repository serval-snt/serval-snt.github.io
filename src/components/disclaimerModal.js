import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog() {

  return (
    <div>
      <Dialog
        open={this.props.state}
        onClose={this.props.handleCloseDisclaimer}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Disclaimer"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          The present model aims at informing researchers and policy-makers by evaluating Non Pharmaceutical Interventions impacts and simulating 
          exit scenarios. It is not intended to faithfully represent specific countries nor to fully reproduce the epidemic complexity within 
          societies. Any conclusion should be carefully interpreted by experts, and the feasibility of tested scenarios should be discussed before 
          reaching consensus.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleCloseDisclaimer} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
