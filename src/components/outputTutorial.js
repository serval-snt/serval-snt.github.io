import React, { Component } from "react"
import ReactJoyride, { ACTIONS, STATUS } from "react-joyride"

class OutputTutorial extends Component {
  constructor(props) {
    super(props)

    this.state = {
      run: false,
      steps: [],
      callback: props.callback,
    }
  }

  componentWillReceiveProps = props => {
    if (props && props.run) {
      this.setState({
        run: props.run,
        steps: [
          {
            target: "#show-cases",
            title: "Cummulated number of cases",
            content: (
              <React.Fragment>
                This button controls the visibility of the cumulated number of
                cases curve predicted by the model. This is the sum of all the
                people that were infected by the virus (i.e. that would test
                positive) with or without exhibiting the symptoms. When it is
                the only value active, the curves for herd himunity are
                displayed as well. This value represent the number of people
                that have to be infected to be able to give a protection
                (prevent the spread of a virus) to those who were not yet
                infected.
              </React.Fragment>
            ),
            disableBeacon: true,
          },
          /* Commented out because I don't know how I can keep the chart interaction during the tutorial
              {
                target: "#chart",
                title: "Hoover over chart",
                content: 
                  <React.Fragment>
                      When hoovering over the chart, a legend appears, providing the legend for each of the curves and their
                      instantenuous value.
                      <br />
                      <strong>Note:</strong> When only the value the cummulated number of cases are selected, the graph also 
                      displays the value for the herd immunity and the instantenuous herd immunity.
                  </React.Fragment>,  
              },
          */
          {
            target: "#show-hospital",
            title: "Number of people in hospitals for each day",
            content: (
              <React.Fragment>
                This button controls the visibility of the curve for the number
                people hospitalized predicted by the model. This value represent
                the number of hospitalized people for each day. Unlike the
                number of cases, this value is not cumulative. This figure
                represent all people in hospitals regardless of their severity
                and is portion of the number of cases for which the patient
                developed symptoms requiring their admission to a hospital.
              </React.Fragment>
            ),
          },
          {
            target: "#show-critical",
            title: "Number of hospitalized people in critical condition",
            content: (
              <React.Fragment>
                This button controls the visibility of the curve for the number
                people hospitalized in critical condition predicted by the model.
                This number is a portion of hospitalized people that developped 
                severe syndrome, leading their state to critical.
              </React.Fragment>
            ),
          },
          {
            target: "#show-deaths",
            title: "Number of death due to COVID-19",
            content: (
              <React.Fragment>
                This button controls the visibility of the curve for the number
                of cumulated death due to COVID-19 predicted by the model. This
                number is the proportion of people infected by the virus for which
                the outcome is fatal, thus, it is based on the mortality index of
                the disease.
              </React.Fragment>
            ),
          },
          {
            target: "#show-infectuous",
            title: "Number of infectuous people",
            content: (
              <React.Fragment>
                This button controls the visibility of the curve for the number
                of infectuous people for each day predicted by the model. Being
                contaminated doesn't mean that the virus can be transmitted. This
                value is computed is based on the epidemiologic characteristics of the
                COVID-19 and the number of cases.
              </React.Fragment>
            ),
          },
          {
            target: "#show-rate",
            title: "Daily ransmission rate",
            content: (
              <React.Fragment>
                The effective reproductive number (R) is the average number of secondary
                cases per infectious case in a population made up of both susceptible and 
                non-susceptible hosts. If R &gt; 1, the number of cases will increase, such as 
                at the start of an epidemic. When R = 1, the disease is endemic, and where R &lt; 1 
                there is be a decline in the number of cases.
              </React.Fragment>
            ),
          },
          {
            target: "#show-ci",
            title: "Error over the measures",
            content: (
              <React.Fragment>
                All the data presented so far were built using the combination of an
                epidemiologic model (SEIR) and a machine learning model. However, each
                value for the transmission rate predicted by the model is tainted by an
                incertainty, and this button allows to visualize how the incertainty 
                computed for the transmission rate value is affecting each prediction.
                Hence, the uncertainty can be combined with each of the value presetned 
                earlier.
              </React.Fragment>
            ),
          },
        ],
      })
    } else {
      this.setState({
        run: props.run,
        steps: [],
      })
    }
  }

  handleJoyrideCallback = data => {
    if (
      [STATUS.FINISHED, STATUS.SKIPPED].includes(data["status"]) ||
      ACTIONS.CLOSE === data["action"]
    ) {
      this.setState({ run: false, steps: [] })
      this.state.callback("end", null)
    } else if (data["type"] === "step:before") {
      this.state.callback(
        "before-step",
        data["step"]["target"].substring(1).replace("-", "_")
      )
    }
  }

  render = () => {
    return (
      <ReactJoyride
        run={this.state.run}
        steps={this.state.steps}
        callback={this.handleJoyrideCallback}
        disableBeacon
        disableOverlayClose
        continuous
        showProgress
      />
    )
  }
}

export default OutputTutorial
