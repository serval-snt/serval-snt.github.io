import React from "react"
import Modal from "react-modal"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const style = {
  content: {
    top: "50%",
    left: "50%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "justify",
  },
  overlay: { zIndex: 9999 }
}

function Disclaimer() {
  const [modalIsOpen, setIsOpen] = React.useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <Modal isOpen={modalIsOpen} style={style} contentLabel="Disclaimer" ariaHideApp={false}>
      <AppBar color="secondary">
        <Toolbar>
          <Typography variant="h6">
            Disclaimer
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <p>
        The present simulator models non pharmaceutical interventions and their impact on exit scenarios. 
        It relies on publicly available information that may not faithfully represent specific countries 
        and that does not fully reproduce the epidemic complexity within societies. It is an information 
        tool illustrating the impact of certain scenarios. Its output should be carefully reviewed and 
        interpreted by experts. It is not a tool generating policy recommendations.
        The University of Luxembourg / SnT decline any responsibility for the way the website and its 
        associated services and tools are used. The University of Luxembourg / SnT cannot guarantee that 
        the information and/or data provided are complete, correct or applicable.
        </p>

      <Button color="primary" variant="contained" onClick={closeModal} >
        I agree
      </Button>
    </Modal>
  )
}

export default Disclaimer
