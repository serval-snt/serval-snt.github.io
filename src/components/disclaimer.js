import React from "react"
import Modal from "react-modal"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "500px",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "justify",
  },
}

/*
const Style = styled.p`
  color: #777;
  text-align: justify;
  font-style: italic;
  font-size: 0.7em;
  line-height: normal;
`
*/

function Disclaimer() {
  const [modalIsOpen, setIsOpen] = React.useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Disclaimer" ariaHideApp={false}>
      <AppBar color="secondary">
        <Toolbar>
          <Typography variant="h6">
            Disclaimer
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
        <p>
        The present model aims at informing researchers and policy-makers by
        evaluating Non Pharmaceutical Interventions impacts and simulating exit
        scenarios. It is not intended to faithfully represent specific countries
        nor to fully reproduce the epidemic complexity within societies. Any
        conclusion should be carefully interpreted by experts, and the
        feasibility of tested scenarios should be discussed before reaching
        consensus.
        </p>

        <Button color="primary" variant="contained" onClick={closeModal} >
        I agree
      </Button>
    </Modal>
  )
}

export default Disclaimer
